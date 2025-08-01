# 📘 React Notes - Full Stack App with React & Spring Boot

## 1. React Features

- ✅ **Component-based framework**: Everything is a component – reusable, modular.
- ✅ **Declarative views**: React uses declarative syntax to describe UI.
- ✅ **Component logic with JavaScript**: No need for separate files for logic/view.
- ✅ **Supports modern UI design**: Works well with frameworks like:
  - Bootstrap
  - Google Material UI
  - Tailwind CSS
  - Ant Design
- ✅ **Unidirectional data flow**: Parent → Child via props.

---

## 2. React Architecture Overview

- **Components**:
  - Parent & child hierarchy.
  - Composed of:
    - Reusable **JSX code** (JavaScript + XML-like syntax)
    - **Props** for passing data
    - **State** for local UI logic
    - **Hooks** for lifecycle & state handling

- **State management**:
  - Triggers re-rendering when data changes.

- **Rendering**:
  - React uses a virtual DOM for performance.
  - Efficient DOM updates via diffing algorithm.

- **Single Page Application (SPA)**:
  - React apps often run as SPAs with routing handled via `react-router-dom`.

---

## 3. 🔑 Key React Concepts

| Term      | Description |
|-----------|-------------|
| **Component** | A reusable building block of UI |
| **Props** | Short for “properties”, used to pass data between components |
| **State** | Local, mutable data within a component |
| **Hooks** | Special functions (e.g., `useState`, `useEffect`) for managing state & lifecycle |
| **Module** | A file or package that exports reusable code (JS functions, components) |

---

## 4. Application UI Composition

- Break down UI into logical components.
  - Header, Sidebar, MainContent, Footer
- **Each component**:
  - Receives props (input)
  - Has optional internal state
  - Returns JSX

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
