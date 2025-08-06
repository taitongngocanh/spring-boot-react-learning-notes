# 🔤 TypeScript: Định nghĩa biến & Kiểu dữ liệu cơ bản

## ✅ 1. TypeScript là gì?
- TypeScript là ngôn ngữ lập trình mở rộng từ JavaScript, có **hệ thống kiểu tĩnh (static type system)**.
- Giúp phát hiện lỗi **ngay trong quá trình biên dịch**.
- TypeScript là **strongly typed**: mọi biến, hàm, tham số đều có kiểu rõ ràng.

---

## 🧠 2. Định nghĩa biến trong TypeScript

### 🔸 Cú pháp
```ts
let variableName: type = value;
```

### 🔸 Ví dụ
```ts
let username: string = "Alice";
let age: number = 30;
let isOnline: boolean = true;
```

---

## 🏷️ 3. Các kiểu dữ liệu cơ bản

| Kiểu dữ liệu | Mô tả | Ví dụ |
|-------------|-------|-------|
| `string`    | Chuỗi | `"hello"`, `'world'` |
| `number`    | Số    | `42`, `3.14` |
| `boolean`   | Logic | `true`, `false` |
| `any`       | Bất kỳ | Gỡ bỏ kiểm tra kiểu |

```ts
let fullName: string = "Bob";
let score: number = 95;
let isPassed: boolean = true;
let whatever: any = "Could be anything";
whatever = 123; // không báo lỗi vì là any
```

---

## 🧱 4. Từ khóa `let` vs `const` vs `var`

| Từ khóa | Scope | Thay đổi giá trị? | Khuyên dùng |
|---------|-------|-------------------|-------------|
| `let`   | Block | ✅ Có thể         | ✅ Nên dùng |
| `const` | Block | ❌ Không          | ✅ Dùng khi không cần thay đổi |
| `var`   | Function | ✅ Có thể      | ❌ Hạn chế dùng |

```ts
let counter: number = 0;
const PI: number = 3.14;
```

---

## 🧵 5. Template Strings (Template Literals)

- Cho phép **nối chuỗi dễ dàng** với cú pháp `${}` trong dấu ` (backtick)
- Giúp viết code ngắn gọn và dễ đọc hơn

```ts
let name: string = "Alice";
let age: number = 25;

let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: Hello, my name is Alice and I am 25 years old.
```

---

## ⚠️ 6. TypeScript is Strongly Typed

- Mỗi biến cần khai báo kiểu rõ ràng hoặc được TypeScript suy luận kiểu.
- Nếu gán sai kiểu, **TypeScript sẽ báo lỗi ngay lập tức**.

```ts
let age: number = 30;
age = "thirty"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

---

## 📝 7. Tổng kết
- Dùng `let` hoặc `const` để khai báo biến.
- TypeScript hỗ trợ kiểu tĩnh: `string`, `number`, `boolean`, `any`,...
- Sử dụng template strings giúp viết chuỗi dễ dàng hơn.
- Tránh lạm dụng `any` để giữ code an toàn và dễ bảo trì.

---

## 📚 Tài liệu tham khảo
- https://www.typescriptlang.org/docs/handbook/2/basic-types.html
