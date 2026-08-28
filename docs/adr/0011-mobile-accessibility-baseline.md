# ADR-0011: Mobile and accessibility as release gates

- **Status:** Accepted
- **Date:** 2026-08-24

## Context

The product targets Indian citizens who may use mid-range phones, slower connections, assistive technology, or have limited digital confidence.

## Decision

Design mobile-first task flows, preserve semantic HTML and keyboard behavior, provide visible labels and states, respect reduced motion, and treat accessibility testing as a release requirement.

## Rationale

- Mobile is a primary surface, not a reduced desktop experience.
- Accessible patterns also reduce cognitive load for all users.
- The hackathon explicitly evaluates mobile and limited-digital-experience usability.

## Consequences

- Core tasks must work at 390 px without horizontal overflow.
- Touch targets, text scaling, focus order, contrast, and screen readers require testing.
- Motion and voice cannot be the only way to obtain information.

## Alternatives considered

A desktop-first reviewer demo was rejected.

## Review trigger

Production release requires a WCAG 2.2 AA audit, native-language accessibility review, low-bandwidth tests, and testing on representative Android devices.

