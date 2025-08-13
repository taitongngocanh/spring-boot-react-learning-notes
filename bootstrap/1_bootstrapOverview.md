# 🎨 Bootstrap

## 📖 1. What is Bootstrap?
- **Bootstrap** là **framework CSS** mã nguồn mở, giúp xây dựng giao diện web **responsive** và **mobile-first** nhanh chóng.
- Cung cấp sẵn:
  - CSS class (styling)
  - JavaScript component (tương tác UI)
- Ban đầu được phát triển bởi Twitter.

---

## 💡 2. Why use Bootstrap?
1. **Nhanh** → Có sẵn nhiều UI components và layout system.
2. **Responsive** → Tự động thích ứng trên mọi kích thước màn hình.
3. **Dễ dùng** → Chỉ cần HTML + class Bootstrap là có UI đẹp.
4. **Tùy biến dễ dàng** → Có thể override style bằng CSS riêng.
5. **Hỗ trợ cộng đồng lớn** → Tài liệu, ví dụ, template nhiều.

---

## ⚙️ 3. How to setup
### Cách 1: Sử dụng CDN (nhanh, không cài đặt)
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

### Cách 2: Cài qua npm (cho dự án lớn)
```bash
npm install bootstrap
```
Import trong file JS/TS:
```js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
```

---

## 📦 4. Bootstrap Components

### 📌 Containers
- Dùng để bọc nội dung, canh lề và giới hạn độ rộng.
```html
<div class="container">Fixed width</div>
<div class="container-fluid">Full width</div>
```

### 📌 Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-secondary">Outline</button>
```

### 📌 Dropdown Menus
```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
</div>
```

### 📌 Cards
```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Description...</p>
  </div>
</div>
```

### 📌 Alerts
```html
<div class="alert alert-success">Success alert!</div>
```

### 📌 Spinners
```html
<div class="spinner-border" role="status"></div>
```

### 📌 Progress Bars
```html
<div class="progress">
  <div class="progress-bar" style="width: 60%"></div>
</div>
```

### 📌 Collapse
```html
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample">
  Toggle
</a>
<div class="collapse" id="collapseExample">
  <div class="card card-body">Content...</div>
</div>
```

### 📌 Accordions
```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">Content...</div>
    </div>
  </div>
</div>
```

### 📌 Navbars
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Brand</a>
</nav>
```

### 📌 Rows & Columns (Grid System)
```html
<div class="row">
  <div class="col">Column 1</div>
  <div class="col">Column 2</div>
</div>
```

### 📌 Tables
```html
<table class="table table-striped">
  <tr><th>#</th><th>Name</th></tr>
  <tr><td>1</td><td>John</td></tr>
</table>
```

### 📌 Forms
```html
<form>
  <input type="text" class="form-control" placeholder="Enter name">
</form>
```

### 📌 Modals
```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog"><div class="modal-content">Modal content...</div></div>
</div>
```

### 📌 Hide / Show Components
```html
<!-- Hide -->
<div class="d-none">Hidden</div>
<!-- Show only on md and larger -->
<div class="d-none d-md-block">Visible on md+</div>
```

---

## 📚 5. Tài liệu tham khảo
- https://getbootstrap.com/docs/5.3/getting-started/introduction/
