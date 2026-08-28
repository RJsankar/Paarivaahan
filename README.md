# Parivahan Sarathi

> Independent Build What Moves India hackathon prototype. Not affiliated with or endorsed by the Government of India.

A high-fidelity, responsive hackathon prototype for the Parivahan Sarathi PRD. It implements a person-centred transport profile and complete guided demo journeys:

- Bilingual voice/text companion (English and Hindi UI previews)
- Transport-document upload with simulated structured challan extraction and confidence scoring
- Controlled mock Parivahan browser agent with a safe, staged payment demonstration
- Proactive Guardian alerts, a local-first document wallet, renewal guidance, application tracking, multi-vehicle status, trust and safety states
- Citizen-controlled guided flows for IDP, RC transfer, address change, hypothecation removal, lost documents, and application recovery

## Run locally

```bash
python3 -m http.server 8765
```

Then open [http://localhost:8765](http://localhost:8765).

To replay first-time onboarding, open `http://localhost:8765/?demo=onboarding#home`.

For a deterministic reviewer path, open `http://localhost:8765/?judge=1#home`. Judge Mode resets synthetic state on each load and exposes one-click entry to the licence journey, document wallet and Form Agent.

## Validate

No package installation is required. With Node.js 18 or newer:

```bash
npm test
```

The smoke test parses the application scripts, checks duplicate IDs and required reviewer surfaces, verifies build/cache version consistency, checks cached assets, and guards the keyboard-accessible alerts switch.

This is a front-end demo. Document AI, STT/TTS, WhatsApp, persistence, and payment are intentionally simulated; production integrations require backend credentials, consent controls, and government/API partnerships described in the PRD.

## Documentation

- [Product requirements](PRD.md)
- [Research and evidence brief](RESEARCH.md)
- [Architecture Decision Records](ADR/README.md)
- [End-to-end regression report](TEST_REPORT.md)
- [Submission pack](SUBMISSION.md)
- [Reviewer guide](JUDGE-GUIDE.md)
- [Two-minute demo script](DEMO-SCRIPT.md)
- [How Codex contributed](CODEX-CONTRIBUTION.md)
- [Mock and production boundaries](MOCKS-AND-LIMITATIONS.md)
- [Architecture](ARCHITECTURE.md)
- [Security and privacy](SECURITY-AND-PRIVACY.md)
- [Accessibility](ACCESSIBILITY.md)
- [AI behavior evaluation pack](AI-EVALUATION.md)
- [Task-flow benchmark method](BENCHMARK.md)
- [Maharashtra pilot plan](PILOT-PLAN.md)
- [Responsible AI threat model](RESPONSIBLE-AI-THREAT-MODEL.md)
- [Performance and reliability budget](PERFORMANCE.md)
- [Deployment verification](DEPLOYMENT.md)
- [Attributions and rights checklist](ATTRIBUTIONS.md)
- [Visual product design case study](output/pdf/parivahan-sarathi-design-case-study.pdf)

## Submission status

The public HTTPS URL and public two-minute video still need to be inserted in `SUBMISSION.md` and `JUDGE-GUIDE.md` before submission. Vehicle-image provenance must also be confirmed in `ATTRIBUTIONS.md`; this is the only unresolved rights gate.
