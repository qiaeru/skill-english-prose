# English prose skill (stop-slop fork)

A Claude Code skill that removes predictable AI writing patterns from English prose.

This repository is a maintained fork of [stop-slop](https://github.com/hardikpandya/stop-slop) by [Hardik Pandya](https://hvpandya.com). The fork exists to keep the skill updated on a regular cadence, to package it as a Claude Code plugin, and to adapt the rules over time. Upstream history is preserved, so improvements published there can still be merged in.

The skill treats two failure modes as slop. The first is the familiar AI gloss: filler phrases and throat-clearing openers, formulaic structures (binary contrasts, negative listings, rhetorical question transitions), signature vocabulary ("delve," "leverage," "seamless"), passive voice hiding the actor, vague declaratives, and pull-quote bait. The second is overcorrection, prose compressed into six-word slogans until it reads like a LinkedIn post. The target sits between them: fluent, natural US English with concrete subjects, real verbs, and varied rhythm. Rules and the five-axis scoring grid live in [SKILL.md](skills/stop-slop/SKILL.md), with the full catalogs in the references folder.

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

The skill works in three layers, which you can read separately. `SKILL.md` holds the sixteen core rules, the quick checks, and the scoring grid (five axes: flow, directness, concreteness, authenticity, economy, with a rewrite threshold at 35 of 50). [references/phrases.md](skills/stop-slop/references/phrases.md) catalogs the phrases to cut: throat-clearing openers, marketing openers and closers, AI vocabulary, business jargon, empty intensifiers, stacked hedges, and chat artifacts. [references/structures.md](skills/stop-slop/references/structures.md) covers the formulaic shapes (contrasts, see-saws, fragmentation, over-compression, false agency, punctuation habits), and [references/examples.md](skills/stop-slop/references/examples.md) shows twenty before-and-after rewrites.

## Quick test

To check that the skill is loaded and working, give Claude the paragraph below and ask it to improve it with `stop-slop`. The paragraph packs most of the covered tells on purpose: marketing opener, AI vocabulary, rhetorical question transition, ad-copy fragments, connector stacking, fake audience range, vague declarative, and an emphasis crutch.

> In today's fast-paced digital landscape, leveraging AI isn't just a game-changer; it's a necessity. The result? Teams that seamlessly navigate complexity. No fluff. No filler. Just results. Moreover, it's important to note that this approach truly empowers organizations to unlock their full potential. Whether you're a scrappy startup or a Fortune 500, the implications are significant. Let that sink in.

If the skill is active, Claude should identify most of these tells, rewrite the paragraph as flowing sentences with a concrete subject and a named gain, and score the result above 35 of 50. If the reply keeps the fragments and the question-answer transition, or merely compresses everything into slogans, the skill was not loaded.

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
- Its register is plain American magazine prose (essays, posts, docs, professional email). It deliberately skips fiction, poetry, lyrics, legal text, and direct quotes, where the rules would flatten a deliberate voice; the author keeps the final say.

## License

MIT, see [LICENSE](LICENSE). Original work copyright Hardik Pandya; fork modifications copyright Qiaeru.
