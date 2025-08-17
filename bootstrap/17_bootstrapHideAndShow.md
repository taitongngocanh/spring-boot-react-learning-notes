# Tóm tắt kiến thức về Hide và Show theo kích thước màn hình trong Bootstrap

## 1. Giới thiệu
Bootstrap cung cấp các **class tiện ích (utility classes)** để ẩn (`hide`) hoặc hiển thị (`show`) các phần tử dựa trên kích thước màn hình (breakpoints). Điều này giúp kiểm soát giao diện responsive, đảm bảo nội dung chỉ hiển thị hoặc ẩn trên các thiết bị phù hợp.

## 2. Breakpoints trong Bootstrap
Bootstrap sử dụng các breakpoints sau để quản lý kích thước màn hình:
- `xs`: <576px (màn hình siêu nhỏ).
- `sm`: ≥576px (màn hình nhỏ).
- `md`: ≥768px (màn hình trung bình).
- `lg`: ≥992px (màn hình lớn).
- `xl`: ≥1200px (màn hình rất lớn).
- `xxl`: ≥1400px (màn hình siêu lớn).

## 3. Class ẩn/hiển thị
Bootstrap cung cấp hai loại class chính để ẩn hoặc hiển thị phần tử:
- **`.d-{breakpoint}-none`**: Ẩn phần tử tại breakpoint cụ thể trở lên.
- **`.d-{breakpoint}-block`**, `.d-{breakpoint}-inline`, `.d-{breakpoint}-flex`, v.v.: Hiển thị phần tử với kiểu hiển thị cụ thể (block, inline, flex, v.v.) tại breakpoint.

### a. Ẩn phần tử
Sử dụng `.d-{breakpoint}-none` để ẩn phần tử tại breakpoint cụ thể và các kích thước lớn hơn, trừ khi được ghi đè bởi class khác.

**Ví dụ:**
```html
<div class="d-none d-md-block">
  Ẩn trên xs và sm, hiển thị từ md trở lên.
</div>
```

- `.d-none`: Ẩn phần tử mặc định (trên mọi kích thước).
- `.d-md-block`: Hiển thị dạng block từ màn hình ≥768px.

### b. Hiển thị phần tử
Sử dụng `.d-{breakpoint}-{type}` để hiển thị phần tử với kiểu hiển thị cụ thể (`block`, `inline`, `inline-block`, `flex`, v.v.) tại breakpoint.

**Ví dụ:**
```html
<div class="d-sm-none d-md-flex">
  Ẩn trên sm (≥576px), hiển thị dạng flex từ md (≥768px).
</div>
```

### c. Kết hợp nhiều breakpoint
Có thể kết hợp nhiều class để kiểm soát hiển thị trên các kích thước màn hình khác nhau.

**Ví dụ:**
```html
<div class="d-none d-sm-block d-md-none d-lg-block">
  Ẩn trên xs, hiển thị trên sm, ẩn trên md, hiển thị từ lg trở lên.
</div>
```

## 4. Class tiện ích cụ thể
### a. Ẩn trên một số kích thước
- `.d-none`: Ẩn trên tất cả màn hình.
- `.d-{breakpoint}-none`: Ẩn từ breakpoint trở lên (ví dụ: `.d-md-none` ẩn từ ≥768px).

**Ví dụ:**
```html
<div class="d-none d-lg-block">
  Ẩn trên tất cả màn hình nhỏ hơn lg, hiển thị từ lg (≥992px).
</div>
```

### b. Hiển thị với kiểu cụ thể
- `.d-{breakpoint}-block`: Hiển thị dạng block.
- `.d-{breakpoint}-inline`: Hiển thị dạng inline.
- `.d-{breakpoint}-inline-block`: Hiển thị dạng inline-block.
- `.d-{breakpoint}-flex`: Hiển thị dạng flex.

**Ví dụ:**
```html
<div class="d-sm-inline-block d-md-flex">
  Hiển thị dạng inline-block từ sm, dạng flex từ md.
</div>
```

## 5. Ứng dụng thực tế
### a. Ẩn/hiển thị nội dung theo thiết bị
- Ẩn nội dung trên thiết bị di động, hiển thị trên máy tính:
```html
<div class="d-none d-md-block">
  Chỉ hiển thị trên máy tính (≥768px).
</div>
```
- Hiển thị nội dung chỉ trên di động:
```html
<div class="d-block d-md-none">
  Chỉ hiển thị trên di động (<768px).
</div>
```

### b. Kết hợp với các thành phần khác
Sử dụng với Navbar, Form, hoặc các thành phần khác để tối ưu giao diện.

**Ví dụ với Navbar:**
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <span class="d-block d-md-none">Menu Di Động</span>
    <span class="d-none d-md-block">Menu Máy Tính</span>
  </div>
</nav>
```

## 6. Hỗ trợ trợ năng (Accessibility)
- Khi ẩn phần tử bằng `.d-none` hoặc `.d-{breakpoint}-none`, Bootstrap tự động thêm `aria-hidden="true"` để ẩn khỏi trình đọc màn hình.
- Đảm bảo nội dung hiển thị/ẩn vẫn có ý nghĩa ngữ nghĩa, tránh làm mất thông tin quan trọng.
- Kiểm tra trải nghiệm người dùng trên các thiết bị để đảm bảo nội dung phù hợp.

## 7. Lưu ý
- Các class tiện ích này chỉ cần CSS của Bootstrap, không yêu cầu JavaScript.
- Tránh lạm dụng quá nhiều class để giữ mã sạch và dễ bảo trì.
- Đảm bảo CDN hoặc file CSS của Bootstrap được bao gồm.
- Kiểm tra bố cục trên các kích thước màn hình để đảm bảo responsive.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

## 8. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/utilities/display/](https://getbootstrap.com/docs/5.3/utilities/display/)