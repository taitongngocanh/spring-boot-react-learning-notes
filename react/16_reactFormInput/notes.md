onChange# ✏️ React: Ghi chú về `onChange` Handler

## ✅ 1. Khái niệm
- `onChange` là props dùng để **bắt sự kiện thay đổi giá trị** trong các phần tử như `<input>`, `<textarea>`, `<select>`, v.v.
- Thường được dùng để **cập nhật state mỗi khi người dùng nhập dữ liệu**.

---

## 🔹 2. Cú pháp cơ bản
```jsx
const [text, setText] = useState('');

<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
```
- `e` là sự kiện (event).
- `e.target.value` là giá trị hiện tại trong input.

---

## 🔹 3. Xử lý nhiều input (dùng name)
```jsx
const [formData, setFormData] = useState({ name: '', email: '' });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

<input name="name" value={formData.name} onChange={handleChange} />
<input name="email" value={formData.email} onChange={handleChange} />
```

---

## 🔹 4. onChange trong `<select>`
```jsx
const [language, setLanguage] = useState('js');

<select value={language} onChange={(e) => setLanguage(e.target.value)}>
  <option value="js">JavaScript</option>
  <option value="py">Python</option>
  <option value="java">Java</option>
</select>
```

---

## 🔹 5. onChange trong `<textarea>`
```jsx
const [content, setContent] = useState('');

<textarea value={content} onChange={(e) => setContent(e.target.value)} />
```

---

## 🔹 6. Checkbox và Radio

### Checkbox
```jsx
const [isChecked, setIsChecked] = useState(false);

<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

### Radio
```jsx
const [gender, setGender] = useState('');

<input
  type="radio"
  value="male"
  checked={gender === 'male'}
  onChange={(e) => setGender(e.target.value)}
/>
Male

<input
  type="radio"
  value="female"
  checked={gender === 'female'}
  onChange={(e) => setGender(e.target.value)}
/>
Female
```

---

## 🧪 7. Ví dụ tổng hợp form
```jsx
function App() {
  const [form, setForm] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${form.username}, Email: ${form.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={form.username} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 📚 8. Tài liệu tham khảo
- React Docs: https://reactjs.org/docs/forms.html

---

📝 **Tóm lại**:
- `onChange` dùng để lắng nghe thay đổi từ input và cập nhật vào state.
- Sử dụng `e.target.value` (hoặc `e.target.checked` với checkbox).
- Dùng `name` để xử lý nhiều input chung một hàm.
