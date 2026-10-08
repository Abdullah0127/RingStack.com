# Ringstack

A responsive company website for Ringstack Ltd, built with React, Vite, and React Router.

## Getting started

```sh
npm install
npm run dev
```

## Pages

- `/` — Home
- `/services` — Service catalog and project kickoff process
- `/about` — Company approach and operating principles
- `/contact` — Contact details and inquiry form
- `/blog` — Ringstack blog listing
- `/blog/:slug` — Individual blog posts

Page components are lazy-loaded by route. Shared navigation, footer, and page sections live in `src/components/`; route components live in `src/pages/`.

The responsive homepage uses Poppins headings with Manrope/Syne supporting text, an agency-style hero, service cards, feature highlights and service metrics, blog previews, an animated testimonial stack, FAQs, and a contact section. The navigation includes a dark/light theme toggle and changes to a light surface when scrolled. The blog contains sample posts; testimonial cards are explicitly marked as example content and should be replaced with approved client feedback before publishing. Interior page heroes use the same charcoal and lime palette as the homepage. The contact form validates required fields in the browser and opens the visitor’s email application with a prefilled message to `hello@ringstack.co.uk`.

## Checks

```sh
npm run lint
npm run build
```
