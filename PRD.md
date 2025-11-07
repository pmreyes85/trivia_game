**Product Requirements Document (PRD)**
**Product Name:** Trivia Party Web App
**Owner:** Pocholo Reyes
**Version:** 1.2
**Date:** 2025-11-07

---

### 1. **Overview**

The Trivia Party Web App is a lightweight browser-based tool for hosting in-person trivia games between two teams. It presents trivia categories, questions, and answers, with a persistent live scoreboard and visual progress tracking for answered questions. The app is optimized for use on a large display and does not need to be mobile-responsive.

---

### 2. **Goals and Objectives**

* Host a trivia game for two teams.
* Display trivia questions and answers clearly.
* Keep team names and scores persistent across page reloads.
* Allow easy marking of answered questions with visual feedback.
* Keep the interface simple, minimal, and projection-friendly.

---

### 3. **Target Users**

* Trivia hosts managing in-person games.
* Players as audience participants (view only).

---

### 4. **Core Features**

#### 4.1 **Permanent UI Section (Navbar)**

* **Always visible** at the top of the screen.
* **Elements:**

  * **Categories Link** → Navigates to Categories Page.
  * **Score Link** → Navigates to Score Board Page.
  * **Live Score Display** → Format:
    `Team Alpha 10 - 7 Team Beta`
* **Interactive behavior:**

  * Clicking **Team 1 Score** increases Team 1’s score by 1.
  * Clicking **Team 2 Score** increases Team 2’s score by 1.
  * Updated values are reflected in the Score Board Page and persisted in localStorage.
* **Sync and persistence:**

  * Score and team name changes on the Score Board Page instantly update the navbar.
  * Team names and scores persist across page reloads.

---

#### 4.2 **Dynamic UI Section (Page Content Area)**

* Displays the main content depending on current route.
* Pages include:

  * Categories Page
  * Questions Page
  * Question Page
  * Score Board Page

---

### 5. **Page Specifications**

#### 5.1 **Categories Page**

* Displays trivia categories as **large, color-coded buttons**.
* Each button is labeled with a category name (e.g., History, Geography, Pop Culture).
* Clicking a category opens its **Questions Page**.
* Category list is static and defined in code.

---

#### 5.2 **Questions Page**

* Displays **10 numbered buttons** labeled **1–10** for each category.
* Each button represents a specific question.
* Clicking a button opens the **Question Page**.
* **Visual indicator:**

  * Buttons for answered questions are shown in a different color.
  * This state persists between reloads.

---

#### 5.3 **Question Page**

* Displays:

  * The question text.
  * The **answer toggle buttons**:

    * **Show Answer** (visible by default).
    * **Hide Answer** (hidden by default).
  * The **Mark as Answered** toggle (checkbox or switch).
  * **Question image** (optional).

* **Image handling rule:**

  * If the question has an assigned image, display it below the question text.
  * If no image is assigned, **no image or placeholder should appear**.

* **Button behavior:**

  * **Show Answer:** Reveals the answer below the question, hides itself, and shows “Hide Answer.”
  * **Hide Answer:** Hides the answer, hides itself, and shows “Show Answer.”

* **Mark as Answered behavior:**

  * When toggled on, sets the question’s “answered” state to `true`.
  * Corresponding button on the Questions Page updates color.
  * Answered state saved in localStorage using unique category/question keys.
  * Persisted across reloads.

---

#### 5.4 **Score Board Page**

* Displays and manages team names and scores.

* **Elements:**

  * Team 1 Name (inline editable).
  * Team 1 Score with **+** and **–** buttons.
  * Team 2 Name (inline editable).
  * Team 2 Score with **+** and **–** buttons.
  * **Reset Button** that:

    1. Sets both team scores to zero.
    2. Resets all “Mark as Answered” flags for all questions to `false`.

* **Behavior and persistence:**

  * All edits (names and scores) sync immediately with the navbar.
  * All changes persist across reloads.

---

### 6. **Data Model**

| Field         | Type    | Description                                          | Persistence  |
| ------------- | ------- | ---------------------------------------------------- | ------------ |
| team1Name     | string  | Editable Team 1 name                                 | localStorage |
| team2Name     | string  | Editable Team 2 name                                 | localStorage |
| team1Score    | integer | Team 1 score                                         | localStorage |
| team2Score    | integer | Team 2 score                                         | localStorage |
| categories    | array   | Static list of categories                            | hardcoded    |
| questions     | object  | Questions, answers, and optional images per category | hardcoded    |
| answeredState | object  | `{ [categoryId]: { [questionNumber]: boolean } }`    | localStorage |

---

### 7. **Tech Stack**

* **Frontend:** React (functional components with hooks)
* **Routing:** React Router
* **Styling:** CSS (minimalist, high-contrast for projection)
* **Persistence:** Browser `localStorage`
* **Hosting:** Static site (e.g., GitHub Pages, Netlify)

---

### 8. **Navigation Flow**

1. App loads → Categories Page (default).
2. User selects a category → Questions Page.
3. User selects question number → Question Page.
4. User reveals/hides answer and marks question as answered.
5. User updates score or names via Score Board Page or navbar.
6. Reset clears scores and resets all answered states.

---

### 9. **Non-Functional Requirements**

* **Performance:** Fast load under 1 second.
* **Persistence:** All dynamic data (scores, names, answered states) stored in localStorage.
* **Display:** Desktop-only, projection-friendly color scheme.
* **Usability:** Large text and buttons for quick visibility and control.

### 11. **Acceptance Criteria**

* Navbar always visible and synced with real-time scores and team names.
* Clicking navbar scores increments corresponding team scores.
* Name or score changes on Score Board reflect instantly in navbar.
* “Mark as Answered” toggles persist and visually update question buttons.
* Reset clears both scores and all answered flags.
* Question images render **only when assigned**; no placeholder appears if missing.
* All persisted data survives page reloads.
