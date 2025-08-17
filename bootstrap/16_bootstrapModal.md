# Tóm tắt kiến thức về Modals trong Bootstrap

## 1. Giới thiệu
Modals trong Bootstrap là thành phần giao diện dùng để hiển thị nội dung dạng cửa sổ bật lên (popup) trên trang web, thường dùng cho thông báo, biểu mẫu, hoặc nội dung cần người dùng tập trung. Modals có thể tùy chỉnh kích thước, vị trí, và hỗ trợ tương tác động.

## 2. Cấu trúc cơ bản
Modal được tạo bằng thẻ `<div>` với class `.modal` và yêu cầu các thuộc tính JavaScript để kích hoạt.

**Ví dụ cơ bản:**
```html
<!-- Nút kích hoạt Modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Mở Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Tiêu đề Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Nội dung của Modal.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary">Lưu</button>
      </div>
    </div>
  </div>
</div>
```

- `.modal`: Class chính cho Modal.
- `.modal-dialog`: Container xác định kích thước và vị trí của Modal.
- `.modal-content`: Nội dung chính của Modal.
- `.modal-header`: Phần tiêu đề, chứa tiêu đề và nút đóng.
- `.modal-body`: Phần nội dung chính.
- `.modal-footer`: Phần chân, chứa các nút hành động.
- `data-bs-toggle="modal"`: Kích hoạt Modal.
- `data-bs-target="#id"`: Liên kết nút với Modal có `id` tương ứng.
- `.fade`: Hiệu ứng mờ dần khi mở/đóng Modal.
- `tabindex="-1"`: Hỗ trợ tập trung bàn phím.
- `aria-labelledby`: Liên kết tiêu đề với Modal.
- `aria-hidden="true"`: Ẩn Modal khỏi trình đọc màn hình khi chưa mở.

## 3. Tùy chỉnh
### a. Kích thước Modal
Sử dụng các class để thay đổi kích thước Modal:
- `.modal-sm`: Modal nhỏ.
- `.modal-lg`: Modal lớn.
- `.modal-xl`: Modal rất lớn.

**Ví dụ:**
```html
<div class="modal-dialog modal-lg">
  <!-- Nội dung Modal -->
</div>
```

### b. Căn giữa và cuộn
- `.modal-dialog-centered`: Căn giữa Modal theo chiều dọc.
- `.modal-dialog-scrollable`: Cho phép cuộn nội dung trong `.modal-body`.

**Ví dụ:**
```html
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
    <div class="modal-body">
      Nội dung dài sẽ có thanh cuộn.
    </div>
  </div>
</div>
```

### c. Modal toàn màn hình
Sử dụng `.modal-fullscreen` hoặc `.modal-fullscreen-{breakpoint}-down` để Modal chiếm toàn màn hình.

**Ví dụ:**
```html
<div class="modal-dialog modal-fullscreen-sm-down">
  <!-- Nội dung Modal -->
</div>
```
- `.modal-fullscreen-sm-down`: Toàn màn hình trên thiết bị <576px.

### d. Modal tĩnh (Static Backdrop)
Thêm `data-bs-backdrop="static"` và `data-bs-keyboard="false"` để ngăn Modal đóng khi nhấp ra ngoài hoặc nhấn phím Esc.

**Ví dụ:**
```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false">
  Mở Modal tĩnh
</button>
<div class="modal fade" id="staticBackdrop">
  <!-- Nội dung Modal -->
</div>
```

### e. Nội dung tùy chỉnh
Modal có thể chứa bất kỳ nội dung HTML nào, như biểu mẫu, hình ảnh, hoặc bảng.

**Ví dụ với biểu mẫu:**
```html
<div class="modal-body">
  <form>
    <div class="mb-3">
      <label for="inputName" class="form-label">Tên</label>
      <input type="text" class="form-control" id="inputName">
    </div>
    <button type="submit" class="btn btn-primary">Gửi</button>
  </form>
</div>
```

## 4. Hỗ trợ trợ năng (Accessibility)
- Sử dụng `aria-labelledby` để liên kết tiêu đề với Modal.
- Thêm `aria-hidden="true"` để ẩn Modal khỏi trình đọc màn hình khi chưa mở.
- Sử dụng `aria-label` cho nút đóng (`.btn-close`) để mô tả chức năng.
- Đảm bảo Modal có tiêu điểm bàn phím (keyboard focus) với `tabindex="-1"`.
- Kiểm tra nội dung Modal rõ ràng và dễ hiểu cho trình đọc màn hình.

**Ví dụ:**
```html
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Tiêu đề Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
      </div>
    </div>
  </div>
</div>
```

## 5. Lưu ý
- Modal yêu cầu Bootstrap JavaScript (hoặc `bootstrap.bundle.min.js`) để hoạt động.
- Có thể dùng JavaScript để điều khiển Modal động (mở/đóng).
- Đảm bảo CDN hoặc file CSS/JS của Bootstrap được bao gồm.
- Kiểm tra Modal trên các thiết bị để đảm bảo responsive.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

**JavaScript để điều khiển Modal:**
```html
<script>
  const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show(); // Mở Modal
  // myModal.hide(); // Đóng Modal
</script>
```

## 6. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/components/modal/](https://getbootstrap.com/docs/5.3/components/modal/)