# ADR-0008: Controlled portal automation for the demo

- **Status:** Accepted
- **Date:** 2026-08-24

## Context

The product vision includes helping a citizen complete a task, but a live government portal is unavailable, unstable for a stage demo, and outside the authorized scope.

## Decision

Demonstrate challan automation through a clearly labeled controlled simulation. Return a synthetic receipt to the chat so the experience includes confirmation.

## Rationale

- Shows the end-to-end product concept without touching a live system.
- Creates a deterministic and testable demo.
- Makes the confirmation/reconciliation requirement visible.

## Consequences

- The simulated portal must never use language that implies a real connection.
- The receipt must be marked as demo data.
- Production browser automation is not approved by this record.

## Alternatives considered

Live Playwright automation against an official portal and embedding a real payment provider were rejected.

## Review trigger

Any real transaction must use a documented integration or official handoff and follow ADR-0012.

