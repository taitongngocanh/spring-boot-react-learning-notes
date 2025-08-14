# Tóm tắt kiến thức về Spinner trong Bootstrap

## 1. Giới thiệu
Spinner trong Bootstrap là thành phần giao diện dùng để hiển thị trạng thái đang tải (loading) hoặc xử lý, thường được sử dụng trong các tác vụ như gửi form, tải dữ liệu, hoặc chờ phản hồi từ server. Bootstrap cung cấp các class CSS để tạo Spinner dễ dàng và tùy chỉnh.

## 2. Cấu trúc cơ bản
Spinner được tạo bằng thẻ `<div>` hoặc `<button>` với các class chính:
- `.spinner-border`: Tạo Spinner dạng vòng tròn xoay.
- `.spinner-grow`: Tạo Spinner dạng thu nhỏ/phình to.

**Ví dụ Spinner Border:**
```html
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

**Ví dụ Spinner Grow:**
```html
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

- `role="status"`: Hỗ trợ trợ năng, chỉ định trạng thái của Spinner.
- `.visually-hidden`: Ẩn văn bản "Loading..." nhưng vẫn đọc được bởi trình đọc màn hình.

## 3. Tùy chỉnh
### a. Màu sắc
Sử dụng các class ngữ cảnh để thay đổi màu sắc:
- `.text-primary`, `.text-success`, `.text-info`, `.text-warning`, `.text-danger`, v.v.

**Ví dụ:**
```html
<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

### b. Kích thước
- `.spinner-border-sm` hoặc `.spinner-grow-sm`: Spinner kích thước nhỏ.
- Để tùy chỉnh kích thước khác, sử dụng CSS tùy chỉnh (width, height).

**Ví dụ:**
```html
<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

### c. Trong nút (Button)
Spinner thường được dùng trong nút để biểu thị trạng thái xử lý.

**Ví dụ:**
```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
```

### d. Căn chỉnh
Spinner có thể được căn chỉnh bằng các class tiện ích của Bootstrap như `.text-center`, `.d-flex`, `.justify-content-center`, v.v.

**Ví dụ:**
```html
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
```

## 4. Hỗ trợ trợ năng (Accessibility)
- Luôn thêm `role="status"` và `<span class="visually-hidden">Loading...</span>` để hỗ trợ trình đọc màn hình.
- Nếu Spinner trong nút, thêm `aria-hidden="true"` cho Spinner để tránh trùng lặp thông tin.

## 5. Lưu ý
- Bootstrap 5.x không yêu cầu jQuery, Spinner hoạt động thuần CSS và HTML.
- Có thể dùng JavaScript để hiển thị/ẩn Spinner động dựa trên trạng thái ứng dụng.
- Đảm bảo CDN hoặc file CSS/JS của Bootstrap được bao gồm trong dự án.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## 6. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/components/spinners/](https://getbootstrap.com/docs/5.3/components