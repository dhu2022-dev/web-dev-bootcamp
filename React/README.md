# React (section 36)

**[React](https://react.dev/)** (+ **Vite**) lesson apps from **Dr. Angela Yu’s** *[The Complete Full-Stack Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)* (Udemy **section 36**). Each numbered folder is its own runnable mini-app (**React 17**, **JSX**, **functional components**, **`useState`**). Broader archive: [repo overview](../README.md).

**Contents:** [Competencies](#competencies) · [Keeper notes (capstone)](#keeper-notes-capstone) · [Lesson bands](#lesson-bands) · [Run locally](#run-locally) · [Navigate this repo](#navigate-this-repo)

---

## Competencies

| Area | What’s in here |
| --- | --- |
| **JSX** | Elements, embedding expressions, attributes, camelCase props, inline style objects |
| **Components & modules** | Splitting UI, **`import`** / **`export`**, reusable pieces |
| **Data flow** | **Props**, mapping lists to components, lifting state, component trees |
| **State & UX** | **`useState`**, conditional rendering, events, controlled **forms**, nested state updates |
| **Modern JS** | Arrow functions, **destructuring**, **spread** for immutable updates |
| **Ecosystem** | **Vite** dev server, **`npm run dev`**, peek at **React DevTools** |

---

## Keeper notes (capstone)

Google Keep–style notes app threaded across **four** checkpoints—each folder builds on the last:

[**`293-keeper-app-part-1-challenge`**](./293-keeper-app-part-1-challenge) → [**`302-keeper-app-part-2-starting`**](./302-keeper-app-part-2-starting) → [**`319-keeper-app-part-3-starting`**](./319-keeper-app-part-3-starting) → [**`320-styling-the-keeper-app-starting`**](./320-styling-the-keeper-app-starting)

Video demo of the Keeper App using React capabilities:


https://github.com/user-attachments/assets/0b02a5e2-f778-4f4d-845d-e668d5cdd1c8


---

## Lesson bands

Lesson directories use the Udemy numbering prefix (there is no **`309-…`** checkpoint in this tree). Explore any folder named **`NNN-…`** for the matching video.

| Band (first folder → last) | Topics |
| --- | --- |
| `280-jsx-code-challenge` → `285-react-styling-practice` | JSX, expressions, styling practice |
| `286-react-components` → `289-es6-import-export-practice` | Components, **`import`** / **`export`** |
| `293-keeper-app-part-1-challenge` | Keeper **part 1** |
| `295-react-props` → `301-es6-arrow-functions` | Props, DevTools, mapping, map/filter/reduce, arrows |
| `302-keeper-app-part-2-starting` | Keeper **part 2** |
| `303-conditional-rendering` → `308-es6-destructuring` | Conditional UI, **`useState`**, destructuring |
| `310-event-handling-in-react` → `318-managing-a-component-tree-practice` | Events, forms, classes vs hooks, complex state, spread, passing callbacks through trees |
| `319-keeper-app-part-3-starting` → `320-styling-the-keeper-app-starting` | Keeper **part 3** + styling polish |

Strong single-topic dips: **`306-useState-hook`**, **`311-react-forms`**, **`313-changing-complex-state`**, **`317-managing-a-component-tree`**.

---

## Run locally

Requires **Node.js** + **npm** (or compatible client). From **inside** any lesson folder:

```bash
cd 286-react-components
npm install
npm run dev
```

These projects use **Vite** (`dev`, `build`, `preview`). If a lesson’s `package.json` differs (older scratchpad), match its **`scripts`** block—most match the template above.

---

## Navigate this repo

**← Previous:** [jQuery (sections 19–20)](../jQuery/)  
**→ Next:** [Git & GitHub (section 27)](../Git/)

---
