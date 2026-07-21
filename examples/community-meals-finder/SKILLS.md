# Community Meals Finder Skill Plan

> **Fictional example** for the continuity-of-care template — it shows the
> selection tables filled in, including what was deliberately skipped.
>
> **Last reviewed:** 2026-07-21  
> **Current project stage:** Building (prototype)

## Current task or outcome

Ship the neighborhood filter and validate the listing-update workflow with one volunteer.

## Selected now

| Skill or capability | Why it applies | Use at which juncture | Expected output | Availability | Full instructions | Required capabilities |
|---|---|---|---|---|---|---|
| Frontend and interaction design | Filter UI on small screens | Building | Filter that works one-handed on a low-end phone | Available in this platform | n/a — principle, not a package | Browser dev tools |
| Accessibility review | Guests may use screen readers or old devices | Testing before release | Barrier list + fixes; WCAG-AA pass | Available in this platform | n/a | axe or equivalent, keyboard-only test |

## Consider later

| Skill or capability | Trigger for reconsidering it | Expected project juncture |
|---|---|---|
| Database and data-model design | Volunteers struggle to update hardcoded listings | Architecture |
| Security and privacy review | SMS alerts (phone numbers become sensitive data) | Before any alert code |
| Usability testing | Filter is live and three guests can try it | Pre-release |

## Considered but unnecessary now

| Skill or capability | Why it is not needed now |
|---|---|
| Authentication setup | No accounts — a non-negotiable in `PROJECT.md` |
| Deployment and operations | GitHub Pages is already sufficient at this scale |
| Test-driven development | No complex logic yet; revisit when listings move to structured data |

## Engineering practices

- Named constants — confirmation-date thresholds live in one named place, not magic numbers.
- KISS — one HTML file until reality demands more.

## Human or expert decisions

- Owner decides who is accountable for listing accuracy at 50+ programs.
- Owner decides whether SMS alerts ever happen (safeguarding review required).

## Next selection checkpoint

- **When:** after the volunteer completes the update workflow test.
- **What to reassess:** data storage, testing, and whether the SMS proposal should advance.

## Skill-use log

- 2026-07-21 — Created as the continuity-of-care worked example.
