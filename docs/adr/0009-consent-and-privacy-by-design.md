# ADR-0009: Consent and privacy by design

- **Status:** Proposed
- **Date:** 2026-08-24

## Context

Vehicle, licence, document, contact, and behavioral-reminder data can identify a citizen and reveal sensitive life context. Production processing must comply with applicable Indian data-protection law and user expectations.

## Decision

Before production, implement explicit purpose-specific consent, data minimisation, masking, encryption, retention limits, deletion/export controls, access logging, incident response, and a grievance path.

## Rationale

- Trust is a prerequisite for a government-adjacent assistant.
- Broad indefinite profiles create avoidable harm.
- Consent must be understandable in the citizen’s selected language.

## Consequences

- Data collection is opt-in and separated by purpose.
- Revocation must stop future processing and trigger appropriate deletion.
- Raw documents should be retained only when necessary and for a declared period.
- Legal and privacy reviews become release gates.

## Alternatives considered

Bundled consent and indefinite retention were rejected.

## Review trigger

Review with every new data category, channel, partner, model provider, or jurisdictional requirement.

