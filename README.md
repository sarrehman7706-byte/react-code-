# React Assignment

## Overview

This project contains three React tasks demonstrating fundamental React concepts:

1. Reusable Components with Props
2. State and Event Handling using `useState`
3. List Rendering and Conditional Rendering

## Technologies Used

* React
* JavaScript
* JSX
* CSS
* Vite
* Git
* GitHub

## Task 1 — Reusable Component with Props

A reusable `ProductCard` component was created that accepts:

* `title`
* `price`
* `category`

The component is reused in the main application to display two different products.

### Concepts Used

* Functional components
* Props
* Props destructuring
* Component reusability

## Task 2 — State & Event Handling

An interactive `LikeButton` component was created using React's `useState` Hook.

Each time the user clicks the Like button, the total number of likes increases by one.

### Concepts Used

* `useState`
* Event handling
* `onClick`
* State updates
* React re-rendering

## Task 3 — List & Conditional Rendering

A student array containing student IDs, names, and scores was created.

The `.map()` method dynamically renders each student. A conditional expression determines whether each student has passed or failed.

* Score `>= 50` → Pass
* Score `< 50` → Fail

### Concepts Used

* Arrays of objects
* `.map()`
* React `key` props
* Conditional rendering
* JSX expressions

## How to Run

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Project Structure

```text
src/
├── App.jsx
├── main.jsx
├── index.css
│
├── task1/
│   ├── ProductCard.jsx
│   └── Task1.jsx
│
├── task2/
│   ├── LikeButton.jsx
│   └── Task2.jsx
│
└── task3/
    ├── StudentList.jsx
    └── Task3.jsx
```

## Author

React Assignment Project
