## 🔁 Duyệt danh sách `todos` bằng `.map()` và truyền props

Khi có một mảng dữ liệu `props.todos`, bạn có thể dùng `.map()` để lặp qua từng phần tử và render nhiều component giống nhau với dữ liệu khác nhau. Ví dụ dưới đây lặp qua danh sách `todos` và hiển thị các `<TodoRowItem />`, mỗi item nhận 3 props: `rowNumber`, `rowDescription`, `rowAssigned`.

```jsx
{props.todos.map(todo => (
  <TodoRowItem
    key={todo.rowNumber}
    rowNumber={todo.rowNumber}
    rowDescription={todo.rowDescription}
    rowAssigned={todo.rowAssigned}
  />
))}

props.todos: mảng danh sách công việc truyền từ component cha.

.map(...): lặp qua từng phần tử todo.

<TodoRowItem />: component con để hiển thị một dòng công việc.

key: giúp React tối ưu việc render.

rowNumber, rowDescription, rowAssigned: dữ liệu cụ thể được truyền từ todo.

👉 Mục đích: tạo danh sách component hiển thị động theo dữ liệu đầu vào.