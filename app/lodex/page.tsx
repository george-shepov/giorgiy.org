import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./lodex.css";

export const metadata: Metadata = {
  title: "LODEX Software",
  description:
    "The official LODEX Software brand system: identity, positioning, visual language, and usage standards.",
  alternates: { canonical: "https://lodex.giorgiy.org" },
  openGraph: {
    title: "LODEX Software",
    description: "Software engineering for systems that need to work, scale, and last.",
    url: "https://lodex.giorgiy.org",
    siteName: "LODEX Software",
    type: "website",
  },
};

const capabilities = [
  "Custom software",
  "AI-assisted systems",
  "Cloud and DevOps",
  "Automation",
  "Data platforms",
  "Product engineering",
];

const principles = [
  {
    number: "01",
    title: "Build for use",
    copy: "Useful software beats decorative complexity. Every system begins with a real workflow, a measurable outcome, and a clear owner.",
  },
  {
    number: "02",
    title: "Design for change",
    copy: "Products should become easier to extend over time. Architecture, automation, and documentation are part of the product—not cleanup work.",
  },
  {
    number: "03",
    title: "Ship with discipline",
    copy: "Fast delivery matters, but speed without reliability creates debt. LODEX combines rapid iteration with production-grade engineering controls.",
  },
];

export default function LodexPage() {
  return (
    <main className="lodex-site">
      <header className="lodex-header shell">
        <Link href="/lodex" className="lodex-header-logo" aria-label="LODEX Software home">
          <Image src="/lodex/logo-primary.svg" alt="LODEX Software" width={1000} height={250} priority />
        </Link>
        <nav aria-label="LODEX navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#identity">Identity</a>
          <a href="#standards">Standards</a>
        </nav>
        <a className="lodex-contact" href="mailto:gshepov@proton.me">Start a project ↗</a>
      </header>

      <section className="lodex-hero shell">
        <div className="hero-copy">
          <p className="lodex-kicker">Independent software engineering studio</p>
          <h1>Engineering systems that <span>work, scale, and last.</span></h1>
          <p className="lodex-lede">
            LODEX designs and builds practical software products, automation, AI workflows, and reusable infrastructure for organizations that need clarity—not more technical noise.
          </p>
          <div className="lodex-actions">
            <a className="lodex-primary" href="mailto:gshepov@proton.me">Discuss a project <span>↗</span></a>
            <a className="lodex-secondary" href="#identity">View the brand system</a>
          </div>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <div className="mark-grid" />
          <div className="mark-orbit orbit-a" />
          <div className="mark-orbit orbit-b" />
          <div className="x-mark"><i /><b /></div>
          <span className="mark-label label-one">AI</span>
          <span className="mark-label label-two">CLOUD</span>
          <span className="mark-label label-three">DATA</span>
          <span className="mark-label label-four">BUILD</span>
        </div>
      </section>

      <section className="lodex-strip" id="capabilities">
        <div className="shell capability-row">
          {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
        </div>
      </section>

      <section className="lodex-section shell">
        <div className="section-intro">
          <p className="lodex-kicker">Positioning</p>
          <h2>One engineering partner from idea to production.</h2>
          <p>LODEX turns fragmented requirements, manual processes, and half-built prototypes into coherent systems with a clear path forward.</p>
        </div>
        <div className="principle-grid">
          {principles.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="identity-section" id="identity">
        <div className="shell">
          <div className="section-intro identity-heading">
            <p className="lodex-kicker">Official identity</p>
            <h2>A restrained core with a distinctive signal.</h2>
            <p>The wordmark stays direct and technical. The split blue X is the signature element and may stand alone as the brand icon.</p>
          </div>

          <div className="logo-board logo-board-light">
            <Image src="/lodex/logo-primary.svg" alt="Primary LODEX Software logo" width={1000} height={250} />
            <span>Primary / light background</span>
          </div>
          <div className="logo-board logo-board-dark">
            <Image src="/lodex/logo-dark.svg" alt="LODEX Software logo for dark backgrounds" width={1000} height={250} />
            <span>Reversed / dark background</span>
          </div>

          <div className="identity-grid" id="standards">
            <article className="color-card">
              <p className="card-label">Core palette</p>
              <div className="swatches">
                <div><i className="navy" /><strong>LODEX Navy</strong><code>#08265F</code></div>
                <div><i className="electric" /><strong>Signal Blue</strong><code>#0B4DFF</code></div>
                <div><i className="sky" /><strong>Edge Blue</strong><code>#38A8FF</code></div>
                <div><i className="white" /><strong>White</strong><code>#FFFFFF</code></div>
              </div>
            </article>

            <article className="rules-card">
              <p className="card-label">Usage rules</p>
              <ul>
                <li>Preserve generous clear space around the wordmark.</li>
                <li>Use only approved navy, white, or blue treatments.</li>
                <li>Do not stretch, outline, rotate, or add effects to the core logo.</li>
                <li>Use 3D signage and maximalist treatments only as campaign artwork.</li>
                <li>Keep the split blue X consistent across products and properties.</li>
              </ul>
            </article>

            <article className="voice-card">
              <p className="card-label">Brand voice</p>
              <blockquote>Precise. Capable. Direct. Optimistic without hype.</blockquote>
              <p>Explain the result before the technology. Prefer proof, working software, and clear language over inflated claims.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="lodex-cta shell">
        <div>
          <p className="lodex-kicker">LODEX Software</p>
          <h2>Describe the problem.<br />We will engineer the path forward.</h2>
        </div>
        <a className="lodex-primary" href="mailto:gshepov@proton.me">gshepov@proton.me <span>↗</span></a>
      </section>

      <footer className="lodex-footer shell">
        <Image src="/lodex/logo-primary.svg" alt="LODEX Software" width={1000} height={250} />
        <p>Software engineering · AI · cloud · automation</p>
        <p>© {new Date().getFullYear()} LODEX Software</p>
      </footer>
    </main>
  );
}
