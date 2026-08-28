# Performance and Reliability Budget

The prototype has no framework, build chain or external runtime dependency. That keeps the critical path inspectable and suitable for constrained devices.

## Release budgets

- HTML + CSS + JavaScript: under 500 KB uncompressed
- Entire application shell excluding documentation: under 5 MB
- No blocking third-party JavaScript
- No network request required for deterministic demo logic
- Main routes usable at 360 px CSS width
- Service-worker failure must not block the online app
- Every modal must close with Escape and restore usable focus

## Verification

`npm test` validates syntax, unique IDs, build/cache consistency, installable assets, disclosure surfaces, reviewer mode, privacy controls, source-freshness support and local documentation links. Desktop/mobile interaction results belong in `TEST_REPORT.md`.

Before production, add measured Lighthouse/Web Vitals results from the deployed HTTPS URL and test a low-end Android device over a throttled connection. Do not infer field performance from localhost measurements.

