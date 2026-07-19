import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "../site-data";

export const metadata: Metadata = {
  title: "Reusable Components",
  description:
    "Reusable application, data, AI, integration, identity, and deployment capabilities from LODEX Software.",
  alternates: { canonical: "/components" },
};

export default function ComponentsPage() {
  return (
    <main className="inner-page">
      <header className="inner-header page-width">
        <Link className="inner-brand" href="/"><span>G</span> Giorgiy / LODEX</Link>
        <nav aria-label="Section navigation">
          <a href="/work">Work</a>
          <a className="active" href="/components">Components</a>
          <a href="/services">Services</a>
          <a href="/career">Career</a>
        </nav>
        <a className="inner-contact" href="mailto:gshepov@proton.me?subject=Reusable%20software%20components">Let&apos;s talk ↗</a>
      </header>

      <section className="inner-hero page-width">
        <p className="eyebrow">Reusable engineering foundation</p>
        <h1>Build the next system from proven pieces.</h1>
        <p>
          The products are different. The durable capabilities underneath them
          are designed to be reused, adapted, and improved.
        </p>
      </section>

      <section className="component-ledger page-width" aria-label="Component library">
        {capabilities.map((component, index) => (
          <article key={component.name}>
            <div className="ledger-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="ledger-main">
              <div className="ledger-title">
                <h2>{component.name}</h2>
                <span>{component.maturity}</span>
              </div>
              <p>{component.description}</p>
              <div className="ledger-meta">
                <div><small>Used in</small><strong>{component.projects.join(" · ")}</strong></div>
                <div><small>Foundation</small><strong>{component.stack}</strong></div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="inner-cta page-width">
        <p className="eyebrow">Reuse what fits</p>
        <h2>Start closer to the useful part of your product.</h2>
        <a className="button button-primary" href="mailto:gshepov@proton.me?subject=Reusable%20component%20conversation">Discuss the foundation <span>↗</span></a>
      </section>
    </main>
  );
}
