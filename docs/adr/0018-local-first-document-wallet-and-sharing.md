# ADR 0018: Local-first document wallet and explicit sharing

**Status:** Accepted  
**Date:** 24 August 2026

## Context

Citizens may need a licence, RC, insurance, or PUC record where connectivity is weak. They also need to send a document summary to a family member, insurer, employer, or official without taking screenshots. The hackathon build is a static prototype with synthetic records, so it cannot claim that a cached item is an official digital credential.

## Decision

The prototype caches its application shell with a service worker and lets the citizen explicitly save an individual document snapshot or the whole synthetic wallet for offline use. Each saved row displays a persistent offline marker. Document details expose a citizen-initiated share action that uses the Web Share API when available and copies the same plain-language summary to the clipboard as a fallback.

The interface labels cached records as local offline snapshots. It does not present them as DigiLocker documents, digitally signed originals, or authoritative government records.

## Rationale

Local-first access improves usefulness in low-connectivity situations. Explicit save and share actions keep the citizen in control, while the native share sheet avoids inventing an address book or uploading a document to a new backend. Clear status language prevents a convenient demo snapshot from being mistaken for an official credential.

## Consequences

- The static app shell and non-sensitive demo assets can load from a versioned cache.
- Offline selections and synthetic document summaries may persist locally for the demo.
- Sharing never occurs automatically and always starts from a visible citizen action.
- The clipboard fallback contains a concise text summary rather than a hidden upload.
- Production must replace demo persistence with encrypted, revocable storage and apply retention, device-lock, consent, audit, and remote-sign-out controls.
- Production should integrate an authoritative document source, such as an approved government or DigiLocker flow, before describing a record as verified or official.

## Alternatives considered

- **Cache everything automatically:** rejected because citizens should choose which records remain on a shared device.
- **Require a backend download service:** rejected for the static prototype and unnecessary for sharing a synthetic summary.
- **Treat the cached view as an official document:** rejected because the prototype has no signature validation or live government integration.

## Review trigger

Review before storing any real personal document, adding file attachments to sharing, connecting an authoritative document provider, or shipping beyond the hackathon prototype.
