import Link from "next/link";

const expertise = [
  ["Application engineering", "C# · .NET · ASP.NET Core · TypeScript · Vue · Next.js"],
  ["Data and integration", "SQL Server · PostgreSQL · ETL · REST · SOAP · MongoDB"],
  ["Cloud and delivery", "Azure · AWS · Docker · GitHub Actions · CI/CD · VPS"],
  ["AI and automation", "FastAPI · LLM APIs · RAG · extraction · local models"],
];

const selectedResults = [
  {
    value: "≈40%",
    title: "Faster regression testing",
    copy: "Introduced Selenium-based regression coverage and reusable C# utilities integrated into delivery pipelines.",
  },
  {
    value: "24h → 40m",
    title: "Processing-time reduction",
    copy: "Built a C# and SQL Server depreciation-processing engine for a consulting engagement.",
  },
  {
    value: "20+",
    title: "Years of software delivery",
    copy: "Across hands-on engineering, architecture, product ownership, technical leadership, and management.",
  },
];

export default function CareerPage() {
  return (
    <main className="career-page">
      <header className="career-header page-width">
        <a href="/career" className="career-name">Giorgiy Shepov</a>
        <nav aria-label="Career navigation">
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
          <a href="https://george-shepov.github.io/Resume/">Résumé</a>
          <Link href="/">LODEX work ↗</Link>
        </nav>
      </header>

      <section className="career-hero page-width">
        <div className="career-intro">
          <p className="eyebrow">Senior software engineer · Technical leader</p>
          <h1>Production depth. Product judgment. Still hands-on.</h1>
          <p>
            I build and lead maintainable software across .NET applications,
            APIs, data platforms, integrations, automation, and AI-enabled systems.
          </p>
          <div className="career-actions">
            <a className="button career-button" href="mailto:gshepov@proton.me?subject=Engineering%20opportunity">Discuss an opportunity <span>↗</span></a>
            <a className="text-link" href="https://george-shepov.github.io/Resume/">View full résumé ↗</a>
          </div>
          <p className="availability"><span /> Cleveland, Ohio · Open to remote full-time, contract, C2C, consulting, and technical leadership roles.</p>
        </div>
        <aside className="career-profile">
          <div className="career-monogram">GS</div>
          <div>
            <small>Current focus</small>
            <strong>.NET · APIs · Data Platforms · AI &amp; Automation</strong>
          </div>
          <div>
            <small>Experience</small>
            <strong>20+ years professional software development</strong>
          </div>
          <div>
            <small>Education</small>
            <strong>MBA · BBA Management Information Systems</strong>
          </div>
        </aside>
      </section>

      <section className="career-results" id="experience">
        <div className="page-width">
          {selectedResults.map((result) => (
            <article key={result.title}>
              <strong>{result.value}</strong>
              <h2>{result.title}</h2>
              <p>{result.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="career-expertise page-width" id="expertise">
        <div>
          <p className="eyebrow">Core expertise</p>
          <h2>A Microsoft foundation, expanded for modern product delivery.</h2>
        </div>
        <div className="expertise-list">
          {expertise.map(([title, detail], index) => (
            <div key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="career-context page-width">
        <div>
          <p className="eyebrow">Career context</p>
          <h2>Engineering across industries and operating models.</h2>
        </div>
        <p>
          Experience spans transportation, automotive, telecommunications,
          manufacturing, education, healthcare, pricing analytics, aviation,
          background screening, e-commerce, legal technology, and AI-enabled workflows.
        </p>
      </section>

      <section className="career-close page-width">
        <p>Looking for a senior engineer who can own the problem and the implementation?</p>
        <a href="mailto:gshepov@proton.me?subject=Engineering%20opportunity">Let&apos;s talk <span>↗</span></a>
      </section>
    </main>
  );
}
