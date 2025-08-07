# 🏗️ TypeScript: Constructor Parameter Properties

## 🔹 1. Khái niệm
- **Constructor Parameter Properties** là cú pháp rút gọn để khai báo và khởi tạo thuộc tính (property) trong class.
- Giúp giảm dòng code khi bạn cần truyền giá trị vào constructor và gán luôn vào `this`.

---

## ✍️ 2. Không dùng Parameter Properties (cách truyền thống)
```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

---

## ✅ 3. Dùng Parameter Properties – Cú pháp rút gọn
```ts
class Person {
  constructor(public name: string, public age: number) {}
}
```

- `public name: string` trong constructor sẽ:
  - **khai báo thuộc tính** `name`
  - **gán giá trị** truyền vào constructor cho `this.name`

- Có thể dùng `public`, `private`, hoặc `readonly`:
```ts
class Employee {
  constructor(
    private id: number,
    public name: string,
    readonly department: string
  ) {}
}
```

---

## 🚀 4. Parameter Properties in Action
```ts
class Product {
  constructor(
    public id: number,
    public name: string,
    private price: number
  ) {}

  getPriceWithTax(tax: number): number {
    return this.price * (1 + tax);
  }
}

const item = new Product(1, "Book", 20);
console.log(item.name);               // ✅ "Book"
// console.log(item.price);          // ❌ Error: 'price' is private
console.log(item.getPriceWithTax(0.1)); // ✅ 22
```

---

## 🧠 5. Ghi chú quan trọng
- Cú pháp này giúp code **ngắn gọn** hơn nhiều, nhất là với class nhiều thuộc tính.
- Chỉ hoạt động nếu bạn dùng **access modifier** (`public`, `private`, `protected`, `readonly`) trước tham số.
- Không thể dùng với tham số **không có modifier** (sẽ không được gán tự động).

---

## 📚 6. Tài liệu tham khảo
- https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties
