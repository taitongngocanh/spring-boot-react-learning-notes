# Bootstrap Spinners

## 1. Khái niệm
**Spinner** là thành phần hiển thị hiệu ứng tải (loading) để cho người dùng biết rằng một tác vụ đang được xử lý. Bootstrap hỗ trợ hai loại spinner chính: dạng viền (border) và dạng phát triển dần (grow).

## 2. Cấu trúc cơ bản
\`\`\`html
<!-- Spinner dạng viền -->
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Spinner dạng phát triển -->
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
\`\`\`

## 3. Các class quan trọng
- `.spinner-border` → Spinner dạng viền xoay.
- `.spinner-grow` → Spinner dạng phóng to/thu nhỏ.
- `.text-{color}` → Đổi màu spinner (`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`).
- `.spinner-border-sm` hoặc `.spinner-grow-sm` → Kích thước nhỏ hơn.
- `.visually-hidden` → Ẩn nội dung văn bản nhưng vẫn hỗ trợ trình đọc màn hình.

## 4. Ví dụ mở rộng
\`\`\`html
<!-- Spinner nhỏ màu đỏ -->
<div class="spinner-border spinner-border-sm text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Spinner trong nút -->
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
\`\`\`

## 5. Lưu ý
- Spinners chỉ là thành phần hiển thị, không có chức năng tải thực sự.
- Có thể kết hợp với các tiện ích như `flex`, `text-center` để căn giữa spinner.
- Nên dùng cùng `visually-hidden` để đảm bảo khả năng truy cập (accessibility).
