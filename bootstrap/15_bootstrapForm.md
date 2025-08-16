# Tóm tắt kiến thức về Form trong Bootstrap

## 1. Giới thiệu
Form trong Bootstrap là thành phần giao diện dùng để thu thập dữ liệu từ người dùng, như văn bản, lựa chọn, hoặc tệp. Bootstrap cung cấp các class để tạo form đẹp, responsive, và hỗ trợ validation, với bố cục dễ tùy chỉnh.

## 2. Cấu trúc cơ bản
Form trong Bootstrap sử dụng thẻ `<form>` kết hợp với các class như `.form-group`, `.form-control`, và các thành phần nhập liệu.

**Ví dụ cơ bản:**
```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Chúng tôi sẽ không chia sẻ email của bạn.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword" class="form-label">Mật khẩu</label>
    <input type="password" class="form-control" id="exampleInputPassword">
  </div>
  <button type="submit" class="btn btn-primary">Gửi</button>
</form>
```

- `.mb-3`: Khoảng cách dưới (margin-bottom) cho các nhóm form.
- `.form-label`: Kiểu dáng cho nhãn (label).
- `.form-control`: Kiểu dáng cho các trường nhập liệu (input, select, textarea).
- `.form-text`: Văn bản mô tả hoặc trợ giúp.
- `.btn`: Nút hành động, như nút gửi.

## 3. Tùy chỉnh
### a. Các loại trường nhập liệu
Bootstrap hỗ trợ các loại input như:
- `<input>`: `text`, `password`, `email`, `number`, `file`, v.v.
- `<textarea>`: Trường văn bản nhiều dòng.
- `<select>`: Menu thả xuống.
- `<input type="checkbox">` và `<input type="radio">`: Hộp kiểm và nút chọn.

**Ví dụ với select và checkbox:**
```html
<div class="mb-3">
  <label for="exampleSelect" class="form-label">Chọn tùy chọn</label>
  <select class="form-select" id="exampleSelect">
    <option>Tùy chọn 1</option>
    <option>Tùy chọn 2</option>
  </select>
</div>
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck">
  <label class="form-check-label" for="exampleCheck">Hộp kiểm</label>
</div>
```

- `.form-select`: Kiểu dáng cho `<select>`.
- `.form-check`: Kiểu dáng cho checkbox/radio.
- `.form-check-input`: Trường checkbox hoặc radio.
- `.form-check-label`: Nhãn cho checkbox/radio.

### b. Bố cục Form
- **Bố cục dọc (mặc định)**: Các trường xếp chồng theo chiều dọc.
- **Bố cục ngang**: Sử dụng hệ thống lưới (`.row`, `.col-*`) để căn chỉnh.

**Ví dụ bố cục ngang:**
```html
<form>
  <div class="row mb-3">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail">
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Gửi</button>
</form>
```

- `.col-form-label`: Căn chỉnh nhãn theo lưới.

### c. Validation
Bootstrap hỗ trợ validation phía client với các class như `.is-valid` và `.is-invalid`.

**Ví dụ validation:**
```html
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationInput" class="form-label">Email</label>
    <input type="email" class="form-control is-invalid" id="validationInput" required>
    <div class="invalid-feedback">
      Vui lòng nhập email hợp lệ.
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Gửi</button>
</form>
```

- `.needs-validation`: Kích hoạt validation cho form.
- `novalidate`: Vô hiệu hóa validation mặc định của trình duyệt.
- `.is-valid` / `.is-invalid`: Kiểu dáng cho trạng thái hợp lệ/không hợp lệ.
- `.invalid-feedback` / `.valid-feedback`: Hiển thị thông báo lỗi hoặc thành công.

**JavaScript để xử lý validation:**
```html
<script>
  (function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
</script>
```

### d. Inline Form
Sử dụng `.row.g-3` và `.col-auto` để tạo form inline (các trường xếp ngang).

**Ví dụ:**
```html
<form class="row g-3">
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Tên">
  </div>
  <div class="col-auto">
    <input type="email" class="form-control" placeholder="Email">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Gửi</button>
  </div>
</form>
```

### e. Kích thước
- `.form-control-lg` / `.form-control-sm`: Thay đổi kích thước trường nhập liệu.
- `.form-select-lg` / `.form-select-sm`: Thay đổi kích thước select.

**Ví dụ:**
```html
<input type="text" class="form-control form-control-lg" placeholder="Lớn">
<input type="text" class="form-control form-control-sm" placeholder="Nhỏ">
```

## 4. Hỗ trợ trợ năng (Accessibility)
- Sử dụng `for` trong `<label>` để liên kết với `id` của trường nhập liệu.
- Thêm `aria-describedby` để liên kết với văn bản mô tả (`.form-text`).
- Sử dụng `aria-label` cho các trường không có nhãn hiển thị.
- Đảm bảo thông báo validation rõ ràng cho trình đọc màn hình.

**Ví dụ:**
```html
<input type="text" class="form-control" id="inputName" aria-describedby="nameHelp">
<div id="nameHelp" class="form-text">Nhập tên của bạn.</div>
```

## 5. Lưu ý
- Form có thể yêu cầu JavaScript cho validation hoặc tính năng tương tác (như `bootstrap.bundle.min.js`).
- Đảm bảo CDN hoặc file CSS/JS của Bootstrap được bao gồm.
- Kiểm tra bố cục trên các thiết bị để đảm bảo responsive.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## 6. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/forms/overview/](https://getbootstrap.com/docs/5.3/forms/overview/)