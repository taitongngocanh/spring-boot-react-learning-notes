# 🏛️ TypeScript: Abstract Class

## 📖 1. Khái niệm
- **Abstract class** là class **không thể tạo instance trực tiếp**.
- Được dùng làm **khuôn mẫu** (blueprint) cho các class con.
- Có thể chứa:
  - **Abstract methods**: chỉ khai báo, không có thân hàm.
  - **Concrete methods**: có thân hàm và logic cụ thể.

---

## 🔧 2. Cú pháp cơ bản
```ts
abstract class Animal {
  constructor(public name: string) {}

  // Abstract method: bắt buộc class con phải triển khai
  abstract makeSound(): void;

  // Concrete method: class con kế thừa trực tiếp
  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}
```

---

## 🏗️ 3. Kế thừa từ Abstract Class
```ts
class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound();  // "Woof! Woof!"
dog.move(10);     // "Buddy moved 10 meters."

// const animal = new Animal("Test"); ❌ Error: Cannot create an instance of an abstract class
```

---

## ✏️ 4. Abstract Method
- Chỉ khai báo **tên, tham số, kiểu trả về**.
- Không có `{ ... }` phần thân hàm.
- Class con **bắt buộc** phải override.

```ts
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(public radius: number) { super(); }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

---

## 🧩 5. Abstract + Concrete kết hợp
- Abstract class có thể định nghĩa một số phương thức mặc định, một số để trống.
```ts
abstract class Vehicle {
  abstract startEngine(): void;

  stopEngine() {
    console.log("Engine stopped.");
  }
}
```

---

## ⚠️ 6. Lưu ý quan trọng
- Dùng `abstract` khi muốn **ép** class con phải triển khai một số phương thức.
- Có thể chứa **property** và **constructor** như class bình thường.
- Abstract class có thể **implement interface**.
- Dùng để **chia sẻ logic chung** và **định nghĩa hợp đồng** cho class con.

---

## 📚 7. Tài liệu tham khảo
- https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes
- https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-methods-and-fields
