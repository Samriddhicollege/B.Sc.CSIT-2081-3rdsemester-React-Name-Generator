# README

## Project Title

> *GeniusNames – Random Name Generator with React*

---

## Student Information

* **Name:** Samana Neupane
* **Roll Number:** [Roll Number]
* **Course / Program:** B.Sc. CSIT
* **Semester / Year:** 3rd Semester / 2026

---

## Instructor Information

* **Instructor Name:** Dipak Shrestha
* **Course Title:** React Development
* **College Name:** Samriddhi College

---

## Project Overview

> GeniusNames is a minimalist, high-performance web application built with React that generates realistic names for projects, characters, and professional use.
> Users can generate names by selecting nationality (including Nepal) and gender filters, then save their favourite names to a personal Library.
> The Library supports full CRUD operations — users can add custom tags/nicknames to saved names and delete unwanted entries.
> All saved data is persisted in the browser using LocalStorage so nothing is lost on page refresh.
> The project focuses on clean component architecture, React Hooks, and real-world API integration.

---

## Objectives

* Build a responsive React application using modern functional components and Hooks
* Integrate a third-party REST API (randomuser.me) for real-time data fetching
* Implement complete CRUD operations on app state
* Persist data across sessions using LocalStorage via a custom Hook
* Apply clean, minimal UI/UX design principles

---

## Technologies Used

### Frontend

* React.js (v19)
* JavaScript (ES6+)
* HTML5 & CSS3 (Inter font, CSS variables)

### API

* randomuser.me (free open-source random user API)

### Other Tools

* Vite (build tool & dev server)
* Git & GitHub
* Firebase Hosting (deployment)
* lucide-react (icons)

---

## Key Features

* Generate realistic names filtered by nationality and gender
* Nepali name support via a local static dataset
* Save names to a personal Library (Create)
* View all saved names at a glance (Read)
* Add custom Tags / Nicknames to saved names (Update)
* Delete individual saved names (Delete)
* Data persisted with LocalStorage — survives page refresh
* Dynamic document title synced with Library count

---

## Screens / Modules

* **Controls Section** — Nationality, Gender, Count filters + Generate button
* **Generated Names Panel** — Displays fetched name cards with Save option
* **Library Panel** — Manages saved names with Edit & Delete actions
* **Edit Mode** — Inline nickname/tag editor per saved name

---

## Installation & Setup

```bash
# Clone repository
git clone https://github.com/Samriddhicollege/B.Sc.CSIT-2081-3rdsemester-React-Name-Generator.git

# Go to project folder
cd B.Sc.CSIT-2081-3rdsemester-React-Name-Generator

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
Name-Generator/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                    # React DOM root
    ├── index.css                   # Global styles
    ├── App.jsx                     # Root component
    ├── components/
    │   ├── layout/
    │   │   └── Container.jsx       # Centered layout wrapper
    │   ├── features/
    │   │   └── NameGenerator.jsx   # Core feature (all logic)
    │   └── common/
    │       ├── Button.jsx          # Reusable button
    │       └── Card.jsx            # Reusable card
    ├── hooks/
    │   └── useLocalStorage.js      # Custom persistence hook
    └── utils/
        └── nepaliNames.js          # Local Nepali name dataset
```

---

## Component Structure

```
App
└── Container
    └── NameGenerator
        ├── Controls (dropdowns + Generate button)
        ├── Generated Names List
        └── Saved Library (edit / delete)
```

---

## GitHub & Live Demo

* **GitHub Repository:** https://github.com/Samriddhicollege/B.Sc.CSIT-2081-3rdsemester-React-Name-Generator
* **Live URL (Firebase):** https://sa-name-generator.web.app/

---

## Testing

* Tested UI responsiveness across mobile, tablet, and desktop screen sizes
* Verified API responses from randomuser.me for all supported nationalities
* Checked edge cases: empty Library, invalid count input, API failure handling
* Confirmed LocalStorage persistence across page refreshes and browser sessions

---

## Challenges Faced

* Synchronizing the Library state with LocalStorage reliably without stale data
* Managing async API timing and avoiding duplicate fetch calls on rapid clicks
* Building a smooth inline edit experience without breaking other list items
* Integrating a custom local dataset (Nepali names) matching the API response shape

---

## Future Enhancements

* Backend integration using Node.js + Express + MongoDB for persistent cloud storage
* User authentication for private, account-based Libraries
* Export saved names to CSV or PDF
* Expanded regional datasets (Japanese, Arabic, African names)
* Dark mode toggle and smooth UI animations

---

## Acknowledgement

> I would like to thank my instructor **Dipak Shrestha** for their guidance and support throughout this project.

---

## Declaration

> I hereby declare that this project is my original work and has been completed as part of my academic submission for the React Development course, B.Sc. CSIT 3rd Semester, 2026.
