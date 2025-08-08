# 🧬 TypeScript: Inheritance (Kế thừa)

## 📖 1. Khái niệm
- **Inheritance** cho phép một class (child) kế thừa thuộc tính và phương thức từ một class khác (parent).
- Giúp **tái sử dụng code** và áp dụng nguyên tắc **OOP**.

---

## 🔧 2. Cú pháp cơ bản với `extends`
```ts
class Animal {
  constructor(public name: string) {}

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.bark();       // "Woof! Woof!"
dog.move(10);     // "Buddy moved 10 meters."
```

---

## 🏗️ 3. Kế thừa Constructor và dùng `super`
- Khi class con có constructor riêng, phải gọi `super(...)` để chạy constructor của class cha.
```ts
class Bird extends Animal {
  constructor(name: string, public canFly: boolean) {
    super(name); // Gọi constructor của Animal
  }

  fly() {
    if (this.canFly) {
      console.log(`${this.name} is flying!`);
    } else {
      console.log(`${this.name} can't fly.`);
    }
  }
}

const penguin = new Bird("Penguin", false);
penguin.fly(); // "Penguin can't fly."
```

---

## ✏️ 4. Override (Ghi đè) phương thức
- Class con có thể **ghi đè** phương thức của class cha.
- Có thể dùng `super.method()` để gọi lại bản gốc.

```ts
class Cat extends Animal {
  move(distance: number) {
    console.log("Cat is moving silently...");
    super.move(distance); // Gọi phương thức của Animal
  }
}

const cat = new Cat("Kitty");
cat.move(5);
// Output:
// "Cat is moving silently..."
// "Kitty moved 5 meters."
```

---

## 📦 5. Access Modifiers và Kế thừa
- `public`: class con kế thừa và truy cập bình thường.
- `protected`: class con truy cập được, bên ngoài không.
- `private`: class con **không thể** truy cập trực tiếp.

---

## ⚠️ 6. Lưu ý
- Chỉ có thể kế thừa **một class** (single inheritance) nhưng có thể implement nhiều interface.
- Sử dụng `abstract` class nếu muốn class cha chỉ định các phương thức mà class con **bắt buộc** phải triển khai.
- Dùng kế thừa hợp lý để tránh **hierarchy quá phức tạp** (code khó bảo trì).

---

## 📚 7. Tài liệu tham khảo
- https://www.typescriptlang.org/docs/handbook/2/classes.html#inheritance
- https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes
