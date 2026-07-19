# Domain strategy

The two domains share one application, design system, project catalog, and
deployment pipeline. They are intentionally not mirrors.

## giorgiy.org

Primary product and services identity for Giorgiy Shepov and LODEX Software.

- `/` — studio and portfolio homepage
- `/work` — curated product portfolio
- `/components` — reusable engineering capabilities
- `/services` — productized service offerings
- `/work/docket-intelligence-workbench` — first complete case study

This domain is canonical for portfolio, product, component, and service content.

## giorgiy-shepov.com

Career-focused front door for recruiters, hiring managers, and technical
leadership opportunities. Its root should serve the application route
`/career` through an internal host-level rewrite so the browser URL remains at
the domain root.

The career route declares `https://giorgiy-shepov.com` as its canonical URL.
Product and service links return visitors to Giorgiy.org.

## Host routing

At the reverse proxy or hosting layer:

1. Serve the normal application root for `giorgiy.org`.
2. Internally rewrite only `/` to `/career` for `giorgiy-shepov.com`.
3. Redirect both `www` hostnames to their apex equivalents.
4. Keep HTTPS and HSTS enabled for both domains.
5. Do not publish identical homepage HTML on both domains.

This preserves one codebase while giving each audience a clear purpose and
avoiding duplicate-content SEO problems.
