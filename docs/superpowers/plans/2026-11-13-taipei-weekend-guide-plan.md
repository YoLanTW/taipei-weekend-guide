# Taipei Weekend Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and prepare a four-page vanilla HTML/CSS/JavaScript Taipei travel guide that satisfies the midterm project rubric and can be published with GitHub Pages.

**Architecture:** Four standalone HTML pages share one external stylesheet and one classic JavaScript file. SVG illustrations live in `assets/`; the report source and PDF live in `docs/`. The JavaScript exposes small pure functions for the itinerary summary and quiz result, then binds them to page-specific DOM elements.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node built-in test runner, local SVG assets, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-11-13-taipei-weekend-guide-design.md`

## Global Constraints

- Only HTML, CSS, and vanilla JavaScript are allowed.
- The website must include at least four interconnected HTML pages.
- Every page must include navigation to the other pages.
- The site must include a 2x2 `<div>` grid, image `alt` text, a list, a meaningful table, internal links, and external links.
- The site must include at least two meaningful JavaScript interactions using DOM manipulation.
- The report must be a PDF, include screenshots, and explain the implementation in the student's own words.

## Review Focus

- Directly opening any page must still provide complete navigation and styling.
- Selecting and deselecting itinerary activities must keep the count, list, and total duration correct.
- Submitting the quiz with unanswered questions must not claim a completed result.
- The mobile layout must remain readable without horizontal overflow.
- Local image paths and all internal links must work from a GitHub Pages subpath.

### Task 1: Establish tests and project documentation

**Files:**
- Create: `tests/site.test.cjs`
- Create: `README.md`
- Create: `docs/superpowers/specs/2026-11-13-taipei-weekend-guide-design.md`
- Create: `docs/superpowers/plans/2026-11-13-taipei-weekend-guide-plan.md`

**Interfaces:**
- Tests consume the page files and `require('../js/script.js')` after implementation.
- README documents local preview, GitHub Pages, and submission links.

- [ ] **Step 1: Write the failing structural and behavior tests.**
- [ ] **Step 2: Run `node --test tests/site.test.cjs` and confirm it fails because the site files and JavaScript module do not exist yet.**

### Task 2: Implement the shared website shell and content

**Files:**
- Create: `index.html`
- Create: `destinations.html`
- Create: `itinerary.html`
- Create: `tips.html`
- Create: `css/style.css`
- Create: `assets/taipei-skyline.svg`
- Create: `assets/night-market.svg`
- Create: `assets/tea-hills.svg`
- Create: `assets/metro.svg`

**Interfaces:**
- Every page loads `css/style.css` and `js/script.js`.
- Every page contains the same navigation links.
- `itinerary.html` contains activity checkboxes with `data-activity-id` values and `#plan-list`, `#plan-count`, and `#plan-duration` outputs.
- `tips.html` contains quiz radio groups and `#quiz-result`.

- [ ] **Step 1: Add the four page structures, semantic sections, internal/external links, images with `alt`, list, table, and 2x2 grid.**
- [ ] **Step 2: Add responsive shared CSS, hover states, focus states, readable contrast, and consistent visual styling.**
- [ ] **Step 3: Add local SVG illustrations with descriptive accessible labels.**

### Task 3: Implement and verify JavaScript interactions

**Files:**
- Create: `js/script.js`
- Modify: `tests/site.test.cjs`

**Interfaces:**
- `getPlannerSummary(selectedIds, activities)` returns `{ count, duration, items }`.
- `calculateQuizResult(answers, answerKey)` returns `{ score, label, message }`.
- Browser code binds the itinerary builder and quiz only when their page elements exist.

- [ ] **Step 1: Implement the smallest pure functions and page bindings required by the existing failing tests.**
- [ ] **Step 2: Run `node --test tests/site.test.cjs` and confirm all tests pass.**
- [ ] **Step 3: Run a local preview and manually smoke-test navigation, itinerary updates, quiz validation, and keyboard focus.**

### Task 4: Create the Code Explanation Report and final checks

**Files:**
- Create: `docs/code-explanation-report.md`
- Create: `docs/Code-Explanation-Report.pdf`
- Modify: `README.md`

**Interfaces:**
- The report explains the project introduction, page structure, three HTML elements, three CSS properties, both JavaScript features, reflection, screenshots, and deployment steps.

- [ ] **Step 1: Write the report source in plain language tied to the actual code.**
- [ ] **Step 2: Render the report as a readable PDF and inspect its pages.**
- [ ] **Step 3: Run the full test suite and inspect the final file list.**
- [ ] **Step 4: Commit the completed project with a clear message.**
- [ ] **Step 5: Create or select the GitHub repository, push the branch, and enable GitHub Pages if credentials and repository access are available.**

