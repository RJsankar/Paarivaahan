# ADR-0012: Approved API gateway and receipt reconciliation

- **Status:** Proposed
- **Date:** 2026-08-24

## Context

A production version may need to read official status, initiate an application, or hand off a payment. Direct client integration and uncontrolled browser automation create security, reliability, and audit risks.

## Decision

Route production integrations through a server-side gateway that supports only approved, documented APIs or sandboxes. Use idempotency, least-privilege credentials, timeouts, circuit breakers, audit events, and independent receipt reconciliation before marking an obligation complete.

## Rationale

- Keeps credentials and authorization out of the browser.
- Normalizes different provider protocols.
- Prevents a UI success animation from becoming the source of truth.
- Enables failure recovery and operational monitoring.

## Consequences

- “Submitted,” “paid,” and “verified” are separate states.
- Partial failures require retry and manual fallback paths.
- Provider terms, security review, and data-sharing agreements are prerequisites.
- The conversational layer receives only the minimum status needed to explain the outcome.

## Alternatives considered

Direct browser-to-government calls, scraping, and treating redirect success as payment confirmation were rejected.

## Review trigger

Create integration-specific ADRs before connecting any real provider or official service.

