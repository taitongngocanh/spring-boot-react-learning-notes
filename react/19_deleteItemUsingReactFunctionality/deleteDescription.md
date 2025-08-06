# 🧹 React: Giải thích chi tiết về deleteTodo

## ✅ 1. Luồng hoạt động của `deleteTodo`
- Người dùng click vào một dòng (row) trong danh sách todos.
- `TodoRowItem` gọi hàm `props.deleteTodo(props.rowNumber)`.
- Hàm `deleteTodo` (được định nghĩa trong `App.js`) thực hiện việc xoá todo khỏi state.
- State mới được cập nhật → UI được re-render.

---

## 🔍 2. Chi tiết từng bước

### 🔸 Bước 1: Trong `App.js` (Component cha)
```jsx
const deleteTodo = (deleteTodoRowNumber) => {
  const filtered = todos.filter(todo => todo.rowNumber !== deleteTodoRowNumber);
  setTodos(filtered);
};
```

#### 🔎 Giải thích:
- `deleteTodo` nhận tham số `deleteTodoRowNumber` (số thứ tự của todo cần xoá).
- Dùng `filter()` để tạo một mảng mới, **loại bỏ** todo có `rowNumber` trùng với tham số.
- Gọi `setTodos(filtered)` để cập nhật lại state với danh sách mới.

---

### 🔸 Bước 2: Truyền function xuống `TodoTable`
```jsx
<TodoTable todos={todos} deleteTodo={deleteTodo} />
```

---

### 🔸 Bước 3: `TodoTable` truyền tiếp function xuống `TodoRowItem`
```jsx
{todos.map(todo => (
  <TodoRowItem
    key={todo.rowNumber}
    rowNumber={todo.rowNumber}
    row={todo}
    deleteTodo={deleteTodo}
  />
))}
```

---

### 🔸 Bước 4: `TodoRowItem` gọi function khi người dùng click
```jsx
<tr onClick={() => props.deleteTodo(props.rowNumber)}>
  <td>{props.rowNumber}</td>
  <td>{props.row.description}</td>
</tr>
```

#### 🔎 Giải thích:
- Khi người dùng click vào một row, sự kiện `onClick` được gọi.
- Hàm `props.deleteTodo(props.rowNumber)` chạy và truyền `rowNumber` lên component cha.
- Hàm này gọi đúng `deleteTodo` trong `App.js` để xử lý xoá.

---

## 📌 3. Ví dụ cụ thể

### Giả sử bạn có danh sách:
```js
[
  { rowNumber: 1, description: "Do homework" },
  { rowNumber: 2, description: "Do React" },
  { rowNumber: 3, description: "Do cooking" }
]
```

### Khi click vào row thứ 2:
- `deleteTodo(2)` được gọi.
- `filter()` loại bỏ todo có `rowNumber === 2`.
- Mảng mới:
```js
[
  { rowNumber: 1, description: "Do homework" },
  { rowNumber: 3, description: "Do cooking" }
]
```
- State được cập nhật → React tự động re-render UI.

---

## ❓ 4. Tại sao dùng `filter()` thay vì `splice()`?

| Lý do        | Giải thích |
|--------------|------------|
| **Immutability** | `splice()` thay đổi mảng gốc, điều này **vi phạm nguyên tắc bất biến** trong React |
| **Predictable**  | `filter()` tạo ra một mảng mới → dễ debug và theo dõi |
| **Performance**  | React tối ưu re-render tốt hơn khi state mới là **một object mới** |

---

## ⚠️ 5. Lưu ý quan trọng

- `deleteTodo` là một function được **truyền từ component cha xuống qua props** (prop drilling).
- Mỗi dòng (`<tr>`) có `onClick` riêng với `rowNumber` tương ứng.
- State nằm ở `App.js` (cha), nên khi state thay đổi, **toàn bộ component con liên quan sẽ re-render** tự động.
- Tránh mutate (thay đổi trực tiếp) mảng `todos`.

---

## 📚 Tài liệu tham khảo
- React Docs – Updating Arrays in State: https://react.dev/learn/updating-arrays-in-state
- React Props: https://reactjs.org/docs/components-and-props.html

---

📝 **Tóm lại**:
- `deleteTodo` sử dụng `filter()` để loại bỏ item khỏi mảng state.
- Được truyền từ component cha xuống con để xử lý sự kiện.
- Tránh dùng `splice()` vì nó thay đổi mảng gốc và có thể gây lỗi trong React.
