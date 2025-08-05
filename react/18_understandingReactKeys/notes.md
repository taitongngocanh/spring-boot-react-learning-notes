# 🔑 React: Ghi chú về Keys trong React

## ✅ 1. Keys là gì?
- `key` là một **thuộc tính đặc biệt** dùng trong React khi render danh sách các phần tử (`array`).
- Giúp React xác định phần tử nào **được thêm, xoá hoặc thay đổi**, từ đó **tối ưu quá trình re-render**.

---

## 🔹 2. Tại sao cần key?
- React so sánh virtual DOM cũ và mới để cập nhật DOM thực.
- Nếu không có `key`, React không thể xác định chính xác phần tử nào thay đổi.
- Giúp tăng hiệu năng và tránh bug hiển thị.

---

## 🔹 3. Cách dùng key trong `.map()`
```jsx
const items = ['Apple', 'Banana', 'Orange'];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

---

## ❗ 4. Không nên dùng index làm key (trừ khi bất khả kháng)
```jsx
// ❌ Trường hợp index là key:
{list.map((item, index) => (
  <li key={index}>{item}</li>
))}

// ✅ Tốt hơn: dùng id duy nhất (nếu có)
{list.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```
- Dùng `index` làm `key` có thể gây **bug khi thêm/xoá/sắp xếp phần tử**.

---

## 🔹 5. Keys phải là **duy nhất** trong danh sách
```jsx
[
  { id: 1, name: 'A' },
  { id: 2, name: 'B' }
]

{data.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```
- Nếu có hai phần tử có cùng key → React sẽ hiểu sai sự thay đổi → lỗi giao diện.

---

## 🧪 6. Ví dụ thực tế
```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
```

---

## 🔹 7. Khi nào có thể dùng index làm key?
- Danh sách **không bao giờ thay đổi** (không thêm/xoá/sắp xếp).
- Dữ liệu không có id duy nhất.
- Hiển thị đơn giản, không có tính năng tương tác.

---

## 📚 8. Tài liệu tham khảo
- React Docs – Lists and Keys: https://reactjs.org/docs/lists-and-keys.html

---

📝 **Tóm lại**:
- Luôn thêm `key` khi render danh sách trong React.
- Tránh dùng `index` làm key nếu dữ liệu có thể thay đổi.
- Dùng `id` hoặc giá trị duy nhất từ dữ liệu làm key.
- Key giúp React xác định đúng phần tử cần cập nhật.
