# Web Development Bootcamp Portfolio

Hi! I'm David Hu. This repo is my working archive from **Dr. Angela Yu’s [*The Complete Web Development Bootcamp*](https://www.udemy.com/share/1013gG3@Erd1Db3erwZ4RgornuXTR9x5cyoTWxxPRZpUmiUk_i8faDdRv2trfIecPHOrRxA2/)** on Udemy. It's a project-based path from HTML, CSS, JavaScript, jQuery, and React through tooling, Node/Express and databases, deployment, and introductory Web3.

This was my first entry point into computer science before formal CS or industry; when I naively thought software engineering was just “coding” (Oh how things have changed! lol).


**Contents:** [Module guide](#module-guide) · [Course map](#course-map) · [Technologies & tools](#technologies--tools)

---

## Module guide

**[`html-portfolio/`](./html-portfolio)** — Static hub (`index.html`) + **screenshots** for a fast visual pass (Flexbox pricing, Mondrian grid piece, TinDog, etc.) without spelunking lesson numbers.

**[`Html+CSS/`](./Html+CSS)** — Full static tree: meme + **flag** + **agency** layout + **Flexbox pricing** + **Mondrian Grid** + **TinDog** + **[`Capstone 1`](./Html+CSS/Capstone%201)**. The place for layout, positioning, Grid/Flex, and Bootstrap in the raw lesson folders.

**[`JavaScript/`](./JavaScript)** — Root `*.js` = §14–15 language drills. Folders = §16–18 browser work: [`DOM Challenge Starting Files`](./JavaScript/DOM%20Challenge%20Starting%20Files), [`Dicee+Challenge+-+Starting+Files`](./JavaScript/Dicee+Challenge+-+Starting+Files), [`Drum Kit Starting Files`](./JavaScript/Drum%20Kit%20Starting%20Files).

**[`jQuery/`](./jQuery)** — Root [`index.html`](./jQuery/index.html) + [`index.js`](./jQuery/index.js) = §19 API scratchpad (ugly on purpose, interactive). [`Simon Game`](./jQuery/Simon%20Game) = §20 capstone (sequence + audio + levels).

**[`React/`](./React)** — §36 Vite lessons; **`293-keeper-app-*` → `320-styling-the-keeper-app-*`** for the full **Keeper** App arc; [`306-useState-hook`](./React/306-useState-hook) / [`311-react-forms`](./React/311-react-forms) for hooks & forms.

**[`Git/`](./Git)** — Loose chapter notes only; not a full exercise tree.

---

## Course map

Angela **§** numbers below are the ones called out in this repo’s [`Html+CSS/README.md`](./Html+CSS/README.md), [`JavaScript/README.md`](./JavaScript/README.md), [`jQuery/README.md`](./jQuery/README.md), and [`React/README.md`](./React/README.md). Your Udemy edition can differ slightly; the **In this repo** links are ground truth.

| Area | Topic | Course § | In this repo |
|------|--------|----------|----------------|
| Front-end | HTML | §2–4 | [`2.1 Heading Element`](./Html+CSS/2.1%20Heading%20Element), [`3.4 Birthday Invite Project`](./Html+CSS/3.4%20Birthday%20Invite%20Project), [`4.1+Webpages`](./Html+CSS/4.1%2BWebpages), hub [`html-portfolio/`](./html-portfolio) |
| Front-end | CSS | §5–8 | [`5.1. Adding CSS`](./Html+CSS/5.1.%20Adding%20CSS), [`6.4 Motivation Meme Project`](./Html+CSS/6.4%20Motivation%20Meme%20Project), [`7.3 CSS Flag Project`](./Html+CSS/7.3%20CSS%20Flag%20Project), [`8.4 Web Design Agency Project`](./Html+CSS/8.4%20Web%20Design%20Agency%20Project) |
| Front-end | Flexbox | §9 | [`9.0 Display Flex`](./Html+CSS/9.0%20Display%20Flex), [`9.1 Flex Direction`](./Html+CSS/9.1%20Flex%20Direction), [`9.4 Flexbox Pricing Table Project`](./Html+CSS/9.4%20Flexbox%20Pricing%20Table%20Project) |
| Front-end | Grid | §10 | [`10.0 Display Grid`](./Html+CSS/10.0%20Display%20Grid), [`10.2 Grid Placement`](./Html+CSS/10.2%20Grid%20Placement), [`10.3 Mondrian Project`](./Html+CSS/10.3%20Mondrian%20Project) |
| Front-end | Bootstrap | §11 | [`11.0 Bootstrap Intro`](./Html+CSS/11.0%20Bootstrap%20Intro), [`11.2 Bootstrap Components`](./Html+CSS/11.2%20Bootstrap%20Components), [`11.3 TinDog Project`](./Html+CSS/11.3%20TinDog%20Project) |
| Front-end | HTML/CSS capstone | Capstone 1 · *Online Resume* ([`Html+CSS/README.md`](./Html+CSS/README.md)) | [`Capstone 1`](./Html+CSS/Capstone%201) |
| Front-end | JavaScript (ES6 core) | §14–15 | [`JavaScript/`](./JavaScript) · top-level `*.js` (variables → arrays/objects, control flow, small exercises) |
| Front-end | DOM & browser mini-apps | §16–18 | §16 [`DOM Challenge Starting Files`](./JavaScript/DOM%20Challenge%20Starting%20Files) · §17 [`Dicee+Challenge+-+Starting+Files`](./JavaScript/Dicee+Challenge+-+Starting+Files) · §18 [`Drum Kit Starting Files`](./JavaScript/Drum%20Kit%20Starting%20Files) |
| Front-end | jQuery | §19–20 | §19 [`jQuery/index.html`](./jQuery/index.html) (+ [`index.js`](./jQuery/index.js)) · §20 [`Simon Game`](./jQuery/Simon%20Game) |
| Front-end | React (+ hooks / Keeper) | §36 | [`React/`](./React) · JSX entry [`280-jsx-code-challenge`](./React/280-jsx-code-challenge) · props/components e.g. [`286-react-components`](./React/286-react-components) · [`306-useState-hook`](./React/306-useState-hook) · [`311-react-forms`](./React/311-react-forms) · Keeper [`293-keeper-app-part-1-challenge`](./React/293-keeper-app-part-1-challenge) → [`320-styling-the-keeper-app-starting`](./React/320-styling-the-keeper-app-starting) |
| Tooling | Git, GitHub | *not §-tagged here* | [`Git/`](./Git) |
| Tooling | Bash / command line | — | — |
| Back-end | Node, Express, EJS, REST, APIs, SQL, PostgreSQL, auth | — | — |
| Design & shipping | Deployment (e.g. GitHub Pages) | — | — |


---

## Technologies & tools

**Front-end:** HTML5 · CSS3 · Flexbox · CSS Grid · Bootstrap 5 · JavaScript (ES6+) · DOM APIs · jQuery · React · React Hooks  

**Tooling:** Bash · Git · GitHub  

**Back-end & data:** Node.js · NPM · Express.js · EJS · REST · APIs · SQL · PostgreSQL · authentication  

**Design & delivery:** web design (layout, UI patterns) · deployment (e.g. GitHub Pages)  

**Web3 (course):** Internet Computer · blockchain · token contracts · NFT minting/trading (introductory)

---

Thanks for stopping by! 🌱
