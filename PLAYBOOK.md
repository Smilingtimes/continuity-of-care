# AI Project Playbook

The AI helps recall specialist workflows; the owner owns goals, values, and consequential decisions.

Read `ME.md` for the owner's durable personal context. Personal context belongs there; project-specific truth belongs in the relevant project files.

## Working cycle

1. **Discover:** clarify the problem, affected people, evidence, desired outcome, constraints, and non-goals.
2. **Document:** create or refresh `PROJECT.md`; mark unknowns and record durable decisions.
3. **Assess:** follow `START-HERE.md` and compare documentation with reality.
4. **Select:** use `SKILL-REGISTRY.md`. Skills supply procedure; tools, permissions, credentials, and installation are separate.
5. **Plan:** use small stages, clear validation, and a definition of done.
6. **Build:** favor readable, focused work; avoid speculation, unexplained policy values, duplicated business rules, and premature abstraction.
7. **Verify:** choose checks by risk—tests, accessibility, security, usability, or stakeholder confirmation.
8. **Learn:** update context, decisions, and the registry with evidence.

## Principles

- **KISS:** use the simplest responsible solution.
- **YAGNI:** do not build hypothetical features without evidence.
- **DRY:** centralize duplicated knowledge when repetition creates risk.
- **Named constants:** name values whose meaning, unit, source, or changeability is unclear.
- **TDD:** for clear important behavior, write a failing test, make it pass, then improve structure.
- **Least privilege and privacy by default:** collect and expose only what is needed.
- **Accessibility by design:** include disabled people from the beginning.
- **Human-centered practice:** judge success by people's outcomes, not only software output.

## Three prompts

- New: “Interview me and create `PROJECT.md` using `templates/PROJECT-TEMPLATE.md`. Mark unknowns; do not implement.”
- Existing: “Read `START-HERE.md` and conduct intake for: [request].”
- Finish: “Update project context and decisions; explain changes, verification, and what I should remember.”
