# 🏗️ TypeScript: Creating Classes

## 🧱 1. Basic Structure of a Class
```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

---

## 🔧 2. Properties
- Thuộc tính (properties) được khai báo bên trong class.
- Có thể khai báo trực tiếp hoặc qua constructor.

```ts
class Car {
  make: string = "";
  year: number = 0;
}
```

---

## 🧍 3. Structure an Instance (Tạo đối tượng từ class)
```ts
let user = new Person("Alice", 25);
user.greet(); // Output: Hello, my name is Alice
```

---

## 🔐 4. Access Modifiers

| Modifier | Ý nghĩa | Có thể truy cập từ bên ngoài? |
|----------|---------|-------------------------------|
| `public` | Mặc định, truy cập được mọi nơi | ✅ |
| `private` | Chỉ truy cập được trong class | ❌ |
| `protected` | Truy cập trong class và class con | 🔒 |

```ts
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount(1000);
// acc.balance = 0; ❌ Error: 'balance' is private
console.log(acc.getBalance()); // ✅ 1000
```

---

## 🔒 5. Mark Properties as "Private"
```ts
class Student {
  private id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
```

---

## 📦 6. Compile file & noEmitOnError
- Dùng `tsc` để biên dịch file `.ts` thành `.js`.
- Dùng `--noEmitOnError` để không tạo file `.js` nếu có lỗi.

```bash
tsc --noEmitOnError MyClass.ts
```

---

## 📌 7. Ghi chú
- `constructor` được gọi khi tạo object bằng `new`.
- Class giúp tổ chức logic và kiểu dữ liệu rõ ràng hơn.
- `private` đảm bảo tính đóng gói (encapsulation).
- Dùng `tsc` để kiểm tra lỗi trước khi chạy code.

---

## 📚 Tài liệu tham khảo
- https://www.typescriptlang.org/docs/handbook/classes.html
