# Domain strategy

The two domains are intentionally split by audience and repository. They share
a visual language and cross-link to each other, but they are not mirrors.

## giorgiy.org

Primary product and services identity for Giorgiy Shepov and LODEX Software.

Source: `george-shepov/giorgiy.org`

- `/` — studio and portfolio homepage
- `/work` — curated product portfolio
- `/components` — reusable engineering capabilities
- `/services` — productized service offerings
- `/work/docket-intelligence-workbench` — first complete case study

This domain is canonical for portfolio, product, component, and service content.

## giorgiy-shepov.com

Career-focused front door for recruiters, hiring managers, and technical
leadership opportunities.

Source: `george-shepov/giorgiy-shepov.com`

The dedicated static site declares `https://giorgiy-shepov.com` as its
canonical URL. Product and service links return visitors to Giorgiy.org. The
main application retains `/career` as a design reference and fallback, but it
is not included in the Giorgiy.org sitemap.

## Host routing

At the reverse proxy or hosting layer:

1. Deploy the application repository to `giorgiy.org`.
2. Serve the career repository's static files at `giorgiy-shepov.com`.
3. Redirect both `www` hostnames to their apex equivalents.
4. Keep HTTPS and HSTS enabled for both domains.
5. Do not publish identical homepage HTML on both domains.

This gives each audience a clear purpose, makes the career site independently
portable, and avoids duplicate-content SEO problems.
