Created At: October 10, 2026 • 16:52 (WAT)

# 🌙 11PM Code — Challenge #01

**Author:** Olawole Omosuyi  
**Date:** Sunday, October 11, 2026  
**Session Time:** 11:00 PM – 12:00 AM  
**Category / Tags:** `Frontend` `UI Component` `Accessibility (a11y)` `DOM & State`  
**Format:** Solo Practice & Self-Review *(Baseline format for future 2-developer sessions)*  
**Live Coding Window:** 35 Minutes (11:05 PM – 11:40 PM)  
**Self-Review & Test Verification:** 20 Minutes (11:40 PM – 12:00 AM)  

---

## 🎯 Challenge Title
### **Build a Production-Ready, Accessible Action Confirmation Modal**

---

## 💡 Overview & Core Learning Question

Action confirmation modals for destructive actions (e.g., deleting projects, dropping databases, revoking access) are fundamental to modern web applications.

This challenge goes beyond visual layout to practice browser behavior, state synchronization, accessibility, event handling, and asynchronous states under a strict 35-minute timebox.

> 🧠 **The Core Investigation:**  
> *Recommended starting point: Use the native HTML `<dialog>` element with `.showModal()`.*  
> Ask yourself: **"What does the browser give me for free with `<dialog>`, and what must I implement myself?"**

---

## 📝 Modal Content & Mock Data

### 1. Trigger Button (Main Page)
- **Button Label:** `Delete Project`

### 2. Modal Window Content
- **Header (`h2`):** `Delete "Project Nebula"?`
- **Body / Warning text:**  
  `Are you sure you want to permanently delete Project Nebula? All associated entries, notebooks, and attachments will be erased immediately. This action cannot be undone.`
- **Secondary Action (Cancel Button):** `Cancel`
- **Primary Action (Confirm Button):** `Delete project`
- **Loading / In-Flight Text:** `Deleting…` (with disabled button state)

### 3. Async Simulation
- Clicking **Delete project** triggers a simulated async action lasting **1.5 to 2.0 seconds** (e.g., `setTimeout` or async transition).
- Upon completion:
  - The modal automatically closes.
  - A success message or toast appears on the page: `Project "Project Nebula" has been deleted.`

---

## 🚦 Tiered Requirements (Prioritize for 35 Mins)

> [!TIP]
> Complete **Tier 1 (Core)** first, then work progressively through the remaining tiers. Anything unfinished at 11:40 PM becomes valuable discussion in your reflection, not a failure.

### 🥉 Tier 1: Core *(Must Complete First)*
- [ ] Modal opens when clicking `Delete Project` trigger button.
- [ ] Displays exact header, warning body, and action buttons (`Cancel` & `Delete project`).
- [ ] Clicking `Cancel` closes the modal immediately.
- [ ] Clicking `Delete project` triggers the ~2s async simulation, updates button to `Deleting…`, and disables actions.
- [ ] Modal closes upon completion and shows success feedback on the page.

### 🥈 Tier 2: Interaction & Safety
- [ ] Pressing `Escape` closes the modal.
- [ ] Clicking the backdrop overlay outside the modal card closes the modal.
- [ ] Clicking *inside* the modal card does not trigger dismissal.
- [ ] **In-Flight Dismissal Lock:** While `Deleting…` is in progress, pressing `Escape` or clicking the backdrop is blocked.

### 🥇 Tier 3: Accessibility (a11y) & Focus
- [ ] Semantic dialog markup (native `<dialog>` or accessible dialog container).
- [ ] **Initial Focus:** On open, focus lands on `Cancel` (the least destructive action, per WAI-ARIA guidelines for irreversible actions).
- [ ] **Focus Restoration:** On close, keyboard focus returns to the `Delete Project` trigger button.
- [ ] **Focus Trap:** Tabbing cycles strictly through all interactive/focusable elements within the dialog.

### 💎 Tier 4: Polish *(Optional Stretch)*
- [ ] Smooth backdrop fade and modal card scale transitions.
- [ ] Background body scroll lock (`overflow: hidden`) when modal is open.
- [ ] Active micro-interactions (e.g., button press scaling).

---

## 🌐 Standard Browser Practices & Accessibility

The implementation should adhere to standard browser behavior and accessibility conventions. Please review the official **[W3C WAI-ARIA Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)** prior to the session.

---

## ⏱️ Tonight's Schedule

| Time | Duration | Phase | Focus |
| :--- | :--- | :--- | :--- |
| **11:00 PM – 11:05 PM** | 5 mins | **Brief & Plan** | Read requirements, choose approach, and identify essential core behaviors. |
| **11:05 PM – 11:40 PM** | 35 mins | ⚡ **Focused Coding** | Build the modal, manage states/interactions, and implement accessibility layers. |
| **11:40 PM – 12:00 AM** | 20 mins | 🧪 **Testing & Reflection** | Run checklist, audit behavior, note trade-offs, and document learnings. |

---

## 🧪 Test Cases & Verification Checklist

At **11:40 PM**, run through this checklist to verify the implementation:

| Test # | Test Scenario | Steps | Expected Result | Pass / Fail |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | **Open Modal** | Click `Delete Project` trigger button. | Modal opens cleanly; title & warning text match the mock copy. | `[ ]` |
| **TC-02** | **Initial Focus on Safe Action** | Open the modal. | Keyboard focus automatically lands on `Cancel` (least destructive action). | `[ ]` |
| **TC-03** | **Dismiss via Cancel** | Click `Cancel` button. | Modal closes cleanly; focus returns to the `Delete Project` trigger button. | `[ ]` |
| **TC-04** | **Dismiss via Escape Key** | Open modal, press `Escape`. | Modal closes immediately; focus returns to trigger button. | `[ ]` |
| **TC-05** | **Dismiss via Backdrop Click** | Open modal, click on the dimmed background area outside the card. | Modal closes immediately. | `[ ]` |
| **TC-06** | **Inside Click Boundary** | Open modal, click inside modal card / text area. | Modal **remains open** (click does not bubble to backdrop dismiss). | `[ ]` |
| **TC-07** | **Focus Trap** | Open modal, press `Tab` and `Shift+Tab` across all focusable elements. | Focus stays trapped inside the dialog without escaping to background page. | `[ ]` |
| **TC-08** | **In-Flight Pending State** | Click `Delete project`. | Button text changes to `Deleting…`, interactive elements become disabled. | `[ ]` |
| **TC-09** | **In-Flight Dismissal Lock** | While `Deleting…` is visible, press `Escape` or click backdrop. | Modal **does not close**; stays locked until async simulation resolves. | `[ ]` |
| **TC-10** | **Success Resolution** | Wait for the ~2s async simulation to finish. | Modal closes; page displays `Project "Project Nebula" has been deleted.` | `[ ]` |
| **TC-11** | **Focus Restoration** | Close the modal via any valid dismissal method. | Keyboard focus is restored to the triggering `Delete Project` button. | `[ ]` |
| **TC-12** | **Background Scroll Lock** | Open modal on a scrollable page. | Background page body cannot be scrolled while modal is active. | `[ ]` |

---

## 💭 Self-Review & Reflection Prompts (11:40 PM)

After completing the tests, reflect on:
1. **The Native Investigation:** What did the browser give you for free with `<dialog>`, and what did you have to handle manually?
2. **Prioritization & Timebox:** Which tiers did you complete within the 35 minutes? What took more time than anticipated?
3. **Event & State Edge Cases:** How did you handle the in-flight dismissal lock and backdrop click separation?
4. **Key Takeaway:** What is one technique or insight from tonight that will improve your day-to-day production code?
