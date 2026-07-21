# Continuity of Care

*An AI workspace template — the social work term for records that follow a person across providers, applied to AI sessions.*

A platform-neutral, Markdown-only file structure for working with AI assistants
across sessions, projects, and tools — Claude Code, Kimi Code, Codex, ChatGPT,
Cursor, or whatever comes next.

## The problem it solves

Every AI session starts blank. The assistant doesn't remember yesterday's
decisions, your project's real status, your values, or where to resume. Without
a written context layer, you re-explain everything every time — and the AI
guesses at whatever you forgot to repeat.

## The solution

Keep a small set of Markdown files that any AI CLI reads automatically at the
start of a session:

1. **`AGENTS.md`** is the entry point. Most agentic CLI tools read it (or an
   equivalent instruction file) on startup. It tells the AI what to read next
   and how to behave here.
2. **`ME.md`** and **`NOW.md`** give durable context (who you are, how to work
   with you) and current context (what matters this month).
3. Each project gets a **`PROJECT.md`** (verified facts, status, open
   decisions) and a **`SKILLS.md`** (which capabilities apply at this stage),
   so "continue project X" works without a briefing.
4. **`templates/`** holds the blank versions you copy when starting a project.
5. **`SKILL-REGISTRY.md`** is a lightweight process for choosing which AI
   skills to use, instead of installing everything — with a link to the
   author's own public skill catalog as a working example.

The files are plain Markdown. No app, no database, no vendor lock-in. Git gives
you history; any text editor works.

## Quick start

1. Copy or clone this repository.
2. Fill in `ME.md` and `NOW.md` — even 10 lines each makes a difference.
3. For each active project, copy `templates/PROJECT-TEMPLATE.md` to
   `projects/your-project/PROJECT.md` and fill it in honestly (mark unknowns;
   do not present plans as finished work).
4. Point your AI tool at the folder. Tools that read `AGENTS.md` pick the
   system up automatically; for others, paste `AGENTS.md` into their
   instructions or system prompt.
5. **Choose your skill catalog.** On first use, your AI should prompt you (per
   `AGENTS.md`): build your own catalog like the author's, or reference the
   provided example. Record the choice in `SKILL-REGISTRY.md`.
6. Update files when reality changes. Date time-sensitive claims. Delete stale
   claims instead of letting versions conflict.

## Start here if you're new

This repo holds a complete system, but you are not meant to adopt it all at
once. It grew in tiers — follow the same path:

1. **Week one:** only three files matter — `ME.md`, `NOW.md`, and one
   `PROJECT.md`. That alone gives an AI session continuity.
2. **When you have two or three projects:** `START-HERE.md` and `PLAYBOOK.md`
   start paying off.
3. **When you catch yourself repeating instructions or collecting AI skills:**
   then open `SKILL-REGISTRY.md` and make the catalog decision — not before.

Ignore the rest until you feel the pain it solves. Files you don't need yet are
a library, not homework.

## Structure map

| Path | Question it answers |
|---|---|
| `AGENTS.md` | How should an AI collaborator behave in this workspace? |
| `ME.md` | Who is the owner, and how do we work together? (lean, always read) |
| `NOW.md` | What matters right now? (reviewed monthly) |
| `START-HERE.md` | How is project work assessed and begun? |
| `PLAYBOOK.md` | How should work be done day to day? |
| `SKILL-REGISTRY.md` | How do we choose which AI skills to use, and when? |
| `CLAUDE.md.example` | How do platform-specific overlays stay thin? |
| `templates/` | Blank `PROJECT.md` and `SKILLS.md` to copy per project |
| `personal/` | Optional deeper personal context — read on demand, never required |
| `projects/` | One folder per project, each with its own `PROJECT.md` |
| `skills/` | Locally installed skill packages (see its README) |
| `standards/` | Reusable accessibility, privacy, security, and ethics guidance |

## A note on privacy

This system is powerful precisely because it holds real context. That makes
boundaries essential:

- **Never commit secrets**: no passwords, tokens, keys, government identifiers,
  or other people's private data. The `.gitignore` covers common cases.
- Treat `personal/` as optional and local-only unless you deliberately choose
  otherwise. Write only what is useful to share with an AI.
- If you publish your workspace (like this template), sweep it for personal
  details first.

## Grounded in a code of ethics

Most AI workspace templates are organized around productivity. This one is
organized around a duty of care. The durable principles in `AGENTS.md` are
adapted from the six core values of the [NASW Code of
Ethics](https://www.socialworkers.org/About/Ethics/Code-of-Ethics/Code-of-Ethics-English)
— service, social justice, dignity and worth of the person, importance of
human relationships, integrity, and competence — paraphrased for AI
collaboration. From another profession, or none? Swap in your own code or
values. The point is that values anchor the system, not any particular set.

## What "human-first" means here

The label is a commitment, not a vibe. Two concrete implications:

- **Augment, don't replace.** This system exists to extend human memory,
  judgment, and relationships — never to substitute for them. The human stays
  the decision-maker; the AI is a collaborator that reads, remembers, and
  prepares. Success is measured by people's outcomes, not by model output.
- **Democratize access.** The people who benefit most from AI continuity are
  often the ones the industry designs for last: non-technical professionals,
  beginners, and communities that technology usually serves late or not at
  all. That's why this is plain Markdown — no app to install, no subscription,
  no engineering background required. If a design choice would exclude
  someone, the choice is wrong.

## Why I built this

I'm a social worker learning to build with AI. I needed a way to keep
continuity across tools and sessions without turning my notes into an app I had
to maintain. This structure grew out of real project work; I published it so
others — especially people from non-technical fields — can adopt the parts that
help and ignore the rest. It is a starting point, not a standard.

## License

MIT — see [LICENSE](LICENSE). Adapt freely.
