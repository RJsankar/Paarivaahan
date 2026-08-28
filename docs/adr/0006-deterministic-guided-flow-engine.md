# ADR-0006: Deterministic guided-service state machines

- **Status:** Accepted
- **Date:** 2026-08-24

## Context

RC transfer, hypothecation removal, and address change contain choices, required fields, checklist gates, and branch-specific outcomes. Reviewers must always be able to complete the demonstrated journey.

## Decision

Represent each guide as a deterministic client-side flow with explicit step, data, checklist, and branch state. Reuse one modal shell and rendering engine.

## Rationale

- Prevents generated guidance from changing workflow rules.
- Makes validation and branch testing repeatable.
- Provides consistent progress, actions, warnings, and source presentation.

## Consequences

- Rules are currently embedded in JavaScript and require a release to update.
- Browser refresh resets in-progress flow state.
- Production must validate state on the server and account for jurisdiction and effective date.

## Alternatives considered

Separate bespoke modals would duplicate behavior. LLM-generated steps were rejected for consequential procedural control.

## Review trigger

Move workflow definitions to a versioned service when state-specific rules, approvals, analytics, or resume-across-device behavior are introduced.

