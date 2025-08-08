# 📦 TypeScript Modules: Import and Export

## 📖 1. Khái niệm
- **Module** trong TypeScript (và JavaScript) là một file riêng biệt chứa code.
- Giúp **tổ chức code** thành các khối nhỏ, dễ quản lý, tái sử dụng.
- Mỗi file `.ts` được coi là một module khi dùng `export` hoặc `import`.

---

## 🚚 2. Export – Xuất dữ liệu/tính năng ra khỏi module

### a) Named Export
```ts
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14;
```

### b) Export all at once
```ts
// constants.ts
const MAX = 100;
const MIN = 0;

export { MAX, MIN };
```

### c) Default Export
```ts
// logger.ts
export default function log(message: string): void {
  console.log("LOG:", message);
}
```
> Một module chỉ có **một default export**.

---

## 📥 3. Import – Nhập dữ liệu/tính năng từ module khác

### a) Import Named
```ts
import { add, PI } from './mathUtils';
console.log(add(2, 3), PI);
```

### b) Import với bí danh (alias)
```ts
import { add as sum } from './mathUtils';
console.log(sum(2, 3));
```

### c) Import Default
```ts
import log from './logger';
log("Hello from module!");
```

### d) Import tất cả
```ts
import * as MathLib from './mathUtils';
console.log(MathLib.add(2, 3), MathLib.PI);
```

---

## 🗂️ 4. Code Organization Best Practices
- Mỗi module nên **chỉ tập trung một chức năng** (Single Responsibility Principle).
- Sắp xếp module theo thư mục: `utils/`, `models/`, `services/`, `components/`, ...
- Dùng `index.ts` để gom và export chung:
```ts
// utils/index.ts
export * from './mathUtils';
export * from './logger';
```
```ts
// app.ts
import { add, PI, log } from './utils';
```

---

## ⚙️ 5. Compiler & Module Resolution
- TypeScript hỗ trợ nhiều module system (`commonjs`, `esnext`, `amd`, ...).
- Cấu hình trong `tsconfig.json`:
```json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "es6",
    "moduleResolution": "node"
  }
}
```

---

## 📌 6. Tổng kết
- **`export`** để chia sẻ hàm/biến/class giữa các file.
- **`import`** để sử dụng những gì module khác xuất ra.
- **Default export** tiện khi chỉ có **một tính năng chính** trong module.
- **Named export** phù hợp khi có nhiều tính năng trong một module.

---

## 📚 7. Tài liệu tham khảo
- https://www.typescriptlang.org/docs/handbook/modules.html
