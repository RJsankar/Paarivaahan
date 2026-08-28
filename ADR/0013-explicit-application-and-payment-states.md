# ADR-0013: Explicit application and payment states

- **Status:** Accepted
- **Date:** 2026-08-24

## Context

Government-service journeys frequently continue after initial submission. Applications can require corrections, and payments can be pending, failed, debited without confirmation, or confirmed. A generic success screen can create duplicate payments or false confidence.

## Decision

Model submitted, action-needed, under-review, completed, payment-pending, payment-failed, and payment-confirmed as distinct user-visible states. Never infer payment success without a receipt. Provide status-check and recovery actions before retry.

## Rationale

- Completes the citizen journey beyond form submission.
- Makes failures actionable instead of terminal.
- Reduces duplicate-payment risk.
- Creates a clean boundary for future authoritative reconciliation.

## Consequences

- The prototype includes Track Application and failed-payment recovery simulations.
- Completion language must match the available evidence.
- Production needs provider-specific state mapping, idempotency, audit events, and manual exception handling.

## Alternatives considered

Treating every portal redirect as success and showing only happy-path demos were rejected.

## Review trigger

Review when a real application-status or payment provider integration is designed; align with ADR-0012.

