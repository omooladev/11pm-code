# 🌙 11PM Code

> **Twice a week • 11:00 PM – 12:00 AM (WAT / UTC+1)**  
> *Consistent deliberate practice, problem-solving, architectural experimentation, and peer learning.*

---

## 📑 Table of Contents

- [01. Project Overview & Philosophy](#01-project-overview--philosophy)
- [02. Repository Goals & Objectives](#02-repository-goals--objectives)
- [03. Session Workflow & Schedule](#03-session-workflow--schedule)
- [04. Repository Architecture](#04-repository-architecture)
- [05. Challenge 01: Accessible Action Confirmation Modal](#05-challenge-01-accessible-action-confirmation-modal)
  - [Challenge Summary](#challenge-summary)
  - [Requirements & Tier Breakdown](#requirements--tier-breakdown)
  - [Participant & Developer Details](#participant--developer-details)
  - [Source Code Structure & Setup](#source-code-structure--setup)
- [06. Participating & Contributing](#06-participating--contributing)
- [07. The Golden Rule](#07-the-golden-rule)

---

## 01. Project Overview & Philosophy

**11PM Code** is a recurring, high-focus coding initiative designed to cultivate real-world engineering reflexes. Twice a week, participating developers gather at **11:00 PM** for an intensive, one-hour session consisting of a **35-minute timeboxed coding sprint** followed by a **20-minute architectural review and debugging debrief**.

Rather than following step-by-step tutorials, sessions place developers in real-world scenarios: building UI primitives, engineering backend endpoints, debugging broken state flows, or stress-testing new libraries under tight constraints.

### Key Tenets

- **Habit Over Motivation:** Showing up consistently at 11:00 PM twice a week.

- **Problem Solving Under Pressure:** Navigating ambiguous requirements and writing functioning solutions in 35 minutes.
- **Architectural Diversity:** Comparing different approaches to the same problem (*"Same challenge, different stacks or architectural paradigms"*).
- **Radical Honesty in Debriefs:** Dissecting bugs, trade-offs, edge cases, and incomplete features during the post-sprint review.

---

## 02. Repository Goals & Objectives

Detailed vision and background documentation can be found in [`goals.md`](./goals.md).

### 🎯 Primary Goals
1. **Unbreakable Habit Formation:** Cement a regular, disciplined coding routine.
2. **Autonomous Problem Solving:** Build components and backend systems from requirements without hand-holding.
3. **Sharpen Technical Articulation:** Practice explaining technical choices, performance trade-offs, and design patterns.
4. **Peer Exchange & Blindspot Discovery:** Uncover personal knowledge gaps by reviewing peer implementations.
5. **Documented Engineering Growth:** Maintain a clean, open-source record of challenges, solutions, and participant progress.

### 👥 Session Formats
- **Format A: Same Problem, Different Solutions (Default):**
  - All participants receive the exact same challenge brief.
  - Everyone builds their own solution independently (different stacks or different architectures).
  - Review compares approaches, performance, clean code, and edge cases.
- **Format B: Build Together (Collaborative):**
  - Participants pair-program or mob-program on a single shared codebase or complex system.

### 📈 Evolution Roadmap
- **Phase 1 (Current):** 1-on-1 and solo practice sessions establishing standards and workflows.
- **Phase 2:** Multi-developer cohorts with numbered editions (`#01`, `#02`, `#03`...).
- **Phase 3:** Live streams (Discord / YouTube Live / OBS) showcasing live building and post-session analysis.

---

## 03. Session Workflow & Schedule

Every session follows a strict, repeatable timeline:

```
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│  11:00 PM – 11:05 PM   │  ──► │  11:05 PM – 11:40 PM   │  ──► │  11:40 PM – 12:00 AM   │
│   Kickoff & Alignment  │      │   Live Coding Sprint   │      │   Review & Debrief     │
│       (5 mins)         │      │       (35 mins)        │      │       (20 mins)        │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

| Phase | Time Window | Focus |
| :--- | :--- | :--- |
| **Kickoff & Briefing** | `11:00 PM – 11:05 PM` | Review challenge brief, clarify scope, align goals. |
| **Live Coding Sprint** | `11:05 PM – 11:40 PM` | Deep work: build, test, and handle core requirements. |
| **Review & Debrief** | `11:40 PM – 12:00 AM` | Compare implementations, review test checklists, analyze trade-offs. |

> **6-Hour Preparation Rule:**  
> The challenge specification is published at least **6 hours before 11:00 PM**. This gives developers time to understand the problem, check official specifications (e.g., W3C ARIA specs), and plan their architecture.

---

## 04. Repository Architecture

The repository is organized by numbered challenge folders (`01/`, `02/`, etc.) with standardized subdirectories for specifications and source code:

```text
11pm Code/
├── README.md                          <-- Repository index & quick start
├── goals.md                           <-- Core vision, roadmap, and guidelines
├── PARTICIPANTS_GUIDE.md              <-- Participant onboarding & attribution template
│
└── 01/                                <-- Challenge #01
    ├── project-details/
    │   ├── README.md                  <-- Challenge brief, tiers, and test matrix
    │   └── developer.md               <-- Developer identity & metadata
    └── source-code/
        └── omooladev/                 <-- Developer implementation workspace
            ├── app/                   <-- Next.js 16 App Router code
            │   ├── layout.tsx
            │   ├── page.tsx
            │   └── globals.css
            ├── package.json           <-- Dependencies & scripts
            ├── tsconfig.json          <-- TypeScript configuration
            └── pnpm-lock.yaml         <-- Lockfile
```

---

## 05. Challenge 01: Accessible Action Confirmation Modal

Challenge #01 focuses on building an accessible, production-ready modal dialog for destructive actions (e.g., permanently deleting a project).

Full challenge specification: [`01/project-details/README.md`](./01/project-details/README.md)

### Challenge Summary
- **Category:** Frontend, Accessibility (`a11y`), UI Component, DOM & State
- **Core Investigation:** Native HTML `<dialog>` element with `.showModal()` vs. custom dialog implementation. *"What does the browser give you for free, and what must you handle yourself?"*
- **Target Scenario:** Confirm deletion of `"Project Nebula"`.

### Requirements & Tier Breakdown

- **🥉 Tier 1: Core Functionality (Must Have)**
  - Modal opens via `Delete Project` trigger button.
  - Matches required copy (header, warning message, Cancel and Delete buttons).
  - Cancel closes immediately; Delete triggers ~2-second simulated async delay (`Deleting…`).
  - Closes upon completion and shows a success confirmation message.
- **🥈 Tier 2: Interaction & Safety**
  - `Escape` key dismisses modal.
  - Backdrop overlay click dismisses modal; clicking inside modal content does not trigger dismissal.
  - **In-Flight Dismissal Lock:** While deletion is in-flight, `Escape` and backdrop clicks are disabled.
- **🥇 Tier 3: Accessibility (a11y) & Focus Management**
  - Built to [W3C WAI-ARIA Modal Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).
  - Initial focus lands on `Cancel` (least destructive action).
  - Traps keyboard `Tab` / `Shift+Tab` focus inside the dialog while active.
  - Focus restoration returns to the trigger button upon closure.
- **💎 Tier 4: Polish (Stretch Goals)**
  - Backdrop fade and modal scale transitions.
  - Background body scroll lock (`overflow: hidden`).

### Participant & Developer Details

Developer profile: [`01/project-details/developer.md`](./01/project-details/developer.md)

| Field | Detail |
| :--- | :--- |
| **Developer** | **Olawole Omosuyi** |
| **Role** | Fullstack Developer |
| **GitHub** | [@omooladev](https://github.com/omooladev) |
| **X / Twitter** | [@omooladev](https://x.com/omooladev) |
| **LinkedIn** | [linkedin.com/in/omooladev](https://www.linkedin.com/in/omosuyiolawole) |
| **Portfolio** | [omooladev-portfolio.vercel.app](https://omooladev-portfolio.vercel.app) |
| **Timezone** | Lagos, Nigeria (WAT / UTC+1) |

---

### Source Code Structure & Setup

The Challenge #01 implementation is located in [`01/source-code/omooladev`](./01/source-code/omooladev).

#### Tech Stack
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with Turbopack
- **Language:** TypeScript 5
- **Package Manager:** `pnpm` (v9.15+)

#### Running the Source Code

1. Navigate to the project directory:
   ```bash
   cd "01/source-code/omooladev"
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the local development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

5. Run linting checks:
   ```bash
   pnpm lint
   ```

---

## 06. Participating & Contributing

Are you joining an upcoming 11PM Code session? Follow these steps:

1. **Review the Participant Guide:**  
   Read [`PARTICIPANTS_GUIDE.md`](./PARTICIPANTS_GUIDE.md) for full folder conventions and templates.
2. **Submit Your Details:**  
   Fill out `developer.md` or `participants.md` inside your session folder before 11:00 PM.
3. **Follow the Folder Layout:**  
   Place your solution under `XX/source-code/<your-github-username>/`.
4. **Be Ready for Debrief:**  
   At 11:40 PM, be prepared to walk through your solution, bugs encountered, and lessons learned.

---

## 07. The Golden Rule

> ### **Twice a week, we show up and spend an hour getting better at coding.**
>
> *Sometimes we build.*  
> *Sometimes we solve.*  
> *Sometimes we debug.*  
> *Sometimes we fail.*  
> *Sometimes we learn something completely new.*  
>
> **But we keep coding.**
