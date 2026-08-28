# ADR 0016: Citizen-controlled Form Agent

**Status:** Accepted  
**Date:** 24 August 2026

## Context

Many transport services require citizens to repeat profile, licence, vehicle, travel, and document information across forms. International Driving Permit preparation is a representative example: Form 4A combines reusable identity and licence details with trip-specific information and evidence. Fully autonomous submission would cross authentication, legal-declaration, payment, and government-system boundaries that this prototype cannot safely or truthfully claim.

## Decision

Parivahan Sarathi may act as a preparation agent. It can:

- reuse citizen-verified profile and document values;
- collect service-specific information once;
- validate required fields and evidence;
- map values into an explainable draft;
- generate a clearly labelled local preparation file; and
- hand the citizen to the correct official portal and source form.

The citizen must personally review every value and complete CAPTCHA, OTP, signature, declarations, payment, and final submission. The prototype does not write to or automate a live government portal.

## Rationale

This captures the main accessibility and effort-reduction benefit without impersonating the citizen, bypassing controls, or suggesting that a draft is an official application. It also creates an architecture that can later use approved APIs while retaining explicit consent and audit points.

## Consequences

- Agent screens must show source, provenance, editability, and draft/submission state.
- Draft downloads must say “not submitted.”
- State and applicant variation must be disclosed at handoff.
- Production integration requires approved interfaces, consent records, field-level audit, security review, and reconciliation.
- The initial implementation covers International Driving Permit preparation; other form-heavy services can reuse the pattern after jurisdiction-level validation.

## Alternatives considered

- **Autonomous live-portal submission:** rejected because it would require unauthorized integration and handling of consequential authentication.
- **Portal-link directory only:** rejected because it does not reduce form preparation or uncertainty.
- **Static checklist only:** useful but insufficient because it cannot reuse verified data or identify missing fields.

## Review trigger

Review this decision when an approved government sandbox/API becomes available, legal requirements change, or usability research shows that the citizen-control boundary is unclear.
