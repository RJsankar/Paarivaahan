# ADR-0007: Separate AI guidance from consequential actions

- **Status:** Proposed
- **Date:** 2026-08-24

## Context

A production assistant may interpret documents and explain rules, but transport submissions and payments can create legal or financial consequences.

## Decision

Use AI for extraction, classification, translation, summarization, and conversational explanation. Use deterministic, schema-validated workflows for identity, eligibility, payment, submission, and status changes.

## Rationale

- Preserves the usability benefit of natural language.
- Prevents generated text from authorizing consequential operations.
- Enables testing, audit, idempotency, and rollback.

## Consequences

- Every AI output feeding a workflow requires validation and confidence handling.
- The system must expose a non-AI fallback.
- Model, prompt, retrieved sources, and validation outcome require traceability with data minimisation.

## Alternatives considered

A fully agentic browser operator was rejected for production because it is difficult to constrain, audit, and reconcile.

## Review trigger

Review whenever a new model capability or action type is introduced; expand authority only after task-specific evaluation and risk approval.

