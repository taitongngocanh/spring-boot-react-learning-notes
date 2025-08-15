# Tóm tắt kiến thức về Navigation Bar (Navbar) trong Bootstrap

## 1. Giới thiệu
Navigation Bar (Navbar) trong Bootstrap là thành phần giao diện dùng để tạo thanh điều hướng, thường được đặt ở đầu hoặc cạnh trang web. Navbar hỗ trợ các liên kết, menu thả xuống (Dropdown), biểu mẫu tìm kiếm, và phản hồi theo kích thước màn hình (responsive).

## 2. Cấu trúc cơ bản
Navbar được tạo bằng thẻ `<nav>` với class `.navbar` kết hợp với các thành phần như logo, liên kết, và nút toggle cho thiết bị di động.

**Ví dụ cơ bản:**
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Giới thiệu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Liên hệ</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

- `.navbar`: Class chính cho Navbar.
- `.navbar-expand-{sm|md|lg|xl|xxl}`: Điều khiển điểm ngắt (breakpoint) để Navbar chuyển sang chế độ responsive.
- `.navbar-light` hoặc `.navbar-dark`: Định dạng màu sắc (cho nền sáng hoặc tối).
- `.bg-*`: Thay đổi màu nền (ví dụ: `.bg-light`, `.bg-dark`).
- `.navbar-brand`: Logo hoặc tên thương hiệu.
- `.navbar-toggler`: Nút toggle cho thiết bị di động.
- `.collapse.navbar-collapse`: Vùng nội dung ẩn/hiện khi ở chế độ di động.
- `.navbar-nav`: Danh sách các mục điều hướng.
- `.nav-item`: Mỗi mục trong danh sách.
- `.nav-link`: Liên kết trong Navbar.

## 3. Giải thích `data-bs-toggle` và `data-bs-target`
- **`data-bs-toggle`**: Thuộc tính này chỉ định hành vi JavaScript của Bootstrap sẽ được kích hoạt. Trong Navbar, `data-bs-toggle="collapse"` được sử dụng để kích hoạt cơ chế gập/mở (collapse) cho vùng nội dung (thường là menu trên thiết bị di động). Giá trị `"collapse"` cho biết Bootstrap sẽ điều khiển hành vi ẩn/hiện của một vùng nội dung.
- **`data-bs-target`**: Thuộc tính này xác định vùng nội dung cụ thể sẽ được gập/mở. Giá trị của `data-bs-target` là một bộ chọn CSS (thường là `id` của vùng nội dung, ví dụ: `#navbarNav`). Khi người dùng nhấp vào phần tử có `data-bs-toggle="collapse"`, Bootstrap sẽ tìm và chuyển đổi trạng thái hiển thị của phần tử có `id` khớp với `data-bs-target`.

**Ví dụ minh họa:**
```html
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <!-- Nội dung menu -->
</div>
```
- `data-bs-toggle="collapse"`: Kích hoạt hành vi gập/mở.
- `data-bs-target="#navbarNav"`: Chỉ định vùng `#navbarNav` sẽ được ẩn/hiện khi nhấp vào nút.

## 4. Tùy chỉnh
### a. Màu sắc và nền
Sử dụng `.navbar-light` hoặc `.navbar-dark` kết hợp với `.bg-*` để tùy chỉnh màu sắc.

**Ví dụ:**
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <!-- Nội dung Navbar -->
</nav>
```

### b. Dropdown trong Navbar
Tích hợp Dropdown để tạo menu thả xuống.

**Ví dụ:**
```html
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Hành động 1</a></li>
    <li><a class="dropdown-item" href="#">Hành động 2</a></li>
  </ul>
</li>
```

- `data-bs-toggle="dropdown"`: Kích hoạt hành vi Dropdown.
- `data-bs-target` không cần thiết trong Dropdown vì Bootstrap tự động tìm `.dropdown-menu` gần nhất.

### c. Biểu mẫu trong Navbar
Thêm biểu mẫu tìm kiếm hoặc các trường nhập liệu.

**Ví dụ:**
```html
<form class="d-flex ms-auto">
  <input class="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search">
  <button class="btn btn-outline-success" type="submit">Tìm</button>
</form>
```

- `.d-flex`: Sắp xếp các phần tử biểu mẫu theo hàng ngang.
- `.ms-auto`: Đẩy biểu mẫu sang phải.

### d. Responsive
- `.navbar-expand-{breakpoint}`: Quy định khi nào Navbar chuyển sang chế độ di động.
- `.container` hoặc `.container-fluid`: Kiểm soát độ rộng của Navbar.

**Ví dụ:**
```html
<nav class="navbar navbar-expand-md navbar-light bg-light">
  <div class="container">
    <!-- Nội dung Navbar -->
  </div>
</nav>
```

### e. Vị trí cố định
Sử dụng `.fixed-top`, `.fixed-bottom`, hoặc `.sticky-top` để cố định vị trí Navbar.

**Ví dụ:**
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <!-- Nội dung Navbar -->
</nav>
```

## 5. Hỗ trợ trợ năng (Accessibility)
- Sử dụng `aria-expanded` để chỉ trạng thái gập/mở của Navbar.
- Thêm `aria-controls` để liên kết nút toggle với vùng nội dung.
- Sử dụng `aria-label` cho `.navbar-toggler` để mô tả chức năng (ví dụ: "Toggle navigation").
- Đảm bảo các `.nav-link` có nội dung rõ ràng cho trình đọc màn hình.

## 6. Lưu ý
- Navbar yêu cầu Bootstrap JavaScript (hoặc `bootstrap.bundle.min.js`) để xử lý gập/mở và Dropdown.
- Có thể dùng JavaScript để điều khiển trạng thái Navbar động.
- Đảm bảo CDN hoặc file CSS/JS của Bootstrap được bao gồm.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## 7. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/components/navbar/](https://getbootstrap.com/docs/5.3/components/navbar/)