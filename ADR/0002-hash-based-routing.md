# ADR-0002: Hash-based client navigation

- **Status:** Accepted
- **Date:** 2026-08-24

## Context

The prototype must support direct links such as `#home`, `#documents`, `#alerts`, `#companion`, `#services`, and `#help` on a static host without rewrite rules.

## Decision

Use hash routes and toggle existing page sections in the client.

## Rationale

- Works on any static file server.
- Preserves direct links and browser history without server configuration.
- Keeps all demo surfaces available after a single load.

## Consequences

- Route changes must close open modals and mobile navigation state.
- Every view remains in the DOM, so selectors must account for hidden duplicates.
- Search indexing and route-level loading are limited.

## Alternatives considered

History API routing requires host rewrites. Separate HTML pages would duplicate shared interface and state.

## Review trigger

Replace when the product gains authenticated deep links, server-rendered content, or independently deployable route bundles.

