# Responsible AI Threat Model

## Trust boundaries

The browser UI, future AI service, document-processing service and official government portals are separate trust zones. Sarathi may explain and prepare; the citizen retains control of identity, CAPTCHA, OTP, signature, declarations, payment and submission.

| Threat | Example | Current prototype control | Production requirement |
|---|---|---|---|
| Hallucinated rule | Wrong fee or document list | Fixed copy, official link, state-variation caveat, source check date | Retrieval from versioned official sources; content review and expiry |
| Wrong jurisdiction | Maharashtra guidance shown for another state | Jurisdiction labels and issuing-state caveat | State resolver plus user confirmation |
| False completion | AI says an application was submitted | Explicit local-draft and simulation labels | Signed official receipts and reconciliation |
| Credential capture | User sends OTP/password in chat | Repeated “never ask” warnings | Input detection, redaction, blocking and incident telemetry |
| Prompt injection in uploaded document | Malicious text instructs the agent | No live model or automatic execution | Treat documents as untrusted data; isolate instructions |
| Over-automation | Agent clicks declarations or payment | Human review gate and official handoff | Action allowlist, scoped consent and irreversible-action confirmation |
| PII leakage | Licence shared accidentally | Explicit share/download actions; local demo storage | Encryption, access control, expiring links and audit logs |
| Stale guidance | Rule changes after review | Visible source-reviewed date | Automated freshness checks with owner and fail-closed expiry |
| Automation bias | Citizen trusts high-confidence extraction | Confidence is labelled simulated; verify-original warning | Calibrated confidence, low-confidence escalation, accuracy monitoring |
| Accessibility exclusion | Critical flow unusable without pointer | Keyboard dialogs, focus styles, responsive UI | Screen-reader and assistive-tech testing in release gate |

## Release gates

Do not release a connected version without red-team tests, the acceptance set in `AI-EVALUATION.md`, threat-owner sign-off, incident response, deletion/retention controls, human escalation and a documented rollback path.

