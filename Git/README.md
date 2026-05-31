# Git & GitHub (section 27)

Command-line **Git** and **GitHub** workflow practice from **Dr. Angela Yu’s** *[The Complete Full-Stack Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)*. There is no application code here—the section is about **version control**: staging changes, writing commits, ignoring sensitive files, cloning, branching, merging, and the GitHub collaboration basics (forks and pull requests). Broader archive: [repo overview](../README.md).

**Contents:** [Competencies](#competencies) · [What’s here](#whats-here) · [How I practiced (commit log)](#how-i-practiced-commit-log) · [Course map](#course-map) · [Navigate this repo](#navigate-this-repo)

---

## Competencies

| Area | What’s in here |
| --- | --- |
| **Git basics** | `git init`, status, add, commit, log, diff |
| **`.gitignore`** | Keeping junk (`.DS_Store`) and secrets out of the repo |
| **Remotes & GitHub** | Remote repos, push/pull, cloning |
| **Branching** | Branches, checkout, merge, resolving simple conflicts |
| **Collaboration** | Forking, pull requests (course walkthrough) |

---

## What’s here

| File | Role |
| --- | --- |
| [`chapter1.txt`](./chapter1.txt), [`chapter2.txt`](./chapter2.txt), [`chapter3.txt`](./chapter3.txt) | Scratch files for the optional Git challenge—edited repeatedly to practice commits, branches, and merges (*Tale of Two Cities* snippets). |
| [`.gitignore`](./.gitignore) | Ignores `.DS_Store` and `secrets.txt`; comment points at GitHub’s template library. |
| [`secrets.txt`](./secrets.txt) | Deliberately **not** tracked—local-only file to confirm `.gitignore` works. |
| [`clone_notes.txt`](./clone_notes.txt) | Short notes on `git clone` and where to find beginner-friendly repos. |

Nothing here is meant to be run like a web app. The artifact **is** the commit history under `Git/`.

---

## How I practiced (commit log)

Relevant commits in this folder (newest first):

| Commit | What it was for |
| --- | --- |
| `af91c29` · `6b309e6` · `91f21cd` | Re-edited the chapter files—more commit/add practice; `chapter3.txt` includes a note about working on a **separate branch** and recovering from **staging the wrong file**. |
| `a872464` | Added clone notes after the cloning lesson. |
| `e930109` | `.gitignore` exercise—exclude macOS metadata and a fake secrets file. |
| `eb0b1d2` · `5bbe6b3` | First pass on the three chapter files from the optional Git challenge. |

To inspect yourself: `git log -- Git/` from the repo root.

---

## Course map

**`#`** is the **Udemy section number** (same convention as the [root course map](../README.md#course-map)).

| # | Focus | Where it shows up here |
| --- | --- | --- |
| **216–217** | What version control is; Git on the command line | Commits on the chapter files |
| **218** | GitHub & remotes | Push/pull of this bootcamp repo; remote setup in lessons |
| **219** | `.gitignore` | [`.gitignore`](./.gitignore), untracked [`secrets.txt`](./secrets.txt) |
| **220** | Cloning | [`clone_notes.txt`](./clone_notes.txt) |
| **221** | Branching & merging | Edits across `chapter*.txt` (see commit messages & file contents) |
| **222** | Optional Git challenge | The three `chapter*.txt` files |
| **223** | Forking & pull requests | Course demo (no separate artifact in this folder) |

---

## Navigate this repo

**← Previous:** [React (section 36)](../React/)  
**→ Next:** [Bootcamp overview (root README)](../README.md) — *Node, Bash, and back-end sections still ahead in the course.*

---
