# Product Requirements Document: Parivahan Sarathi

**Version:** 6.14  
**Status:** Hackathon prototype baseline  
**Last updated:** 24 August 2026  
**Product type:** Independent civic-technology prototype  
**Primary surface:** Responsive web application

## 1. Executive summary

Parivahan Sarathi is a multilingual personal transport guardian that helps Indian vehicle owners understand documents, notice deadlines, and complete common transport-service journeys without navigating fragmented, jargon-heavy portals alone.

The prototype follows Ravi Kumar, a synthetic citizen with a car, a scooter, and a driving licence that expires in 28 days. It demonstrates a person-centred transport profile, per-vehicle records, proactive Guardian alerts, document interpretation, conversational assistance, a controlled challan-payment simulation, and guided services including a citizen-controlled Form Agent for International Driving Permit preparation.

This is not an official government product. All citizen records, external integrations, payments, receipts, document extraction, and AI behavior are simulated unless explicitly described as local interface behavior.

## 2. Problem

Transport-related citizen services are distributed across Vahan, Sarathi, eChallan, state RTO processes, downloadable forms, and offline counters. Citizens must determine:

- which portal or office owns a task;
- which documents and forms are required;
- whether a deadline needs immediate attention;
- what information in a notice or document means;
- which steps can be completed online and which require an RTO visit; and
- whether a payment or submission actually completed.

These costs are amplified for mobile-first users, citizens with limited digital confidence, and citizens who prefer an Indian language over English.

## 3. Product vision

> Make transport compliance understandable and actionable before it becomes a penalty, lapse, or stressful visit.

Parivahan Sarathi should behave like a guardian, not a portal directory. It should surface the next useful action, explain why it matters, guide the citizen step by step, and hand off safely to an approved official service when production integration exists.

## 4. Goals

1. Let a citizen understand their transport-document health in under 30 seconds.
2. Let a citizen complete the demonstrated journey from alert to confirmation without a dead end.
3. Provide accessible guidance in English and Hindi in the prototype.
4. Reduce cognitive load through one task per step, explicit checklists, and plain language.
5. Make mock behavior, limitations, sources, and non-affiliation unmistakable.
6. Demonstrate how consent-based, approved integrations could support a production version.

## 5. Non-goals for the prototype

- Connecting to live Vahan, Sarathi, eChallan, UIDAI, banking, or state RTO systems.
- Accepting real payments, OTPs, Aadhaar numbers, PAN numbers, or government credentials.
- Providing legal advice or guaranteeing regulatory outcomes.
- Claiming government affiliation, approval, or endorsement.
- Serving as a system of record.
- Supporting production identity verification, fraud controls, or dispute resolution.

## 6. Target users

### Primary persona: Ravi Kumar

- 38 years old; lives in a Tier-2 city.
- Owns a two-wheeler and car.
- Uses a smartphone daily but avoids complex government portals.
- Prefers short Hinglish guidance and visible confirmation.
- Needs to renew his DL, track PUC and insurance, and occasionally pay challans.

### Secondary persona: Meenakshi

- 34 years old; lives in Chennai.
- Owns a scooter and prefers Hindi.
- Needs document notices translated into plain language.
- Wants a checklist and a clear human fallback rather than portal jargon.

## 7. Core jobs to be done

- When a transport deadline approaches, tell me what matters and what to do next.
- When I receive an unfamiliar document, explain it in plain language and show the original values for verification.
- When a service requires several forms or visits, give me a checklist and guide me one step at a time.
- When an action is simulated or handed off, clearly tell me what happened and what remains.
- When I return later, preserve the relevant completion or reminder state.
- When I manage more than one vehicle, keep personal documents separate and let me see either my whole transport profile or one vehicle at a time.

## 8. Product principles

1. **Citizen language over department language.** Organize around tasks, not agencies.
2. **One useful nudge.** Prioritize the most important action instead of producing alert noise.
3. **Progressive disclosure.** Show the immediate task first; reveal legal and procedural detail when needed.
4. **Verify before acting.** Display extracted values and sources before any consequential step.
5. **Deterministic control for consequential actions.** AI may explain; validated workflows control submissions and payments.
6. **Mock honestly.** Simulated integrations must look complete without pretending to be live.
7. **Mobile and multilingual by default.** Small screens and Indian-language content are first-class requirements.

## 9. Current prototype scope

### 9.1 Onboarding

- First-time visitor overlay or forced demo mode through `?demo=onboarding`.
- Welcome and safety statement.
- Mobile-number profile setup with ten-digit validation and an explicit guest path.
- No OTP, password, government credential or real identity verification is performed in the prototype.
- Vehicles are linked later as assets; neither a vehicle nor registration number is the identity or account root.
- Animated profile-building sequence.
- Transport Health summary and DL warning.
- Local returning-user flag and demo reset control.

### 9.2 Home and Transport Health

- Plain-language transport overview using “action needed” and “current” states without an artificial numerical score.
- All-transport and per-vehicle views through a responsive profile switcher.
- Personal documents are explicitly separated from vehicle-level RC, insurance and PUC records.
- Two seeded demo vehicles plus a locally persisted Add Vehicle flow.
- Prioritized DL-expiry alert.
- Quick actions and recent activity.
- Entry point to all services.

### 9.3 Document vault

- All/Needs attention filters.
- Seven seeded synthetic document records covering Ravi’s personal licence and two vehicles, plus three records for every locally added demo vehicle.
- Driving Licence detail panel with number, expiry, vehicle classes, issuing RTO, source, and renewal action.
- Upload, drag/drop, simulated extraction, confidence score, and verification warning.

### 9.4 Guardian alerts

- Alert preference toggle persisted locally.
- DL-expiry and PUC reminder examples.
- Explainability panel describing prioritization.
- Reminder created by the hypothecation flow.

### 9.5 Ask Sarathi

- English and Hindi interface modes.
- Text and simulated voice-message interactions.
- Six quick-action chips arranged in two rows.
- Contextual guidance for DL, challan, and PUC questions.
- Service chips that post the request, add guidance, and open the relevant flow.
- Simulated challan-payment confirmation; profile payments persist locally while guest receipts remain session-only.

### 9.6 Controlled challan automation

- Clearly branded simulated eChallan portal.
- Pre-payment access choice: quick pay without login or optional mobile profile sign-in to save the receipt.
- Quick pay never asks for Parivahan credentials, a government username, password or OTP.
- Three-stage progress animation.
- No real payment or external connection.
- Receipt `#115-2026-03822` returned to chat after completion.
- A failed-transaction branch with an explicit status check, no-debit result, and duplicate-payment warning.

### 9.7 Services hub

The `#services` route contains eleven services in this order:

1. Challan Payment
2. DL Renewal
3. International Driving Permit
4. Insurance Renewal
5. PUC Certificate
6. RC Transfer
7. Hypothecation Removal
8. Address Change
9. First DL (LL → DL)
10. Vehicle Fitness — coming soon
11. Green Tax — coming soon

The same hub includes two follow-up citizen tools without changing the eleven-service catalogue:

- **Track Application:** reference lookup, pending-item explanation, correction checklist, acknowledgement, and reminder.
- **Lost RC or DL:** document/reason selection, theft warning, dynamic checklist, state-variance caveat, and official Vahan/Sarathi handoff.

### 9.8 Guided service flows

#### International Driving Permit · Form Agent

Six steps: eligibility and trip details, evidence checklist, pre-filled applicant fields, requested vehicle categories, citizen review, and official Sarathi handoff. The agent prepares a local Form 4A draft and validates missing information. It never submits, signs, pays, solves CAPTCHA, reads OTP, or accepts a legal declaration for the citizen. The final screen links to official Sarathi and Form 4A.

#### RC Transfer

Five steps: vehicle confirmation, transfer type, buyer details, ten-item seller/buyer checklist, and MH-12 Pune RTO guidance. The checklist gates progression. Final guidance includes timeline, fee range, legal warning, downloadable checklist, official portal link, and source citation.

#### Hypothecation Removal

Four steps: loan/NOC status, vehicle confirmation, six-item checklist, and Form 35 process. The no-NOC branch can create a seven-day Guardian reminder. Final guidance includes a fee range and source citation.

#### Address Change

Five steps: RC/DL/both selection, new address, dynamic checklist, online/RTO choice, and branch-specific final guidance. A different-state toggle adds an NOC warning. Both final branches cite the relevant rules.

### 9.9 Help, safety, and transparency

- State RTO helpline example.
- Privacy and deletion guidance.
- Legal-support fallback.
- Persistent prototype disclosure banner.
- Architecture panel distinguishing working UI from simulated dependencies.
- Explicit non-affiliation statement and production guardrails.

## 10. Functional requirements

| ID | Requirement | Priority | Acceptance criterion |
|---|---|---|---|
| FR-01 | Hash-based navigation | Must | Each supported route displays one view and closes stale modals. |
| FR-02 | Language switching | Must | English and Hindi controls visibly update translated interface content. |
| FR-03 | Onboarding state | Must | First visit shows onboarding; completion lands on `#home`; demo reset works. |
| FR-04 | Document filtering | Must | Needs attention displays only actionable records. |
| FR-05 | DL details | Must | Tapping DL opens a complete detail panel. |
| FR-06 | Payment simulation | Must | Simulation ends with a receipt and posts confirmation into chat. |
| FR-07 | Service-flow validation | Must | Required selections, fields, checklist items, registration format, ten-digit phone number, six-digit PIN, and chronological travel dates gate the next action. |
| FR-08 | Reminder persistence | Should | Hypothecation reminder survives navigation and appears in Alerts. |
| FR-09 | Source display | Must | Every guided flow’s final step includes a source reference and official link. |
| FR-10 | Prototype disclosure | Must | Disclosure is visible on every primary route and details open from Help. |
| FR-11 | Mobile responsiveness | Must | Core screens and modals work at 390–500 px without horizontal overflow. |
| FR-12 | Failure containment | Must | Onboarding errors do not block the main app; modals can close via X, backdrop, or Escape. |
| FR-13 | Reference-free application lifecycle | Should | A signed-in citizen sees applications and acknowledgements already saved to their profile, can track a selected application without recalling its reference, can manually enter a reference for an application started elsewhere, understand a pending item, prepare a correction, and save a reminder. |
| FR-14 | Transaction recovery | Must | A missing payment confirmation never marks the challan paid and offers a status check before retry. |
| FR-15 | Lost-document recovery | Should | RC/DL selection produces reason-aware preparation and the correct official handoff. |
| FR-16 | Multi-vehicle profile | Must | A citizen can switch between all transport and individual vehicles without mixing a personal DL into a vehicle record. |
| FR-17 | Add vehicle | Should | A validated registration number and recognisable name add a locally persisted demo vehicle and its synthetic records. |
| FR-18 | Mobile-first profile setup | Must | Onboarding accepts a validated ten-digit mobile number or allows guest exploration without requesting a vehicle number. |
| FR-19 | Optional payment login | Must | Signed-out citizens can quick-pay as a guest or optionally sign in with mobile to save receipt history; a citizen already signed in goes directly to the payment agent without seeing the guest/login choice again. |
| FR-20 | Citizen-controlled Form Agent | Must | IDP preparation reuses profile details, validates required fields and evidence, creates a clearly labelled local draft, and reserves CAPTCHA, OTP, signature, declarations, payment, and submission for the citizen. |
| FR-21 | Logout and device privacy | Must | Profile exposes logout/guest-exit, requires confirmation, explains what is removed, clears local profile/session artifacts, and returns to onboarding. |
| FR-22 | Visual vehicle identification | Must | Saved vehicles use distinct recognizable pictograms alongside model name and registration number in profile selection and health views. |
| FR-23 | Status without scoring | Must | Dashboard and onboarding communicate concrete actions and current records without a numerical transport-health score. |
| FR-24 | Actual vehicle imagery | Must | Known demo vehicles use responsive photographic cutouts alongside model name and registration number; text remains available for accessibility. |
| FR-25 | Digital garage | Must | Home presents one large static vehicle photograph centred within its stage and ground ring, with brand, model, registration plate and monitoring state, plus a swipeable multi-vehicle selector without losing the all-transport profile scope. |
| FR-26 | Verified 360° vehicle stage | Could | A production 360° viewer may ship only with one coherent 3D model or a professionally captured turntable set; when those assets are unavailable, the interface uses a centred static vehicle photograph rather than synthesized or distorted motion. |
| FR-27 | Offline document wallet | Must | A citizen can save one document or the whole wallet for offline use, see a persistent offline indicator, and reopen the saved local snapshot after the app shell has been cached. |
| FR-28 | Citizen-controlled document sharing | Must | Every document detail view offers the device-native share sheet when available and a clipboard fallback, with a plain-language summary that identifies the document and its validity state. |
| FR-29 | Recognizable alert control | Should | Alert navigation and notification controls use a bell icon with an accessible text label instead of an ambiguous alert emoji. |
| FR-30 | Modern responsive application shell | Must | Desktop uses a compact floating navigation workspace and mobile uses a persistent bottom tab bar; every primary route retains clear hierarchy, accessible navigation, and a no-overflow layout at 390 px. |

## 11. Non-functional requirements

### Accessibility

- Semantic buttons, headings, dialogs, labels, and pressed/disabled states.
- Keyboard close through Escape.
- Touch-friendly controls and readable contrast.
- Motion should respect `prefers-reduced-motion`.
- Production target: WCAG 2.2 AA audit before release.

### Performance

- Static application should remain usable on a mid-range mobile device.
- No production dependency should be required to render the prototype.
- Core UI should remain understandable if external fonts fail.
- Production target: compressed assets, lazy non-critical media, and resilient API timeouts.

### Offline and local data

- The prototype service worker caches the static application shell and optimized vehicle assets.
- “Available offline” refers to a local demo snapshot, not an official digital document or government-issued credential.
- Production document storage must use encrypted, revocable device storage with explicit retention controls; sensitive production records must not be placed in unencrypted `localStorage`.
- Sharing must always be initiated by the citizen and must never run automatically in the background.

### Privacy and security

- Prototype uses synthetic data only.
- Production requires explicit consent, purpose limitation, data minimisation, encryption, deletion controls, access logging, and breach response.
- OTP and payment credentials must only be entered on approved official/payment-provider surfaces.

### Reliability

- Simulated journeys should be deterministic for reviewer testing.
- External links should fail safely and never imply that a simulated transaction changed an official record.

## 12. Data model (conceptual)

| Entity | Important fields |
|---|---|
| CitizenProfile | profile ID, preferred language, consent state, notification preferences |
| ProfileVehicle | profile ID, vehicle ID, relationship/role, display name, consent scope |
| Vehicle | vehicle ID, registration number token, class, make/model, issuing RTO |
| Document | type, masked identifier, validity dates, source, extraction confidence, verification state |
| Obligation | type, due date, severity, recommended action, source rule |
| Alert | trigger, channel, status, explanation, snooze state |
| ServiceJourney | service type, current step, checklist state, handoff status |
| ActionReceipt | action type, provider reference, status, timestamp, reconciliation state |

The prototype stores only small demo-state flags in browser `localStorage`; it does not implement this production model.

## 13. Production architecture

1. Citizen gives explicit, revocable consent.
2. Identity is verified through an approved mechanism outside the conversational interface.
3. An approved API gateway connects only to documented government or sandbox services.
4. A rules-and-records layer normalizes documents, deadlines, and service status.
5. A retrieval-grounded language layer produces plain-language explanations with citations.
6. A deterministic workflow service validates consequential actions.
7. The citizen is handed off to an approved official or payment surface.
8. A receipt-reconciliation process confirms the external result before updating status.
9. Audit, retention, deletion, and human-support systems govern the lifecycle.

## 14. AI requirements for a production version

- Use retrieval over versioned official sources; retain source metadata.
- Require schemas for document extraction and confidence values.
- Never let generated text independently authorize payment or submission.
- Use policy-based escalation for legal, identity, fraud, and low-confidence cases.
- Evaluate extraction accuracy by document type and language.
- Log model/version, retrieved sources, validation outcome, and user confirmation without storing unnecessary raw personal data.
- Provide a deterministic non-AI fallback for every critical journey.

## 15. Success metrics

### North-star metric

**Verified transport obligations completed or safely avoided per active citizen.**

### Supporting metrics

- Alert-to-action conversion rate.
- Median time from alert to verified completion.
- Guided-journey completion rate.
- Checklist abandonment by step.
- Document-extraction correction rate.
- Low-confidence escalation rate.
- Repeat use within 90 days.
- Successful language-switch and mobile completion rates.
- Support escalation and complaint rate.

Prototype usability metrics must not be represented as production impact.

## 16. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Prototype appears official | Persistent independent-prototype label; no official logo; explicit non-affiliation. |
| Incorrect legal/procedural guidance | Versioned official sources, citations, jurisdiction flags, and RTO confirmation language. |
| Document misread | Confidence threshold, original/value comparison, correction flow, manual fallback. |
| AI hallucination | Retrieval grounding, constrained schemas, workflow validation, and human escalation. |
| Unauthorized government access | Approved APIs/sandboxes only; no scraping or undocumented endpoints. |
| Payment uncertainty | Approved provider handoff and independent receipt reconciliation. |
| Excess personal-data collection | Data minimisation, masking, short retention, deletion controls, and consent ledger. |
| Alert fatigue | Priority policy, consolidation, snooze, and channel preferences. |
| Regional process variance | State-aware rules, effective dates, source ownership, and content review. |

## 17. Release plan

### Hackathon release

- Public HTTPS deployment.
- No-login reviewer journey.
- Two-minute demo focused on DL expiry and one action flow.
- Summary under 250 words.
- Explicit list of mocks, dependencies, and Codex contribution.

### Pilot release

- Approved sandbox/API partnership.
- Limited jurisdiction and service set.
- Consent, deletion, security, accessibility, and regulatory reviews.
- Support playbooks and monitoring.

### Scale release

- Additional states and languages.
- Versioned regulatory content operations.
- Multi-channel notification delivery.
- Production-grade identity, payment, reconciliation, fraud, and audit services.

## 18. Open questions

1. Which agency owns source freshness and procedural-content approval?
2. Which services have documented production or sandbox APIs?
3. What identity assurance is required for read-only versus transactional actions?
4. Which reminder channels can be used with valid consent and opt-out semantics?
5. What is the acceptable extraction error rate for each document type?
6. How should state-specific fees and procedures be versioned and reviewed?
7. Which handoffs can be deep-linked without implying completion?

## 19. Definition of done for submission

- Public link works in an incognito browser and on a real phone.
- Demonstrated flows have no dead buttons or unresolved states.
- Prototype disclosure and non-affiliation are visible.
- Mocked versus working behavior is documented.
- Architecture and production guardrails are explained.
- No real sensitive data is present.
- Sources and approximate fee/timeline caveats are visible.
- Demo video is at most two minutes and every shown interaction works.

## 20. Plain-language service requirement

- A first-time user must understand every service without prior knowledge of Parivahan terminology.
- Expand RC, DL, PUC, NOC and RTO at first mention; use the acronym only as secondary help.
- Do not preselect a consequential scope such as updating multiple documents.
- Every service entry must end in guidance, a clear next action, or an explicitly labelled prototype boundary—never an empty screen.
- First-licence, renewal and replacement intents must produce distinct guidance.

## 21. UX hierarchy requirements

- Present urgent, user-actionable work before passive vehicle imagery or historical activity.
- Keep Services available in primary navigation on desktop and mobile.
- Support document retrieval by name, type, provider and vehicle registration as profiles grow.
- Show result counts for document filters and never hide the active filter state.
- Maintain visible keyboard focus and minimum touch-friendly interaction targets.

## 22. Reliability requirements

- Local-storage denial, invalid saved JSON or quota exhaustion must not prevent the dashboard from loading.
- Unsupported, empty or oversized uploads must fail before processing and explain how to recover.
- Download, sharing, service-worker and asynchronous failures must preserve navigation and user data.
- Unexpected runtime failures must be logged with context and surfaced as a safe, non-technical recovery message.
- Modal dialogs must move, contain and restore keyboard focus.
