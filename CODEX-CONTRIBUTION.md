# How Codex Contributed

## Meaningful role in the build

Codex was used as an active product-development collaborator, not added as a submission label. The builder supplied the transport-service problem, product direction, visual references, PRD requirements and iterative feedback. Codex helped translate that direction into an implemented and tested prototype.

Codex contributed to:

1. **Product specification:** converted the initial requirements into acceptance criteria, user journeys, safety boundaries and a maintained PRD.
2. **Implementation:** built and iterated the vanilla HTML, CSS and JavaScript application, including routing, responsive navigation, multilingual UI states, onboarding, document and vehicle states, alerts, chat, service workflows, modals and local persistence.
3. **Form Agent design:** modelled the International Driving Permit and related services as citizen-controlled deterministic workflows with validation, preparation, review and official handoff states.
4. **Testing:** repeatedly exercised desktop and mobile journeys, investigated reported screenshots, fixed broken interactions, validated negative states and produced the regression report.
5. **Accessibility and reliability:** added semantic dialogs, focus containment and return, keyboard dismissal, visible focus, input validation, storage fallbacks, upload constraints, timer cleanup and global error recovery.
6. **Research and architecture:** cross-referenced official public sources, recorded mock-versus-production boundaries, and created Architecture Decision Records for data, AI, integration, privacy and workflow choices.
7. **Submission preparation:** prepared the reviewer guide, short summary, demo script, test harness and disclosure documents.
8. **Evaluation readiness:** defined a deterministic Judge Mode, a 20-case AI behavior acceptance set, responsible-AI threat model, benchmark protocol, pilot plan and performance budget while explicitly separating implemented evidence from future validation.

## Human decisions retained by the builder

The builder selected the problem, evaluated the current public-service experience, chose the product direction, approved visual and interaction changes, corrected terminology, prioritised features and decided what should be shown in the final submission.

## OpenAI model boundary

The submitted web application does not call a live OpenAI API. Chat, extraction and automation behavior are deterministic simulations so the reviewer journey is safe, stable and free of real citizen data. Codex was meaningfully used to create and improve the prototype. A production assistant would require a separately approved, grounded and evaluated OpenAI integration as described in the PRD and architecture documentation.

## Evidence in this repository

- Product requirements: `PRD.md`
- Research and source register: `RESEARCH.md`
- Architecture decisions: `ADR/`
- Regression history: `TEST_REPORT.md`
- AI acceptance set and threat model: `AI-EVALUATION.md`, `RESPONSIBLE-AI-THREAT-MODEL.md`
- Benchmark and pilot method: `BENCHMARK.md`, `PILOT-PLAN.md`
- Implemented application: `index.html`, `styles.css`, `app.js`, `sw.js`
