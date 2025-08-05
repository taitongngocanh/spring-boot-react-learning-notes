# 🔁 React: Ghi chú về Passing Functions Through Props

## ✅ 1. Khái niệm
- Trong React, **hàm có thể được truyền từ component cha xuống component con** thông qua `props`.
- Cách này thường được dùng khi **component con cần báo ngược dữ liệu hoặc hành động cho component cha**.

---

## 🔹 2. Cú pháp cơ bản
### a. Cha truyền hàm cho con
```jsx
function Parent() {
  const showMessage = () => {
    alert('Hello from parent!');
  };

  return <Child onClick={showMessage} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
```

---

## 🔹 3. Truyền hàm có tham số
```jsx
function Parent() {
  const handleMessage = (msg) => {
    alert(msg);
  };

  return <Child onSend={() => handleMessage('Hi from child')} />;
}

function Child({ onSend }) {
  return <button onClick={onSend}>Send Message</button>;
}
```

---

## 🔹 4. Con gửi dữ liệu ngược về cha
```jsx
function Parent() {
  const handleData = (data) => {
    console.log('Received from child:', data);
  };

  return <Child sendData={handleData} />;
}

function Child({ sendData }) {
  return (
    <button onClick={() => sendData('This is child data')}>
      Send Data
    </button>
  );
}
```

---

## 🔹 5. Dùng trong form hoặc input con
```jsx
function Parent() {
  const handleChange = (value) => {
    console.log('Input value from child:', value);
  };

  return <ChildInput onChangeValue={handleChange} />;
}

function ChildInput({ onChangeValue }) {
  return (
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      placeholder="Type something"
    />
  );
}
```

---

## 🧪 6. Ví dụ đầy đủ
```jsx
function Parent() {
  const [message, setMessage] = useState('');

  const handleUpdate = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h2>Message from child: {message}</h2>
      <Child onSendMessage={handleUpdate} />
    </div>
  );
}

function Child({ onSendMessage }) {
  const send = () => {
    onSendMessage('Hello Parent!');
  };

  return <button onClick={send}>Send to Parent</button>;
}
```

---

## 📚 7. Tài liệu tham khảo
- React Docs - Components and Props: https://reactjs.org/docs/components-and-props.html

---

📝 **Tóm lại**:
- Component cha có thể truyền **hàm** qua props.
- Component con gọi hàm đó để:
  - Báo hiệu hành động
  - Truyền dữ liệu lên cha
- Cần dùng `arrow function` nếu muốn truyền tham số.
