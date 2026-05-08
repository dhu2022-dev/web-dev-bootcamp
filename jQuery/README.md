# jQuery (sections 19–20)

[**jQuery**](https://jquery.com/) is a JavaScript library that wraps the DOM behind a **single, consistent API**: CSS-style **selectors**, shorthand for **events** and **effects**, and fewer browser quirks than raw DOM code used to have. It was the default way to build interactive pages for a long time (and still turns up in legacy stacks), so putting it in the bootcamp **bridges vanilla JavaScript and “installing a library”**—the same muscle you use later with npm packages and bigger frameworks.

**This folder** is my work from **Dr. Angela Yu’s** *[The Complete Full-Stack Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)*. **Section 19** walks the API on a small interactive page (**[`index.html`](./index.html)**, [`index.js`](./index.js), [`styles.css`](./styles.css))—selectors, manipulation, events, and motion. **Section 20** turns the same ideas into the **Simon** memory game—the course layers the behavior across the lessons, and [`Simon Game/`](./Simon%20Game/) is the playable result. [Repo overview](../README.md).

**Contents:** [Competencies](#competencies) · [What’s here](#whats-here) · [Simon game](#simon-game) · [Run locally](#run-locally) · [Related](#related)

---

## Competencies

| Area | What’s in here |
|------|----------------|
| **jQuery setup** | CDN include, **`$(document).ready`**, chaining vs vanilla `querySelector` |
| **DOM** | Selecting, **`text`/`html`/`attr`**, **`addClass`** / **`removeClass`** |
| **Events** | **`click`**, **`keydown`** on inputs and **`document`**, **`mouseover`**, **`.on`** |
| **Effects** | **`toggle`**, **`slideUp` / `slideDown`**, **`animate`** (sandbox) |
| **Game design** | Sequences stored in arrays, matching user input vs pattern, leveling, **`setTimeout`**-style pacing, audio feedback |

---

## What’s here

Start with the **Section 19 page** to see jQuery in isolation; open **Simon** when you want the **Section 20 capstone**.

| Artifact | Role |
|---------|------|
| [`index.html`](./index.html), [`index.js`](./index.js), [`styles.css`](./styles.css) | **Section 19** playground — deliberately rough UI; use buttons and the text field to exercise selectors, manipulation, listeners, and basic motion. |
| [`Simon Game/`](./Simon%20Game/) | **Section 20 capstone** — playable Simon with **`game.js`**, **`sounds/`**, **`styles.css`**, **`index.html`**. |

---

## Simon game

Memory game after the handheld Simon toy: **the game flashes a lengthening sequence** of quadrants (**color + tone**); you **replay it with clicks**. One wrong tap ends the round; progression adds another step until a mistake.

**Play:** **[`Simon Game/index.html`](./Simon%20Game/index.html)**

1. Press **any key** to start.
2. Watch the pattern; **repeat** by clicking matching buttons.
3. Each level **extends** the sequence once you complete it correctly.
4. Wrong move → lose sound / game over → **any key** to retry.



**Layout**

```
JQuery/
├── index.html              # Section 19 sandbox
├── index.js
├── styles.css
├── project_images/
│   └── simon-game.png
└── Simon Game/
    ├── game.js             # Logic + sequencing + input
    ├── index.html
    ├── styles.css
    └── sounds/             # quadrant + wrong-tone mp3
```

---

## Run locally

Static HTML: open **`index.html`** or **`Simon Game/index.html`** in a browser (**volume up**). No build tools.

---
