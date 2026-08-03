# Centennial Seminary Site

Static site for Centennial High School Seminary with:

- lesson calendar generated from the provided pacing guide
- makeup-work submission form
- an automatically selected current or upcoming lesson week
- a four-day pacing calendar based on the 2026-27 Old Testament, Part 2 guide
- email makeup-work and contact forms

## Local files

- `index.html`: main site markup
- `styles.css`: site styling
- `script.js`: pacing-guide data, announcements, and form behavior
- `assets/docs/2026-27-ot-part-2-4-day-pacing-guide.pdf`: the current pacing guide
- `netlify/functions/submit-makeup.js`: makeup-work email submission function
- `netlify/functions/submit-contact.js`: contact-form email submission function
- `assets/images/`: provided seminary photos

## Deployment notes

This project is ready for static hosting. If you deploy on Netlify, configure these environment
variables so the makeup form can send directly from the website:

- `RESEND_API_KEY`
- `RESEND_FROM` (a verified sender, such as `Centennial Seminary <no-reply@centennialseminary.com>`)

Example `RESEND_FROM`:

- `Centennial Seminary <no-reply@centennialseminary.com>`

Without those environment variables, each form falls back to opening the student's local email app
addressed to `admin@centennialseminary.com`.

The site can be deployed to Netlify or another static host. Netlify is required for the hosted form
submissions above; on another host the email-draft fallback still works.

## Updating lessons or events

- lesson data and announcements are embedded in [script.js](/Users/aaronlowe/Desktop/Codex/centennial-seminary-site/script.js)

## Adding teacher profiles

Replace the placeholder profile cards in [index.html](/Users/aaronlowe/Desktop/Codex/centennial-seminary-site/index.html) once names, short biographies, and photos are available.
