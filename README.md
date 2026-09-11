# English prose skill

`writing-english-prose`, a Claude Code skill that removes predictable AI writing patterns from English prose.

This repository is a maintained fork of [stop-slop](https://github.com/hardikpandya/stop-slop) by [Hardik Pandya](https://hvpandya.com). The fork exists to update the skill regularly, package it as a Claude Code plugin, and adapt the rules over time. It preserves the upstream git history, so you can still merge in improvements published there.

The skill treats two failure modes as slop. The first is the familiar AI gloss: filler phrases and throat-clearing openers, formulaic structures (binary contrasts, negative listings, rhetorical question transitions), signature vocabulary ("delve," "leverage," "seamless"), passive voice hiding the actor, vague declaratives, and pull-quote bait. The second is overcorrection, prose compressed into six-word slogans until it reads like a LinkedIn post. The target sits between them: fluent, natural US English with concrete subjects, real verbs, and varied rhythm. The rewrite stays faithful to the source: it adds no number, cause, or actor the original doesn't contain, changes only what a check flags so the author recognizes the result as their own draft, and flags a vague passage to the author rather than fill it in. Rules, quick checks, and the final read live in [SKILL.md](skills/writing-english-prose/SKILL.md), with the full catalogs in the references folder.

## Layout

```text
skill-english-prose/
├── .claude-plugin/
│   ├── plugin.json
│   └── marketplace.json
├── .github/
│   ├── scripts/
│   │   └── validate.mjs
│   ├── workflows/
│   │   └── validate.yml
│   ├── dependabot.yml
│   └── FUNDING.yml
├── .gitattributes
├── .gitignore
├── .markdownlint-cli2.jsonc
├── README.md
├── CHANGELOG.md
├── LICENSE
└── skills/
    └── writing-english-prose/
        ├── SKILL.md
        └── references/
            ├── phrases.md
            ├── structures.md
            ├── examples.md
            └── ui-strings.md
```

The repository doubles as a Claude Code plugin named `writing-english-prose` and as its own plugin marketplace: `plugin.json` describes the plugin (the whole repository, with the skill under `skills/`), and `marketplace.json` lists it so Claude Code can install and update it straight from GitHub.

## Installation

The recommended path is the Claude Code plugin; copying the folder by hand stays available as a fallback. The two modes coexist: the `.claude-plugin/` manifest does not interfere with a manual copy into `.claude/skills/`.

### As a plugin (recommended)

The plugin installs once and updates through Claude Code, with no re-copying. Inside Claude Code, add this repository as a marketplace, then install the plugin:

```text
/plugin marketplace add qiaeru/skill-english-prose
/plugin install writing-english-prose@skill-english-prose
```

When a new version of the plugin is published, update it with `/plugin update writing-english-prose`, or let Claude Code's automatic update pick it up. You can confirm the skill was loaded by asking Claude for the list of available skills.

### By manual copy

Claude Code also loads a project's standalone skills from the `.claude/skills/` folder at the root of that project, and global skills from `~/.claude/skills/`.

To install the skill this way, copy the [skills/writing-english-prose/](skills/writing-english-prose/) folder into that project's `.claude/skills/` directory, creating that directory if it does not exist. For an installation that applies to all your projects, copy the same folder into `~/.claude/skills/` instead. Restart Claude Code so it detects the skill.

When the skill changes in this repo, re-copy the `skills/writing-english-prose/` folder into the target project's `.claude/skills/` (or its global equivalent) and restart Claude Code, since skill content is not hot-reloaded.

## Usage

Once installed, the skill triggers whenever you ask Claude to draft, edit, or review English text; Claude recognizes the request from the skill's `description` and applies the rules on its own. You can also invoke it explicitly by name for a full pass (`/writing-english-prose:writing-english-prose` when installed as a plugin, `/writing-english-prose` when copied manually), which forces a rule-by-rule review against the reference catalogs. Paste a few paragraphs of your own writing along with the text, and the skill matches that sample's register and keeps its habits, removing only the single-instance tells. Ask instead whether a text reads as AI-written, or to flag its tells without touching it, and the skill returns an audit: each tell quoted, named, and paired with a fix in a few words, with no rewrite and no guess about who wrote it.

The skill works in three layers, which you can read separately. `SKILL.md` holds the core rules, a note on weighing tells by density, the quick checks grouped by family (fidelity to the source, flow, wording, actors, structures, openers and closers, substance, typography), the final read (a count of the checks still failing, then four yes-or-no questions on the whole text: does it sound like a person, would the author recognize it, does it pass read aloud, is there anything left to cut, with one bounded rewrite when a check fails or a question gets a no), and an output section that adapts the delivery to the call (pasted text, a named file, a call from another task, an audit). [references/phrases.md](skills/writing-english-prose/references/phrases.md) catalogs the phrases to cut: throat-clearing openers, faux-insight setups, marketing openers and closers, brochure language, stock metaphors, AI vocabulary, business jargon, copula dodges, wordy constructions, nominalizations, redefinition verbs, pleonasms, empty intensifiers, stacked hedges, inflated significance, vague connections, borrowed authority, and chat artifacts. [references/structures.md](skills/writing-english-prose/references/structures.md) covers the formulaic shapes (contrasts, see-saws, fragmentation, over-compression, the over-corrected register, colon reveals, arguing with no one, learned litotes, aphorism templates, synonym cycling, bullet-point abuse, false agency, punctuation habits), and [references/examples.md](skills/writing-english-prose/references/examples.md) shows a before-and-after rewrite per family of tells, each built from the "Before" alone. [references/ui-strings.md](skills/writing-english-prose/references/ui-strings.md) covers interface files, where micro-labels answer only to the vocabulary and convention rules and terminology consistency overrides lexical variety.

## Quick test

To check that the skill is loaded and working, give Claude the paragraph below and ask it to improve it with `writing-english-prose`. The paragraph packs most of the covered tells on purpose: marketing opener, AI vocabulary, rhetorical question transition, ad-copy fragments, connector stacking, fake audience range, vague declarative, and an emphasis crutch.

> In today's fast-paced digital landscape, leveraging AI isn't just a game-changer; it's a necessity. The result? Teams that seamlessly navigate complexity. No fluff. No filler. Just results. Moreover, it's important to note that this approach truly empowers organizations to unlock their full potential. Whether you're a scrappy startup or a Fortune 500, the implications are significant. Let that sink in.

If the skill is active, Claude should identify most of these tells, rewrite the paragraph as flowing sentences with a concrete subject, report the count of checks still failing with a short note of what changed, and refrain from inventing a figure or a gain the paragraph never states. If the reply keeps the fragments and the question-answer transition, merely compresses everything into slogans, or pads the rewrite with made-up numbers, the skill was not loaded.

## Tracking upstream

The fork keeps the upstream repository as a git remote, so you can review and merge its improvements:

```bash
git fetch upstream
git log --oneline main..upstream/main
git merge upstream/main
```

The skill files keep their upstream names inside `skills/writing-english-prose/` (`SKILL.md` plus the same three references), so git's rename detection lets upstream changes to those files merge across the move. The root `README.md` and `CHANGELOG.md` have diverged, as has much of the skill content since the fluency overhaul; review upstream changes manually, resolve conflicts in favor of this repository, and log what you merge in the changelog.

## Limits

- The skill targets AI tells in English prose only. For French, see the sibling [skill-prose-francaise](https://github.com/qiaeru/skill-prose-francaise), an original adaptation built for how the same tics surface in French.
- It is not a grammar or spell checker, and it does not verify facts or arguments. It judges form: phrasing, structure, rhythm.
- Its register is plain American magazine prose (essays, posts, docs, professional email). It deliberately skips fiction, poetry, lyrics, legal text, and direct quotes, where the rules would flatten a deliberate voice; the author keeps the final say.

## License

MIT, see [LICENSE](LICENSE). Original work copyright Hardik Pandya; fork modifications copyright Qiaeru.
