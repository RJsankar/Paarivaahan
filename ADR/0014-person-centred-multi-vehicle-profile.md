# ADR 0014: Use a person-centred multi-vehicle profile

**Status:** Accepted  
**Date:** 24 August 2026

## Context

The initial dashboard described “your vehicle” while displaying a Driving Licence beside insurance and PUC. A DL belongs to a person, while RC, insurance, PUC, fitness, tax and vehicle challans belong to a vehicle. The framing also failed when a citizen owned or managed more than one vehicle.

## Decision

The citizen profile is the product and data-model root. A profile may link zero or more vehicles. The Home screen defaults to an All Transport view that separates personal documents from vehicle summaries. A citizen can switch to an individual vehicle to see only that vehicle’s records and can link another demo vehicle through a validated, locally persisted flow.

## Rationale

- Correctly expresses ownership and document scope.
- Supports car, two-wheeler, family and fleet-like household cases.
- Keeps personal obligations visible without falsely attaching them to a vehicle.
- Creates a clear future consent boundary for each linked vehicle and record source.

## Consequences

- Aggregate health is a profile-level derived value, while vehicle health is calculated separately.
- Alerts and service journeys must carry an explicit person or vehicle scope.
- Production identity and authorisation must verify the citizen’s permitted relationship to each vehicle.
- Demo-added vehicles remain synthetic and are stored only in browser localStorage.

## Alternatives considered

- One dashboard per registration number: rejected because it fragments the citizen experience and misplaces personal documents.
- Show only a flat document list: rejected because it hides which vehicle an obligation belongs to.

## Review trigger

Revisit when production identity, shared-family access, organisation fleets, or delegated vehicle management enter scope.
