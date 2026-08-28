# ADR-0003: Synthetic data and simulated integrations

- **Status:** Accepted
- **Date:** 2026-08-24

## Context

Government records, payments, OTPs, and citizen identities are sensitive and no approved production sandbox is available. The hackathon explicitly permits mocked backend behavior and requires clear disclosure.

## Decision

Use fictional records, controlled progress simulations, and hardcoded responses. Do not connect to, scrape, or reverse-engineer live government systems.

## Rationale

- Protects citizens and official infrastructure.
- Produces a stable end-to-end reviewer journey.
- Avoids implying access or partnerships that do not exist.

## Consequences

- A persistent banner and detailed transparency panel must identify the simulation.
- Demo receipts cannot be represented as official proof.
- Product-impact claims cannot be inferred from the prototype.

## Alternatives considered

Live portal automation and undocumented API access were rejected as unsafe and out of scope.

## Review trigger

Only replace a simulated dependency after a written sandbox or production agreement, security review, and updated consent model exist.

