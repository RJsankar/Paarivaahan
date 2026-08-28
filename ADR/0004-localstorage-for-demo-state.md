# ADR-0004: localStorage for non-sensitive demo state

- **Status:** Accepted
- **Date:** 2026-08-24

## Context

The static prototype needs returning-user onboarding, alert preference, reminder, language, and simulated payment continuity without a backend.

## Decision

Use browser `localStorage` for small, non-sensitive prototype flags only.

## Rationale

- No server or account is required.
- State survives hash navigation and reloads.
- Reviewers can repeat onboarding in explicit demo mode.

## Consequences

- State is device/browser specific and unauthenticated.
- It may be cleared by the user and must never be treated as authoritative.
- No document content, credentials, OTPs, or real identifiers may be stored.

## Alternatives considered

Session storage would not support returning-user behavior. A backend would add unnecessary prototype complexity.

## Review trigger

Production identity or multi-device continuity requires encrypted server-side storage, access controls, retention policies, and an auditable consent ledger.

