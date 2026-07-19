import { capabilities as componentLibrary, projects } from "./site-data";

const featuredProjects = projects.filter((project) => project.featured);

const capabilitySummary = [
  ["Application engineering", "C# · .NET · TypeScript"],
  ["Data platforms", "SQL Server · PostgreSQL · MongoDB"],
  ["AI workflows", "Retrieval · Extraction · Orchestration"],
  ["Delivery", "Docker · CI/CD · VPS · Cloud"],
];

export default function Home() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#selected-work">
        Skip to selected work
      </a>

      <header className="site-header page-width">
        <a className="brand" href="#main-content" aria-label="Giorgiy.org home">
          <span className="brand-mark" aria-hidden="true">
            G
          </span>
          <span className="brand-copy">
            <strong>Giorgiy Shepov</strong>
            <span>LODEX Software</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/work">Work</a>
          <a href="/components">Components</a>
          <a href="/services">Services</a>
          <a href="/career">Career</a>
        </nav>

        <a
          className="header-cta"
          href="mailto:gshepov@proton.me?subject=Let%27s%20build%20something"
        >
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            Senior software engineer <span>·</span> Product builder
          </p>
          <h1 id="hero-title">
            From messy operations to <em>maintainable</em> software systems.
          </h1>
          <p className="hero-lede">
            I design, modernize, and deploy applications, APIs, data platforms,
            offline-first products, automation, and AI-enabled workflows.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#selected-work">
              Explore selected work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href="mailto:gshepov@proton.me?subject=Project%20conversation"
            >
              Discuss a project <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="availability">
            <span aria-hidden="true" /> Available for remote engineering,
            contract, C2C, consulting, and product partnerships.
          </p>
        </div>

        <div className="system-visual" aria-label="System delivery capabilities">
          <div className="visual-topline">
            <span>LODEX / SYSTEMS</span>
            <span className="live-label">
              <i aria-hidden="true" /> BUILDING
            </span>
          </div>
          <div className="system-stage">
            <span className="orbit orbit-one" aria-hidden="true" />
            <span className="orbit orbit-two" aria-hidden="true" />
            <div className="system-core">
              <small>Problem</small>
              <strong>Working system</strong>
              <small>Deployed</small>
            </div>
            <span className="node node-one">DATA</span>
            <span className="node node-two">APIs</span>
            <span className="node node-three">AI</span>
            <span className="node node-four">PWA</span>
          </div>
          <div className="visual-footer">
            <span>DESCRIBE</span>
            <i aria-hidden="true" />
            <span>BUILD</span>
            <i aria-hidden="true" />
            <span>DEPLOY</span>
            <i aria-hidden="true" />
            <span>IMPROVE</span>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Experience highlights">
        <div className="page-width proof-grid">
          <div>
            <strong>20+</strong>
            <span>years building software</span>
          </div>
          <div>
            <strong>20K+</strong>
            <span>records processed</span>
          </div>
          <div>
            <strong>≈40%</strong>
            <span>faster regression testing</span>
          </div>
          <div>
            <strong>3</strong>
            <span>published technical books</span>
          </div>
        </div>
      </section>

      <section className="work-section page-width" id="selected-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Systems built around real work.</h2>
          </div>
          <p>
            Each project began where information was difficult to monitor,
            work was too repetitive, or infrastructure was too fragile.
          </p>
        </div>

        <div className="project-list">
          {featuredProjects.map((project) => (
            <article className={`project-row tone-${project.tone}`} key={project.title}>
              <div className="project-index">
                <span>{project.number}</span>
                <i aria-hidden="true" />
              </div>
              <div className="project-main">
                <div className="project-meta">
                  <span>{project.eyebrow}</span>
                  <span className="status">{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <a className="project-link" href={project.href}>
                <span>{project.linkLabel}</span>
                <b aria-hidden="true">↗</b>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="capability-preview page-width" id="capabilities">
        <p className="eyebrow">The foundation</p>
        <h2>One engineering practice. Reused across products.</h2>
        <div className="capability-strip">
          {capabilitySummary.map(([title, stack]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{stack}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="section-route page-width">
        <a href="/work">View the complete project portfolio <span aria-hidden="true">→</span></a>
        <a href="/components">Explore {componentLibrary.length} reusable capability groups <span aria-hidden="true">→</span></a>
      </div>

      <section className="coming-next page-width" id="services" aria-label="Services preview">
        <p>
          <span>Next:</span> product engineering, AI and document workflows,
          modernization, deployment, and focused Fix &amp; Launch engagements.
        </p>
        <a href="mailto:gshepov@proton.me?subject=Software%20project">
          Bring me the problem <span aria-hidden="true">→</span>
        </a>
      </section>

      <footer className="site-footer page-width" id="about">
        <span>© 2026 Giorgiy Shepov · LODEX Software · v0.1.0</span>
        <div>
          <a href="https://github.com/george-shepov">GitHub</a>
          <a href="https://george-shepov.github.io/Resume/">Résumé</a>
          <a href="https://www.linkedin.com/in/giorgiy-shepov/">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
