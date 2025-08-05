# 🖱️ React: Ghi chú về `onClick` Listener

## ✅ 1. Khái niệm
- `onClick` là một props trong React dùng để xử lý sự kiện click chuột.
- Tương tự như `addEventListener('click')` trong JavaScript thuần.
- Được sử dụng trực tiếp trong JSX.

## 🔹 2. Cú pháp cơ bản
```jsx
function handleClick() {
  alert('Button clicked!');
}

<button onClick={handleClick}>Click me</button>
```

## 🔹 3. Dùng hàm ẩn danh (Arrow Function)
```jsx
<button onClick={() => alert('Clicked!')}>Click</button>
```
- Dùng khi cần:
  - Truyền tham số
  - Gọi nhanh logic inline

## 🔹 4. Truyền tham số cho hàm xử lý
```jsx
function handleClick(msg) {
  alert(msg);
}

<button onClick={() => handleClick('Hello React')}>Click me</button>
```

## 🔹 5. onClick trong Class Component
```jsx
class MyComponent extends React.Component {
  handleClick = () => {
    alert('Clicked!');
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```
- Dùng arrow function để tránh lỗi `this` không xác định.

## 🔹 6. Dùng onClick trong map
```jsx
{items.map((item, index) => (
  <button key={index} onClick={() => handleClick(item.id)}>
    {item.name}
  </button>
))}
```

## ❗ 7. Lưu ý tránh lỗi phổ biến
```jsx
// ❌ Sai: gọi hàm ngay lập tức khi render
<button onClick={handleClick()}>Click</button>

// ✅ Đúng: truyền tham chiếu hàm
<button onClick={handleClick}>Click</button>
```

## 🧪 8. Ví dụ đầy đủ
```jsx
import React from 'react';

function App() {
  const handleClick = () => {
    alert('You clicked the button!');
  };

  return (
    <div>
      <h1>Hello React</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
```

## 📚 9. Tài liệu tham khảo
- React Docs: https://reactjs.org/docs/handling-events.html

---

📝 **Tóm lại**:
- `onClick={tênHàm}` nếu không truyền tham số.
- `onClick={() => tênHàm(thamSố)}` nếu cần truyền tham số.
- Không được `onClick={tênHàm()}` vì sẽ gọi ngay khi render.
