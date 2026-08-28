# ADR 0015: Mobile profile setup with guest challan payment

**Status:** Accepted  
**Date:** 24 August 2026

## Context

A registration number identifies a vehicle, not a citizen. Using it as the onboarding anchor conflicts with the person-centred profile and makes multi-vehicle ownership awkward. Requiring account credentials before an urgent challan payment also creates avoidable abandonment.

## Decision

Onboarding establishes an optional mobile-based Sarathi profile. The prototype validates ten digits, stores the number only in the local demo browser, and performs no OTP or identity verification. Citizens may instead explore as guests.

Before challan automation, citizens choose between credential-free guest quick pay and optional mobile sign-in. Guest payment does not persist the new receipt across reloads. Mobile-profile payment stores the demo receipt locally. Neither path asks for a Parivahan username, password, OTP, or government credential.

## Rationale

- A person-level identifier fits multiple linked vehicles.
- Guest payment minimises time-to-action for a common urgent task.
- Optional sign-in clearly exchanges a small amount of friction for receipt history and reminders.
- The prototype avoids implying that a mobile number alone is production authentication.

## Consequences

- Production mobile authentication requires an approved verification mechanism and explicit consent.
- Guest transactions need a downloadable receipt and reconciliation reference without an account.
- Profile-only features must degrade safely for guests.
- Mobile numbers remain sensitive personal data and require minimisation, encryption, retention controls and deletion support in production.

## Alternatives considered

- Vehicle-number onboarding: rejected because a vehicle is not the citizen profile.
- Mandatory login before payment: rejected because it blocks fast task completion.
- Mobile number as passwordless production identity without verification: rejected as insecure.

## Review trigger

Revisit when a production identity provider, official challan integration, cross-device profile sync, or regulated payment flow is selected.
