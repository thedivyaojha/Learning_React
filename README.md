# 🧮 Simple Counter App (React + Vite)

A simple React project built with **Vite**, focusing on understanding and using the **`useState`** hook effectively.

---

## 🚀 Overview

This project demonstrates how to create a basic **counter application** using React’s state management.  
The app displays a counter with two buttons — **Increase** and **Decrease** — allowing users to change the value dynamically on the browser.

The counter:
- Starts with a **default value** (set using `useState`)
- **Cannot go negative**
- Updates **instantly on the screen** when buttons are clicked
<img width="1920" height="1080" alt="Screenshot (2138)" src="https://github.com/user-attachments/assets/02b8b6a2-1674-42cd-b7bd-0fe461af28fb" />
<img width="1920" height="1080" alt="Screenshot (2139)" src="https://github.com/user-attachments/assets/72557369-9023-4fc5-bc33-eae506f4a0c1" />
<img width="1920" height="1080" alt="Screenshot (2141)" src="https://github.com/user-attachments/assets/4b983cb7-4183-4853-86a7-3709e1e3f191" />


---

## 🧠 Core Learning

The main goal of this project was to understand **why and how we use the `useState` hook** in React.

### 🔍 Key Takeaways:
- `useState` is used to manage state in functional components.
- It returns an **array** with two elements:
  1. The current **state variable**
  2. A **function to update** that variable
- We can set a **default value** directly inside `useState()`.
- Changing the state causes the **component to re-render**, updating the UI instantly.

Example:
```jsx
const [count, setCount] = useState(0);
