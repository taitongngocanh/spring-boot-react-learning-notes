# Tóm tắt kiến thức về Table trong Bootstrap

## 1. Giới thiệu
Table trong Bootstrap là thành phần giao diện dùng để hiển thị dữ liệu dạng bảng với các tính năng như responsive, tùy chỉnh kiểu dáng, và hỗ trợ các tính năng tương tác. Bootstrap cung cấp các class để tạo bảng đẹp, dễ đọc và hỗ trợ responsive.

## 2. Cấu trúc cơ bản
Table trong Bootstrap sử dụng thẻ HTML `<table>` với class `.table` để áp dụng kiểu dáng cơ bản.

**Ví dụ cơ bản:**
```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Họ</th>
      <th scope="col">Tên</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Nguyễn</td>
      <td>Văn A</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Trần</td>
      <td>Thị B</td>
    </tr>
  </tbody>
</table>
```

- `.table`: Class,'(Class chính để áp dụng kiểu dáng Bootstrap cho bảng.
- `<thead>` và `<tbody>`: Sử dụng để phân tách tiêu đề và nội dung bảng.
- `scope="col"` và `scope="row"`: Hỗ trợ trợ năng, xác định phạm vi của tiêu đề.

## 3. Tùy chỉnh
### a. Kiểu dáng bảng
Bootstrap cung cấp các class để thay đổi giao diện bảng:
- `.table-striped`: Thêm sọc xen kẽ cho các hàng.
- `.table-bordered`: Thêm viền cho tất cả ô.
- `.table-hover`: Hiệu ứng hover khi di chuột qua hàng.
- `.table-dark`: Bảng nền tối.
- `.table-borderless`: Bảng không viền.

**Ví dụ:**
```html
<table class="table table-striped table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Tên</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Item 1</td>
    </tr>
  </tbody>
</table>
```

### b. Màu sắc
Sử dụng các class ngữ cảnh để thay đổi màu sắc:
- `.table-primary`, `.table-success`, `.table-danger`, `.table-warning`, `.table-info`, v.v.

**Ví dụ:**
```html
<table class="table table-primary">
  <!-- Nội dung bảng -->
</table>
```

### c. Kích thước
- `.table-sm`: Giảm kích thước ô để bảng gọn hơn.
- `.table-lg`: Tăng kích thước ô (tùy phiên bản Bootstrap).

**Ví dụ:**
```html
<table class="table table-sm">
  <!-- Nội dung bảng -->
</table>
```

### d. Bảng Responsive
Sử dụng `.table-responsive` hoặc `.table-responsive-{breakpoint}` để tạo bảng cuộn ngang trên thiết bị nhỏ.

**Ví dụ:**
```html
<div class="table-responsive">
  <table class="table">
    <!-- Nội dung bảng -->
  </table>
</div>
```

- `.table-responsive-sm`: Cuộn ngang trên màn hình <576px.
- `.table-responsive-md`, `.table-responsive-lg`, v.v.: Áp dụng cho các breakpoint khác.

### e. Tiêu đề và chân bảng
- `<thead>`: Tiêu đề bảng, có thể dùng `.table-dark` hoặc `.table-light` để thay đổi nền.
- `<tfoot>`: Chân bảng, thường dùng cho tổng kết.

**Ví dụ:**
```html
<table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">Tiêu đề</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nội dung</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Tổng kết</td>
    </tr>
  </tfoot>
</table>
```

### f. Căn chỉnh nội dung
Sử dụng các class tiện ích như `.text-start`, `.text-center`, `.text-end` hoặc `.align-middle` để căn chỉnh nội dung trong ô.

**Ví dụ:**
```html
<table class="table">
  <tr>
    <td class="text-center">Căn giữa</td>
    <td class="align-middle">Căn giữa dọc</td>
  </tr>
</table>
```

## 4. Hỗ trợ trợ năng (Accessibility)
- Sử dụng `scope="col"` và `scope="row"` để xác định phạm vi tiêu đề.
- Thêm `aria-label` hoặc `aria-describedby` nếu bảng cần mô tả bổ sung.
- Đảm bảo nội dung bảng rõ ràng và dễ hiểu cho trình đọc màn hình.

**Ví dụ:**
```html
<table class="table" aria-label="Bảng danh sách người dùng">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tên</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Nguyễn Văn A</td>
    </tr>
  </tbody>
</table>
```

## 5. Lưu ý
- Table không yêu cầu JavaScript, chỉ cần CSS của Bootstrap.
- Với bảng lớn, cân nhắc dùng `.table-responsive` để đảm bảo trải nghiệm tốt trên thiết bị di động.
- Đảm bảo CDN hoặc file CSS của Bootstrap được bao gồm.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

## 6. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/content/tables/](https://getbootstrap.com/docs/5.3/content/tables/)