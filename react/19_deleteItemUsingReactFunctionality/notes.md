# 🗑️ React: Ghi chú về Xoá Phần Tử (deleteItem) trong React

## ✅ 1. Mục tiêu
- Xoá một phần tử khỏi danh sách trong React.
- Sử dụng `useState` để lưu danh sách.
- Sử dụng `filter()` để tạo danh sách mới sau khi xoá.

---

## 🔹 2. Cấu trúc dữ liệu ví dụ
```jsx
const [todos, setTodos] = useState([
  { id: 1, task: 'Learn React' },
  { id: 2, task: 'Write Code' },
  { id: 3, task: 'Go to Gym' },
]);
```

---

## 🔹 3. Hàm xoá phần tử theo `id`
```jsx
const deleteTodo = (id) => {
  setTodos(prev => prev.filter(todo => todo.id !== id));
};
```
- `filter()` giữ lại những phần tử **có id khác** với `id` cần xoá.
- Không được thay đổi mảng gốc (`mutate`), phải tạo mảng mới.

---

## 🔹 4. Gọi hàm xoá từ UI
```jsx
{todos.map(todo => (
  <div key={todo.id}>
    <span>{todo.task}</span>
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </div>
))}
```
- Dùng arrow function để truyền tham số `todo.id`.

---

## 🔹 5. Truyền hàm xoá qua props
```jsx
function TodoItem({ todo, onDelete }) {
  return (
    <div>
      {todo.task}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([...]);

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
      ))}
    </>
  );
}
```

---

## 🧪 6. Ví dụ đầy đủ
```jsx
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Study' },
    { id: 2, name: 'Workout' },
    { id: 3, name: 'Sleep' }
  ]);

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>My Tasks</h2>
      {tasks.map(task => (
        <div key={task.id}>
          {task.name}
          <button onClick={() => deleteTask(task.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
```

---

## ❗ 7. Lưu ý quan trọng
- Không dùng `splice()` vì nó làm thay đổi mảng gốc.
- Tránh thay đổi state trực tiếp (`todos.splice(...)`, `todos = ...`).
- Luôn dùng `setState` để cập nhật mảng mới.

---

## 📚 8. Tài liệu tham khảo
- React Docs – Updating Arrays in State: https://react.dev/learn/updating-arrays-in-state

---

📝 **Tóm lại**:
- Dùng `filter()` để xoá phần tử khỏi danh sách.
- Không mutate mảng gốc.
- Dùng `onClick={() => deleteFn(id)}` để truyền `id` cần xoá.
- Có thể truyền hàm xoá qua props nếu cần tách component.
