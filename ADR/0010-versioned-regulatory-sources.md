# ADR-0010: Versioned regulatory sources and citations

- **Status:** Proposed
- **Date:** 2026-08-24

## Context

Forms, fees, timelines, eligibility rules, and procedures vary by state and change over time. Incorrect guidance can cause financial or legal harm.

## Decision

Maintain regulatory content as versioned records with source URL, jurisdiction, effective date, retrieval date, owner, review date, and supersession status. Generated explanations must retain citations.

## Rationale

- Enables audit and correction.
- Prevents one state’s process from becoming a national default.
- Allows the interface to show confidence and freshness.

## Consequences

- Content operations and subject-matter review are required.
- Stale or conflicting sources must fail to a confirmation/human path.
- Approximate fees and timelines must remain labeled as estimates.

## Alternatives considered

Model-memory-only answers and unversioned hardcoded procedural text were rejected for production.

## Review trigger

Review on every source update, state launch, or material regulatory change.

