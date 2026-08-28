# Security and Privacy

## Prototype posture

- Synthetic data only; no real citizen credentials or sensitive records are required.
- No backend, live government connection, payment processor or OpenAI API call.
- Browser storage is limited to non-sensitive demo preferences and synthetic state.
- Profile and Help now open working browser-local export, chat/receipt clearing, offline-snapshot clearing and profile-deletion controls.
- Storage access is guarded against denial, invalid JSON and quota failure.
- Uploads remain local to the browser demonstration and accept only JPG, PNG or PDF up to 10 MB.
- External official links open as user-initiated handoffs and use `rel="noreferrer"`.
- A persistent banner and transparency panel distinguish the prototype from an official product.

## Threats considered

| Threat | Current prototype control | Production control needed |
|---|---|---|
| Government impersonation | Independent-prototype labels; no official logo | Brand/legal review and verified domains |
| Sensitive-data capture | Synthetic-only instructions; no OTP/password fields | Data inventory, DPIA, encryption and access policy |
| Hallucinated procedure | Deterministic copy and source links | Grounded retrieval, source freshness and evaluations |
| False transaction success | Synthetic receipt labels and explicit mock portal | Provider callback plus independent reconciliation |
| Malicious upload | Type, empty-file and size validation | Malware scanning, isolation and content validation |
| Browser-storage failure | Guarded adapter and safe defaults | Server-side encrypted persistence and recovery |
| Unauthorized automation | No live automation | Approved APIs/sandbox, scoped credentials and audit |
| Excess retention | Local synthetic state and logout controls | Purpose-based retention, deletion and consent ledger |

## Production requirements

Before any real-person pilot:

1. Complete legal, privacy, security and accessibility reviews.
2. Inventory every data field, purpose, processor, retention period and deletion path.
3. Use approved identity and government/payment integrations only.
4. Encrypt transport data in transit and at rest; isolate secrets server-side.
5. Implement least privilege, audit events, rate limits, abuse detection and incident response.
6. Ground procedural answers in versioned official sources and preserve citations.
7. Evaluate extraction and language behavior by document type, language, state and risk.
8. Keep consequential actions deterministic and explicitly confirmed by the citizen.
9. Reconcile external receipts before updating status.
10. Provide grievance, correction, export, consent-revocation and deletion paths.

## Reporting

The prototype has no security contact mailbox yet. Add a monitored contact and coordinated disclosure process before publishing a production service.

The AI-specific threat register and release gates are maintained in `RESPONSIBLE-AI-THREAT-MODEL.md`; the corresponding acceptance corpus is in `AI-EVALUATION.md`.
