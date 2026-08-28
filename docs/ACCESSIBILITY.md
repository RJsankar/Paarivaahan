# Accessibility and Inclusive-Use Notes

## Implemented in the prototype

- Responsive layouts tested at 390 × 844 and 1440 × 900.
- Semantic buttons, inputs, labels, navigation landmarks and dialog roles.
- Dialog focus entry, contained Tab order, Escape dismissal and trigger-focus return.
- High-contrast visible keyboard focus.
- Keyboard-operable alerts switch with an accessible name and visible focus state.
- Text plus icons/labels for important status; colour is not intended as the only signal.
- Input constraints with actionable validation feedback.
- English and Hindi primary interface states.
- Mobile bottom navigation and touch-sized primary controls.
- Plain-language service labels and a glossary for RC, DL, PUC, RTO and hypothecation.
- Voice simulation is optional; typing remains available.

## Test checklist

- [ ] Complete the hero journey using only Tab, Shift+Tab, Enter, Space and Escape.
- [ ] Verify focus is never hidden behind a dialog or mobile navigation.
- [ ] Test at 200% browser zoom without horizontal page scrolling.
- [ ] Test with macOS VoiceOver or Android TalkBack.
- [ ] Verify every input error is announced and associated with its field.
- [ ] Check contrast using a WCAG 2.2 tool, including muted text and disabled states.
- [ ] Enable reduced motion and confirm no information depends on animation.
- [ ] Test Hindi with a native-language reviewer and screen reader.
- [ ] Check 44 × 44 CSS-pixel touch targets on a representative Android phone.
- [ ] Test offline, slow-network and interrupted-flow recovery.

## Known limitations

- No independent WCAG 2.2 AA certification has been completed.
- Hindi requires native-language usability and assistive-technology review.
- Dynamic service flows contain more English than the primary navigation and dashboard.
- Native share, voice and file-picker experiences depend on the operating system and browser.
- Real low-end Android performance and constrained-network testing remain necessary.

Accessibility is a release gate for production, not a completed compliance claim.
