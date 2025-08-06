# 🚀 Creating Our First TypeScript + React Application

## ✅ 1. Yêu cầu cài đặt
- **Node.js** và **npm** đã được cài đặt.
- **TypeScript** và các tool hỗ trợ được cài thông qua `create-react-app` hoặc `Vite`.

---

## 🔧 2. Tạo project React + TypeScript

### 📦 Cách 1: Dùng `create-react-app`
```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

### 📦 Cách 2: Dùng `Vite` (nhanh, nhẹ hơn)
```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

---

## 🗂️ 3. Cấu trúc thư mục ban đầu
```
my-app/
├── src/
│   ├── App.tsx
│   ├── main.tsx / index.tsx
│   └── ...
├── tsconfig.json
├── package.json
```

---

## 🧱 4. Thêm component TypeScript đầu tiên

### ✅ Tạo file: `src/components/Welcome.tsx`
```tsx
interface WelcomeProps {
  name: string;
}

const Welcome = ({ name }: WelcomeProps) => {
  return <h1>Hello, {name}!</h1>;
};

export default Welcome;
```

---

## 🧩 5. Sử dụng component trong App.tsx
```tsx
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Welcome name="React with TypeScript" />
    </div>
  );
}

export default App;
```

---

## 📌 6. Kiểm tra hoạt động
- Mở trình duyệt tại `http://localhost:3000` (CRA) hoặc `http://localhost:5173` (Vite).
- Kiểm tra xem component hiển thị `"Hello, React with TypeScript!"`

---

## ⚙️ 7. tsconfig.json – Cấu hình TypeScript
- Được tự động tạo.
- Bạn có thể điều chỉnh để bật các tính năng như `strict`, `noImplicitAny`, v.v.

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true
  }
}
```

---

## 📚 8. Một số file TypeScript cơ bản
| File | Mục đích |
|------|----------|
| `.ts` | Logic hoặc utilities không chứa JSX |
| `.tsx` | Dùng khi có JSX trong file |
| `tsconfig.json` | Cấu hình TypeScript cho dự án |

---

## 💡 9. Lưu ý khi bắt đầu
- Luôn định nghĩa kiểu rõ ràng cho props, state, function.
- Tránh dùng `any` trừ khi thực sự cần.
- Sử dụng `interface` hoặc `type` để tăng tính mô tả và kiểm soát lỗi sớm.

---

## 🧠 10. Tóm tắt
- Dùng `npx create-react-app` hoặc `vite` để khởi tạo project.
- Tạo component với `.tsx` và định nghĩa kiểu với `interface`.
- Kiểm tra kết quả trên trình duyệt, chỉnh sửa theo luồng typescript-safe.
- Cấu hình `tsconfig.json` để tối ưu trải nghiệm viết code.

---

## 🔗 Tài liệu tham khảo
- React + TS Cheatsheet: https://react-typescript-cheatsheet.netlify.app/
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- Vite Official Docs: https://vitejs.dev/guide/
