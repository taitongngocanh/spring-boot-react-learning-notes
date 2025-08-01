# 🧠 React App Loading Explained

## 🔁 React renders UI into HTML using a root element.

### 📄 File: `public/index.html`

```html
<body>
  <div id="root"></div>
</body>
```

- Đây là điểm khởi đầu (entry point) của ứng dụng React.
- `div#root` là nơi **React sẽ “gắn” toàn bộ ứng dụng UI**.

---

### 📄 File: `src/index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- `ReactDOM.createRoot(...)`: tạo một "gốc" để React quản lý DOM.
- `document.getElementById('root')`: lấy thẻ `div` trong `index.html`.
- `<App />` là **component gốc** của ứng dụng.
- React sẽ thay thế nội dung bên trong `#root` bằng UI do `<App />` tạo ra.

---

### 📄 File: `src/App.js`

```js
function App() {
  return (
    <p>We made our first React Application!</p>
  );
}

export default App;
```

- Đây là nội dung được React render lên trình duyệt.
- Bạn sẽ thấy dòng chữ:  
  _"We made our first React Application!"_

---

## 🧩 Tổng Kết

1. `index.html` chứa thẻ `<div id="root">`.
2. `index.js` dùng ReactDOM để render `<App />` vào `#root`.
3. `App.js` trả về UI React muốn hiển thị.
4. Kết quả: nội dung trong `App.js` hiển thị trên giao diện trình duyệt.

> ✅ Tương tự như `include` trong các ngôn ngữ khác: bạn "đưa" React vào HTML qua `div#root`.
