# React (section 36)

**[React](https://react.dev/)** (+ **Vite**) lesson apps from **Dr. Angela Yu’s** *[The Complete Full-Stack Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)* (Section 36). Each folder is a runnable mini-app, match the **`NNN-…`** prefix to the Udemy **video #** (e.g. `286-react-components` → video 286).

**Contents:** [What's Learned](#whats-learned) · [Keeper capstone](#keeper-capstone) · [Lesson bands](#lesson-bands) · [Run locally](#run-locally) · [Navigate this repo](#navigate-this-repo)

---

## What's Learned

| Area | Topics |
| --- | --- |
| **JSX** | Elements, expressions, attributes, camelCase props, inline styles |
| **Components & modules** | Splitting UI, `import`/`export`, reusable pieces |
| **Data flow** | Props, mapping lists to components, lifting state, component trees |
| **State & UX** | `useState`, conditional rendering, events, controlled forms, nested state |
| **Modern JS** | Arrow functions, destructuring, spread for immutable updates |
| **Ecosystem** | Vite dev server, `npm run dev`, React DevTools |

Standalone lessons are woven into the Keeper capstone checkpoints below.

---

## Keeper capstone

The react lessons culminate into a capstone project called "Keeper". "Keeper" is a Google Keep–style notes app across four checkpoints where each folder builds on the last:

[`293-keeper-app-part-1-challenge`](./293-keeper-app-part-1-challenge) → [`302-keeper-app-part-2-starting`](./302-keeper-app-part-2-starting) → [`319-keeper-app-part-3-starting`](./319-keeper-app-part-3-starting) → [`320-styling-the-keeper-app-starting`](./320-styling-the-keeper-app-starting)

<!-- markdownlint-disable-next-line MD034 -->
https://github.com/user-attachments/assets/0b02a5e2-f778-4f4d-845d-e668d5cdd1c8

---

## Lesson bands

| Video # (folders) | Topics |
| --- | --- |
| `280-jsx-code-challenge` → `285-react-styling-practice` | JSX, expressions, styling |
| `286-react-components` → `289-es6-import-export-practice` | Components, modules |
| `295-react-props` → `301-es6-arrow-functions` | Props, DevTools, mapping, arrow functions |
| `303-conditional-rendering` → `308-es6-destructuring` | Conditional UI, `useState`, destructuring |
| `310-event-handling-in-react` → `318-managing-a-component-tree-practice` | Events, forms, complex state, component trees |

Keeper checkpoints (videos **293**, **302**, **319**, **320**) sit between these bands—see above.

---

## Run locally

Requires **Node.js** + **npm**. From inside any lesson folder:

```bash
cd 286-react-components
npm install
npm run dev
```

Most folders use Vite (`dev`, `build`, `preview`). If a `package.json` differs, follow its `scripts` block.

---

## Navigate this repo

**← Previous:** [jQuery (sections 19–20)](../jQuery/)  
**→ Next:** [Git & GitHub (section 27)](../Git/)

---
