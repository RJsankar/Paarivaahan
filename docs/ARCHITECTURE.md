# Architecture

## Current hackathon prototype

```text
Citizen browser
     │
     ├── index.html + styles.css          Interface and responsive shell
     ├── app.js                           Routing, state machines and mock data
     ├── guarded localStorage adapter     Non-sensitive demo continuity
     └── service worker                   Static shell and vehicle-image cache

No backend · No model endpoint · No government API · No real payment
```

The prototype is intentionally static. Deterministic state machines make every demonstrated journey repeatable, including validation, failure and confirmation states. External links lead to public official pages; the application does not read from or write to them.

## Proposed production architecture

```text
Citizen web/mobile client
          │ explicit consent and purpose
          ▼
Approved identity and consent service
          │
          ▼
API gateway ───── rate limits · least privilege · audit · idempotency
    │                       │                         │
    ▼                       ▼                         ▼
Rules/workflow service   Document service       Integration adapters
    │                    schema validation       approved APIs only
    │                       │                         │
    └──────────────┬────────┴──────────────┬──────────┘
                   ▼                       ▼
       Versioned official sources     Payment/application handoff
                   │                       │
                   ▼                       ▼
       Grounded language service      Receipt/status reconciliation
                   │                       │
                   └───────────┬───────────┘
                               ▼
                 Citizen confirmation and history

Cross-cutting: encryption, data minimisation, retention/deletion,
observability, fraud controls, accessibility, grievance and human support.
```

## Authority boundaries

| Activity | AI may assist | Deterministic system required | Citizen/official service required |
|---|---:|---:|---:|
| Explain a term or source | Yes | Source validation | Optional escalation |
| Extract document fields | Yes | Schema/confidence checks | Correct or confirm |
| Prepare a form draft | Yes | Required-field validation | Review every value |
| Determine final eligibility | No | Preliminary rules only | Competent authority |
| Accept a legal declaration | No | No | Citizen on approved surface |
| Read OTP or solve CAPTCHA | No | No | Citizen only |
| Authorise payment | No | Amount/status validation | Citizen/payment provider |
| Mark a task complete | No | Receipt reconciliation | Authoritative confirmation |

## Failure design

- Timeouts and provider failure leave the task pending, never successful.
- Retried external mutations require idempotency keys.
- A success animation is not evidence of official completion.
- Low-confidence or conflicting information stops at review or human support.
- Stale regulatory sources fail to an official confirmation path.
- Citizens can revoke consent and request deletion subject to applicable obligations.

The detailed decisions and alternatives are maintained in [`adr/`](adr/README.md).
