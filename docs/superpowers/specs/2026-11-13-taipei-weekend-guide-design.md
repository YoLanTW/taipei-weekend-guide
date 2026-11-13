# Taipei Weekend Guide Design

## Intent

Build a small, public, static website for the Web Programming Midterm Project. The site will help first-time visitors plan a Taipei weekend through four connected pages, local illustrations, and two clear JavaScript interactions.

## Goals

- Satisfy every explicit HTML, CSS, JavaScript, GitHub, and report requirement in the assignment PDF.
- Keep the code understandable enough to explain in an oral examination.
- Use only HTML, external CSS, and vanilla JavaScript.
- Make the site responsive, keyboard-friendly, and usable on a phone.

## Non-goals

- No login, database, booking flow, API integration, or server-side code.
- No framework, CSS library, website builder, template, or external JavaScript library.
- No attempt to make real-time claims about opening hours or prices.

## Constraints

- At least four interconnected HTML pages.
- A navigation menu must appear on every page.
- Include a 2x2 `<div>` grid, images with `alt`, a list, a meaningful table, internal links, and external links.
- Include at least two meaningful JavaScript features with DOM manipulation.
- Submit a GitHub repository URL, a functional GitHub Pages URL, and a Code Explanation Report PDF URL.
- Report text must be written in the student's own words and include screenshots and explanations.

## Approaches considered

1. **Single-page scroll site:** Fastest to build, but fails the four-page requirement.
2. **Framework-based site:** Better component reuse, but explicitly forbidden by the assignment.
3. **Four-page vanilla static site (selected):** Directly satisfies the rubric, has no build dependency, and is easiest to explain and deploy through GitHub Pages.

## Selected experience

The site is titled **Taipei Weekend Guide**. It includes:

- `index.html`: landing page and site purpose.
- `destinations.html`: four destination cards, a 2x2 grid, and a transport table.
- `itinerary.html`: interactive itinerary builder.
- `tips.html`: interactive travel-style quiz and practical tips.

The first JavaScript feature lets users add or remove activities and see a live plan summary. The second scores a three-question quiz and returns a travel recommendation. Both features visibly update DOM content.

## Visual direction

Use a warm editorial travel-journal style: ink navy, jade green, coral accent, paper background, bold serif display headings, and readable sans-serif body text. Local SVG illustrations avoid broken remote image URLs while still satisfying the image and `alt` requirement.

## Verification

- Node's built-in test runner checks required files, page navigation, external CSS, and the two pure JavaScript behaviors.
- A local preview and browser smoke test will verify links and interactions.
- The final report will explain the actual implementation and include screenshots.

