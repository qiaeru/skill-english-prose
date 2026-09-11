# UI Strings

An interface file (application labels, locale files, translation strings) mixes two registers that call for different treatment. The dividing line is the unit, not the file: a short fragment answers only to the vocabulary and convention rules, while a full sentence answers to the whole skill. Rule numbers refer to the core rules in SKILL.md.

## Micro-labels

Buttons, tabs, menu items, field labels, short titles, one-line notifications and errors. These are fragments, not sentences, so the sentence-architecture rules don't apply: skip flow (1), formulaic structures (4), the reader in the room (8), meta-commentary (10), rhetorical questions (12), variety (15), and bullets (18). Check only vocabulary and conventions: plain words (3), nominalizations and wordy constructions (17), specifics over vagueness (7), and capitalization (16). Capitalization follows the platform convention (Title Case on Apple platforms, sentence case on Material and most of the web); pick one and keep it consistent across the product. In the quick checks, run only the wording and typography families.

## The variety rule inverts on micro-labels

In prose you vary the lexicon; in an interface the same action keeps the same word everywhere. If "Delete" labels one button, never alternate it with "Remove" or "Erase" elsewhere: users learn the interface's words, and consistency beats variety.

## Longer strings

Descriptions, help text, confirmation bodies, explanatory error messages, onboarding copy. As soon as a string forms one or more full sentences, apply the whole skill, flow rules and quick checks included. A two-sentence warning or a card description is prose and reads as such.
