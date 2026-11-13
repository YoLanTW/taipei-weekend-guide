# Taipei Weekend Guide

## Project Introduction

### What is the purpose of the website?

Taipei Weekend Guide is a small digital guide for people who want a flexible weekend in Taipei. It introduces four different city moods—old streets, night-market food, mountain tea, and city lights—and helps visitors turn those ideas into a simple plan.

### Who are the intended users?

The intended users are first-time visitors, exchange students, and local friends who want an easy starting point rather than a long list of tourist attractions. The writing is short and the main actions are visible on every page.

### Why did I choose this topic?

Taipei is a useful topic for this project because it naturally combines locations, transportation, food, and personal preferences. It also gives the website a clear reason to include a destination grid, a comparison table, and interactive planning tools.

## Website Structure

The website contains four connected HTML pages:

- `index.html` is the introduction page. It explains the idea of the guide and links visitors to the other pages.
- `destinations.html` shows four destination cards in a 2x2 CSS grid. It also contains the transport comparison table.
- `itinerary.html` is the first interactive feature. Visitors select activities and see the number of stops and estimated minutes update immediately.
- `tips.html` is the second interactive feature. Visitors answer three questions and receive a travel-style recommendation.

Every page uses the same navigation menu, the same external stylesheet, and the same JavaScript file. Internal links connect the pages and anchor links jump to particular destination cards. External links point to the official Taipei Travel website and Taipei Metro information.

## HTML and CSS Explanation

### HTML elements

1. **`<nav>`** groups the main page links and gives the menu an accessible label. Keeping the same navigation on all four pages makes the site easier to use.
2. **`<article>`** groups each destination card as a meaningful piece of content. This makes the four destinations easy to scan and keeps the page structure semantic.
3. **`<table>`** presents the suggested travel connections between guide stops. The table uses a caption, table headings, and row headings so the information is understandable as a comparison.

The site also uses headings, paragraphs, lists, forms, fieldsets, labels, images with `alt` text, and semantic sections.

### CSS properties

1. **`display: grid`** creates the 2x2 destination layout and the responsive page layouts. The grid changes to one column on smaller screens.
2. **`border-radius`** is used on buttons, tags, the brand mark, and the activity controls to create the softer travel-journal visual style.
3. **`transition`** creates small hover movements and colour changes on cards, buttons, links, and images. These effects show which elements are interactive without changing the page structure.

The external file `css/style.css` also defines shared colour variables, typography, spacing, focus outlines, table styling, and mobile breakpoints.

## JavaScript Explanation

### Feature 1: Live itinerary builder

The itinerary page has four checkboxes. Each checkbox stores an activity id, name, and duration in `data-*` attributes. When a checkbox changes, the JavaScript collects the selected ids and passes them to `getPlannerSummary()`.

```javascript
const summary = getPlannerSummary(selectedIds, activities);
count.textContent = summary.count;
duration.textContent = summary.duration;
list.innerHTML = summary.items.map((item) => `<li>${item}</li>`).join('');
```

`getPlannerSummary()` finds the selected activity objects, counts them, adds their durations, and returns their names. The browser code then changes the count, duration, and list elements in the DOM. This gives immediate feedback without reloading the page.

### Feature 2: Travel-style quiz

The quiz uses three radio-button groups. When the visitor submits the form, JavaScript reads the answers with `FormData`. If any group is unanswered, the page displays a helpful validation message. Otherwise, `calculateQuizResult()` compares the answers with the recommendation key and returns a label and message.

```javascript
const result = calculateQuizResult(answers, {
  food: 'food',
  pace: 'slow',
  time: 'night'
});

resultElement.innerHTML = `<strong>${result.label}</strong><br>${result.message}`;
```

The JavaScript interacts with the HTML form, radio inputs, and result paragraph through DOM selection and text updates. The two features have different purposes: one builds a time-based plan and the other gives a preference-based recommendation.

## Screenshots and Visual Checks

The report includes rendered previews of the homepage and destination grid. The implementation was also checked in a browser by opening all four pages, selecting an itinerary activity, submitting the quiz, and checking the mobile layout for horizontal overflow.

## Reflection

### What was the most challenging part?

The most challenging part was keeping four separate pages visually consistent while giving each page a different purpose. Shared navigation, colour variables, and one external stylesheet helped keep the design unified.

### What did I learn?

I learned how semantic HTML, CSS grid, and DOM manipulation work together. I also learned that small pure JavaScript functions are easier to test and explain than putting every calculation directly inside an event listener.

### What would I improve with more time?

With more time, I would add more destination data and let visitors save or reorder their selected activities. I would also add more detailed accessibility testing with a screen reader and verify current transport information before a real trip.

