# Bootstrap Alert

## 1. Khái niệm
**Alert** là thành phần dùng để hiển thị thông báo hoặc cảnh báo cho người dùng. Bootstrap cung cấp nhiều kiểu màu sắc khác nhau để biểu thị các mức độ thông tin: thành công, cảnh báo, lỗi, thông tin, v.v. Alert có thể là tĩnh hoặc có thể đóng được.

## 2. Cấu trúc cơ bản
<div class="alert alert-primary" role="alert">
  Đây là một alert màu xanh dương!
</div>

## 3. Các class quan trọng
- `.alert` → Khởi tạo alert.
- `.alert-{color}` → Thay đổi màu sắc (`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`).
- `.alert-dismissible` → Cho phép đóng alert.
- `.fade` + `.show` → Thêm hiệu ứng mờ dần khi đóng.
- `role="alert"` → Hỗ trợ trình đọc màn hình (accessibility).

## 4. Ví dụ mở rộng
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Thành công!</strong> Bạn đã thực hiện hành động thành công.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

## 5. Lưu ý
- Alert không tự động biến mất, cần JavaScript hoặc thao tác người dùng để đóng.
- Có thể đặt bất kỳ nội dung HTML nào bên trong alert (link, bold, v.v.).
- Sử dụng `.mb-0` hoặc các utility class khác để điều chỉnh khoảng cách.
