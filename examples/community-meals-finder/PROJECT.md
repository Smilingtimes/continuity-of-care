# Community Meals Finder

> **Fictional example** for the continuity-of-care template — it shows what a
> filled-in `PROJECT.md` looks like and the level of detail expected. It is not
> a real product.
>
> **Status:** Active  
> **Last reviewed:** 2026-07-21  
> **Owner:** [Example owner]

## One-sentence summary

A single-page website listing free community meals in one city, with plain-language details and accessibility-first design.

## Purpose and evidence

People facing food insecurity often learn about meal programs by word of mouth; existing directories are outdated or hard to use on a phone. Evidence: [owner to attach local needs assessment — **UNKNOWN**, do not assume].

## People and stakeholders

- Guests looking for a meal (primary users; may be in crisis, on old phones, or with limited data plans).
- Meal programs whose details are listed (accuracy affects their trust).
- The volunteers who will eventually maintain listings.

## Values and non-negotiables

- Works on a low-end phone with a slow connection — no heavy frameworks.
- Every listing shows a "last confirmed" date; stale listings are labeled, never silently presented as current.
- No tracking, no accounts, no personal data collection.
- WCAG-AA accessibility; plain language at an 8th-grade reading level.

## Current verified status

- **Stage:** Prototype
- **Working now:** Static page with 12 hand-verified sample listings; **VERIFIED** by calling each program on 2026-07-15.
- **In progress:** Neighborhood filter (**IN PROGRESS**, branch `filter`).
- **Proposed only:** SMS alerts (**PROPOSAL** — needs safeguarding review first; a wrong alert could send someone to a closed site).
- **Last verified:** 2026-07-21 — page loads in 0.8s on throttled 3G.

## Technology and architecture

- Frontend: Single `index.html`, no build step.
- Data: listings hardcoded for now; **UNKNOWN** — whether a spreadsheet or database fits better is deferred until volunteers test the update workflow.
- Hosting: GitHub Pages.

## Data, privacy, and retention

Collects nothing. If SMS alerts are ever added, phone numbers become sensitive data — that decision requires a privacy review and owner approval before any code is written.

## Commands

- Run: open `index.html` in a browser.
- Test: none yet — **KNOWN RISK**; even a checklist-based manual test would help.

## Current priorities

1. Finish the neighborhood filter.
2. Recruit one volunteer to test the "how do we update a listing?" workflow.
3. Only then decide on data storage.

## Open questions and assumptions

- Who owns listing accuracy once there are 50+ programs? **Owner decision.**
- Assumption to verify: guests actually search by neighborhood (ask three real users before building more filters).

## Definition of done (current phase)

Filter works on a low-end phone; one volunteer completes a listing update unaided; every listing has a confirmation date.

## Change log

- 2026-07-21 — Created as the continuity-of-care worked example.
