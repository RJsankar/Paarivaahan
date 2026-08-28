# ADR 0017: Status over scoring and recognizable vehicles

**Status:** Accepted  
**Date:** 24 August 2026

## Context

A numerical transport-health score compresses obligations with different legal and safety consequences into a value that citizens may misinterpret. Small generic silhouettes also require reading the accompanying model name, which creates unnecessary friction for low-literacy and multilingual users.

## Decision

The primary dashboard and onboarding will communicate concrete states—such as “1 action needed,” “Driving licence,” “Healthy,” and “No actions needed”—without a numerical score. Known demo vehicles will use distinct photographic cutouts alongside their model name and registration number.

## Rationale

Concrete status answers what needs action and why. Photographic vehicle identity supports faster recognition while labels and registration numbers preserve precision and accessibility.

## Consequences

- No aggregate transport-health number appears in onboarding or the dashboard.
- Status components must name the affected document or vehicle.
- Vehicle photographs are presentational; accessible names come from adjacent text.
- The home screen uses a large selected-vehicle “digital garage” stage and a separate all-transport scope so visual recognition does not redefine account ownership.
- Known demo vehicles use a centred static photographic cutout. A 360° viewer is deferred until one coherent 3D model or professionally captured turntable set is available; inconsistent generated viewpoints must not be presented as continuous rotation.
- Images must be optimized, responsive, and paired with a fallback for newly added vehicles.

## Alternatives considered

- **Keep the score with an explanation:** rejected because the number still implies a calibrated risk model.
- **Use silhouettes only:** rejected for known vehicles because photographs provide stronger recognition.
- **Use photographs without text:** rejected because pictures alone cannot identify registration or support all assistive technologies.

## Review trigger

Review after multilingual usability testing or if a validated, explainable scoring model with a clear citizen benefit becomes available.
