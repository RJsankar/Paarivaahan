# Prototype Capabilities, Mocks and Limitations

Parivahan Sarathi is an independent hackathon prototype. It is not affiliated with or endorsed by the Government of India.

| Capability | What works in the prototype | What is simulated | Production requirement |
|---|---|---|---|
| Profile and vehicles | Person-centred UI, vehicle switching, validation and local demo persistence | Ravi and all vehicle records | Approved identity and vehicle-record integration with consent |
| Documents | Search, filtering, detail views, local snapshots, downloads and share intent | Document contents, verification and extraction | Authoritative signed-document source, malware controls and schema-validated extraction |
| Languages | English and Hindi interface states | AI translation and voice recognition | Human-reviewed critical copy, language QA and evaluated speech services |
| Guardian alerts | Priority states, snooze and preference controls | WhatsApp/SMS delivery and behavioral timing | Consent records, notification provider, opt-out and frequency policy |
| Ask Sarathi | Deterministic text/voice-demo responses and contextual actions | Open-ended AI reasoning, STT and TTS | Grounded OpenAI service, versioned sources, evaluations and escalation |
| Challan | Complete controlled success/failure demonstration and synthetic receipt | Lookup, payment, status and receipt | Approved challan/payment integrations, authentication, idempotency and reconciliation |
| Guided services | Validated state-machine journeys, checklists, downloads and official links | Eligibility decisions and application submission | State-aware rules, approved integration, review, audit and support |
| Form Agent | Collects, reuses, validates and maps synthetic fields into a local draft | Government prefill, CAPTCHA, OTP, signature, fee and submission | Explicit consent, secure data handling and citizen-controlled official workflow |
| Application tracking | Profile-linked synthetic applications and manual-reference fallback | Live application status | Approved status API and encrypted identifiers |
| Offline use | Static shell caching and labelled local document snapshots | Official offline credential | Signed authoritative documents and revocation/update semantics |

## Known limitations

- The prototype contains no live backend, model call, government API, payment provider, OTP, notification provider or cross-device account.
- State rules, fees, documents and timelines can change. Users are directed to official sources for final confirmation.
- Offline snapshots are convenience copies of synthetic demo data, not DigiLocker or government-issued credentials.
- Native sharing and file-picker behavior varies by browser and operating system.
- Dictionary-based localisation does not yet cover every dynamic service-flow sentence.
- Accessibility has been improved but has not received an independent WCAG 2.2 AA certification or native-language assistive-technology audit.
- Production impact has not been measured and must not be inferred from the prototype.

## Explicitly prohibited in this prototype

- Real Aadhaar, PAN, passwords, OTPs, payment credentials or sensitive personal data
- Scraping, reverse engineering or testing live government systems
- Claiming official completion based on a local animation
- Autonomous acceptance of declarations, signatures, payments or submissions
