# Start Here: Project Intake Protocol

Use this protocol at the beginning of a new project, when resuming an unfamiliar project, before a major feature, or when the project has materially changed.

Do not begin substantial implementation during intake unless the owner explicitly asks you to proceed immediately.

## 1. Locate and read the context

Read, in this order:

1. The nearest `AGENTS.md` or other platform instruction file.
2. The project's `PROJECT.md`.
3. The project's `SKILLS.md`, if it exists.
4. This workspace's `SKILL-REGISTRY.md`.
5. Directly relevant decisions, roadmap items, standards, and documentation.

For a new idea, interview the owner and create `PROJECT.md` from `templates/PROJECT-TEMPLATE.md` before selecting an implementation approach.

## 2. Inspect reality

Inspect the actual repository, configuration, tests, documentation, and—when accessible—the current deployment. Identify:

- application entry points and major components;
- technology, data storage, identity, permissions, and external services;
- build, test, lint, type-check, and deployment commands;
- existing design, security, accessibility, privacy, and operational controls;
- contradictions between documentation and implementation.

Separate verified facts, inferences, proposals, contradictions, and unknowns. Documentation is context, not proof.

## 3. Assess the project and current request

Summarize:

- purpose, people served, and people who may bear risk;
- current lifecycle stage and verified status;
- desired outcome and definition of done;
- scope, non-goals, likely systems, and what must remain unchanged;
- ethical, safeguarding, privacy, accessibility, security, and operational concerns;
- missing information and decisions that belong to the owner or a qualified expert.

## 4. Discover and select skills

Use `SKILL-REGISTRY.md` for the first shortlist. Search the owner's detailed skill catalog (if they keep one) only when the project or task suggests a relevant capability or a specific implementation is needed.

Select the smallest useful combination. For every selected skill, state:

- why it applies now;
- the project juncture when it should be used;
- its expected output;
- whether it is installed, available through the platform, reference only, or unknown;
- where its full `SKILL.md` is located;
- which tools, connectors, permissions, credentials, or dependencies it requires.

Do not confuse a skill with a tool. Do not install or load the entire catalog. Read a full `SKILL.md` only after selecting it, and follow its instructions before acting.

Also identify apparently relevant skills that are unnecessary and explain why. Record durable selections and future checkpoints in the project's `SKILLS.md`, using `templates/PROJECT-SKILLS.md` when creating it.

## 5. Choose engineering practices

Recommend practices because the task or risk calls for them, not mechanically. Consider TDD, unit or integration tests, accessibility review, security and privacy review, safeguarding review, usability testing, database planning, separation of concerns, named policy constants, DRY, simple duplication over premature abstraction, performance review, deployment planning, and documentation.

Engineering principles may apply even when no packaged skill is installed.

## 6. Present the intake report

Before major changes, provide:

1. Current-state summary.
2. Important discrepancies and unknowns.
3. Selected skills and timing.
4. Recommended engineering practices.
5. Files or systems likely to be reviewed or changed.
6. Tests and other validation.
7. Risks and safeguards.
8. Small implementation stages.
9. Definition of done.
10. Human decisions required.
11. The next skill-selection checkpoint.

## 7. Work and reassess

When authorized, preserve user content, make focused changes, validate meaningful behavior, and report failures honestly.

Reassess skills at these junctures:

- after discovery and before architecture decisions;
- before implementing a major feature;
- when a bug or unexpected failure appears;
- before merging, deployment, or public release;
- after an incident or major user finding;
- during significant maintenance or refactoring.

Do not keep a skill active merely because it was useful earlier.

## 8. Complete and learn

Finish with:

- what changed and why;
- which skills and principles were actually used;
- checks performed and their results;
- remaining risks, unknowns, and human follow-up;
- documentation or decisions updated;
- what the owner should remember;
- the next recommended checkpoint.
