export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  status: string;
  tags: string[];
  href: string;
  linkLabel: string;
  tone: "blue" | "lime" | "sand" | "violet" | "coral";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "docket-intelligence-workbench",
    number: "01",
    title: "Docket Intelligence Workbench",
    eyebrow: "Monitored records · Document intelligence",
    description:
      "Preserve historical docket snapshots, detect meaningful changes, organize filings, and analyze records with traceable sources.",
    status: "MVP foundation",
    tags: ["FastAPI", "Change detection", "Source-grounded AI"],
    href: "/work/docket-intelligence-workbench",
    linkLabel: "Explore the workbench",
    tone: "blue",
    featured: true,
  },
  {
    slug: "fieldkit",
    number: "02",
    title: "FieldKit",
    eyebrow: "Offline-first · Shared application shell",
    description:
      "A growing suite of focused tools, training applications, and utilities that stay useful when the network does not.",
    status: "Active",
    tags: ["PWA", "Go", "Local-first"],
    href: "https://fieldkit.giorgiy.org/",
    linkLabel: "Launch FieldKit",
    tone: "lime",
    featured: true,
  },
  {
    slug: "oneof-listing-assistant",
    number: "03",
    title: "OneOf Listing Assistant",
    eyebrow: "Commerce workflow · Protected integration",
    description:
      "Phone-first inventory intake with offline capture and an ASP.NET Core boundary for secure marketplace publishing.",
    status: "Private product",
    tags: [".NET 8", "IndexedDB", "eBay APIs"],
    href: "mailto:gshepov@proton.me?subject=OneOf%20Listing%20Assistant",
    linkLabel: "Discuss a similar workflow",
    tone: "sand",
    featured: true,
  },
  {
    slug: "professional-legal-tax-assistant",
    number: "04",
    title: "Professional Legal & Tax Assistant",
    eyebrow: "Document workspace · Controlled AI",
    description:
      "A self-hosted workspace for document ingestion, source-grounded retrieval, case organization, and controlled multi-agent analysis.",
    status: "Private deployment",
    tags: ["Next.js", "FastAPI", "RAG", "Docker"],
    href: "https://legal.giorgiy.org/",
    linkLabel: "View product",
    tone: "violet",
  },
  {
    slug: "developer-interview-prep",
    number: "05",
    title: "Developer Interview Prep",
    eyebrow: "Learning product · Installable reference",
    description:
      "Searchable study decks, bookmarks, local notes, accessibility controls, and offline use in an installable PWA.",
    status: "Active",
    tags: ["PWA", "Search", "Accessibility"],
    href: "https://github.com/george-shepov/developer-interview-prep",
    linkLabel: "View on GitHub",
    tone: "coral",
  },
];

export const capabilities = [
  {
    name: "Offline-first application shell",
    maturity: "Proven",
    description:
      "Installable applications with resilient local storage, caching, search, and mobile-ready interaction patterns.",
    projects: ["FieldKit", "Developer Interview Prep", "OneOf"],
    stack: "PWA · Service workers · IndexedDB",
  },
  {
    name: "Document ingestion and cited retrieval",
    maturity: "Reusable",
    description:
      "Document processing, searchable source material, traceable answers, and human-review boundaries.",
    projects: ["Legal Assistant", "Docket Workbench"],
    stack: "FastAPI · Qdrant · PostgreSQL",
  },
  {
    name: "Source adapters and change detection",
    maturity: "Reusable",
    description:
      "Deterministic acquisition, immutable snapshots, normalization, hashing, and meaningful difference classification.",
    projects: ["Docket Workbench", "Court acquisition"],
    stack: "Python · SHA-256 · Scheduled workers",
  },
  {
    name: "Secure integration boundary",
    maturity: "Proven",
    description:
      "Keep secrets and privileged API operations away from offline or browser-facing application code.",
    projects: ["OneOf", "AI provider routing"],
    stack: ".NET · FastAPI · OAuth",
  },
  {
    name: "Identity, roles, and audit history",
    maturity: "Project-specific",
    description:
      "Account, organization, permission, and activity patterns for controlled business applications.",
    projects: ["Legal Assistant", "Business portals"],
    stack: "RBAC · Session boundaries · Audit logs",
  },
  {
    name: "Deployment and observability",
    maturity: "Proven",
    description:
      "Repeatable delivery from source control to containerized applications with health checks, SSL, and monitoring.",
    projects: ["LODEX products", "Pulseboard"],
    stack: "Docker · GitHub Actions · Nginx",
  },
];

export const services = [
  {
    number: "01",
    title: "Fix & Launch",
    label: "Focused · Fixed scope",
    description:
      "Deployment, DNS, hosting, forms, broken builds, small integrations, focused features, and workflow automation.",
    detail: "Qualified fixed-price tasks from $150–$400.",
  },
  {
    number: "02",
    title: "Build or Modernize",
    label: "Product · Platform",
    description:
      "Full-stack applications, APIs, data platforms, offline-first products, legacy modernization, and production delivery.",
    detail: "From scoped prototype to maintainable production system.",
  },
  {
    number: "03",
    title: "AI & Document Workflows",
    label: "Useful AI · Traceable sources",
    description:
      "Structured extraction, document pipelines, retrieval, model integration, and automation with human review.",
    detail: "Cloud or local models, selected for the actual workflow.",
  },
  {
    number: "04",
    title: "Engineering Leadership",
    label: "Architecture · Delivery",
    description:
      "Technical direction, delivery recovery, product planning, team coordination, and fractional engineering leadership.",
    detail: "Hands-on leadership that stays close to the code and users.",
  },
];
