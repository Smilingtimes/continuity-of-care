# Skill Registry

This is a quick discovery index. It helps an AI decide which capabilities may be useful without loading every full skill into context.

It is not a full catalog, proof of installation, or permission to activate every skill.

## Live example

This template was published alongside its author's own working catalog: the [AI Skills & Tools Tracker](https://www.notion.so/a6b3fea2e87b46568fd1a144f956bc1f) (Notion, ~155 skills evaluated from public skill collections). Browse it to see what a mature catalog looks like — per-skill status, platform notes, and selection guidance. Build your own rather than copying it: a catalog reflects your projects, platforms, and judgment.

## Sources of truth

- **Master catalog:** `[Not set up — see decision below]`
- **This file:** short, stable selection guidance available to local agents.
- **Full `SKILL.md`:** authoritative operating instructions for a selected skill.
- **Current platform:** authoritative for whether the skill, tools, permissions, and connectors are actually available.
- **Project `SKILLS.md`:** records which skills a project expects to use and at which juncture.

## Catalog decision (first setup)

An AI collaborator should walk the owner through this choice on first use, then record the outcome here:

- **Option A — Build your own catalog (recommended).** Create a table of skills you have evaluated, with columns like: name, source, what it does, status (reference only / ready to install / installed / do not install), platform, and when to use it. Notion, a spreadsheet, or a `CATALOG.md` in this repo all work. Start small — catalog a skill when you actually evaluate it, not in bulk.
- **Option B — Reference the example catalog.** Use the author's public catalog (linked above) as your discovery layer. Faster to start, but it reflects another person's projects, platforms, and judgment — verify everything against your own environment.

**Decision:** [A | B] · **Date:** YYYY-MM-DD · **Catalog location:** [link or path]

## How skill discovery works

1. Read the project's `PROJECT.md` and inspect the actual work.
2. Determine the project stage, current task, affected people, and main risks.
3. Use the capability map below for the first shortlist.
4. Search the detailed catalog when the shortlist needs a specific implementation or when this file is not detailed enough.
5. Select the smallest effective combination and explain why each skill applies.
6. Confirm the skill is available in the current platform. A catalog entry is not an installation.
7. Read the selected skill's complete `SKILL.md` before following it.
8. Confirm required tools, connectors, permissions, credentials, and dependencies separately.
9. Record the selection and timing in the project's `SKILLS.md`.
10. Reassess at major project junctures instead of choosing once for the entire project.

Do not load or install all cataloged skills by default.

## Reassessment junctures

### Project beginning or major reset

Consider product discovery, user research, project documentation, architecture exploration, risk assessment, and planning.

### Before building a feature

Consider frontend or backend implementation, database design, TDD, API design, accessibility planning, and security or privacy threat modeling.

### When behavior fails or a bug appears

Consider systematic debugging, reproduction, root-cause analysis, regression testing, and verification.

### Before merging or releasing

Consider code review, test verification, accessibility review, security review, usability testing, documentation, and deployment readiness.

### After release or during maintenance

Consider monitoring, incident response, performance investigation, refactoring, dependency review, documentation maintenance, and lessons learned.

## Capability map

### Product discovery and user research

Use when beginning a project, defining a major feature, testing assumptions, or when evidence and stakeholder expectations conflict. Expected output: questions, assumptions, evidence, findings, risks, and product implications.

### Project assessment and planning

Use when the work crosses several files or systems, has unclear scope, or carries meaningful risk. Expected output: current-state assessment, staged plan, dependencies, safeguards, decisions, and definition of done.

### Test-driven development

Use for stable business rules, validation, permissions, state changes, reusable logic, or reproducible bugs. Usually avoid for disposable visual exploration or requirements still being discovered. Expected output: failing test, minimal implementation, passing result, and safe refactoring.

### Systematic debugging

Use when behavior is broken, tests fail, or the cause is unknown. Do not jump directly to speculative fixes. Expected output: reproduction, evidence, root cause, focused correction, and regression verification.

### Accessibility review

Use for navigation, forms, controls, content hierarchy, color, media, or public user journeys. Expected output: barriers, affected users, severity, fixes, and manual or automated verification.

### Security and privacy review

Use for authentication, roles, sensitive data, uploads, external APIs, payments, messaging, moderation, AI integrations, or deployment. Expected output: threats, data and permission findings, mitigations, and residual risk.

### Safeguarding and human-impact review

Use when children, vulnerable people, high-impact decisions, reporting, moderation, identity evidence, or community consequences are involved. Expected output: harm scenarios, governance needs, human-review points, escalation paths, and unresolved expert decisions.

### Usability testing

Use when an important journey is functional, before release, or when users appear confused or abandon a workflow. Expected output: scenarios, observations, friction, severity, and priorities.

### Database and data-model design

Use for new persistent entities, relationships, migrations, roles, retention, permissions, or inconsistent records. Expected output: model, constraints, relationships, migration approach, and access plan.

### Frontend and interaction design

Use for pages, dashboards, forms, onboarding, responsive behavior, or design systems. Expected output: design rationale, hierarchy, component structure, states, and responsive behavior.

### API, integration, and MCP development

Use when designing service boundaries, connecting external systems, or building an MCP server or client. Expected output: interface contract, authentication and error handling, data boundaries, tests, and integration instructions.

### Documentation and communication

Use for project context, specifications, decision records, user guidance, reports, presentations, spreadsheets, or internal communication. Select the format-specific skill only when that artifact is actually required.

### Review and verification

Use before claiming substantial work is complete. Expected output: evidence from tests or inspection, discrepancies, remaining risks, and a clear pass/fail statement.

### Deployment and operations

Use for hosting, releases, CI/CD, monitoring, backups, recovery, rollback, and incident response. Expected output: release checks, rollback plan, operational risks, ownership, and post-release verification.

## Selection report format

Before substantial work, report:

| Skill or capability | Why now | Use at which juncture | Expected output | Availability | Required tools or permissions |
|---|---|---|---|---|---|
| [Name] | [Task or risk trigger] | [Planning, building, testing, release, maintenance] | [Deliverable] | Installed / available / reference only / unknown | [Requirements] |

Also state:

- which apparently relevant skills are unnecessary;
- which engineering principles apply without requiring a separate skill;
- what must be decided by the owner;
- when skill selection should be reassessed.

## Installation lifecycle

- **Reference only:** described in the catalog but not ready for local use.
- **Ready to install:** reviewed enough to install for a specific platform or project.
- **Installed:** confirmed in the current environment, with a known location and invocation method.
- **Do not install:** deprecated, unsafe, unsuitable, or intentionally excluded.

Install a skill only when the current project needs it. After installation, record its location, platform, scope, invocation, security review, and last-tested date in the catalog. Do not assume installation in one platform makes a skill available in another.

## Maintenance rule

The detailed catalog (if any) holds per-skill records; this file holds durable categories and selection rules. Update this file only when the overall decision process or capability map changes.
