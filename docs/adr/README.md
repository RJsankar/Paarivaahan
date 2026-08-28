# Architecture Decision Records

This directory records significant product and technical decisions for Parivahan Sarathi.

## Status vocabulary

- **Accepted:** current decision.
- **Proposed:** recommended but not yet implemented.
- **Superseded:** replaced by a later ADR.
- **Deprecated:** retained for history but should not be used.

## Index

| ADR | Decision | Status |
|---|---|---|
| [0001](0001-vanilla-static-spa.md) | Use a vanilla static SPA for the hackathon build | Accepted |
| [0002](0002-hash-based-routing.md) | Use hash-based client navigation | Accepted |
| [0003](0003-synthetic-data-and-simulated-integrations.md) | Use synthetic data and controlled simulations | Accepted |
| [0004](0004-localstorage-for-demo-state.md) | Use localStorage only for non-sensitive demo state | Accepted |
| [0005](0005-dictionary-based-localization.md) | Use dictionary-based English/Hindi localization in the prototype | Accepted |
| [0006](0006-deterministic-guided-flow-engine.md) | Use deterministic state machines for guided services | Accepted |
| [0007](0007-ai-guidance-boundary.md) | Separate AI guidance from consequential actions | Proposed |
| [0008](0008-controlled-portal-automation.md) | Demonstrate automation against a controlled mock portal | Accepted |
| [0009](0009-consent-and-privacy-by-design.md) | Require consent and privacy-by-design for production | Proposed |
| [0010](0010-versioned-regulatory-sources.md) | Manage regulatory guidance as versioned cited content | Proposed |
| [0011](0011-mobile-accessibility-baseline.md) | Treat mobile and accessibility as release gates | Accepted |
| [0012](0012-approved-api-gateway-and-reconciliation.md) | Use an approved gateway and receipt reconciliation in production | Proposed |
| [0013](0013-explicit-application-and-payment-states.md) | Model application and payment outcomes as explicit states | Accepted |
| [0014](0014-person-centred-multi-vehicle-profile.md) | Use the citizen profile—not a vehicle—as the account root | Accepted |
| [0015](0015-mobile-profile-and-guest-payment.md) | Use mobile profile setup while preserving credential-free guest payment | Accepted |
| [0016](0016-citizen-controlled-form-agent.md) | Prepare form drafts while preserving citizen control of consequential submission | Accepted |
| [0017](0017-status-over-scoring-and-recognizable-vehicles.md) | Prefer concrete status and recognizable vehicle imagery over abstract scoring | Accepted |
| [0018](0018-local-first-document-wallet-and-sharing.md) | Cache the app shell and make document snapshots explicitly offline and shareable | Accepted |
| [0019](0019-responsive-navigation-workspace.md) | Use a floating desktop workspace and persistent mobile tab navigation | Accepted |
| [0020](0020-profile-linked-application-tracking.md) | Store acknowledgements with the citizen journey and make manual reference entry a fallback | Accepted |

## Record template

New records should contain: context, decision, rationale, consequences, alternatives, and review trigger. ADRs should not be silently rewritten after a decision materially changes; add a superseding record instead.
