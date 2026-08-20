# Bringing Work Home

> A checklist for when you built something on a hosted AI platform — Replit, Google AI
> Studio, Bolt, Lovable, v0, Figma Make — and you want to keep it safely.
>
> Written for people without an engineering background. Where a step needs technical help,
> it says so, and it tells you what to ask for.

## Why this exists

Hosted build platforms are good at getting something working. They are not designed to
protect what you made once you take it elsewhere. Several failure patterns show up again and
again, and none of them are your fault — they are defaults you never chose.

The consequences are real: a password published where anyone can read it, a project that goes
blank because a company you never heard of stopped serving a file, work that lives in exactly
one place until a laptop dies.

Work through this once per project. The safety steps come first.

---

## Part 1 — Safety

Do these before showing the project to anyone or putting it online.

### 1. Make sure passwords and keys can't be published

Projects that talk to an AI service need a **key** — a long password that proves the request
is yours. Keys are supposed to live in a file that never leaves your computer, usually named
`.env`.

There is a second file, `.gitignore`, that lists what should *not* be published. **Hosted
platforms often forget to put `.env` in it.**

**What to check:** open `.gitignore` and look for a line saying `.env`.

**If it isn't there,** add these lines:

```
.env
.env.*
!.env.example
```

**Why it matters:** without that line, the first time you publish your project you may publish
your key with it. Anyone who finds it can spend your money. This is the single most common
problem and the easiest to fix.

### 2. Look for anything already published that shouldn't be

Keys are not the only sensitive thing. Also look for:

- **Account or service identifiers** pasted directly into the code — IDs for a voice service,
  an avatar, a payment provider
- **Real people's contact details** — collaborator emails, phone numbers, addresses
- **Anything about the people you serve** — names, case details, photos

**What to ask for if you need help:** *"Can you search this project's files for API keys,
service IDs, email addresses, and personal information?"*

**If you find something already published:** treat the key as compromised — go to the service
and generate a new one. Deleting the file is not enough; published history keeps a copy.

### 3. Check whether your key gets baked into the finished website

This one is invisible and catches people out.

Some platforms are set up so that when your project is built for the web, the key is
**copied into the public files**. The `.gitignore` fix in step 1 does not prevent this. The
project looks safe and isn't.

**What to check:** find a file named `vite.config.ts` or `vite.config.js`. If it contains a
section called `define` that mentions a key — something like `process.env.API_KEY` — the key
will end up in the published site.

**What to ask for:** *"This config inlines the API key into the client bundle. Can we move the
API calls behind a server so the key stays private?"*

**Why it matters:** anyone visiting your site can read that key using tools built into every
web browser. No skill required.

### 4. Check that your project doesn't depend on things you don't control

Look for images, videos, fonts, or code loaded from other websites. For each one ask: **if
that site disappears, what happens to mine?**

Some fail gently — a font falls back to another font. Some fail completely: if the code that
builds the page is loaded from elsewhere and that service stops, visitors see a blank page.

Also check the **rules**, not just whether it works today. Image-hosting sites in particular
often forbid using them to serve another website, and enforce it by removing your account.

**The fix:** copy those files into your own project. A few megabytes of images and video is a
small price for work that still opens in ten years.

---

## Part 2 — Making it findable and honest

### 5. Write one sentence saying what it is

Most people skip this, and the result is a list of projects with meaningless names. A future
reader — a funder, a colleague, a hiring manager, or you in two years — should learn what the
project is without opening it.

Describe it from **what it actually does**, not from what the folder is called. Names drift;
one project might have started as a class exercise and become something real.

### 6. Write a short README

Three things, and the second one is the one people skip:

- **What it is**, in plain language
- **What actually works right now** — say plainly what is unfinished or broken. "The main
  feature needs an account I no longer have" is far better than silence.
- **Known limitations**, including anything you found in Part 1 that isn't fixed yet

Overstating a project's status is the fastest way to lose someone's trust.

### 7. Write yourself a project status page

The README from step 6 is for other people. This step is for you — and for any AI helping you
with this project later. A README is a summary; this is your working notes, and it's not
optional. A project isn't really "brought home" without it.

**What to do:** copy `templates/PROJECT-TEMPLATE.md` into the project as `PROJECT.md` and fill
it in from what you actually see in the project — not from memory, not by guessing. If you
found something in Part 1 (a leaked key, a fragile dependency), write it down here too, plainly.
Mark anything you're unsure about as "unknown" rather than inventing an answer that sounds right.

**Why it matters:** without this, every time you or an AI comes back to this project, you start
over — rediscovering what it does, what's broken, what's already been decided. That's slow, and
it's how the same mistake gets made twice. If this project's notes ever end up living somewhere
else — a separate planning document, a different folder — say so here and point to it, instead
of leaving this page blank; a blank page reads as "nobody ever looked," which is a worse
mistake than a short one that just points elsewhere.

### 8. Decide who can see it, on purpose

Public or private should be a decision, not whatever the platform picked. Ask: *if someone I
did not expect found this, who could be affected?*

For anything touching health, education, community members, or people's personal
circumstances, the answer usually points to private — and to a conversation about consent
before that ever changes.

### 9. Add it to your project list

One line in a single file listing everything you have built: what it is, where it lives, its
real status, and the date you last checked. Without it, the list lives in your memory, and
memory is where projects go to be forgotten.

---

## Two rules that outrank the checklist

### Ask the person. Don't judge the work from the outside.

It is tempting — for a person or an AI — to decide what matters by looking at names, file
counts, or how long a README is. **This is unreliable, and it gets real work thrown away.**

A project with an untouched default README means the template was never edited. It does
**not** mean nobody ever used the thing. A tiny project might have been shown to a room of
people. A big one might be an abandoned experiment.

If an AI is helping you sort your work, it should be asking you which projects mattered, not
telling you.

### Archive. Don't delete.

Archiving hides a project and makes it read-only. You can undo it. Deleting is permanent and
takes the history with it.

When you're unsure, archive. The cost of keeping something is nearly zero. The cost of
deleting the wrong thing is total.

---

## If you're handing work to someone else

Extra questions when a project passes to a colleague, a successor, or a student:

- Does the **account** transfer, or only the files? Work tied to your personal account
  becomes their problem later.
- Can a **non-technical person** receive, run, and keep this? If not, the handover fails at
  the next transition rather than this one.
- Is there anything about **other people** in it — students, clients, community members —
  that they did not agree to share onward?

An organizational account, rather than one person's, breaks the cycle where every handover
recreates this problem.
