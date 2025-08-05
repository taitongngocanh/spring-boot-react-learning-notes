# 🧠 React: Ghi chú về Handling Data & State

## ✅ 1. Khái niệm
- **State** là một đối tượng đặc biệt trong React dùng để quản lý dữ liệu thay đổi bên trong component.
- Khi `state` thay đổi, component sẽ **re-render**.
- Dữ liệu có thể được truyền giữa các component qua **props**.

---

## 🔹 2. Tạo state với `useState` (Function Component)
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Khởi tạo state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
- `count` là giá trị hiện tại.
- `setCount` là hàm để cập nhật giá trị.

---

## 🔹 3. Cập nhật state
```jsx
setCount(count + 1);        // Cách thường dùng
setCount(prev => prev + 1); // Dùng khi cập nhật dựa trên giá trị trước đó
```

---

## 🔹 4. State với chuỗi, đối tượng, mảng

### a. Chuỗi
```jsx
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />
```

### b. Đối tượng
```jsx
const [user, setUser] = useState({ name: '', age: 0 });
setUser({ ...user, name: 'John' });
```

### c. Mảng
```jsx
const [todos, setTodos] = useState([]);

const addTodo = () => {
  const newTodo = { id: Date.now(), text: 'New Task' };
  setTodos([...todos, newTodo]);
};
```

---

## 🔹 5. Truyền dữ liệu qua props
```jsx
function ChildComponent({ message }) {
  return <p>{message}</p>;
}

function ParentComponent() {
  const msg = 'Hello from parent!';
  return <ChildComponent message={msg} />;
}
```
- Dữ liệu đi **từ cha xuống con** thông qua props.

---

## 🔹 6. Truyền hàm để thay đổi state từ component con
```jsx
function Child({ onSend }) {
  return <button onClick={() => onSend('Hello!')}>Send</button>;
}

function Parent() {
  const [msg, setMsg] = useState('');
  return (
    <div>
      <Child onSend={setMsg} />
      <p>Received: {msg}</p>
    </div>
  );
}
```

---

## 🔹 7. useState không merge như setState trong class
```jsx
// Nếu state là object, bạn phải merge thủ công
setUser(prev => ({ ...prev, age: 30 }));
```

---

## 🔹 8. Một số lưu ý
- Không nên **trực tiếp thay đổi** state (❌ `state.push()` hoặc `state.name = "abc"`).
- Luôn dùng `setState` hoặc `setXxx`.
- Cập nhật state là **bất đồng bộ**.
- Có thể dùng nhiều `useState` trong một component.

---

## 🧪 9. Ví dụ tổng hợp
```jsx
function App() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: name }]);
    setName('');
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 📚 10. Tài liệu tham khảo
- React Docs: https://reactjs.org/docs/hooks-state.html
- useState: https://reactjs.org/docs/hooks-reference.html#usestate

---

📝 **Tóm lại**:
- Dùng `useState` để quản lý dữ liệu thay đổi trong component.
- Không được thay đổi trực tiếp state.
- Truyền dữ liệu từ cha xuống con bằng props.
- Truyền hàm từ cha xuống con để con thay đổi state cha.
