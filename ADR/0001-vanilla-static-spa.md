# ADR-0001: Vanilla static SPA for the hackathon build

- **Status:** Accepted
- **Date:** 2026-08-24

## Context

The hackathon needs a public, mobile-friendly browser prototype with a short implementation window. The current experience is interaction-heavy but does not require production authentication, server rendering, or live integrations.

## Decision

Implement the submission as one HTML document, one CSS stylesheet, and one JavaScript file with no build step or runtime package dependency.

## Rationale

- Fast iteration and trivial static hosting.
- Deterministic reviewer experience.
- Minimal download and operational surface.
- Easy inspection and recovery during a live demo.

## Consequences

- Positive: low complexity, low hosting cost, and resilient local demo.
- Negative: global state and a large DOM become harder to maintain as the product grows.
- Negative: no server-side security boundary; therefore no secrets or sensitive operations can exist in this build.

## Alternatives considered

React/Next.js, Vue, and a Node-rendered application were unnecessary for the submission scope.

## Review trigger

Adopt a modular framework or component system when multiple teams contribute, production authentication is added, or route-level code splitting becomes necessary.

