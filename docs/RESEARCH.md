# Parivahan Sarathi Research and Evidence Brief

**Version:** 1.0  
**Last updated:** 24 August 2026  
**Purpose:** Evidence base for product decisions, hackathon submission claims, and future validation.

## 1. Research question

How might a multilingual, mobile-first transport guardian reduce the effort required to understand, prepare for, and complete common Indian transport-service journeys while remaining safe, transparent, and compatible with official systems?

## 2. Method and evidence quality

This brief combines:

- primary-source desk research from the official Parivahan/MoRTH and MeitY websites;
- the official Build What Moves India builder brief and FAQ;
- observations from two structured prototype test passes supplied during development;
- implementation testing of the current prototype; and
- product hypotheses inherited from the original concept document.

Evidence labels:

- **Verified:** directly supported by a primary source or observed working behavior.
- **Observed:** found in prototype testing, but not a population-level finding.
- **Hypothesis:** plausible product assumption requiring user research or production data.
- **Illustrative:** synthetic values used only to make the prototype testable.

## 3. Primary-source findings

### 3.1 Transport journeys are distributed across multiple service families

**Verified.** Parivahan presents separate licence-related, vehicle-related, eChallan, PUC, mParivahan, forms, informational, and state-level services. Its vehicle-service catalogue includes transfer of ownership, change of address, hypothecation, registration renewal, NOC, certificates, payments, appointments, and status tracking.

Product implication: citizens benefit from an intent-based layer that identifies the relevant service, required preparation, and correct official handoff.

### 3.2 The prototype’s selected service set maps to real official services and forms

**Verified.** The official forms directory lists:

- Form 9 for DL renewal;
- Forms 29 and 30 for transfer of ownership;
- Form 33 for change of address in the RC; and
- Form 35 for termination of hire-purchase, lease, or hypothecation.

Product implication: guided checklists should link to the current official form catalogue and treat form/version changes as managed content, not hardcoded eternal truth.

### 3.3 Renewal requirements contain eligibility and exception logic

**Verified.** Official mParivahan guidance describes the renewal window and lists requirements including the licence, application form, physical-fitness declaration, and medical certificate in applicable cases.

Product implication: a production guide must ask eligibility questions and must not reduce every citizen to a single universal checklist.

### 3.4 International Driving Permit is a form-heavy, state-routed journey

**Verified.** The official Form 4A captures applicant identity, address, birth, driving-licence, travel, passport, and requested vehicle-category information. Parivahan’s IDP guidance describes a valid Indian Driving Licence, passport, visa where applicable, air ticket, and photographs among the preparation items. The citizen is routed through Sarathi and their licensing state; availability and state-specific steps can vary.

Product implication: IDP is a strong Form Agent use case. The product can reuse verified profile data, collect trip-specific fields once, validate missing evidence, prepare a draft, and explain the official handoff.

Safety implication: consequential authentication and declaration steps must stay with the citizen. The prototype does not attempt CAPTCHA, OTP, signature, fee payment, or final portal submission.

### 3.5 Live government integration is neither required nor appropriate for the hackathon

**Verified.** The Build What Moves India brief explicitly allows mock data, accounts, and backend behavior when production access is unsafe or unavailable. It requires a complete working citizen journey and clear identification of mocked dependencies. The FAQ prohibits live government connections unless an approved sandbox is provided.

Product implication: deterministic simulation is the correct hackathon choice. The submission should be judged on the working citizen experience, transparency, and credible production design—not on unauthorized integration.

### 3.6 Personal-data processing requires a formal governance model

**Verified.** The Digital Personal Data Protection Act, 2023 defines digital personal data and processing broadly. The later commencement notifications and rules establish a phased compliance environment.

Product implication: a production version needs consent records, purpose limitation, data minimisation, retention/deletion controls, security safeguards, grievance handling, and legal review. A prototype label is not a substitute for those controls.

## 4. Prototype test findings

### 4.1 What tested well

**Observed.** The following behaviors were verified in the current build:

- English and Hindi switching changes the interface.
- Needs attention filters to the Driving Licence record.
- DL opens a complete detail panel.
- Challan simulation returns a receipt to chat.
- RC Transfer completes all five steps and gates progress on ten checklist items.
- Hypothecation Removal supports both NOC branches and persists a Guardian reminder.
- Address Change responds to same/different-state and online/RTO choices.
- Final service steps include source citations.
- The Services hub contains ten cards, including two coming-soon states.
- The disclosure banner and architecture panel open and close correctly.
- Core layouts respond at mobile breakpoints.
- Application tracking explains and resolves a simulated pending-item state.
- Lost RC/DL guidance branches for stolen documents and produces official handoffs.
- Failed challan payment remains unpaid, checks transaction state, and warns against duplicate payment.
- The dashboard models the citizen as the profile root, separates personal and vehicle records, and supports all-transport and per-vehicle views.
- A second seeded vehicle and locally persisted Add Vehicle flow demonstrate multi-vehicle ownership without treating a registration number as the user identity.
- Onboarding establishes a mobile-based personal profile or guest session instead of using a registration number as identity.
- Challan payment offers a credential-free guest path and optional mobile profile path; only the profile path persists the demo receipt.

### 4.2 Defects found and resolved during testing

**Observed.** Iterative testing identified and resolved:

- non-functional language controls;
- missing post-payment chat confirmation;
- weak modal backdrops and stale modal state;
- incorrect document filtering;
- non-functional DL rows;
- unrelated renewal toast triggers;
- inactive Help & Safety controls;
- missing guided-service entry points; and
- mobile overflow in the Services layout.
- profile/RTO/vehicle inconsistencies and an overstated language-count label.
- the single-vehicle dashboard framing that incorrectly mixed a personal DL with vehicle-level insurance and PUC records.
- vehicle-number-led onboarding and mandatory-account assumptions that created unnecessary friction for urgent challan payment.

Product implication: the demo should follow the already-tested routes and avoid introducing untested features immediately before submission.

## 5. User and problem hypotheses

The following claims are useful framing but are not yet validated by original field research:

| Hypothesis | Current confidence | Validation needed |
|---|---|---|
| Citizens struggle more with choosing the right service than with completing a known form. | Medium | 8–12 contextual interviews and current-portal task tests. |
| Deadline-based Guardian alerts will reduce lapses. | Medium | Pilot with consented users and verified completion events. |
| Hinglish instructions improve completion for target users. | Medium | Compare English, Hindi, and Hinglish variants. |
| Concrete status labels and vehicle photographs are easier to recognise than an abstract health score. | Medium | Validate with low-literacy, multilingual mobile usability sessions. |
| Citizens trust an assistant more when every procedure cites an official source. | Medium–high | Trust/usability test with and without citations. |
| Voice input materially helps low-literacy users. | Medium | Field study across languages, accents, and noisy environments. |

The original concept’s market-size, preventable-burden, adoption, and savings estimates should not appear as facts without a reproducible calculation and authoritative data.

## 6. Competitive framing

Parivahan Sarathi should not claim that it replaces Vahan, Sarathi, DigiLocker, mParivahan, UMANG, eChallan, or state RTOs. Those systems are authoritative transaction and record surfaces.

The defensible product position is:

> A consent-based guidance and orchestration layer that helps citizens understand obligations, prepare correctly, and reach the appropriate official service with less uncertainty.

The prototype differentiates through:

- proactive prioritization rather than passive service discovery;
- document-centered health and deadline context;
- multilingual plain-language guidance;
- explainable alerts;
- step-based preparation and branch-aware checklists; and
- confirmation/reconciliation as part of the journey.

## 7. Accessibility and inclusion considerations

### Current strengths

- Responsive layout and large touch targets.
- Plain-language labels and one-task-per-step flows.
- English and Hindi interface modes.
- Visible progress and disabled states.
- Reduced-motion CSS support.
- Keyboard Escape support for dialogs.

### Gaps requiring validation

- Screen-reader flow and focus trapping have not received a formal audit.
- Indian-language translations need native-speaker review.
- Voice interaction is simulated rather than evaluated across accents and noise.
- Low-bandwidth behavior needs throttled-network testing.
- Colour-independent status communication should be audited.
- Text scaling at 200% and small-screen keyboards need testing.

## 8. Trust and safety analysis

### Key risks

1. A citizen mistakes the prototype for an official service.
2. Generated or stale instructions cause missed deadlines or wasted visits.
3. A document is extracted incorrectly and the user acts on the wrong value.
4. An automated action appears complete without official confirmation.
5. Sensitive records are retained longer than necessary.
6. State-specific procedures are presented as nationally uniform.

### Required controls

- Persistent independent-prototype disclosure.
- No government logos or claims of endorsement.
- Source, jurisdiction, and effective-date metadata.
- Confidence thresholds and original-document verification.
- Approved APIs or sandboxes only.
- Deterministic workflow validation around consequential actions.
- External receipt reconciliation before marking an action complete.
- Consent, deletion, audit, and human escalation mechanisms.

## 9. Production feasibility

### Feasible without government integration

- Public procedural guides and form discovery.
- User-entered/local document reminders.
- Plain-language explanation of user-supplied documents, subject to privacy controls.
- Service preparation checklists.
- Deep links to official portals.

### Requires approval, partnership, or regulated providers

- Retrieval of official citizen/vehicle records.
- Identity-linked status checks.
- Submission of official applications.
- Payment initiation or collection.
- OTP handling.
- Receipt reconciliation from authoritative systems.
- Government-branded communications.

## 10. Recommended research plan

### Before finalist resubmission

1. Conduct five moderated mobile tests with users unfamiliar with the prototype.
2. Give each participant one task: identify the most urgent obligation and start resolution.
3. Measure time to first correct action, errors, requests for help, and trust interpretation.
4. Test whether participants understand what is mocked and whether the product is official.
5. Ask native Hindi speakers to review the demonstrated flows.

### Before a pilot

1. Interview citizens, driving schools, RTO help-desk staff, and transport advocates.
2. Map one state and one service end to end, including exceptions and failure states.
3. Run accessibility and low-bandwidth audits.
4. Define source-update ownership and regulatory review SLAs.
5. Complete a privacy impact assessment and threat model.
6. Establish a sandbox contract and receipt-reconciliation protocol.

## 11. Hackathon evaluation

### Alignment

The build aligns strongly with the official criteria:

- **Problem:** important, recurring public-service friction.
- **Working build:** demonstrated journeys work from start to finish.
- **Usability:** mobile, multilingual, and simpler than portal discovery.
- **Product thinking:** Guardian prioritization and verification are thoughtful.
- **End-to-end thinking:** the architecture describes consent, approved integration, rules, handoff, and reconciliation.
- **Honesty:** mock behavior and non-affiliation are visible.

### Remaining submission risks

- A localhost URL is not a valid public submission link.
- The two-minute video must focus on one hero journey.
- Every claim in the 250-word summary must distinguish evidence from aspiration.
- Production architecture should be explained without implying existing partnerships.

## 12. Source register

Primary sources accessed 23–24 August 2026:

1. [Build What Moves India — Builder Brief](https://buildwhatmovesindia.com/brief)
2. [Build What Moves India — FAQ](https://buildwhatmovesindia.com/faq)
3. [Parivahan Sewa — Main service catalogue](https://parivahan.gov.in/contactus)
4. [Parivahan Sewa — Download forms](https://parivahan.gov.in/parivahan/en/content/download-forms)
5. [mParivahan — Renewal of Driving Licence](https://mparivahan.parivahan.gov.in/mstatic/english/dl-info-renewal-dl.html)
6. [MoRTH — Motor Vehicles Act, 1988](https://morth.nic.in/hi/print/2475)
7. [MeitY — Digital Personal Data Protection Act, 2023](https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf)
8. [MeitY — Acts and policies](https://www.meity.gov.in/documents/act-and-policies)
9. [Parivahan — Form 4A: International Driving Permit](https://parivahan.gov.in/parivahan/sites/default/files/DownloadForm/form4a.pdf)
10. [mParivahan — International Driving Permit guidance](https://mparivahan.parivahan.gov.in/mstatic/english/dl-info-international.html)
11. [Sarathi Parivahan](https://sarathi.parivahan.gov.in/)

## 13. Research limitations

- No original user interviews or statistically representative survey were completed for this document.
- No live government system was tested or reverse-engineered.
- State-specific rules, fees, and timelines may change and require jurisdiction-level verification.
- Prototype usability observations came from structured test passes, not a controlled research study.
- The document is product research, not legal advice.
