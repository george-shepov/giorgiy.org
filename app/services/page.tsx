import type { Metadata } from "next";
import Link from "next/link";
import { services } from "../site-data";

export const metadata: Metadata = {
  title: "Software Services",
  description:
    "Focused software fixes, product engineering, AI and document workflows, and engineering leadership from Giorgiy Shepov and LODEX Software.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="inner-page services-page">
      <header className="inner-header page-width">
        <Link className="inner-brand" href="/"><span>G</span> Giorgiy / LODEX</Link>
        <nav aria-label="Section navigation">
          <a href="/work">Work</a>
          <a href="/components">Components</a>
          <a className="active" href="/services">Services</a>
          <a href="/career">Career</a>
        </nav>
        <a className="inner-contact" href="mailto:gshepov@proton.me?subject=Software%20services">Let&apos;s talk ↗</a>
      </header>

      <section className="inner-hero page-width">
        <p className="eyebrow">Software services</p>
        <h1>Bring the problem. We&apos;ll shape the system.</h1>
        <p>
          Start with a focused fix, a product build, a difficult document
          workflow, or technical leadership that stays close to delivery.
        </p>
      </section>

      <section className="service-list page-width" aria-label="Service offerings">
        {services.map((service) => (
          <article key={service.title}>
            <span className="service-number">{service.number}</span>
            <div>
              <p className="service-label">{service.label}</p>
              <h2>{service.title}</h2>
            </div>
            <div className="service-copy">
              <p>{service.description}</p>
              <strong>{service.detail}</strong>
            </div>
          </article>
        ))}
      </section>

      <section className="engagement-path page-width">
        <div>
          <p className="eyebrow">A clear first conversation</p>
          <h2>Problem → constraints → smallest credible result.</h2>
        </div>
        <ol>
          <li><span>01</span> Describe the current workflow and pain point.</li>
          <li><span>02</span> Identify the safest, most valuable first slice.</li>
          <li><span>03</span> Build, deploy, observe, and improve.</li>
        </ol>
      </section>

      <section className="inner-cta page-width">
        <p className="eyebrow">No polished specification required</p>
        <h2>Send the rough version. We can make it concrete together.</h2>
        <a className="button button-primary" href="mailto:gshepov@proton.me?subject=Software%20project">Describe what you need <span>↗</span></a>
      </section>
    </main>
  );
}
