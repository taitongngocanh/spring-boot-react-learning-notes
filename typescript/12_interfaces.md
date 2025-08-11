# 📑 TypeScript: Interfaces

## 📖 1. Khái niệm
- **Interface** định nghĩa **hợp đồng** (contract) cho cấu trúc dữ liệu hoặc hành vi của đối tượng/class.
- Chỉ chứa **kiểu dữ liệu**, không chứa **implementation** (logic code).
- Giúp code dễ đọc, dễ bảo trì, và đảm bảo tính nhất quán.

---

## 🔧 2. Định nghĩa Interface cơ bản
```ts
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 25
};
```

---

## 🏗️ 3. Thuộc tính tùy chọn & readonly
```ts
interface Product {
  readonly id: number;  // Không thể thay đổi sau khi gán
  name: string;
  price?: number;       // Có thể có hoặc không
}

const item: Product = { id: 1, name: "Laptop" };
// item.id = 2; ❌ Error
```

---

## ✏️ 4. Interface cho Function
```ts
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (x, y) => x + y;
```

---

## 📦 5. Interface cho Class (implements)
```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // "Woof! Woof!"
```

---

## 🔄 6. Kế thừa Interface (extends)
```ts
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

const circle: Circle = { color: "red", radius: 10 };
```

---

## 🔀 7. Multiple Inheritance (đa kế thừa interface)
```ts
interface CanFly {
  fly(): void;
}

interface CanSwim {
  swim(): void;
}

interface SuperAnimal extends CanFly, CanSwim {}

class Duck implements SuperAnimal {
  fly() { console.log("Flying"); }
  swim() { console.log("Swimming"); }
}
```

---

## ⚠️ 8. Lưu ý quan trọng
- Interface **chỉ định nghĩa** kiểu dữ liệu, không có code thực thi.
- Class có thể **implements nhiều interface**.
- Interface có thể mở rộng (`extends`) nhiều interface khác.
- Dùng interface cho **data shape** hoặc **API contracts** để đảm bảo tính rõ ràng.

---

## 📚 9. Tài liệu tham khảo
- https://www.typescriptlang.org/docs/handbook/2/objects.html
- https://www.typescriptlang.org/docs/handbook/interfaces.html
