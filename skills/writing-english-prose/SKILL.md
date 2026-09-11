---
name: writing-english-prose
description: Remove AI writing patterns from English prose, or flag them without rewriting. Use when drafting, editing, reviewing, or proofreading US-English text (essays, posts, docs, emails, UI strings, locale files), and when asked whether a text sounds AI-written. Fluent, natural American English.
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
3. Change only what a check flags. A sentence that already passes stays as the author wrote it, even when you would phrase it differently, and the length stays close to the original: joining fragments and cutting filler move words around; they don't add them. The author should recognize the result as their own draft.
4. Apply the core rules. Open [references/phrases.md](references/phrases.md) when vocabulary or stock phrases cluster, [references/structures.md](references/structures.md) for tells of shape and rhythm, and [references/examples.md](references/examples.md) to calibrate how far a rewrite should go.
5. Run the quick checks on the result and count the ones that still fail.
6. Reread your own output with the same checks. Five tells survive a rewrite more often than the rest, so search for them by name: a not-X-but-Y contrast, a one-line closer, an em dash, a triad, a bold label. The corrected text must pass the rules it enforces.
7. Do the final read below. Rewrite once if a check still fails or a question gets a "no," then deliver the better version with the number of checks still failing and a short note of what changed, including any gap left for the author to fill.

For a short text (an email, a message, one paragraph), apply the rules and the checks; skip the counted report.

When editing a file rather than pasted text, change the prose only. Code blocks, inline code, commands, paths, frontmatter, data, and link targets stay as they are, even when a path or a command contains a word the checks would flag.

For an audit (the author asks whether a text reads as AI-written, or wants its tells flagged without a rewrite), report instead of editing. For each tell, quote the line, name the pattern, and give the fix in a few words. Skip the rewrite, and don't guess who wrote the text: detectors guess, while a named pattern is evidence the author can check for themselves. Offer the edit afterward.

## Special case: UI strings

An interface file (application labels, locale files) mixes two registers; split by unit, not by file.

**Micro-labels**: buttons, tabs, menu items, field labels, short titles, one-line notifications and errors. These are fragments, not sentences, so the sentence-architecture rules (flow, fragmentation, contrasts, rhythm) don't apply. Check only vocabulary and conventions: AI vocabulary, jargon, wordy constructions, and capitalization. Capitalization follows the platform convention (Title Case on Apple platforms, sentence case on Material and most of the web); pick one and keep it consistent across the product.

**The variety rule (15) inverts on micro-labels.** In prose you vary the lexicon; in an interface the same action keeps the same word everywhere. If "Delete" labels one button, never alternate it with "Remove" or "Erase" elsewhere: users learn the interface's words, and consistency beats variety.

**Longer strings**: descriptions, help text, confirmation bodies, explanatory error messages, onboarding copy. As soon as a string forms one or more full sentences, apply the whole skill.

## Core rules

1. **Write sentences that flow.** Most sentences carry one idea in roughly 12 to 25 words and connect to their neighbors. A short sentence is a tool for emphasis; it works once per stretch, not as the default. Stacked fragments ("No fluff. No filler. Just results.") are as much a tell as bloat. The counterweight: joining every sentence with the same conjunction ("because" at every seam, "which" on every clause) is as mechanical as the fragments it replaced, so vary the connective and let some sentences stand alone. See [references/structures.md](references/structures.md).

2. **Cut filler phrases.** Throat-clearing openers, announced emphasis, marketing openers and closers, email boilerplate, chat artifacts. See [references/phrases.md](references/phrases.md).

3. **Use plain words.** Prefer the short Anglo-Saxon word to the Latinate one ("use" over "utilize," "start" over "embark on"). The AI vocabulary, the redefinition verbs that announce a change without naming it, and the pleonasms are cataloged in [references/phrases.md](references/phrases.md); the wording checks below carry the examples.

4. **Break formulaic structures.** Binary contrasts, negative listings, see-saw constructions, rhetorical setups, participial consequence tails, triad cadence, the learned litotes ("not without merit," "it is not uncommon for") that affirm by double negation, and the objection nobody raised ("I'm not saying," "One might be tempted to") that argues with an earlier draft. See [references/structures.md](references/structures.md).

5. **Prefer active voice.** Find the actor and put them at the front. Passive stays legitimate when the actor is unknown or beside the point ("he was arrested in May"); the tell is passive used to dodge naming who did what.

6. **No false agency.** Complaints don't become fixes, decisions don't emerge, data doesn't tell. Name the person the text points to (the sender, the team named earlier). When the text addresses a reader and no one else fits, use "you"; when it names no one, keep the impersonal or passive form rather than invent an actor.

7. **Be specific.** No vague declaratives ("the implications are significant"). Name the implication, with the number or concrete object the source provides, even if the sentence gets longer. Never invent one to sound concrete: strip the vagueness and let the author supply the fact. The same restraint applies to a vague connection ("associated with," "linked to") and an unnamed authority ("experts argue"): name the relationship or the source the text gives, and when it gives none, keep the vague word rather than invent a role or a citation. The portability test catches the generic sentence: if it could move unchanged to another company, product, or person, it says nothing about this one; cut it, or tie it to the subject with a fact the source gives.

8. **Put the reader in the room.** "You" beats "people," a scene beats a generalization, the lecturer-from-a-distance voice ("This happens because...") goes.

9. **Cut empty intensifiers and stacked hedges.** "Really," "truly," "deeply," "fundamentally," "incredibly" add nothing. Keep adverbs that change meaning ("slowly," "twice," "rarely," "yesterday"). One deliberate hedge is honesty; three reflexive ones are the tell. Hedging into a both-sides menu ("on one hand... on the other," "it depends") instead of committing is the same dodge: take a position, then name the real trade-off.

10. **Kill meta-commentary.** No signposting ("In this post, we'll..."), no self-narration ("Let's dive in"), no permission-granting ("And that's okay"). Enter the point directly.

11. **No typographic crutches.** No em dashes; use a comma, a period, or parentheses, not a colon or an ellipsis standing in for the dash and not a sentence contorted around the gap. No bold for emphasis mid-prose, no bold-label lead-ins ("**Speed:** ...") dressing a list as prose, no emoji in prose: if a word must stand out, rewrite the sentence so it does. Semicolons only to balance two related clauses; colons only when they introduce something real.

12. **Don't answer your own rhetorical questions.** "The result? Faster builds." is a transition wearing a costume. State it: "Builds got faster."

13. **Trust readers.** State facts directly; skip softening, justification, and hand-holding. Cut "it's important to note," "needless to say," and every sentence that tells readers what they're about to understand. The same goes for reader guidance mid-text ("As you can see," "This distinction matters," "in other words" before a restatement): if the point is clear, the label is noise; if it isn't, add the support the reader is missing.

14. **Cut quotables.** If a sentence sounds like a pull-quote or a slide title, fills an aphorism template ("X is the currency of Y," "X becomes a trap"), or leans on a stock metaphor ("a double-edged sword," "move the needle"), rewrite it as a working sentence with the specific claim.

15. **Vary everything that repeats.** Sentence lengths, paragraph endings, item counts in lists, sentence openers. Three matching lengths in a row, or every paragraph landing on a zinger, reads machine-made. The counterweight: the thing under discussion keeps its name. Rotating "the agent," "the assistant," and "the tool" for one referent is elegant variation, and the reader wonders whether there are three; restructure so the noun comes up less often, or repeat it.

16. **Follow US conventions.** Serial comma ("A, B, and C"). US spellings ("color," "organize," "toward"). Double quotation marks, with commas and periods inside. No Title Case on common nouns mid-sentence ("our marketing team," not "our Marketing Team").

17. **Prefer verbs to nominalizations, and cut wordy connectors.** "Decide" over "make a decision," "to" over "in order to." Rewrite "There is/There are" openers around a real subject, and give impersonal directives an actor. See [references/phrases.md](references/phrases.md).

18. **Don't over-bullet.** Reserve bullet lists for genuinely parallel items (steps, parameters, an inventory). Two or three ideas linked by reasoning belong in a connected paragraph; the prose carries the logic that a list strips out.

## Weighing tells

Most tells are about concentration, not the single instance. A lone "comprehensive," one "navigate," one stacked hedge is how people write; the same word four times in a paragraph is the tell. Weight a pattern by how thickly it clusters, and don't hunt a borderline word through an otherwise-human page. The loud vocabulary ("delve," "tapestry," "leverage," "seamless") still goes on sight, but the borderline words that double as ordinary English ("robust," "comprehensive," "navigate," "utilize," "ensure," "key") earn a fix when they cluster, not on a lone hit. Two tells are the exception, flagged wherever they appear and counted on a single instance: the em dash, and leftover assistant boilerplate ("As an AI language model"). Either one, even once, is a real signal.

Leave a watched phrase alone inside a quotation, a title, a proper name, or a passage that discusses the phrase rather than uses it. Keep what carries the writer's voice even when it brushes a check: an odd specific detail, an admitted mixed feeling ("mostly good, and it still bothers me"), a self-correction in parentheses, a dated reference, a spoken "just" or "honestly" in a first-person draft, a first-person choice the writer could defend. Removing tells is half the job; the result must still sound like a person.

## Quick checks

Run each group before delivering. The list is part of the skill on the same footing as the core rules, since it also covers tells without a numbered rule.

### Fidelity to the source

- Number, cause, actor, or example that the source doesn't contain? Remove it, or flag the gap to the author.
- Text noticeably longer than the original, or a claim shifted by the rewrite? Tighten and restore.
- Specific detail smoothed into a generic claim ("cut review time from thirty minutes to eight" turned into "improved productivity")? Restore the number or the name.
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
- Nominalization doing a verb's job ("make a decision," "conduct an analysis") or wordy connector ("in order to," "due to the fact that," "prior to," "is able to")? Use the verb and the short word ("decide," "to," "because," "before," "can").
- Hedges stacked ("arguably," "in many ways," "to some extent" in one paragraph)? Keep at most one.
- Both-sides menu ("on one hand... on the other," "it depends") dodging a stance? Take a position, then name the trade-off.
- Loud AI vocabulary ("delve," "leverage," "seamless," "landscape," "unlock," "harness," "empower," "elevate," "testament," "tapestry")? Replace with the plain word on sight.
- Borderline word clustering ("robust," "comprehensive," "navigate," "utilize," "ensure," "key" several times in one passage)? Thin the cluster; leave a lone instance alone.
- Redefinition verb ("reimagine," "reinvent," "redefine," "revolutionize," "transform" with nothing named)? Name what changes, or leave it to the author.
- Pleonasm ("advance planning," "end result," "collaborate together," "each and every")? Cut the redundant half.
- Copula dodge ("serves as," "functions as," "represents," "features," "boasts")? Use "is," "are," "has."
- "Moreover," "Furthermore," "Additionally" opening sentences? At most one connector opener per paragraph; usually just start the sentence.
- One referent under rotating names ("the agent," "the assistant," "the tool")? Keep the clear word and repeat it, or restructure so it comes up less often.

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
- Rhetorical question answered immediately ("The catch? ..."), or its colon twin ("The best part: it learns.")? State it in a plain sentence.
- Pseudo-cleft opener ("What makes this hard is...")? Name the thing: "The constraint is..."
- Learned litotes ("not without merit," "it is not uncommon for," "cannot be ignored")? Affirm: "useful," "often," "matters."
- Participial consequence tail (", ensuring...," ", making it...," ", allowing you to...")? End the sentence; give the consequence its own sentence and actor, or cut it.

### Openers, closers, and boilerplate

- Throat-clearing or fake-relatability opener ("Here's the thing," "Honestly," "Look, I get it")? Cut to the point.
- Faux-insight setup ("What nobody tells you," "What most people get wrong," "The part everyone misses")? Cut the setup; the claim stands on its own.
- Marketing opener ("In a world where," "In today's fast-paced," "Whether you're X or Y")? Cut or name the actual audience.
- Cliché closer ("In conclusion," "At the end of the day," "X is here to stay," "Only time will tell"), or a kicker line turning the point into a metaphor or an aphorism? Delete it rather than polish it, and end on the last concrete sentence.
- Email boilerplate ("I hope this email finds you well," "I wanted to reach out," "Please don't hesitate to")? Open with the reason you're writing; close with the concrete next step.
- Assistant boilerplate ("As an AI language model"), reflexive flattery ("Great question"), or a trailing "Want me to..." offer? Delete every trace of the assistant.

### Substance

- Vague declarative ("The implications are significant")? Name the specific implication from the source, or cut the sentence; don't make one up.
- Paragraph that restates the prompt or could be cut with nothing lost? Make a real claim or delete it.
- Sentence that could move unchanged to another company, product, or person? Cut it, or tie it to this subject with a fact the source gives.
- Reader guidance ("As you can see," "This distinction matters," "That last part matters more than it sounds," a redundant "in other words")? Cut the label; add the support if the point isn't clear.
- Vague connection ("associated with," "linked to," "tied to")? Name the relationship the source gives; if it gives none, keep the vague word rather than invent a role.
- Inflated significance ("marking a pivotal moment," "plays a key role," "setting the stage for," "lasting legacy"), or a stock "despite these challenges, X continues to thrive" paragraph? Keep the fact, drop the significance, and end on the last concrete fact.
- Pull-quote sentence, aphorism template ("X is the currency of Y," "X becomes a trap," "the architecture of"), or stock metaphor ("a double-edged sword," "a silver bullet," "move the needle")? Rewrite as a working sentence with the trade-off, the fix, or the gain.
- Documentation describing what the current text replaced ("added to replace the old loop")? Describe the current behavior; history belongs in changelogs and migration guides.

### Typography, format, and conventions

- Em dash? Comma, period, or parentheses.
- Bold emphasis or emoji in prose? Remove; rewrite if the word needs weight.
- Bold-label lead-in ("**Speed:** ..."), `---` divider, or emoji or arrow (→) as a bullet or heading? Drop the label, use paragraph breaks, use plain markers.
- Heading restated by its first sentence, a top-level heading repeating the document title, or a heading over a one- or two-sentence section? Cut the repeat; merge the short section into its neighbor.
- Hyphen kept on a compound after its noun ("the report is high-quality")? Hyphenate before the noun only.
- Semicolon where a period flows better? Replace. Keep it only to balance two related clauses.
- Colon that only announces ("Here's the key insight:")? Cut the announcement.
- Bullet list carrying an argument? Convert to a connected paragraph; keep bullets for parallel items.
- Listicle headline ("7 ways to," "5 signs that") or a fixed intro/three-body/"in summary" skeleton? Let the shape follow the argument.
- Missing serial comma, British spelling, or Title Case on a common noun? Fix to US convention.

## Final read

Count the quick checks that still fail on the delivered text; the count is the gate, since a self-assigned grade goes easy on its own rewrite. Then read the whole text once more against four questions the line-by-line checks can't ask, each answered yes or no:

- Does it sound like a person who writes well, not a model or a brand?
- Would the author recognize it as their own draft?
- Read aloud to a sharp colleague, does every sentence pass without a stumble?
- Would cutting anything more break the rhythm?

A failing check or a "no" triggers one rewrite (step 7 of the process); don't loop.

## License and attribution

MIT. Maintained fork of [stop-slop](https://github.com/hardikpandya/stop-slop) by Hardik Pandya, the original source of this skill.
