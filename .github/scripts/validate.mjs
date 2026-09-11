// Checks the repo invariants that break silently, complementing the
// "plugin validate" step the workflow runs. Run locally with
// "node .github/scripts/validate.mjs" from the repo root.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const errors = [];
const report = (file, line, message) =>
  errors.push(line ? `${file}:${line} ${message}` : `${file} ${message}`);

const read = (file) => readFileSync(file, 'utf8');

// Prose covered by the link and typography checks. CLAUDE.md is gitignored
// and LICENSE is frozen legal text, so neither is in scope.
const proseFiles = ['README.md', 'CHANGELOG.md'];
const collectMarkdown = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const child = path.join(dir, entry.name);
    if (entry.isDirectory()) collectMarkdown(child);
    else if (entry.name.endsWith('.md')) proseFiles.push(child);
  }
};
collectMarkdown('skills');

// 1. Frontmatter of each SKILL.md: name equal to its folder, description
// present and under 300 characters. The runtime reads only these two fields.
const descriptions = {};
for (const skillName of readdirSync('skills')) {
  const dir = path.join('skills', skillName);
  if (!statSync(dir).isDirectory()) continue;
  const file = path.join(dir, 'SKILL.md');
  if (!existsSync(file)) {
    report(dir, null, 'missing SKILL.md');
    continue;
  }
  const block = read(file).match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!block) {
    report(file, 1, 'missing frontmatter');
    continue;
  }
  const fields = {};
  for (const line of block[1].split(/\r?\n/)) {
    const m = line.match(/^(\w+)\s*:\s*(.*)$/);
    if (m) fields[m[1]] = m[2].trim();
  }
  if (fields.name !== skillName) {
    report(file, 2, `name "${fields.name}" differs from folder "${skillName}"`);
  }
  if (!fields.description) {
    report(file, 3, 'description missing from frontmatter');
  } else if ([...fields.description].length > 300) {
    report(file, 3, `description is ${[...fields.description].length} characters, maximum 300`);
  }
  descriptions[skillName] = fields.description;
}

// 2. Relative links: every target exists, and a link written from inside a
// skill folder stays confined to it, since a manual install copies only
// that folder.
const LINK_PATTERN = /\[[^\]]*\]\(([^)\s]+)\)/g;
for (const file of proseFiles) {
  const text = read(file);
  for (const m of text.matchAll(LINK_PATTERN)) {
    const target = m[1].split('#')[0];
    if (!target || /^(https?:|mailto:)/.test(target)) continue;
    const line = text.slice(0, m.index).split('\n').length;
    const resolved = path.resolve(path.dirname(file), target);
    if (!existsSync(resolved)) {
      report(file, line, `dead link to ${target}`);
      continue;
    }
    const segments = file.split(path.sep);
    if (segments[0] === 'skills' && segments.length > 2) {
      const skillDir = path.resolve(segments[0], segments[1]);
      if (!resolved.startsWith(skillDir + path.sep) && resolved !== skillDir) {
        report(file, line, `link to ${target}, outside the skill's installable folder`);
      }
    }
  }
}

// 3. Typography: the em dash is the skill's single-instance tell (rule 11),
// and the repo's prose is the skill's own test bed. Syntactic exceptions:
// frontmatter, code fences and spans, link targets, URLs, table separators.
// The character is only tolerated as a parenthesized mention "(—)".
const CHECKS = [
  [/—/, 'em dash in prose; use a comma, a period, or parentheses'],
];

// Loud AI vocabulary the skill removes on sight (rule 3) must not appear in
// the repo's own prose except as a mention. Double-quoted spans, table rows
// (the "Avoid" columns of the references), code, links, and URLs are
// stripped before the check, and blockquotes are skipped as quoted material.
const MENTION_CHECKS = [
  [
    /\b(?:delve|delving|leverage[sd]?|leveraging|seamless(?:ly)?|tapestry|testament|game-changer|myriad|plethora)\b/i,
    'loud AI vocabulary in prose; use the plain word, or quote it as a mention',
  ],
];
for (const file of proseFiles) {
  const lines = read(file).split(/\r?\n/);
  let inFence = false;
  let inFrontmatter = false;
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    if (i === 0 && raw === '---') {
      inFrontmatter = true;
      continue;
    }
    if (inFrontmatter) {
      if (raw === '---') inFrontmatter = false;
      continue;
    }
    if (/^\s*(```|~~~)/.test(raw)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (/^\s*\|(\s*:?-{3,}:?\s*\|)+\s*$/.test(raw)) continue;
    const cleaned = raw
      .replace(/`[^`]*`/g, '')
      .replace(/\]\([^)]*\)/g, ']')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\(—\)/g, '');
    for (const [pattern, message] of CHECKS) {
      if (pattern.test(cleaned)) report(file, i + 1, message);
    }
    if (/^\s*(\||>)/.test(raw)) continue;
    const cleanedMention = raw
      .replace(/`[^`]*`/g, '')
      .replace(/\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/"[^"]*"/g, '');
    for (const [pattern, message] of MENTION_CHECKS) {
      if (pattern.test(cleanedMention)) report(file, i + 1, message);
    }
  }
}

// 4. The plugin version tracks the latest released CHANGELOG version (the
// agreement a manual release lets drift first), and the plugin name still
// matches a skill folder.
const manifest = JSON.parse(read('.claude-plugin/plugin.json'));
const released = read('CHANGELOG.md').match(/^## \[(\d+\.\d+\.\d+)\]/m);
if (!released) {
  report('CHANGELOG.md', null, 'no released version found');
} else if (manifest.version !== released[1]) {
  report(
    '.claude-plugin/plugin.json',
    null,
    `version ${manifest.version} differs from the latest released CHANGELOG version ${released[1]}`,
  );
}
if (!existsSync(path.join('skills', manifest.name))) {
  report('.claude-plugin/plugin.json', null, `plugin name "${manifest.name}" matches no folder under skills/`);
}

// 5. The plugin description repeats the description of the skill of the
// same name, since the marketplace reads the first and the runtime the
// second; a trigger added to one must reach the other.
const skillDescription = descriptions[manifest.name];
if (skillDescription && manifest.description !== skillDescription) {
  report(
    '.claude-plugin/plugin.json',
    null,
    `description differs from the one in skills/${manifest.name}/SKILL.md`,
  );
}

// 6. The marketplace entry repeats the plugin description, since the
// install listing reads the first and the runtime the second.
const marketplace = JSON.parse(read('.claude-plugin/marketplace.json'));
for (const entry of marketplace.plugins ?? []) {
  if (entry.name === manifest.name && entry.description !== manifest.description) {
    report('.claude-plugin/marketplace.json', null, `description of plugin ${entry.name} differs from plugin.json`);
  }
}

// 7. LICENSE keeps both copyright lines, the upstream author for the
// original and the fork author for the modifications; a badly resolved
// upstream merge can drop one without anyone noticing.
const license = read('LICENSE');
for (const holder of ['Hardik Pandya', 'Qiaeru']) {
  if (!license.includes(holder)) report('LICENSE', null, `copyright line for ${holder} missing`);
}

if (errors.length > 0) {
  console.error(`${errors.length} invariant error(s):`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log(`Invariants checked on ${proseFiles.length} files: frontmatter, links, typography, mentions, version, descriptions, license.`);
