# mariopeterson.com

Personal site for Mario Peterson. This is a real site that goes on job applications and a resume. It is not a class project and must never read as one. Do not mention Noble Desktop, coursework, or "capstone" anywhere on the site.

## What this is

One long scrolling page, section by section, each section with one interactive component. Same skeleton and rhythm as the existing Korea site in this repo (index.html, styles.css, script.js), with Mario's material in place of Korea's. Separate pages only for individual case studies and the resume.

Audience, in priority order:
1. A recruiter or hiring manager clicking from LinkedIn, on a phone, for 40 seconds. Needs: who he is, proof he builds things, proof he can talk about tech, a way to reach him.
2. Enlisted veterans and career changers who found him through a video or post and want to see the path.
3. Future freelance clients (AI automation, partner programs). One quiet line, no pricing page.

## Rules

- Content comes from content.md. Never invent copy, facts, project descriptions, or quotes. If content.md is missing something, leave a clearly marked TODO in the HTML and say so; do not fill the gap.
- Start from what exists. Keep the structure of index.html, styles.css, and script.js. Reuse the components already built there: hamburger nav, smooth scroll, rotating fact button, tabs, carousel, region map, lightbox, reveal-on-scroll. Do not rebuild them from scratch.
- When a new layout is needed, use a pattern from reference/Class Files (see map below). Do not invent a layout when a Class Files pattern exists.
- Use the techniques from reference/, never the visual design. No Noble fonts, colors, images, or copy survive.
- Vanilla HTML, CSS, JS. No frameworks, no build step, no Tailwind, no component libraries. Bootstrap (the carousel, plus container and my-5 utilities) and GSAP (the scroll reveals) are already in the Korea site; keep them only where a component depends on them, and remove Bootstrap utility classes from new markup. Prefer plain CSS Grid and Flexbox.
- Mobile first. Check every section at 380px wide before calling it done.
- Respect prefers-reduced-motion for every animation. Use semantic HTML. Alt text on every image.
- One change per session. Build one section, commit on a branch, stop. Do not restyle five sections when asked to restyle one.
- Before writing code for a new section, describe the layout and design choices in two or three sentences and wait for approval.
- If unsure about a design decision, ask. Do not default.

## Style

Direction: precision and restraint, with warmth from the Korea layer and Mario himself as the human element. Editorial, light, documentary. Not a dark developer portfolio, not a travel site.

- Palette: paper white background (#faf9f6), near-black ink (#161616), one accent: deep red (#b8232f) used only for the glowing timeline markers, active nav state, one rule under the positioning line, and link hover. Mid gray (#6b6b6b) for metadata. Nothing else. No gradients.
- Type: IBM Plex family via Google Fonts. Plex Sans for body and headings, Plex Mono for section labels, metadata, and dates, Plex Sans KR for any Korean text. No other fonts. Headings are heavy (600–700) and tight; body is 400 at 1.05rem, line-height 1.65.
- Structure: visible grid. Hairline rules (1px, #e5e2dc) between sections. Section labels in Plex Mono, uppercase, letter-spaced, numbered: "01 / WORK". Each section heading carries a real `<span class="section-label">01 / WORK</span>` inside it; adding those spans to index.html is approved. Case studies numbered.
- Cards: square corners or a 2px radius at most. No drop shadows. Borders, not shadows, for separation.
- Motion: fade-up on scroll (already in script.js), hover states, smooth scroll. Nothing else. No parallax, no floating shapes, no typewriter effects, no particle backgrounds.
- The signature interaction is the decision timeline in 03 / PATH: a horizontal line with glowing red markers (soft box-shadow pulse, once, on reveal; steady glow after). Click a marker to expand that step. This is the only place the "glow" appears. There is no separate About section; 03 / PATH does that work.
- Imagery: real photos of Mario and his actual places. No stock, no illustrations, no icons, no emoji, no AI-generated images.
- Dark mode: a toggle in the nav, off by default. Same palette inverted; accent unchanged.

Do not do: rounded pill buttons, glassmorphism, gradient text, icon grids, three-column "feature" blocks with icons, hero text over a blurred photo, testimonial sliders, cookie-cutter "skills" progress bars.

## Section map (Korea site → Mario site)

| Korea section | Becomes | Component kept |
|---|---|---|
| Hero "Discover Korea 대한민국" | Name, Korean transliteration under it, positioning line, photo, scroll cue (↓) | hero, scroll link |
| Intro + "Did you know?" | Short version of the path; rotating fact about Mario | fact-btn / showRandomFact |
| Culture & Heritage | 01 / WORK: things he has built | two-column text + image |
| Food tabs | 02 / TAKES: tabs for Tech, Veteran transition, Korea; each tab a short intro and one video | tabs |
| Glimpses carousel | 03 / PATH: the decision timeline (see Style); carousel cards become timeline steps with Hangul labels | carousel → timeline |
| Regions map + picker | 04 / STACK: Microsoft, Google Cloud, n8n, Claude Code, Korean; pick one to see detail | region grid + select |
| — (new) | Certifications strip: one line in Plex Mono, directly under 04 / STACK | plain text line |
| Postcards lightbox | 05 / PHOTOS: six photos for v1, Mario's pick from the eight candidates in content.md | gallery-grid + lightbox |
| Plan Your Visit cards | 06 / CONTACT: three cards for v1 — email, resume PDF, LinkedIn + GitHub; services line as caption. No contact form in v1; a form comes later, with a Node backend. The only interaction here is a copy-email button on the email card; nothing more | three cards |
| Footer | Footer with links | site-footer |

## Class Files map (reference/Class Files)

Use the "Done" version of each exercise as the pattern.

- Site nav and hamburger: 1-Web Dev Class / Revolution Travel Ready for Nav Styles; JS class hamburger
- Hero, buttons: 1-Web Dev Class / Hipstirred CSS Buttons Done, Hipstirred Custom Fonts Done
- Work card grid: 3 - Flexbox Grid Class / Done / Grid Image Gallery + Grid Minmax
- Case study pages: 3 - Flexbox Grid Class / Done / Grid Template Areas + Grid Article
- Contact cards: 3 - Flexbox Grid Class / Done / Flexbox Pricing Grid (structure only)
- Contact form (later, not v1; ships with the Node backend): 1-Web Dev Class / Hipstirred Form Style; Revolution Travel Contact Done
- Vertical centering: 3 - Flexbox Grid Class / Done / Grid Vertical Centering
- Resume page: 1-Web Dev Class / Resume Done

reference/ is gitignored. It is licensed course material and must never be committed or copied into the public site.

## Files

- index.html, styles.css, script.js: the site
- content.md: all copy and facts; the single source of truth
- img/: photos, optimized, no larger than 300KB each
- work/<slug>.html: case study pages
- resume.html and resume.pdf
- reference/: Class Files and PDFs (gitignored)

## Workflow

- Branch per section, named for the section: hero, work, takes, path, stack, photos, contact
- Commit messages in the imperative: "Add timeline markers", not "Added"
- Merge to main, check on a phone, then start the next section
- GitHub Pages serves main

## Links

- GitHub: https://github.com/mariopeterson
- Existing Korea site: https://mariopeterson.github.io/Projects/
- LinkedIn: TODO
- Email for contact: TODO
