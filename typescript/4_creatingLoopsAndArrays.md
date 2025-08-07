# 🔁 TypeScript: Creating Loops and Arrays

## 🔹 1. Khai báo mảng (Arrays)
- Cách khai báo mảng số, chuỗi, hoặc mảng hỗn hợp
```ts
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let mixed: (string | number)[] = ["A", 1, "B", 2];
```

---

## 🔁 2. Basic For Loop
```ts
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}
```

---

## 🔁 3. For Loop với Mảng số (Array of Numbers)
```ts
let nums: number[] = [10, 20, 30, 40, 50];

for (let i = 0; i < nums.length; i++) {
  console.log(`Index ${i}:`, nums[i]);
}
```

---

## 📊 4. Tính trung bình (Compute Average)
```ts
let scores: number[] = [70, 80, 90, 85];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}

let average = total / scores.length;
console.log("Average Score:", average);
```

---

## 🔁 5. Simplified For Loop – `for...of`
```ts
let fruits: string[] = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}
```

---

## 🧠 6. Conditional trong vòng lặp
```ts
let ages: number[] = [18, 21, 16, 30, 12];

for (let age of ages) {
  if (age >= 18) {
    console.log(`${age} is an adult.`);
  } else {
    console.log(`${age} is underage.`);
  }
}
```

---

## 📈 7. Growable Arrays (Mảng có thể thêm phần tử)
```ts
let results: number[] = [];

for (let i = 1; i <= 5; i++) {
  results.push(i * 10);
}

console.log(results); // [10, 20, 30, 40, 50]
```

---

## 🎯 8. Kết hợp Loop + Conditional + Array
```ts
let inputs: number[] = [3, 5, 8, 12, 7];
let evens: number[] = [];

for (let num of inputs) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

console.log("Even numbers:", evens); // [8, 12]
```

---

## ✅ 9. Tổng kết
- `for` và `for...of` giúp lặp qua mảng linh hoạt.
- Dùng mảng có thể mở rộng (`push`) để lưu giá trị động.
- Dùng `if` trong vòng lặp để lọc, xử lý điều kiện.
- Mảng và vòng lặp là nền tảng để thao tác dữ liệu trong mọi ứng dụng.

---

## 📚 Tài liệu tham khảo
- TypeScript Handbook – Arrays: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
