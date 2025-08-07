# 🚪 TypeScript: Defining Accessors (Getter / Setter)

## 🔍 1. How to Access Properties
- Trong class, bạn có thể truy cập thuộc tính thông qua **getter/setter** thay vì trực tiếp.
- Mục đích: kiểm soát truy cập, xác thực giá trị, đóng gói dữ liệu.

---

## 🔧 2. Getter / Setter Methods
```ts
class Employee {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // Getter
  get name(): string {
    return this._name;
  }

  // Setter
  set name(newName: string) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      throw new Error("Name cannot be empty.");
    }
  }
}

const emp = new Employee("Alice");
console.log(emp.name);   // Gọi getter
emp.name = "Bob";        // Gọi setter
console.log(emp.name);   // Output: Bob
```

---

## ✍️ 3. Sử dụng dấu gạch dưới `_`
- Quy ước dùng `_property` để phân biệt biến nội bộ (private) với getter/setter cùng tên.
- Không bắt buộc, nhưng **rất phổ biến** để tránh đệ quy vô hạn.

```ts
private _balance: number;

get balance(): number {
  return this._balance;
}

set balance(value: number) {
  this._balance = value;
}
```

---

## ⚠️ 4. Compiler Flag: `--target ES5`
- Để sử dụng **getter/setter** đúng cách khi biên dịch TypeScript sang JavaScript, bạn cần bật target ES5 trở lên.

```bash
tsc --target ES5 accessor.ts
```

---

## 😵 5. Vấn đề với quá nhiều compiler flags
- Khi dùng nhiều flag trong CLI (command line), dễ gây nhầm lẫn hoặc sai sót.
- Giải pháp: cấu hình mọi thứ trong một file duy nhất – `tsconfig.json`.

---

## 🛠️ 6. `tsconfig.json` Example

```json
{
  "compilerOptions": {
    "target": "ES5",
    "strict": true,
    "noEmitOnError": true,
    "outDir": "./dist"
  },
  "include": ["./src"]
}
```

- `target`: đảm bảo hỗ trợ getter/setter.
- `noEmitOnError`: ngăn tạo file `.js` khi có lỗi.
- `strict`: bật chế độ kiểm tra nghiêm ngặt (nên dùng).
- `outDir`: thư mục chứa file biên dịch.

---

## ✅ 7. Tổng kết
- Dùng getter/setter để bảo vệ và kiểm soát truy cập dữ liệu.
- Dùng `_` để phân biệt biến nội bộ với accessor.
- Nên cấu hình flag trong `tsconfig.json` thay vì gõ CLI thủ công mỗi lần.
- `--target ES5` là cần thiết cho getter/setter hoạt động đúng trong JS.

---

## 📚 Tài liệu tham khảo
- https://www.typescriptlang.org/docs/handbook/classes.html#getters--setters
- https://www.typescriptlang.org/tsconfig
