# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

This repository is a maintained fork of [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop); versioning starts from scratch at the fork, and the pre-fork history stays available in the git log.

## [Unreleased]

## [1.1.0] - 2026-06-25

### Added

- New tells drawn from the data-ranked catalog in [JCarterJohnson/vibecoded-design-tells](https://github.com/JCarterJohnson/vibecoded-design-tells) (MIT), kept where they fit the fluency philosophy: bold-label lead-ins (`**Speed:** ...`), leftover assistant boilerplate ("As an AI language model") and trailing meta-offers, the both-sides menu that dodges a stance, hollow paragraphs that restate the prompt, fake-relatability openers ("Honestly," "Look, I get it"), listicle and five-paragraph templates, and structural emoji and `---` dividers.
- A "Weighing tells" section in SKILL.md: weight a pattern by how thickly it clusters, so the loud vocabulary still goes on sight while borderline words ("robust," "comprehensive," "navigate") count only as a cluster. The em dash and assistant boilerplate stay the two single-instance exceptions.
- A structures entry, "The Over-Corrected Register," naming the forced-casual default as its own tell: em-dash dodging that contorts the sentence, bolted-on casualness ("lol," lowercase "i"), and detector-beating fake typos.
- Two before/after pairs (bolded lead-in labels, both-sides menu), bringing the examples reference to twenty-six.

### Changed

- Recast three README sentences in active voice (fork rationale, install, upstream tracking) so the repo's own prose passes the skill's voice rule.

## [1.0.0] - 2026-06-12

### Added

- Distribution as a Claude Code plugin: the repository is its own marketplace (`.claude-plugin/`), so the skill installs in one command and updates without re-copying. Manual copy stays supported.
- Over-compression now counts as slop: the skill targets fluent, natural US English and rejects both AI gloss and slogan-stacked fragments, with a positive register target (plain American magazine prose) and a "Process" section fixing the order of application.
- Coverage of recent model tells: rhetorical question transitions ("The result?"), see-saw constructions ("Less X, more Y"), ad-copy cascades ("No fluff. Just results."), marketing openers and cliché closers, AI vocabulary ("delve," "leverage," "seamless," "testament"), connector stacking, stacked hedges, chat artifacts, bold-for-emphasis, emoji in prose, and US conventions (serial comma, spellings, quotation punctuation).
- Plain-English wordiness families: wordy constructions ("in order to," "due to the fact that"), nominalizations ("make a decision" → "decide"), expletive "There is/There are" openers, and impersonal directives ("It is essential to") that must name an actor.
- A rule against bullet-point abuse (arguments belong in connected paragraphs; bullets are for parallel items) and a special-case section for UI strings, where micro-labels skip the sentence-architecture rules and terminology consistency overrides lexical variety.
- The examples reference grows from five to twenty-four before-and-after pairs, and the README gains a quick test paragraph to verify the skill is loaded.
- Repository scaffolding shared with the sibling repos: generic `.gitignore` and `.gitattributes`, funding metadata, and this Keep a Changelog format.

### Changed

- Absolute rules softened where they produced their own tell: meaningful adverbs and legitimate passives are now allowed, and "two items beat three" becomes a rule against repeated triad cadence.
- The skill and the plugin are renamed `writing-english-prose`, matching the sibling skills' naming; upstream `stop-slop` stays cited as the original source. Invocation becomes `/writing-english-prose:writing-english-prose` (plugin) or `/writing-english-prose` (manual copy).
- The skill folder now lives under `skills/writing-english-prose/` (moved from the upstream root), the location the plugin format expects. Manual copies start from this new path.
- The SKILL.md frontmatter drops the upstream `metadata` block (inert for the runtime) and keeps the attribution in the license section; the `description` now carries the trigger words Anthropic's guidance recommends.
- The README documents the fork: installation as a plugin or by manual copy, usage, limits, and how this repository tracks upstream.

### Fixed

- Example 4 used an em dash in its "After" version while the rules ban em dashes.
- The SKILL.md introduction and register section used the dramatic fragments the skill itself bans.
