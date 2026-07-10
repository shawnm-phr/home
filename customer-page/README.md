# PeoplesHR — Customers Page

A standalone build of the Customers page (`peopleshr.com/customers`), split into separate files for easier review, version control, and handoff.

## File structure

```
customers-page/
├── index.html          Page markup
├── style.css           All page styles (base tokens + component CSS)
├── script.js           All page behavior (carousels, filters, modal, switcher)
└── README.md           This file
```

## Running it locally

Open `index.html` directly in a browser — no server required. Everything
(including the featured case-study content) is plain HTML/CSS/JS with no
external data file to fetch.

## What's in each file

**index.html**
Page markup only. No inline `<style>` or `<script>` — both are linked at
the bottom/top respectively. Sections in order: hero, video testimonials,
logo marquee, featured case studies, story library, CTA strip, plus the
shared video modal markup.

**style.css**
Everything from the page's design system tokens (colors, type, spacing)
through every component's styles. On the live WordPress site this content
is appended to `phrhome.css` as a delta block — the `<!-- ... -->` comment
at the top of `index.html` shows where `phrhome.css` would be linked
instead in production.

**script.js**
Six self-contained IIFEs, each independent and safe to remove or reorder:

1. Video testimonial carousel (prev/next + responsive item count)
2. Video modal (opens YouTube embeds for any `[data-youtube]` card)
3. Story library filters (industry + module, desktop sidebar and mobile
   dropdown variants)
4. Smooth scroll for the hero CTA
5. Testimonial slider (currently dead code — no matching markup exists in
   this version of the page; kept for parity with the production file,
   safely no-ops via an early return)
6. Featured case-study switcher — the four story objects (Brandix, SMSGT,
   Peoples Bank, Pyramid Wilmar) live directly in this file as a plain
   JS array near the top of the section. Renders the first story on load
   and re-renders with a fade transition whenever a logo button is
   clicked.

On the live WordPress site this is appended to `phrhome.js` as a delta
block, same pattern as the CSS.

**To edit a story:** open `script.js`, find the `stories` array
inside section 6, and edit the relevant object directly — `headline`,
`challenge`, `solution`, `modules`, `img`, and `tint` are all plain
strings/arrays, no templating or build step involved.

**To add a fifth story:** append an object to the `stories` array, and add
a matching logo button to `#sf2-logos` in `index.html` with
`data-idx="4"`.

## Known placeholders

A few pieces of content are intentionally left as placeholders pending
real assets/copy:

- `[XX]%`, `[X]×`, `[X] days` — metric values across case studies and
  library cards
- `[Name] [Surname]` — speaker attributions on video testimonials
- `REPLACE_YT_ID_*` — YouTube video IDs not yet supplied for some carousel
  cards
- Several customer logos use stand-in images until final brand assets are
  provided (see note below on `dev.peopleshr.com` logo paths)

## Production notes (WordPress)

- This page is designed to be embedded inside the WordPress theme, so the
  navbar/footer markup is intentionally not included here.
- `style.css` and `script.js` get appended to the shared
  `phrhome.css` / `phrhome.js` files at build time, marked with comments
  (e.g. `/* customers — new classes */`), rather than replacing them.
- Don't place HTML comments inside `<style>` blocks when merging — it
  breaks CSS parsing for everything after it in some browsers.
- The Brandix, Peoples Bank, and Pyramid Wilmar logo URLs in
  `customer-app.js` point to `dev.peopleshr.com/wp-content/uploads/2026/04/`
  — these paths were assumed from naming convention and have not been
  confirmed to exist. Verify before deploying, and swap the Brandix
  Wikipedia stand-in logo for the real brand asset.
