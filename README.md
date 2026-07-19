# Giorgiy.org

Primary product, portfolio, component, and services website for Giorgiy Shepov
and LODEX Software.

The public web presence uses two intentional repositories:

- **[`giorgiy.org`](https://github.com/george-shepov/giorgiy.org)** — products, reusable components, software services, and case studies.
- **[`giorgiy-shepov.com`](https://github.com/george-shepov/giorgiy-shepov.com)** — a lightweight career-focused front door for recruiters and engineering opportunities.

They share a visual language and cross-link to each other, but they are not
duplicate mirrors. See
[`docs/DOMAIN_STRATEGY.md`](docs/DOMAIN_STRATEGY.md) for the canonical and host-routing plan.

## Current routes

- `/` — LODEX and portfolio homepage
- `/work` — selected product portfolio
- `/components` — reusable component library
- `/services` — service offerings
- `/career` — integrated career-route fallback and design reference
- `/work/docket-intelligence-workbench` — detailed case study

## Technology

- Next.js and React
- TypeScript
- Tailwind CSS
- Vinext and Cloudflare-compatible output
- GitHub Actions validation

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run build
npm run validate:artifact
```

## Content model

Project, capability, and service data is centralized in `app/site-data.ts` so
the homepage and deeper routes can reuse consistent status, copy, and links.

## Deployment

The first release is prepared for checkpoint hosting and for a later GitHub
Actions-to-VPS pipeline. VPS deployment credentials and DNS remain external to
the repository.
