# Ringstack

A responsive pay-per-call and lead generation website built with React, Vite, and React Router.

## Getting started

```sh
npm install
npm run dev
```

## Pages

- `/` — Home
- `/industries` and `/industries/:slug` — Industry index and six sector pages
- `/technology`, `/advertisers`, `/publishers` — Campaign and partner information
- `/about` — Ringstack’s approach
- `/resources` and `/blog` — Resource listings
- `/contact` — Enquiry form
- `/privacy` and `/terms` — Website policy pages
- `/blog/:slug` — Individual articles

Page components are lazy-loaded by route. Shared navigation and footer components live in `src/components/`; route components live in `src/pages/`.

The site uses a light/dark theme, self-hosted Inter Variable, responsive layouts and the shared content source in `src/data/siteContent.js`. Contact email is `hello@ringstackltd.com`. The contact form validates required fields and opens the visitor’s email application with a prefilled message.

Phone, address, opening hours, statistics and social links are omitted until verified business details are provided. Review the Privacy and Terms copy against Ringstack’s actual processes and agreements before publication. Optional login links can be configured with `VITE_ADVERTISER_LOGIN_URL` and `VITE_PUBLISHER_LOGIN_URL`.

## Checks

```sh
npm run lint
npm run build
```
