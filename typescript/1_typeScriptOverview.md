# 🔷 React + TypeScript: Tổng quan & Ghi chú nhanh

## ✅ 1. TypeScript là gì?
- TypeScript là một **superset của JavaScript** có thêm tính năng **kiểu tĩnh (static types)**.
- Giúp bạn **phát hiện lỗi sớm**, **dễ bảo trì**, và **hỗ trợ tốt hơn trong IDE** (intellisense, autocompletion).

---

## 🚀 2. Lợi ích khi dùng TypeScript với React
- Phát hiện lỗi ngay khi viết code.
- Tránh lỗi undefined/null.
- Dễ đọc code, dễ debug hơn.
- Tăng độ tin cậy khi refactor.
- Hỗ trợ tốt khi làm việc nhóm.

---

## 🧱 3. Kiểu dữ liệu cơ bản trong TypeScript
```ts
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;
let tags: string[] = ["react", "typescript"];
```

---

## 🧩 4. Component Function với Props
### Cách 1: Định nghĩa props bằng `interface`
```tsx
interface UserProps {
  name: string;
  age: number;
}

const UserCard: React.FC<UserProps> = ({ name, age }) => {
  return <p>{name} is {age} years old.</p>;
};
```

### Cách 2: Sử dụng inline type
```tsx
const Greeting = ({ message }: { message: string }) => {
  return <h1>{message}</h1>;
};
```

---

## 🧮 5. State trong React với TypeScript
```tsx
const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string | null>(null);
```

---

## 🧪 6. Event Handling
```tsx
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Clicked", event);
};

<button onClick={handleClick}>Click me</button>
```

---

## 🧰 7. useRef, useEffect với TS
```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
}, []);
```

---

## 📦 8. Optional và Default Props
```tsx
interface BoxProps {
  width?: number;
  height?: number;
}

const Box: React.FC<BoxProps> = ({ width = 100, height = 100 }) => {
  return <div style={{ width, height, background: 'gray' }} />;
};
```

---

## 🔁 9. Kiểu cho mảng và danh sách
```tsx
interface Todo {
  id: number;
  title: string;
}

const todos: Todo[] = [
  { id: 1, title: "Learn TS" },
  { id: 2, title: "Use TS with React" }
];
```

---

## 💬 10. Type cho Props truyền qua Component
```tsx
interface ButtonProps {
  onClick: () => void;
  label: string;
}

const CustomButton = ({ onClick, label }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
```

---

## ⚠️ 11. Lưu ý quan trọng
- Không lạm dụng kiểu `any` vì nó làm mất lợi thế của TS.
- Dùng `interface` hoặc `type` để định nghĩa rõ ràng cấu trúc props, state.
- Dùng `?` để đánh dấu props optional.
- Dùng `|` để khai báo union types (`string | null`, v.v).

---

## 📚 12. Tài liệu tham khảo
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- React + TS Cheatsheet: https://react-typescript-cheatsheet.netlify.app/
- React Docs: https://react.dev/learn/typescript

---

📝 **Tóm lại**:
- TypeScript giúp viết React code **an toàn, rõ ràng và dễ debug hơn**.
- Tập trung vào khai báo rõ props, state, sự kiện, ref.
- Càng chi tiết về kiểu, ứng dụng càng dễ bảo trì về sau.
