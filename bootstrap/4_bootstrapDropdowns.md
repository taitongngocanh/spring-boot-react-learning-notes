# Bootstrap Dropdown

## 1. Giới thiệu
- **Dropdown** cho phép tạo menu xổ xuống khi click vào nút hoặc liên kết.
- Ứng dụng trong navigation, menu hành động hoặc form.

## 2. Cấu trúc cơ bản
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

## 3. Dropdown trong Navbar
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Menu
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
</li>

## 4. Vị trí Dropdown
### Dropup
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
</div>

### Dropend
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
</div>

### Dropstart
<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
</div>

## 5. Chia nhóm & tiêu đề
<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
</ul>

## 6. Disabled Item
<ul class="dropdown-menu">
  <li><a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a></li>
</ul>

## 7. Dropdown với Form
<ul class="dropdown-menu p-4">
  <form>
    <div class="mb-3">
      <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</ul>

## 8. Ghi chú
- Cần Bootstrap JavaScript (hoặc bundle) để dropdown hoạt động.
- `data-bs-toggle="dropdown"` là thuộc tính bắt buộc để kích hoạt.
- Có thể kết hợp với `.btn-group` để nhóm nhiều dropdown.
- Hỗ trợ điều hướng bàn phím: Tab, phím mũi tên.

📚 **Tài liệu**: [Bootstrap Dropdowns](https://getbootstrap.com/docs/5.3/components/dropdowns/)
