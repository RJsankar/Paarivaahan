# End-to-End Regression Report

**Build:** 20260828-50  
**Date:** 28 August 2026  
**Viewports:** 1440 × 900 desktop and 390 × 844 mobile  
**Result:** Pass after fixes

## Coverage

| Area | Checks | Result |
|---|---|---|
| Routing and shell | Home, Documents, Alerts, Ask Sarathi, Services, Help, invalid-route fallback, drawer and bottom navigation | Pass |
| Responsive layout | All primary routes, onboarding, document details, and service modals without horizontal overflow | Pass |
| Onboarding | Forced demo entry, mobile validation, profile-building sequence, summary, dashboard handoff | Pass |
| Localization | English and Hindi navigation and dashboard content | Pass |
| Transport profile | All-transport, Honda City, TVS Jupiter, and add-vehicle validation | Pass |
| Documents | Needs-attention filtering, DL details, offline indicators, upload chooser from Home and chat | Pass |
| Alerts | Renewal guide, strong modal backdrop, reminder controls, and modal cleanup | Pass |
| Ask Sarathi | Typed message, Enter-to-send, voice simulation, signed-in payment handoff, persistent receipt | Pass |
| Payment | Success receipt, chat confirmation, failure containment, transaction-status recovery, hidden-state correctness | Pass |
| Guided services | IDP, RC transfer, hypothecation removal, address change, application tracking, and lost-document recovery | Pass |
| Help and profile | Helpline, privacy, legal-help responses, prototype disclosure, logout confirmation copy | Pass |
| Runtime | JavaScript syntax, duplicate IDs, console errors and warnings | Pass |

## Defects fixed in build 41

1. **Payment outcome controls ignored `hidden`.** Author display rules exposed success and failure controls at the wrong time. A global hidden-state rule now makes outcome states mutually exclusive.
2. **Malformed service data could advance.** RC registration, buyer mobile, postal PIN, and IDP travel dates now have format-aware gating and numeric normalization.
3. **Add-document shortcut stopped at Documents.** Home “Add a document” and chat attachment now navigate and open the file chooser.
4. **Address toggle had no accessible name.** The same-state control is now announced as “Same-state move.”
5. **Garage retained obsolete turntable styling.** The vehicle stage is now deliberately static, with the photograph centred inside the raised showroom ring on desktop and mobile.

## Novice-user fixes in build 45

1. **Insurance renewal led to an empty Alerts screen.** It now opens Ask Sarathi with policy-specific, actionable guidance.
2. **First-licence questions returned renewal advice.** Intent matching now separates a new learner from an existing licence holder.
3. **Service labels assumed portal knowledge.** RC, DL, PUC, RTO and hypothecation are now translated into plain-language names and supported by a glossary.
4. **Address change silently selected both documents.** The user must now explicitly choose vehicle registration, driving licence or both.
5. **Guided journeys mixed English and Hinglish.** Ownership transfer, loan-record removal and address-change journeys now use consistent plain English and define official forms at first mention.
6. **PUC guidance promised future help but gave no next action.** It now identifies the type of authorised testing centre to visit.

## Product-design improvements in build 46

1. **The garage visually outranked the urgent task.** The deadline action now appears first, with a compact days-remaining indicator and a persistent primary CTA on desktop.
2. **Services were hidden behind secondary links.** Services is now part of primary desktop and mobile navigation.
3. **Document retrieval did not scale to multiple vehicles.** The vault now supports search by document name, provider, or vehicle number, with visible filter counts.
4. **Dashboard language was generic.** “Popular tasks” and “What do you need today?” frame the next decision more clearly in English and Hindi.
5. **Keyboard focus was too subtle.** Interactive controls now receive a high-contrast focus indicator.

## Reliability and engineering improvements in build 47

1. **Browser storage was assumed to be available.** All local persistence now uses a guarded storage adapter with safe fallbacks for blocked access, invalid JSON and quota failures.
2. **Saved vehicle data trusted arbitrary local values.** Restored data is schema-checked, length-limited and normalised before rendering.
3. **Uploads accepted overly broad image types and did not explain rejection.** Uploads now accept JPG, PNG or PDF only, reject empty files and enforce a 10 MB limit with actionable feedback.
4. **Document filtering could end in an unexplained blank panel.** A recoverable empty state now offers a one-click filter reset.
5. **Downloads had no failure recovery.** Text exports share one guarded download utility, always revoke object URLs and report failure.
6. **Unexpected runtime and promise errors were console-only.** A central reporter logs diagnostic context and gives the user a throttled, non-destructive recovery message.
7. **Dialogs did not manage keyboard focus.** Opening moves focus into the dialog, Tab is contained, Escape closes, and focus returns to the trigger.
8. **Long-running timers could survive page exit.** Onboarding, analysis, payment and toast timers are cleaned up on `pagehide`.

## Prototype boundaries

- Government lookups, document extraction, payments, notifications, and AI responses remain simulated.
- File upload chooser behavior was verified without transmitting a personal file.
- Share controls and logout confirmation were inspected without completing sensitive sharing or deleting the active demo profile.
- Offline shell behavior is implemented through the service worker; true network-loss simulation depends on the hosting/browser test environment.

## Accessibility fix in build 48

- The Guardian alerts switch previously removed its native checkbox from the keyboard and accessibility tree with `display:none`. It now uses a visually hidden native input and exposes a visible `:focus-visible` state on the rendered switch.

## Reviewer-readiness and trust fixes in build 49

1. **No deterministic evaluator entry.** `?judge=1#home` now resets synthetic state, bypasses first-time onboarding and exposes direct entry to the licence journey, document wallet and citizen-controlled Form Agent.
2. **Privacy management was explanatory only.** Profile and Help now open working local export, chat/receipt clearing, offline-snapshot clearing and full local-profile deletion controls with a live inventory.
3. **Official guidance lacked consistent recency.** Static licence surfaces and dynamically rendered service citations now show jurisdiction, last-reviewed date and a verify-before-acting cue.
4. **Form Agent boundary appeared too late.** Every service step now states that preparation is local and nothing is submitted until the citizen continues on an official portal.
5. **Submission identity was incomplete.** The build now includes a favicon, install manifest, responsive application icons, social-preview card and branded 404 fallback.
6. **AI and impact claims were not evaluable.** The repository now includes a 20-case behavior acceptance set, controlled benchmark method, Maharashtra pilot plan, responsible-AI threat model and performance budget without claiming unrun results.

## Build 49 verification evidence

- Static smoke test: pass; 125 unique IDs, 22 linked documentation files, 193-word submission summary.
- JavaScript and service-worker syntax: pass.
- Application-code payload: 314,295 bytes uncompressed, within the 500 KB budget.
- Desktop 1440 × 900: Judge Mode, licence guide, document route, source metadata and privacy dialog pass; zero horizontal overflow.
- Mobile 390 × 844: Judge Mode, onboarding, language switching, privacy dialog and dashboard handoff pass; zero horizontal overflow.
- Console: no warnings or errors during the final reviewer and onboarding passes.

## Language-scope correction in build 50

- Removed Tamil from the language control, translation dictionary, chat behavior, onboarding copy and every current product/submission claim.
- Retained English and Hindi as the two demonstrable interface languages.
- Added a regression assertion that fails if a Tamil language control is reintroduced unintentionally.
