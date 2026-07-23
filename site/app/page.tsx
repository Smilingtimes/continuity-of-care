const repoUrl = "https://github.com/Smilingtimes/continuity-of-care";
const templateUrl = "https://github.com/Smilingtimes/continuity-of-care/generate";

const values = [
  ["Service", "Use AI to support real people and communities—not merely speed or output."],
  ["Social justice", "Design for the people technology usually excludes, with accessibility built in."],
  ["Dignity", "Keep privacy as the default and preserve the person’s right to decide."],
  ["Relationships", "Let AI strengthen human connection and community, never substitute for them."],
  ["Integrity", "Separate verified facts from inference and never claim success without checking."],
  ["Competence", "Use capabilities deliberately, verify they are available, and reassess as work changes."],
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "Continuity of Care",
    description:
      "A human-first, platform-neutral Markdown practice library for maintaining accurate context across AI assistants, sessions, projects, and tools.",
    codeRepository: repoUrl,
    license: "https://opensource.org/license/mit",
    author: { "@type": "Person", name: "Nelson Santos" },
    programmingLanguage: "Markdown",
    keywords: "human-first AI, continuity of care, context management, social work, responsible AI",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Continuity of Care home">
          <span className="brand-mark" aria-hidden="true">CoC</span>
          <span>Continuity of Care</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#principles">Principles</a>
          <a href={repoUrl}>GitHub</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A human-first AI workspace</p>
          <h1>Your context should follow you—not disappear with every AI session.</h1>
          <p className="lede">
            A free, plain-Markdown practice library that helps people carry accurate
            context, current priorities, and professional values across AI tools.
          </p>
          <div className="actions">
            <a className="button primary" href={templateUrl}>Use this template</a>
            <a className="button secondary" href={`${repoUrl}#quick-start`}>Read the quick start</a>
          </div>
          <ul className="proof" aria-label="Project qualities">
            <li>No app</li><li>No subscription</li><li>No vendor lock-in</li>
          </ul>
        </div>

        <div className="context-window" aria-label="Example workspace context files">
          <div className="window-top"><span></span><span></span><span></span><b>your-workspace</b></div>
          <article className="file-card active">
            <span className="file-icon">01</span>
            <div><h2>ME.md</h2><p>Who you are and how to work with you.</p></div>
          </article>
          <article className="file-card">
            <span className="file-icon">02</span>
            <div><h2>NOW.md</h2><p>What matters right now.</p></div>
          </article>
          <article className="file-card">
            <span className="file-icon">03</span>
            <div><h2>PROJECT.md</h2><p>Verified status, decisions, and next steps.</p></div>
          </article>
          <p className="window-note">Small enough to maintain. Clear enough for any AI to read.</p>
        </div>
      </section>

      <section className="statement" aria-labelledby="statement-title">
        <p className="eyebrow">The idea</p>
        <h2 id="statement-title">Continuity without surrendering control.</h2>
        <p>
          Every AI session starts blank. This library creates a small, human-editable
          source of truth so the assistant can resume without guessing—and the person
          remains the decision-maker.
        </p>
      </section>

      <section className="steps" id="how-it-works" aria-labelledby="steps-title">
        <div className="section-heading">
          <p className="eyebrow">Start in minutes</p>
          <h2 id="steps-title">Three files are enough for week one.</h2>
          <p>You do not need to adopt the whole library at once.</p>
        </div>
        <ol>
          <li><span>1</span><div><h3>Make it yours</h3><p>Create a copy with GitHub’s template button, or download the files.</p></div></li>
          <li><span>2</span><div><h3>Write the minimum truth</h3><p>Fill in ME.md, NOW.md, and one PROJECT.md. Mark unknowns honestly.</p></div></li>
          <li><span>3</span><div><h3>Point your AI to the folder</h3><p>Tools that read AGENTS.md can pick up the system automatically.</p></div></li>
        </ol>
      </section>

      <section className="principles" id="principles" aria-labelledby="principles-title">
        <div className="section-heading">
          <p className="eyebrow">A duty of care</p>
          <h2 id="principles-title">Productivity is not the highest value.</h2>
          <p>The library’s ethical foundation is adapted from the six core values of the NASW Code of Ethics.</p>
        </div>
        <div className="principle-grid">
          {values.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fit" aria-labelledby="fit-title">
        <div>
          <p className="eyebrow">Built especially for</p>
          <h2 id="fit-title">People whose work is about people.</h2>
          <p>Social workers, educators, organizers, clinicians, nonprofit professionals, and anyone tired of re-explaining their work to AI.</p>
        </div>
        <div className="boundary">
          <h3>Clear boundary</h3>
          <p>This is documentation and process—not clinical software, case-management software, or an autonomous agent framework.</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Start small</p>
        <h2>Give your next AI session somewhere honest to begin.</h2>
        <div className="actions">
          <a className="button light" href={templateUrl}>Use this template</a>
          <a className="text-link" href={repoUrl}>Explore the repository <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <footer>
        <p><strong>Continuity of Care</strong><br />Created by Nelson Santos · MIT licensed</p>
        <div><a href={`${repoUrl}/blob/main/README.md`}>Documentation</a><a href={`${repoUrl}/blob/main/CITATION.cff`}>Cite</a><a href={`${repoUrl}/blob/main/LICENSE`}>License</a></div>
      </footer>
    </main>
  );
}
