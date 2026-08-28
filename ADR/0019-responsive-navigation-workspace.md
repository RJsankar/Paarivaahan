# ADR 0019: Responsive navigation workspace

**Status:** Accepted  
**Date:** 24 August 2026

## Context

The original full-height dark sidebar and conventional bordered top bar made the prototype feel like a dated administration portal. On mobile, primary destinations were hidden behind a menu even though citizens repeatedly move between Home, Documents, Alerts, and Sarathi.

## Decision

Desktop uses a light floating navigation rail, compact translucent top bar, soft workspace canvas, and one consistent rounded-surface system. Mobile exposes the five primary destinations in a persistent bottom tab bar while retaining a focused slide-out panel for profile, privacy, and secondary controls.

Primary-route state is synchronized across desktop, mobile tabs, and the drawer through the existing route attributes. Navigation remains text-labelled and uses consistent line icons rather than emoji.

## Rationale

The floating workspace separates navigation from content without the visual weight of a government portal sidebar. Persistent mobile tabs reduce repeated menu opening, improve one-handed reach, and make the information architecture visible to first-time citizens.

## Consequences

- Primary navigation must remain operable and visibly selected at desktop and mobile breakpoints.
- Mobile content reserves space for the bottom bar so actions are not obscured.
- Profile and safety controls remain available in the mobile drawer.
- New cards and modals use the shared surface radius, border, shadow, and spacing tokens.
- Every primary route must be checked at 390 px and desktop widths before release.

## Alternatives considered

- **Retain the dark fixed sidebar:** rejected because it dominated the product and read as a legacy admin interface.
- **Use only a hamburger menu on mobile:** rejected because it hides frequently used destinations.
- **Build separate desktop and mobile pages:** rejected because one responsive route system is easier to maintain and keeps behavior consistent.

## Review trigger

Review after usability testing with low-digital-confidence citizens or when native mobile navigation patterns become available in a production app.
