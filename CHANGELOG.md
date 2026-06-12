# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

This repository is a maintained fork of [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop). The dated entries at the bottom predate the fork and come from the upstream changelog.

## [Unreleased]

### Added

- Distribution as a Claude Code plugin: the repository is its own marketplace (`.claude-plugin/`), so the skill installs in one command and updates without re-copying. Manual copy stays supported.
- Repository scaffolding shared with the sibling repos: generic `.gitignore` and `.gitattributes`, funding metadata, and this Keep a Changelog format.

### Changed

- The skill folder now lives under `skills/stop-slop/` (moved from the root), the location the plugin format expects. Manual copies start from this new path.
- The README documents the fork: installation as a plugin or by manual copy, usage, limits, and how this repository tracks upstream.

## Upstream history (pre-fork)

### 2026-01-13

#### Added

**Phrases (references/phrases.md)**

- Throat-clearing: "Here's what I find interesting", "Here's the problem though"
- Performative emphasis: "creeps in", "I promise", "They exist, I promise"
- Telling instead of showing: "This is genuinely hard", "This is what leadership actually looks like"

**Structures (references/structures.md)**

- Binary contrasts: "Not X. But Y.", "It's not this. It's that.", "stops being X and starts being Y"
- Rhythm patterns: staccato fragmentation, dashes for dramatic pause, hedging as reassurance
- Word patterns: absolute words (always, never, everyone, etc.), AI-overused intensifiers (deeply, truly, fundamentally, inherently, simply, literally, inevitably)

### 2026-01-12

- Restructured skill following Claude Code best practices (PR #1)
- Split into SKILL.md and references/ folder

### 2025-01-12

- Initial release
