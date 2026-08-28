# Reviewer Guide

## Open the build

- **Public URL:** https://paarivaahan.vercel.app/?build=20260828-53#home
- **Login:** None required for guest tasks; mobile sign-in is optional for saved profile features
- **Data:** Synthetic demo profile only
- **Recommended primary test:** Mobile, approximately 390 × 844
- **Also tested:** Desktop, approximately 1440 × 900

## 60-second citizen journey

For a repeatable state, append `?judge=1#home` to the public URL. The visible reviewer strip opens the three strongest proof points directly.

1. On Home, notice Ravi's expiring driving licence as the first action.
2. Select **Renew licence**.
3. Review the plain-language steps, timing, caveats and official source.
4. Close the guide and open **Documents**.
5. Select **Needs attention**, then open **Driving Licence**.
6. Switch between English and Hindi.

## Optional depth

- **Services → International Driving Permit:** a citizen-controlled form-preparation journey.
- **Ask Sarathi → Pay my challan:** a clearly labelled controlled payment simulation with a persistent synthetic receipt.
- **Documents:** search, vehicle filters, offline snapshot, detail and share states.
- **Profile:** multiple vehicles, language preference, privacy guidance and logout.

## Reset and demo URLs

- First-time onboarding: `?demo=onboarding#home`
- Deterministic Judge Mode: `?judge=1#home`
- Returning experience: `#home`
- Judge Mode intentionally resets synthetic local state and bypasses onboarding on every load.
- The onboarding demo URL intentionally replays onboarding regardless of saved browser state.

## What is real

- Responsive interface and routing
- English and Hindi interface states
- Deterministic guided workflows and validation
- Local demo persistence, document filtering, downloads and service-worker shell caching
- Error recovery, keyboard-managed dialogs and explicit official handoffs

## What is simulated

- Citizen, licence, vehicle, document and challan records
- AI responses and document extraction
- Government lookups, application submission and status
- Notifications, payments, receipts, identity and OTP behavior

This is an independent hackathon prototype. It is not affiliated with or endorsed by the Government of India.
