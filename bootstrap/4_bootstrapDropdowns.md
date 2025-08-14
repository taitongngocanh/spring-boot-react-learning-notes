# Tóm tắt kiến thức về Dropdown trong Bootstrap

## 1. Giới thiệu
Dropdown trong Bootstrap là thành phần giao diện dùng để hiển thị một danh sách các mục (menu) khi người dùng nhấp vào một nút hoặc liên kết. Dropdown thường được dùng cho menu điều hướng, lựa chọn tùy chỉnh, hoặc các hành động bổ sung.

## 2. Cấu trúc cơ bản
Dropdown được tạo bằng thẻ `<div>` với class `.dropdown` kết hợp với nút hoặc liên kết kích hoạt và danh sách menu.

**Ví dụ cơ bản:**
```html
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Menu Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Hành động 1</a></li>
    <li><a class="dropdown-item" href="#">Hành động 2</a></li>
    <li><a class="dropdown-item" href="#">Hành động 3</a></li>
  </ul>
</div>
```

- `.dropdown`: Container chính của Dropdown.
- `.dropdown-toggle`: Class cho nút hoặc liên kết kích hoạt Dropdown.
- `data-bs-toggle="dropdown"`: Kích hoạt hành vi Dropdown (yêu cầu Bootstrap JS).
- `.dropdown-menu`: Danh sách các mục trong Dropdown.
- `.dropdown-item`: Mỗi mục trong menu.

## 3. Tùy chỉnh
### a. Kiểu nút
Dropdown có thể sử dụng với các loại nút khác nhau (`.btn-primary`, `.btn-secondary`, v.v.) hoặc liên kết (`<a>`).

**Ví dụ với liên kết:**
```html
<div class="dropdown">
  <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown Link
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Hành động 1</a></li>
    <li><a class="dropdown-item" href="#">Hành động 2</a></li>
  </ul>
</div>
```

### b. Vị trí hiển thị
Dropdown menu có thể được căn chỉnh ở các vị trí khác nhau:
- `.dropdown-menu-end`: Căn phải.
- `.dropdown-menu-start`: Căn trái (mặc định).
- `.dropdown-menu-{sm|md|lg|xl|xxl}-end`: Căn chỉnh theo breakpoint.

**Ví dụ:**
```html
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Menu Căn Phải
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Hành động 1</a></li>
    <li><a class="dropdown-item" href="#">Hành động 2</a></li>
  </ul>
</div>
```

### c. Phân tách và tiêu đề
- `.dropdown-divider`: Thêm đường phân tách giữa các mục.
- `.dropdown-header`: Thêm tiêu đề trong menu.

**Ví dụ:**
```html
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Menu
  </button>
  <ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Tiêu đề</h6></li>
    <li><a class="dropdown-item" href="#">Hành động 1</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Hành động 2</a></li>
  </ul>
</div>
```

### d. Dropdown dạng Split
Tạo nút chia đôi với `.dropdown-toggle-split` để tách nút hành động và nút Dropdown.

**Ví dụ:**
```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Nút Chính</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Hành động 1</a></li>
    <li><a class="dropdown-item" href="#">Hành động 2</a></li>
  </ul>
</div>
```

### e. Dropdown trong Navbar
Dropdown thường được sử dụng trong thanh điều hướng (Navbar) với class `.nav-item` và `.nav-link`.

**Ví dụ:**
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Hành động 1</a></li>
            <li><a class="dropdown-item" href="#">Hành động 2</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## 4. Hỗ trợ trợ năng (Accessibility)
- Sử dụng `aria-expanded="false"` để biểu thị trạng thái của Dropdown.
- Thêm `<span class="visually-hidden">` để mô tả cho trình đọc màn hình.
- Đảm bảo các mục trong `.dropdown-item` có nội dung rõ ràng.

## 5. Lưu ý
- Dropdown yêu cầu Bootstrap JavaScript (hoặc `bootstrap.bundle.min.js`) để hoạt động.
- Có thể dùng JavaScript để điều khiển Dropdown động (mở/đóng).
- Đảm bảo CDN hoặc file CSS/JS của Bootstrap được bao gồm.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## 6. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/components/dropdowns/](https://getbootstrap.com/docs/5.3/components/dropdowns/)