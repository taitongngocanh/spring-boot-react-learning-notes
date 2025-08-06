# 🔀 React: Ghi chú về Conditional Rendering

## ✅ 1. Conditional Rendering là gì?
- Là kỹ thuật hiển thị hoặc ẩn thành phần (component) dựa trên điều kiện.
- Giống như `if/else` hoặc `switch` trong JavaScript.

---

## 🔸 2. Cách 1: Sử dụng if/else
```jsx
if (isLoggedIn) {
  return <p>Welcome, User!</p>;
} else {
  return <p>Please log in.</p>;
}
```

---

## 🔸 3. Cách 2: Toán tử `? :` (ternary operator)
```jsx
<p>{isLoggedIn ? 'Welcome, User!' : 'Please log in.'}</p>
```

---

## 🔸 4. Cách 3: Dùng toán tử `&&`
```jsx
{isLoggedIn && <p>Welcome back!</p>}
```
- Nếu `isLoggedIn` là `true`, đoạn JSX sau `&&` sẽ được render.

---

## 🔸 5. Cách 4: IIFE (Immediately Invoked Function Expression)
```jsx
{(() => {
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error occurred</p>;
  return <p>Loaded!</p>;
})()}
```

---

## 🔸 6. Conditional Rendering với Component
```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Hello!</h1>;
  }
  return <h1>Please sign in</h1>;
}
```

---

## 📦 7. Component có thể trả về null
```jsx
function OptionalMessage({ show }) {
  if (!show) return null;
  return <div>This message is shown</div>;
}
```
- Trả về `null` để **không render gì cả**.

---

## 🧪 8. Ví dụ thực tế: Toggle nội dung
```jsx
function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? <p>Hello World</p> : <p>Goodbye</p>}
    </div>
  );
}
```

---

## 💡 9. Kỹ thuật nâng cao: Render theo nhiều điều kiện
```jsx
{status === 'loading' && <Spinner />}
{status === 'error' && <ErrorMessage />}
{status === 'success' && <DataView />}
```

---

## ⚠️ 10. Lưu ý
- **Không render mảng rỗng, `undefined`, `false` hoặc `null`** nếu không có ý định rõ ràng.
- Khi dùng `&&`, đảm bảo giá trị đầu là `boolean`, tránh hiển thị `0` hoặc các giá trị không mong muốn.

---

## 📚 Tài liệu tham khảo
- React Docs – Conditional Rendering: https://reactjs.org/docs/conditional-rendering.html

---

📝 **Tóm lại**:
- Dùng `if/else`, `? :`, `&&`, hoặc function để xử lý điều kiện trong JSX.
- Có thể render component, element hoặc `null`.
- Kết hợp nhiều kỹ thuật để kiểm soát UI hiệu quả và rõ ràng.
