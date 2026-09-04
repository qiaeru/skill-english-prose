# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

This repository is a maintained fork of [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop); versioning starts from scratch at the fork, and the pre-fork history stays available in the git log.

## [Unreleased]

### Added

- A fidelity-to-the-source rule, ported from the sibling `skill-prose-francaise`: the rewrite adds no number, cause, actor, or example the source lacks, keeps the length close to the original, and flags a vague passage rather than fill it in, with a "Fidelity to the source" family heading the quick checks. Sixteen "After" examples that invented facts are rebuilt from their "Before" alone, with a note wherever the source stays vague.
- A counterweight to rule 1: the same conjunction at every seam ("because" joining each sentence) is as mechanical as the fragments it replaced, with a quick check and a rhythm-table row.
- Three families of tells, each with a reference section and a quick check: learned litotes ("not without merit," "it is not uncommon for"), redefinition verbs ("reimagine," "revolutionize"), and pleonasms ("advance planning," "end result").

### Changed

- The skill description names UI strings and locale files among its triggers, so autodiscovery fires on a translation file; the plugin manifest carries the same description.
- Scoring rests on an objective criterion: any quick check still failing triggers the rewrite regardless of score, the loop is bounded to one rewrite, and the delivered text carries its score and the count of checks still failing.
- The AI-vocabulary quick check splits into loud words replaced on sight and borderline words thinned only when they cluster, matching the "Weighing tells" section it contradicted.
- Rule 6 and the passive-voice entry name the actor the text designates and keep the impersonal form when it designates no one, instead of injecting "you" into third-person prose.
- The examples reference drops its unlinked table of contents, and the README no longer hard-codes the number of rules or examples; its layout tree now lists the CI files added in 1.2.0.
- Duplicate entries in the phrases reference are merged, the sentence adverbs ("interestingly," "notably") leave the intensifier list for their own note, and the rhythm and word-pattern tables drop the rows that repeated other sections.

## [1.2.0] - 2026-07-05

### Added

- A structures entry for participial consequence tails, the comma-plus-"-ing" clause that asserts an unearned payoff (", ensuring optimal performance," ", making it an ideal choice"): end the sentence and give the real consequence its own actor, or cut the tail.
- An "Email Boilerplate" section in the phrases reference ("I hope this email finds you well," "I wanted to reach out," "Please don't hesitate to"), closing the gap between the skill's stated email scope and its rules.
- Vocabulary coverage for "ensure/ensuring," "key" as a buzz-adjective, "serves as / stands as," "aims to," "vibrant," "nestled (in the heart of)," "a variety of / a wide range of," and the "Overall," connector opener; "ensure" and "key" join the borderline list that only counts as a cluster.
- Two before/after pairs (participial consequence tails, email boilerplate), bringing the examples reference to twenty-eight.
- A validation workflow adapted from the sibling `skill-prose-francaise`: repo invariants (SKILL.md frontmatter rules, relative links, no em dash in the repo's own prose, plugin version matching the latest released CHANGELOG version, both LICENSE copyright lines), markdown hygiene, and plugin manifest validation, on push, pull request, and a weekly schedule, with Dependabot watching the workflow's actions.

### Changed

- The quick checks now sit under seven family headings (flow, wording, actors, structures, openers and closers, substance, typography) instead of one flat list, so a pass scans by category.

### Fixed

- Two asterisk-styled italics inherited from upstream in the structures reference now use underscores, matching the repo's markdown conventions; the new lint caught them.

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
