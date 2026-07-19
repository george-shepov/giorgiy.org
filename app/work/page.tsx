import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../site-data";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected software systems, products, and reusable engineering work by Giorgiy Shepov and LODEX Software.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="inner-page">
      <header className="inner-header page-width">
        <Link className="inner-brand" href="/"><span>G</span> Giorgiy / LODEX</Link>
        <nav aria-label="Section navigation">
          <a className="active" href="/work">Work</a>
          <a href="/components">Components</a>
          <a href="/services">Services</a>
          <a href="https://giorgiy-shepov.com/">Career</a>
        </nav>
        <a className="inner-contact" href="mailto:gshepov@proton.me?subject=Project%20conversation">Let&apos;s talk ↗</a>
      </header>

      <section className="inner-hero page-width">
        <p className="eyebrow">Selected work / 2024—2026</p>
        <h1>Products with an operational reason to exist.</h1>
        <p>
          A curated portfolio of systems for monitored records, offline work,
          commerce, document intelligence, learning, and deployment.
        </p>
      </section>

      <section className="portfolio-grid page-width" aria-label="Project portfolio">
        {projects.map((project) => (
          <article className={`portfolio-card tone-${project.tone}`} key={project.slug}>
            <div className="portfolio-topline">
              <span>{project.number}</span>
              <span>{project.status}</span>
            </div>
            <p className="portfolio-type">{project.eyebrow}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a href={project.href}>{project.linkLabel} <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </section>

      <section className="inner-cta page-width">
        <p className="eyebrow">A project starts with a useful problem</p>
        <h2>Tell me what is slow, repetitive, fragile, or difficult to see.</h2>
        <a className="button button-primary" href="mailto:gshepov@proton.me?subject=Project%20conversation">Start a conversation <span>↗</span></a>
      </section>
    </main>
  );
}
