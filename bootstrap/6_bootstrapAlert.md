# Tóm tắt kiến thức về Alert trong Bootstrap

## 1. Giới thiệu
Alert trong Bootstrap là thành phần giao diện dùng để hiển thị thông báo ngắn gọn, như cảnh báo, thông báo thành công, lỗi, hoặc thông tin. Alert thường được sử dụng để cung cấp phản hồi nhanh cho người dùng sau một hành động.

## 2. Cấu trúc cơ bản
Alert được tạo bằng thẻ `<div>` với class `.alert` kết hợp với các class ngữ cảnh để định dạng kiểu thông báo.

**Ví dụ cơ bản:**
```html
<div class="alert alert-primary" role="alert">
  Đây là một thông báo cơ bản!
</div>
```

- `.alert`: Class chính để tạo Alert.
- `role="alert"`: Hỗ trợ trợ năng, chỉ định đây là thông báo.
- Class ngữ cảnh: `.alert-primary`, `.alert-success`, `.alert-danger`, `.alert-warning`, `.alert-info`, `.alert-light`, `.alert-dark`.

## 3. Tùy chỉnh
### a. Màu sắc
Sử dụng các class ngữ cảnh để thay đổi màu sắc và ý nghĩa của Alert:
- `.alert-primary`: Màu chính (thường là xanh dương).
- `.alert-success`: Thành công (xanh lá).
- `.alert-danger`: Lỗi hoặc nguy hiểm (đỏ).
- `.alert-warning`: Cảnh báo (vàng).
- `.alert-info`: Thông tin (xanh nhạt).

**Ví dụ:**
```html
<div class="alert alert-success" role="alert">
  Thao tác thành công!
</div>
<div class="alert alert-danger" role="alert">
  Có lỗi xảy ra!
</div>
```

### b. Alert với liên kết
Thêm liên kết bên trong Alert với class `.alert-link` để tạo kiểu phù hợp.

**Ví dụ:**
```html
<div class="alert alert-primary" role="alert">
  Đây là thông báo với <a href="#" class="alert-link">liên kết</a>.
</div>
```

### c. Nội dung bổ sung
Alert có thể chứa tiêu đề, đoạn văn, hoặc các thành phần HTML khác.

**Ví dụ:**
```html
<div class="alert alert-warning" role="alert">
  <h4 class="alert-heading">Cảnh báo!</h4>
  <p>Đây là nội dung chi tiết của thông báo.</p>
  <hr>
  <p class="mb-0">Thêm thông tin bổ sung.</p>
</div>
```

- `.alert-heading`: Tạo tiêu đề nổi bật.
- `<hr>`: Thêm đường phân tách.

### d. Alert có thể đóng
Thêm nút đóng (dismiss) bằng cách thêm class `.alert-dismissible` và một nút với `data-bs-dismiss="alert"`.

**Ví dụ:**
```html
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  Đây là thông báo có thể đóng!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

- `.alert-dismissible`: Cho phép đóng Alert.
- `.fade.show`: Hiệu ứng mờ dần khi đóng.
- `.btn-close`: Nút đóng mặc định của Bootstrap.

### e. Căn chỉnh và kích thước
- Sử dụng các class tiện ích như `.text-center`, `.mx-auto`, hoặc hệ thống lưới (`.row`, `.col`) để căn chỉnh.
- Kích thước Alert phụ thuộc vào nội dung hoặc container cha.

**Ví dụ:**
```html
<div class="alert alert-info text-center" role="alert">
  Thông báo được căn giữa!
</div>
```

## 4. Hỗ trợ trợ năng (Accessibility)
- Luôn sử dụng `role="alert"` để thông báo cho trình đọc màn hình.
- Với Alert động (hiển thị/ẩn), thêm `aria-live="polite"` hoặc `aria-live="assertive"` để thông báo thay đổi nội dung.
- Đảm bảo nút đóng có `aria-label` (như trong ví dụ với `.btn-close`).

**Ví dụ:**
```html
<div class="alert alert-success" role="alert" aria-live="polite">
  Dữ liệu đã được cập nhật!
</div>
```

## 5. Lưu ý
- Alert có thể đóng yêu cầu Bootstrap JavaScript (hoặc `bootstrap.bundle.min.js`) để hoạt động.
- Có thể dùng JavaScript để hiển thị/ẩn Alert động dựa trên sự kiện.
- Đảm bảo CDN hoặc file CSS/JS của Bootstrap được bao gồm.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## 6. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/components/alerts/](https://getbootstrap.com/docs/5.3/components/alerts/)