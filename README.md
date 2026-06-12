# English prose skill (stop-slop fork)

A Claude Code skill that removes predictable AI writing patterns from English prose.

This repository is a maintained fork of [stop-slop](https://github.com/hardikpandya/stop-slop) by [Hardik Pandya](https://hvpandya.com). The fork exists to keep the skill updated on a regular cadence, to package it as a Claude Code plugin, and to adapt the rules over time. Upstream history is preserved, so improvements published there can still be merged in.

The skill targets the tells that make text read as machine-written: filler phrases and throat-clearing openers, formulaic structures (binary contrasts, negative listings, dramatic fragmentation), passive voice, vague declaratives, flattened rhythm, and pull-quote bait. Rules live in [SKILL.md](skills/stop-slop/SKILL.md), with the full catalogs in the references folder.

## Layout

```text
skill-english-prose/
├── .claude-plugin/
│   ├── plugin.json
│   └── marketplace.json
├── .github/
│   └── FUNDING.yml
├── .gitattributes
├── .gitignore
├── README.md
├── CHANGELOG.md
├── LICENSE
└── skills/
    └── stop-slop/
        ├── SKILL.md
        └── references/
            ├── phrases.md
            ├── structures.md
            └── examples.md
```

The repository doubles as a Claude Code plugin named `stop-slop` and as its own plugin marketplace: `plugin.json` describes the plugin (the whole repository, with the skill under `skills/`), and `marketplace.json` lists it so Claude Code can install and update it straight from GitHub.

## Installation

The recommended path is the Claude Code plugin; copying the folder by hand stays available as a fallback. The two modes coexist: the `.claude-plugin/` manifest does not interfere with a manual copy into `.claude/skills/`.

### As a plugin (recommended)

The plugin installs once and updates through Claude Code, with no re-copying. Inside Claude Code, add this repository as a marketplace, then install the plugin:

```text
/plugin marketplace add qiaeru/skill-english-prose
/plugin install stop-slop@skill-english-prose
```

When a new version of the plugin is published, update it with `/plugin update stop-slop`, or let Claude Code's automatic update pick it up. You can confirm the skill was loaded by asking Claude for the list of available skills.

### By manual copy

Claude Code also loads a project's standalone skills from the `.claude/skills/` folder at the root of that project, and global skills from `~/.claude/skills/`.

To install the skill this way, copy the [skills/stop-slop/](skills/stop-slop/) folder into that project's `.claude/skills/` directory, creating that directory if it does not exist. For an installation that applies to all your projects, copy the same folder into `~/.claude/skills/` instead. Restart Claude Code so the skill is detected.

When the skill changes in this repo, re-copy the `skills/stop-slop/` folder into the target project's `.claude/skills/` (or its global equivalent) and restart Claude Code, since skill content is not hot-reloaded.

## Usage

Once installed, the skill triggers whenever you ask Claude to draft, edit, or review English text; Claude recognizes the request from the skill's `description` and applies the rules on its own. You can also invoke it explicitly by name for a full pass (`/stop-slop:stop-slop` when installed as a plugin, `/stop-slop` when copied manually), which forces a rule-by-rule review against the reference catalogs.

The skill works in three layers, which you can read separately. `SKILL.md` holds the core rules and the quick checks. [references/phrases.md](skills/stop-slop/references/phrases.md) catalogs the filler phrases, emphasis crutches, and hedges to cut. [references/structures.md](skills/stop-slop/references/structures.md) covers the formulaic shapes (contrasts, listings, rhythm patterns, word patterns), and [references/examples.md](skills/stop-slop/references/examples.md) shows before-and-after rewrites.

## Tracking upstream

The fork keeps the upstream repository as a git remote, so its improvements can be reviewed and merged:

```bash
git fetch upstream
git log --oneline main..upstream/main
git merge upstream/main
```

The skill files keep their upstream layout inside `skills/stop-slop/` (a straight rename), so merges of upstream changes to `SKILL.md` and `references/` apply cleanly. The root `README.md` and `CHANGELOG.md` have diverged; resolve conflicts there in favor of this repository and log the merged changes in the changelog.

## Limits

- The skill targets AI tells in English prose only. For French, see the sibling [skill-prose-francaise](https://github.com/qiaeru/skill-prose-francaise), an original adaptation built for how the same tics surface in French.
- It is not a grammar or spell checker, and it does not verify facts or arguments. It judges form: phrasing, structure, rhythm.
- Its register is direct, informal-professional prose (essays, posts, docs). Some rules (no adverbs, no passive voice) are deliberately absolute and may need loosening for fiction or formal writing; the author keeps the final say.

## License

MIT, see [LICENSE](LICENSE). Original work copyright Hardik Pandya; fork modifications copyright Qiaeru.
