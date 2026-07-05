---
name: writing-english-prose
description: Remove AI writing patterns from English prose. Use when drafting, writing, editing, reviewing, or proofreading US-English text (essays, posts, docs, emails). Replaces AI tells with fluent, natural American English built on concrete subjects, real verbs, plain wording, and varied rhythm.
---

# Writing English Prose

Write English that reads like a good human writer, not like a model. Two failure modes count as slop. The first is the familiar AI gloss: filler phrases, formulaic contrasts, empty intensifiers, signature vocabulary, pull-quote bait. The second is overcorrection: prose compressed into six-word slogans until it reads like a LinkedIn post. The target sits between them: fluent, natural US English, with concrete subjects, real verbs, and rhythm that varies because the ideas demand it.

## When to apply

Apply to essays, blog posts, documentation, READMEs, emails, announcements, and any professional prose in US English. Skip fiction, poetry, lyrics, legal text, and direct quotes, where these rules would flatten a deliberate voice. Register target: plain American magazine prose (a good engineering blog, The Atlantic, a Paul Graham essay), conversational but precise. Contractions are normal written English; use them.

## Process

For a full edit or rewrite:

1. Read the whole text before correcting anything; rhythm, repetition, and cadence tells only show across paragraphs.
2. Apply the core rules, opening the references as needed.
3. Run the quick checks on the result.
4. Score on the five axes; rewrite below 35/50.
5. Reread your own output with the same checks. The corrected text must pass the rules it enforces.

For a short text (an email, a message, one paragraph), apply the rules without the scoring grid.

## Special case: UI strings

An interface file (application labels, locale files) mixes two registers; split by unit, not by file.

**Micro-labels**: buttons, tabs, menu items, field labels, short titles, one-line notifications and errors. These are fragments, not sentences, so the sentence-architecture rules (flow, fragmentation, contrasts, rhythm) don't apply. Check only vocabulary and conventions: AI vocabulary, jargon, wordy constructions, and capitalization. Capitalization follows the platform convention (Title Case on Apple platforms, sentence case on Material and most of the web); pick one and keep it consistent across the product.

**Rule 15 inverts on micro-labels.** In prose you vary the lexicon; in an interface the same action keeps the same word everywhere. If "Delete" labels one button, never alternate it with "Remove" or "Erase" elsewhere: users learn the interface's words, and consistency beats variety.

**Longer strings**: descriptions, help text, confirmation bodies, explanatory error messages, onboarding copy. As soon as a string forms one or more full sentences, apply the whole skill.

## Core rules

1. **Write sentences that flow.** Most sentences carry one idea in roughly 12 to 25 words and connect to their neighbors. A short sentence is a tool for emphasis; it works once per stretch, not as the default. Stacked fragments ("No fluff. No filler. Just results.") are as much a tell as bloat. See [references/structures.md](references/structures.md).

2. **Cut filler phrases.** Throat-clearing openers, emphasis crutches, marketing openers and closers, email boilerplate, chat artifacts. See [references/phrases.md](references/phrases.md).

3. **Use plain words.** Prefer the short Anglo-Saxon word to the Latinate one: "use" over "utilize," "start" over "embark on," "dig into" over "delve into." The AI vocabulary list ("leverage," "seamless," "robust," "tapestry," "testament") is in [references/phrases.md](references/phrases.md).

4. **Break formulaic structures.** Binary contrasts, negative listings, see-saw constructions, rhetorical setups, participial consequence tails, triad cadence. See [references/structures.md](references/structures.md).

5. **Prefer active voice.** Find the actor and put them at the front. Passive stays legitimate when the actor is unknown or beside the point ("he was arrested in May"); the tell is passive used to dodge naming who did what.

6. **No false agency.** Complaints don't become fixes, decisions don't emerge, data doesn't tell. Name the person who acted; when no specific person fits, use "you."

7. **Be specific.** No vague declaratives ("the implications are significant"). Name the implication, with a number or a concrete object when one exists, even if the sentence gets longer.

8. **Put the reader in the room.** "You" beats "people," a scene beats a generalization, the lecturer-from-a-distance voice ("This happens because...") goes.

9. **Cut empty intensifiers and stacked hedges.** "Really," "truly," "deeply," "fundamentally," "incredibly" add nothing. Keep adverbs that change meaning ("slowly," "twice," "rarely," "yesterday"). One deliberate hedge is honesty; three reflexive ones are the tell. Hedging into a both-sides menu ("on one hand... on the other," "it depends") instead of committing is the same dodge: take a position, then name the real trade-off.

10. **Kill meta-commentary.** No signposting ("In this post, we'll..."), no self-narration ("Let's dive in"), no permission-granting ("And that's okay"). Enter the point directly.

11. **No typographic crutches.** No em dashes; use a comma, a period, or parentheses, not a colon or an ellipsis standing in for the dash and not a sentence contorted around the gap. No bold for emphasis mid-prose, no bold-label lead-ins ("**Speed:** ...") dressing a list as prose, no emoji in prose: if a word must stand out, rewrite the sentence so it does. Semicolons only to balance two related clauses; colons only when they introduce something real.

12. **Don't answer your own rhetorical questions.** "The result? Faster builds." is a transition wearing a costume. State it: "Builds got faster."

13. **Trust readers.** State facts directly; skip softening, justification, and hand-holding. Cut "it's important to note," "needless to say," and every sentence that tells readers what they're about to understand.

14. **Cut quotables.** If a sentence sounds like a pull-quote or a slide title, rewrite it as a working sentence.

15. **Vary everything that repeats.** Sentence lengths, paragraph endings, item counts in lists, sentence openers. Three matching lengths in a row, or every paragraph landing on a zinger, reads machine-made.

16. **Follow US conventions.** Serial comma ("A, B, and C"). US spellings ("color," "organize," "toward"). Double quotation marks, with commas and periods inside. No Title Case on common nouns mid-sentence ("our marketing team," not "our Marketing Team").

17. **Prefer verbs to nominalizations, and cut wordy connectors.** "Decide" over "make a decision," "analyze" over "conduct an analysis." "To" over "in order to," "because" over "due to the fact that," "can" over "is able to." Rewrite "There is/There are" openers around a real subject, and give impersonal directives ("It is essential to...") an actor. See [references/phrases.md](references/phrases.md).

18. **Don't over-bullet.** Reserve bullet lists for genuinely parallel items (steps, parameters, an inventory). Two or three ideas linked by reasoning belong in a connected paragraph; the prose carries the logic that a list strips out.

## Weighing tells

Most tells are about concentration, not the single instance. A lone "comprehensive," one "navigate," one stacked hedge is how people write; the same word four times in a paragraph is the tell. Weight a pattern by how thickly it clusters, and don't hunt a borderline word through an otherwise-human page. The loud vocabulary ("delve," "tapestry," "leverage," "seamless") still goes on sight, but the borderline words that double as ordinary English ("robust," "comprehensive," "navigate," "utilize," "ensure," "key") earn a fix when they cluster, not on a lone hit. Two tells are the exception, flagged wherever they appear and counted on a single instance: the em dash, and leftover assistant boilerplate ("As an AI language model"). Either one, even once, is a real signal.

## Quick checks

Run each group before delivering.

### Flow and rhythm

- Three consecutive short fragments, or every sentence under ten words? Rebuild into flowing sentences.
- Sentence contorted to dodge an em dash, or a bolted-on "lol," lowercase "i," or fake typo? That's the over-corrected tell; write the plain sentence.
- Three consecutive sentences of matching length? Break one.
- Triad cadence everywhere ("clear, concise, and compelling")? Vary item counts; two or one often beats three.
- Same word or sentence opener repeated at close range? Vary.

### Wording

- Empty intensifier ("very," "really," "truly," "incredibly," "deeply," "extremely")? Cut. Meaningful adverb ("slowly," "twice")? Keep.
- Nominalization doing a verb's job ("make a decision," "conduct an analysis")? Use the verb.
- "In order to," "due to the fact that," "prior to," "is able to"? Use "to," "because," "before," "can."
- Hedges stacked ("arguably," "in many ways," "to some extent" in one paragraph)? Keep at most one.
- Both-sides menu ("on one hand... on the other," "it depends") dodging a stance? Take a position, then name the trade-off.
- AI vocabulary ("delve," "leverage," "seamless," "robust," "navigate," "landscape," "unlock," "harness," "empower," "elevate," "testament," "tapestry")? Replace with the plain word.
- "Moreover," "Furthermore," "Additionally" opening sentences? At most one connector opener per paragraph; usually just start the sentence.

### Actors and voice

- "There is/There are" opening a sentence? Rewrite around a real subject.
- "It is essential/important to..." with no actor? Name who must act.
- Passive hiding a known actor? Name them up front.
- Inanimate thing doing a human verb ("the decision emerged")? Name the person.

### Formulaic structures

- "Not X. But Y." or "isn't just X; it's Y"? State Y.
- "Less X, more Y" or "Think X, not Y" see-saw? Write the full sentence.
- Negative listing ("It's not A. It's not B. It's C.")? State C.
- Rhetorical question answered immediately ("The catch? ...")? State it.
- Pseudo-cleft opener ("What makes this hard is...")? Name the thing: "The constraint is..."
- Participial consequence tail (", ensuring...," ", making it...," ", allowing you to...")? End the sentence; give the consequence its own sentence and actor, or cut it.

### Openers, closers, and boilerplate

- Throat-clearing or fake-relatability opener ("Here's the thing," "Honestly," "Look, I get it")? Cut to the point.
- Marketing opener ("In a world where," "In today's fast-paced," "Whether you're X or Y")? Cut or name the actual audience.
- Cliché closer ("In conclusion," "At the end of the day," "X is here to stay," "Only time will tell")? End on substance.
- Email boilerplate ("I hope this email finds you well," "I wanted to reach out," "Please don't hesitate to")? Open with the reason you're writing; close with the concrete next step.
- Assistant boilerplate ("As an AI language model"), reflexive flattery ("Great question"), or a trailing "Want me to..." offer? Delete every trace of the assistant.

### Substance

- Vague declarative ("The implications are significant")? Name the specific implication.
- Paragraph that restates the prompt or could be cut with nothing lost? Make a real claim or delete it.
- Pull-quote sentence? Rewrite as a working sentence.

### Typography, format, and conventions

- Em dash? Comma, period, or parentheses.
- Bold emphasis or emoji in prose? Remove; rewrite if the word needs weight.
- Bold-label lead-in ("**Speed:** ..."), `---` divider, or emoji as a bullet or heading? Drop the label, use paragraph breaks, use plain markers.
- Semicolon where a period flows better? Replace. Keep it only to balance two related clauses.
- Colon that only announces ("Here's the key insight:")? Cut the announcement.
- Bullet list carrying an argument? Convert to a connected paragraph; keep bullets for parallel items.
- Listicle headline ("7 ways to," "5 signs that") or a fixed intro/three-body/"in summary" skeleton? Let the shape follow the argument.
- Missing serial comma, British spelling, or Title Case on a common noun? Fix to US convention.

## Scoring

Rate 1-10 on each axis.

| Axis | Question |
| --- | --- |
| Flow | Do sentences connect and breathe, or stack as fragments or bloat? |
| Directness | Statements, or announcements and setups? |
| Concreteness | Named actors, numbers, specific objects? |
| Authenticity | Sounds like a person who writes well, not a model or a brand? |
| Economy | Anything cuttable without breaking the rhythm? |

Below 35/50: revise.

## Examples

See [references/examples.md](references/examples.md) for before/after transformations.

## License and attribution

MIT. Maintained fork of [stop-slop](https://github.com/hardikpandya/stop-slop) by Hardik Pandya, the original source of this skill.
