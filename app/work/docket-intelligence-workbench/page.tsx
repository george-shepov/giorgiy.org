import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docket Intelligence Workbench",
  description:
    "A source-grounded workbench for monitored court records, immutable snapshots, meaningful change detection, organized filings, and cited analysis.",
  alternates: { canonical: "/work/docket-intelligence-workbench" },
};

const currentFoundation = [
  "FastAPI health, case, parser, and comparison endpoints",
  "Domain models for cases, entries, snapshots, and changes",
  "Deterministic SHA-256 snapshot hashing",
  "Added, removed, and modified entry detection",
  "Parser-first Cuyahoga Common Pleas adapter",
  "Sanitized fixtures and automated tests",
];

const layers = [
  ["01", "Acquire", "Court adapters · schedules · raw captures"],
  ["02", "Preserve", "Immutable snapshots · hashes · documents"],
  ["03", "Understand", "Normalization · comparisons · cited retrieval"],
  ["04", "Act", "Timelines · alerts · audit history"],
];

export default function DocketWorkbenchPage() {
  return (
    <main className="case-page">
      <header className="case-header page-width">
        <a href="/work">← All work</a>
        <span>LODEX / CASE STUDY 01</span>
        <a href="https://github.com/george-shepov/docket-intelligence-workbench">GitHub ↗</a>
      </header>

      <section className="case-hero page-width">
        <div className="case-kicker">
          <span>MVP foundation</span>
          <span>Monitoring · Legal technology · Document intelligence</span>
        </div>
        <h1>Know what changed—and preserve what the source showed before it changed.</h1>
        <p>
          Docket Intelligence Workbench turns a published court record into a
          monitored workspace with historical snapshots, meaningful difference
          detection, organized filings, searchable timelines, and source-grounded analysis.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="https://github.com/george-shepov/docket-intelligence-workbench">View public repository <span>↗</span></a>
          <a className="text-link" href="mailto:gshepov@proton.me?subject=Monitored%20record%20workflow">Discuss a similar system ↗</a>
        </div>
      </section>

      <section className="case-problem page-width">
        <p className="case-label">The operational problem</p>
        <div>
          <h2>Published for lookup. Not designed for sustained monitoring.</h2>
          <p>
            A user may repeatedly visit the same public source, download
            documents into unrelated folders, compare entries manually, and
            reconstruct a timeline from incomplete snapshots.
          </p>
          <p>
            That makes a simple question surprisingly difficult to answer:
            <strong> what changed since the last time the record was checked?</strong>
          </p>
        </div>
      </section>

      <section className="case-system">
        <div className="page-width">
          <div className="case-section-title">
            <p className="case-label">The system</p>
            <h2>Capture the evidence. Normalize the record. Explain the difference.</h2>
          </div>
          <div className="architecture-flow">
            {layers.map(([number, title, detail]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-current page-width">
        <div>
          <p className="case-label">What works now</p>
          <h2>A testable public foundation, with honest product boundaries.</h2>
          <p>
            The public repository contains the reusable application foundation,
            reference adapter, synthetic fixtures, and tests. Private records,
            credentials, and customer-specific integrations stay outside it.
          </p>
        </div>
        <ol>
          {currentFoundation.map((item, index) => (
            <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
          ))}
        </ol>
      </section>

      <section className="boundary-card page-width">
        <div>
          <p className="case-label">Responsible boundary</p>
          <h2>Evidence support, not automated judgment.</h2>
        </div>
        <p>
          The system can preserve records, identify differences, organize
          evidence, and support source review. It does not determine legal
          intent, provide representation, automatically file documents, or
          treat an anomaly as proof of misconduct.
        </p>
      </section>

      <section className="case-reuse page-width">
        <p className="case-label">Reusable beyond court records</p>
        <h2>The same foundation can monitor any important source that changes.</h2>
        <div>
          <span>Regulatory updates</span>
          <span>Vendor portals</span>
          <span>Product catalogs</span>
          <span>Pricing feeds</span>
          <span>Compliance records</span>
          <span>Public notices</span>
        </div>
      </section>

      <section className="inner-cta page-width">
        <p className="eyebrow">Need to monitor a changing source?</p>
        <h2>Let&apos;s design the smallest trustworthy monitoring workflow.</h2>
        <a className="button button-primary" href="mailto:gshepov@proton.me?subject=Monitoring%20workflow">Start a conversation <span>↗</span></a>
      </section>
    </main>
  );
}
