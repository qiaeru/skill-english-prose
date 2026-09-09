---
name: writing-english-prose
description: Remove AI writing patterns from English prose. Use when drafting, writing, editing, reviewing, or proofreading US-English text (essays, posts, docs, emails, UI strings, locale files). Replaces AI tells with fluent, natural American English: concrete subjects, real verbs, plain words, varied rhythm.
---

# Writing English Prose

Write English that reads like a good human writer, not like a model. Two failure modes count as slop. The first is the familiar AI gloss: filler phrases, formulaic contrasts, empty intensifiers, signature vocabulary, pull-quote bait. The second is overcorrection: prose compressed into six-word slogans until it reads like a LinkedIn post. The target sits between them: fluent, natural US English, with concrete subjects, real verbs, and rhythm that varies because the ideas demand it.

## When to apply

Apply to essays, blog posts, documentation, READMEs, emails, announcements, and any professional prose in US English. Skip fiction, poetry, lyrics, legal text, and direct quotes, where these rules would flatten a deliberate voice. Register target: plain American magazine prose (a good engineering blog, The Atlantic, a Paul Graham essay), conversational but precise. Contractions are normal written English; use them.

If the author supplies a writing sample, read it before the text and match its sentence length, word choice, punctuation, and openers. The sample sets the register and overrides the borderline checks: a habit it shows (a favorite connector, a parenthetical aside, a long sentence now and then) stays in the rewrite. Only the single-instance tells (the em dash, assistant boilerplate) still go.

## Process

For a full edit or rewrite:

1. Read the whole text before correcting anything; rhythm, repetition, and cadence tells only show across paragraphs.
2. Fix the form, not the facts. Add no number, cause, actor, or example the source doesn't contain; when the source stays vague, keep the rewrite sober or flag the gap to the author rather than fill it. A gap the text itself admits ("details are not widely documented") never gets a plausible guess in its place.
3. Keep the length close to the original. Joining fragments and cutting filler move words around; they don't add them.
4. Apply the core rules, opening the references as needed.
5. Run the quick checks on the result and count the ones that still fail.
6. Score on the five axes. Rewrite once if any check still fails or the total falls below 35/50, then deliver the better version with its score and the number of checks still failing.
7. Reread your own output with the same checks. Five tells survive a rewrite more often than the rest, so search for them by name: a not-X-but-Y contrast, a one-line closer, an em dash, a triad, a bold label. The corrected text must pass the rules it enforces.

For a short text (an email, a message, one paragraph), apply the rules without the scoring grid.

When editing a file rather than pasted text, change the prose only. Code blocks, inline code, commands, paths, frontmatter, data, and link targets stay as they are, even when a path or a command contains a word the checks would flag.

## Special case: UI strings

An interface file (application labels, locale files) mixes two registers; split by unit, not by file.

**Micro-labels**: buttons, tabs, menu items, field labels, short titles, one-line notifications and errors. These are fragments, not sentences, so the sentence-architecture rules (flow, fragmentation, contrasts, rhythm) don't apply. Check only vocabulary and conventions: AI vocabulary, jargon, wordy constructions, and capitalization. Capitalization follows the platform convention (Title Case on Apple platforms, sentence case on Material and most of the web); pick one and keep it consistent across the product.

**Rule 15 inverts on micro-labels.** In prose you vary the lexicon; in an interface the same action keeps the same word everywhere. If "Delete" labels one button, never alternate it with "Remove" or "Erase" elsewhere: users learn the interface's words, and consistency beats variety.

**Longer strings**: descriptions, help text, confirmation bodies, explanatory error messages, onboarding copy. As soon as a string forms one or more full sentences, apply the whole skill.

## Core rules

1. **Write sentences that flow.** Most sentences carry one idea in roughly 12 to 25 words and connect to their neighbors. A short sentence is a tool for emphasis; it works once per stretch, not as the default. Stacked fragments ("No fluff. No filler. Just results.") are as much a tell as bloat. The counterweight: joining every sentence with the same conjunction ("because" at every seam, "which" on every clause) is as mechanical as the fragments it replaced, so vary the connective and let some sentences stand alone. See [references/structures.md](references/structures.md).

2. **Cut filler phrases.** Throat-clearing openers, emphasis crutches, marketing openers and closers, email boilerplate, chat artifacts. See [references/phrases.md](references/phrases.md).

3. **Use plain words.** Prefer the short Anglo-Saxon word to the Latinate one: "use" over "utilize," "start" over "embark on," "dig into" over "delve into." The AI vocabulary list ("leverage," "seamless," "robust," "tapestry," "testament"), the redefinition verbs that announce a change without naming it ("reimagine," "revolutionize"), and the pleonasms ("advance planning," "end result") are in [references/phrases.md](references/phrases.md).

4. **Break formulaic structures.** Binary contrasts, negative listings, see-saw constructions, rhetorical setups, participial consequence tails, triad cadence, the learned litotes ("not without merit," "it is not uncommon for") that affirm by double negation, and the objection nobody raised ("I'm not saying," "One might be tempted to") that argues with an earlier draft. See [references/structures.md](references/structures.md).

5. **Prefer active voice.** Find the actor and put them at the front. Passive stays legitimate when the actor is unknown or beside the point ("he was arrested in May"); the tell is passive used to dodge naming who did what.

6. **No false agency.** Complaints don't become fixes, decisions don't emerge, data doesn't tell. Name the person the text points to (the sender, the team named earlier). When the text addresses a reader and no one else fits, use "you"; when it names no one, keep the impersonal or passive form rather than invent an actor.

7. **Be specific.** No vague declaratives ("the implications are significant"). Name the implication, with the number or concrete object the source provides, even if the sentence gets longer. Never invent one to sound concrete: strip the vagueness and let the author supply the fact. The same restraint applies to a vague connection ("associated with," "linked to") and an unnamed authority ("experts argue"): name the relationship or the source the text gives, and when it gives none, keep the vague word rather than invent a role or a citation.

8. **Put the reader in the room.** "You" beats "people," a scene beats a generalization, the lecturer-from-a-distance voice ("This happens because...") goes.

9. **Cut empty intensifiers and stacked hedges.** "Really," "truly," "deeply," "fundamentally," "incredibly" add nothing. Keep adverbs that change meaning ("slowly," "twice," "rarely," "yesterday"). One deliberate hedge is honesty; three reflexive ones are the tell. Hedging into a both-sides menu ("on one hand... on the other," "it depends") instead of committing is the same dodge: take a position, then name the real trade-off.

10. **Kill meta-commentary.** No signposting ("In this post, we'll..."), no self-narration ("Let's dive in"), no permission-granting ("And that's okay"). Enter the point directly.

11. **No typographic crutches.** No em dashes; use a comma, a period, or parentheses, not a colon or an ellipsis standing in for the dash and not a sentence contorted around the gap. No bold for emphasis mid-prose, no bold-label lead-ins ("**Speed:** ...") dressing a list as prose, no emoji in prose: if a word must stand out, rewrite the sentence so it does. Semicolons only to balance two related clauses; colons only when they introduce something real.

12. **Don't answer your own rhetorical questions.** "The result? Faster builds." is a transition wearing a costume. State it: "Builds got faster."

13. **Trust readers.** State facts directly; skip softening, justification, and hand-holding. Cut "it's important to note," "needless to say," and every sentence that tells readers what they're about to understand.

14. **Cut quotables.** If a sentence sounds like a pull-quote or a slide title, or fills an aphorism template ("X is the currency of Y," "X becomes a trap"), rewrite it as a working sentence with the specific claim.

15. **Vary everything that repeats.** Sentence lengths, paragraph endings, item counts in lists, sentence openers. Three matching lengths in a row, or every paragraph landing on a zinger, reads machine-made.

16. **Follow US conventions.** Serial comma ("A, B, and C"). US spellings ("color," "organize," "toward"). Double quotation marks, with commas and periods inside. No Title Case on common nouns mid-sentence ("our marketing team," not "our Marketing Team").

17. **Prefer verbs to nominalizations, and cut wordy connectors.** "Decide" over "make a decision," "analyze" over "conduct an analysis." "To" over "in order to," "because" over "due to the fact that," "can" over "is able to." Rewrite "There is/There are" openers around a real subject, and give impersonal directives ("It is essential to...") an actor. See [references/phrases.md](references/phrases.md).

18. **Don't over-bullet.** Reserve bullet lists for genuinely parallel items (steps, parameters, an inventory). Two or three ideas linked by reasoning belong in a connected paragraph; the prose carries the logic that a list strips out.

## Weighing tells

Most tells are about concentration, not the single instance. A lone "comprehensive," one "navigate," one stacked hedge is how people write; the same word four times in a paragraph is the tell. Weight a pattern by how thickly it clusters, and don't hunt a borderline word through an otherwise-human page. The loud vocabulary ("delve," "tapestry," "leverage," "seamless") still goes on sight, but the borderline words that double as ordinary English ("robust," "comprehensive," "navigate," "utilize," "ensure," "key") earn a fix when they cluster, not on a lone hit. Two tells are the exception, flagged wherever they appear and counted on a single instance: the em dash, and leftover assistant boilerplate ("As an AI language model"). Either one, even once, is a real signal.

Leave a watched phrase alone inside a quotation, a title, a proper name, or a passage that discusses the phrase rather than uses it. Keep what carries the writer's voice even when it brushes a check: an odd specific detail, an admitted mixed feeling ("mostly good, and it still bothers me"), a self-correction in parentheses, a dated reference, a first-person choice the writer could defend. Removing tells is half the job; the result must still sound like a person.

## Quick checks

Run each group before delivering. The list is part of the skill on the same footing as the core rules, since it also covers tells without a numbered rule.

### Fidelity to the source

- Number, cause, actor, or example that the source doesn't contain? Remove it, or flag the gap to the author.
- Text noticeably longer than the original, or a claim shifted by the rewrite? Tighten and restore.
- Gap filled with a guess ("likely grew up in," "appears to have been founded in the 1990s") or a knowledge disclaimer ("details are limited," "based on available information")? Say what the source doesn't show, or cut the sentence.
- Unnamed authority ("experts agree," "observers note," "industry reports") or a list of outlets propping up a claim? Use the source the text names and what it said; otherwise cut.

### Flow and rhythm

- Three consecutive short fragments, or every sentence under ten words? Rebuild into flowing sentences.
- Same conjunction at every seam ("because" joining each sentence, "which" on every clause), or no sentence left standing alone across a paragraph? Vary the connective and the length.
- Sentence contorted to dodge an em dash, or a bolted-on "lol," lowercase "i," or fake typo? That's the over-corrected tell; write the plain sentence.
- Three consecutive sentences of matching length? Break one.
- Triad cadence everywhere ("clear, concise, and compelling")? Vary item counts; two or one often beats three.
- Same word or sentence opener repeated at close range? Vary.
- One-sentence paragraph restating the paragraph before it, or the same closer after several sections? Cut the repeat.

### Wording

- Empty intensifier ("very," "really," "truly," "incredibly," "deeply," "extremely")? Cut. Meaningful adverb ("slowly," "twice")? Keep.
- Nominalization doing a verb's job ("make a decision," "conduct an analysis")? Use the verb.
- "In order to," "due to the fact that," "prior to," "is able to"? Use "to," "because," "before," "can."
- Hedges stacked ("arguably," "in many ways," "to some extent" in one paragraph)? Keep at most one.
- Both-sides menu ("on one hand... on the other," "it depends") dodging a stance? Take a position, then name the trade-off.
- Loud AI vocabulary ("delve," "leverage," "seamless," "landscape," "unlock," "harness," "empower," "elevate," "testament," "tapestry")? Replace with the plain word on sight.
- Borderline word clustering ("robust," "comprehensive," "navigate," "utilize," "ensure," "key" several times in one passage)? Thin the cluster; leave a lone instance alone.
- Redefinition verb ("reimagine," "reinvent," "redefine," "revolutionize," "transform" with nothing named)? Name what changes, or leave it to the author.
- Pleonasm ("advance planning," "end result," "collaborate together," "each and every")? Cut the redundant half.
- Copula dodge ("serves as," "functions as," "represents," "features," "boasts")? Use "is," "are," "has."
- "Moreover," "Furthermore," "Additionally" opening sentences? At most one connector opener per paragraph; usually just start the sentence.

### Actors and voice

- "There is/There are" opening a sentence? Rewrite around a real subject.
- "It is essential/important to..." with no actor? Name who must act.
- Passive hiding a known actor? Name them up front.
- Inanimate thing doing a human verb ("the decision emerged")? Name the person the text points to; if it points to no one, keep the impersonal form.

### Formulaic structures

- "Not X. But Y." or "isn't just X; it's Y," including the contrast split across sentences ("This doesn't mean X. It means Y.") and the clipped negative tail (", no guessing")? State Y.
- Objection nobody raised ("I'm not saying," "To be clear," "Don't get me wrong," "One might be tempted to")? Cut the defense; keep an objection only when the text attributes it or a reader would weigh it.
- "Less X, more Y" or "Think X, not Y" see-saw? Write the full sentence.
- Negative listing ("It's not A. It's not B. It's C.")? State C.
- Rhetorical question answered immediately ("The catch? ...")? State it.
- Pseudo-cleft opener ("What makes this hard is...")? Name the thing: "The constraint is..."
- Learned litotes ("not without merit," "it is not uncommon for," "cannot be ignored")? Affirm: "useful," "often," "matters."
- Participial consequence tail (", ensuring...," ", making it...," ", allowing you to...")? End the sentence; give the consequence its own sentence and actor, or cut it.

### Openers, closers, and boilerplate

- Throat-clearing or fake-relatability opener ("Here's the thing," "Honestly," "Look, I get it")? Cut to the point.
- Marketing opener ("In a world where," "In today's fast-paced," "Whether you're X or Y")? Cut or name the actual audience.
- Cliché closer ("In conclusion," "At the end of the day," "X is here to stay," "Only time will tell")? End on substance.
- Email boilerplate ("I hope this email finds you well," "I wanted to reach out," "Please don't hesitate to")? Open with the reason you're writing; close with the concrete next step.
- Assistant boilerplate ("As an AI language model"), reflexive flattery ("Great question"), or a trailing "Want me to..." offer? Delete every trace of the assistant.

### Substance

- Vague declarative ("The implications are significant")? Name the specific implication from the source, or cut the sentence; don't make one up.
- Paragraph that restates the prompt or could be cut with nothing lost? Make a real claim or delete it.
- Vague connection ("associated with," "linked to," "tied to")? Name the relationship the source gives; if it gives none, keep the vague word rather than invent a role.
- Inflated significance ("marking a pivotal moment," "plays a key role," "setting the stage for," "lasting legacy"), or a stock "despite these challenges, X continues to thrive" paragraph? Keep the fact, drop the significance, and end on the last concrete fact.
- Pull-quote sentence or aphorism template ("X is the currency of Y," "X becomes a trap," "the architecture of")? Rewrite as a working sentence.
- Documentation describing what the current text replaced ("added to replace the old loop")? Describe the current behavior; history belongs in changelogs and migration guides.

### Typography, format, and conventions

- Em dash? Comma, period, or parentheses.
- Bold emphasis or emoji in prose? Remove; rewrite if the word needs weight.
- Bold-label lead-in ("**Speed:** ..."), `---` divider, or emoji or arrow (→) as a bullet or heading? Drop the label, use paragraph breaks, use plain markers.
- Heading restated by its first sentence, or a top-level heading repeating the document title? Cut the repeat.
- Hyphen kept on a compound after its noun ("the report is high-quality")? Hyphenate before the noun only.
- Semicolon where a period flows better? Replace. Keep it only to balance two related clauses.
- Colon that only announces ("Here's the key insight:")? Cut the announcement.
- Bullet list carrying an argument? Convert to a connected paragraph; keep bullets for parallel items.
- Listicle headline ("7 ways to," "5 signs that") or a fixed intro/three-body/"in summary" skeleton? Let the shape follow the argument.
- Missing serial comma, British spelling, or Title Case on a common noun? Fix to US convention.

## Scoring

Count the quick checks that still fail on the delivered text first, because the score alone goes easy on its own rewrite. Then rate 1-10 on each axis.

| Axis | Question |
| --- | --- |
| Flow | Do sentences connect and breathe, or stack as fragments or bloat? |
| Directness | Statements, or announcements and setups? |
| Concreteness | Named actors, numbers, specific objects, all taken from the source? |
| Authenticity | Sounds like a person who writes well, not a model or a brand? |
| Economy | Anything cuttable without breaking the rhythm? |

Rewrite once if any check still fails or the total falls below 35/50, then deliver the better version with its score and the number of checks still failing. Don't loop.

## Examples

See [references/examples.md](references/examples.md) for before/after transformations.

## License and attribution

MIT. Maintained fork of [stop-slop](https://github.com/hardikpandya/stop-slop) by Hardik Pandya, the original source of this skill.
