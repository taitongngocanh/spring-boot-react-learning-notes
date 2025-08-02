## 🧠 React Props là gì?

**Props** (viết tắt của "properties") là cách **truyền dữ liệu từ component cha sang component con** trong React. Props giúp component **tái sử dụng** được dễ dàng hơn.

---

## 📦 Ví dụ đơn giản về Props

### 📁 `App.js`
```jsx
import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Tai" />
      <Greeting name="Mai" />
    </div>
  );
}

export default App;

------------------------------------------------------

import React from "react";

function Greeting(props) {
  return <h2>Xin chào, {props.name}!</h2>;
}

export default Greeting;
