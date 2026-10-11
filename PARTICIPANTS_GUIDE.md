# 📋 11PM Code — Participants Documentation Guide

> **Standard Guide & Template for Documenting Developers in Every Challenge**  
> *Use this guide to record participant identities, roles, code repositories, and social media handles for attribution and post-session content.*

---

## 🎯 Why Document Participants?

In the 11PM Code system, every session is a record of deliberate practice and collaboration. Documenting participants ensures:
1. **Proper Attribution:** Full credit in project folders, git commits, and open-source solutions.
2. **Social & Content Tagging:** Readily available handles to tag participants in post-session clips, learnings, Twitter/X posts, and YouTube recordings.
3. **Developer Network:** Builds a permanent log of who showed up, what they built, and how they solved the challenge.

---

## 📂 File Naming & Folder Convention

For each challenge folder (`01/`, `02/`, `03/`, etc.):

- **Solo Sessions:** Save as `XX/project-details/developer.md`
- **Multi-Developer Sessions (Format A or B):** Save as `XX/project-details/participants.md`

```text
11pm Code/
├── goals.md
├── PARTICIPANTS_GUIDE.md            <-- This reference guide
├── 01/
│   └── project-details/
│       ├── README.md                <-- Challenge brief & test cases
│       └── developer.md             <-- Developer details for #01
├── 02/
│   └── project-details/
│       ├── README.md
│       └── participants.md          <-- Multiple participants for #02
```

---

## 📋 Standard Participant Fields

Collect these details at least **6 hours before** the 11:00 PM session when sharing the challenge:

| Field | Description | Example |
| :--- | :--- | :--- |
| **Full Name** | The developer's real name | Olawole Omosuyi |
| **Role** | Core specialization / title | Fullstack Developer, Frontend Engineer, etc. |
| **GitHub** | GitHub username with direct link | `[@omooladev](https://github.com/omooladev)` |
| **X / Twitter** | Social media handle for post-session tags | `[@omooladev](https://x.com/omooladev)` |
| **LinkedIn** | Professional network profile | `[linkedin.com/in/...](...)` |
| **Location / Timezone** | Operating location and timezone | Lagos, Nigeria (WAT / UTC+1) |

---

## 📝 Copyable Markdown Templates

### Template 1: Solo Developer (`developer.md`)
*Use when completing a session by yourself:*

```markdown
# 👤 Developer Details — Challenge #XX

| Field | Detail |
| :--- | :--- |
| **Full Name** | **Developer Name** |
| **Role** | Fullstack Developer |
| **GitHub** | [@username](https://github.com/username) |
| **X / Twitter** | [@handle](https://x.com/handle) |
| **LinkedIn** | [linkedin.com/in/username](https://linkedin.com/in/username) |
| **Portfolio / Website** | [website.dev](https://website.dev) |
| **Location / Timezone** | Lagos, Nigeria (WAT / UTC+1) |
```

---

### Template 2: Multi-Developer Session (`participants.md`)
*Use for Format A (Same Problem, Different Solutions) or Format B (Build Together):*

```markdown
# 👥 Participants — Challenge #XX

## 1. Host / Developer 01
| Field | Detail |
| :--- | :--- |
| **Full Name** | **Olawole Omosuyi** |
| **Role** | Fullstack Developer |
| **GitHub** | [@omooladev](https://github.com/omooladev) |
| **X / Twitter** | [@omooladev](https://x.com/omooladev) |
| **LinkedIn** | [linkedin.com/in/omooladev](https://linkedin.com/in/omooladev) |
| **Portfolio** | [github.com/omooladev](https://github.com/omooladev) |
| **Location / Timezone** | Lagos, Nigeria (WAT / UTC+1) |
| **Planned Stack** | React + Tailwind CSS |

---

## 2. Guest / Developer 02
| Field | Detail |
| :--- | :--- |
| **Full Name** | **Guest Developer Name** |
| **Role** | Backend Engineer |
| **GitHub** | [@guestdev](https://github.com/guestdev) |
| **X / Twitter** | [@guestdev](https://x.com/guestdev) |
| **LinkedIn** | [linkedin.com/in/guestdev](https://linkedin.com/in/guestdev) |
| **Portfolio** | [guestdev.io](https://guestdev.io) |
| **Planned Stack** | Go / Vanilla JS / Svelte |
```

---

## 🚀 Pre-Session Checklist (6 Hours Before 11 PM)

- [ ] Send the challenge brief (`README.md`) to the participant(s).
- [ ] Confirm participant's GitHub and social media handles.
- [ ] Create `participants.md` inside `XX/project-details/`.
- [ ] Note their planned stack or approach to prime the 11:40 PM debrief comparison.
