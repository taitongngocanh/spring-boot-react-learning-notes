# Tóm tắt kiến thức về Progress Bar trong Bootstrap

## 1. Giới thiệu
Progress Bar trong Bootstrap là một thành phần giao diện dùng để hiển thị tiến trình của một tác vụ, chẳng hạn như tải lên file, xử lý dữ liệu, hoặc bất kỳ hoạt động nào có thể đo lường được. Bootstrap cung cấp các class CSS và một số thuộc tính để tùy chỉnh Progress Bar dễ dàng.

## 2. Cấu trúc cơ bản
Để tạo một Progress Bar cơ bản, sử dụng thẻ `<div>` với các class sau:
- `.progress`: Container chính của Progress Bar.
- `.progress-bar`: Thành phần thể hiện phần trăm tiến trình.

**Ví dụ:**
```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

- `style="width: X%"`: Xác định độ rộng của thanh tiến trình (tương ứng phần trăm hoàn thành).
- `aria-valuenow`: Giá trị hiện tại của tiến trình (hỗ trợ trợ năng).
- `aria-valuemin` và `aria-valuemax`: Xác định giá trị tối thiểu và tối đa.

## 3. Tùy chỉnh
### a. Màu sắc
Sử dụng các class ngữ cảnh để thay đổi màu sắc của Progress Bar:
- `.bg-primary`, `.bg-success`, `.bg-info`, `.bg-warning`, `.bg-danger`, v.v.

**Ví dụ:**
```html
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### b. Nhãn (Label)
Thêm nhãn hiển thị phần trăm bằng cách thêm nội dung văn bản bên trong `.progress-bar`.

**Ví dụ:**
```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
```

### c. Kích thước
- `.progress-sm`: Thanh tiến trình nhỏ hơn.
- `.progress-lg`: Thanh tiến trình lớn hơn (tùy phiên bản Bootstrap).

**Ví dụ:**
```html
<div class="progress progress-sm">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### d. Sọc (Striped)
Thêm hiệu ứng sọc với class `.progress-bar-striped`.

**Ví dụ:**
```html
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### e. Hoạt hình (Animated)
Thêm hiệu ứng chuyển động cho sọc với class `.progress-bar-animated`.

**Ví dụ:**
```html
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### f. Nhiều thanh (Multiple Bars)
Có thể xếp chồng nhiều `.progress-bar` trong cùng một `.progress`.

**Ví dụ:**
```html
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-warning" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## 4. Hỗ trợ trợ năng (Accessibility)
- Luôn sử dụng `role="progressbar"` và các thuộc tính `aria-*` để đảm bảo Progress Bar dễ tiếp cận với người dùng sử dụng công nghệ hỗ trợ.
- Cung cấp nhãn hoặc mô tả nếu cần thiết thông qua `aria-label` hoặc văn bản bên trong.

## 5. Lưu ý
- Bootstrap 5.x không yêu cầu jQuery, Progress Bar hoạt động thuần CSS và HTML.
- Có thể dùng JavaScript để cập nhật động `style="width: X%"` hoặc `aria-valuenow` dựa trên tiến trình thực tế.
- Đảm bảo CDN hoặc file CSS/JS của Bootstrap được bao gồm trong dự án.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## 6. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/components/progress/](https://getbootstrap.com/docs/5.3/components/progress/)