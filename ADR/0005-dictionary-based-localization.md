# ADR-0005: Dictionary-based EN/HI/TA localization

- **Status:** Accepted
- **Date:** 2026-08-24

## Context

Multilingual access is central to the product, while the prototype has a bounded amount of interface copy and no build pipeline.

## Decision

Use in-file translation dictionaries and `data-i18n` attributes for English and Hindi. Persist the selected language locally.

## Rationale

- Demonstrates a complete language switch without external services.
- Keeps localization inspectable and deterministic.
- Supports mixed Latin and Devanagari scripts using existing fonts.

## Consequences

- Some dynamic service-flow content remains English/Hinglish and needs full catalog coverage.
- Translation quality depends on manual review.
- Pluralization, grammatical context, and right-to-left languages are not generalized.

## Alternatives considered

An i18n library was excessive for the static prototype. Runtime machine translation was rejected for critical procedural copy.

## Review trigger

Production requires externalized translation catalogs, native-speaker review, glossary/version governance, fallback rules, and localization QA.
