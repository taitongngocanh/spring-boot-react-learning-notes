# Tóm tắt kiến thức về Row và Columns trong Bootstrap

## 1. Giới thiệu
Hệ thống lưới (Grid System) của Bootstrap sử dụng **Row** và **Columns** để tạo bố cục linh hoạt, responsive. Grid System dựa trên mô hình 12 cột, giúp sắp xếp nội dung một cách dễ dàng trên các kích thước màn hình khác nhau.

## 2. Cấu trúc cơ bản
Grid System được xây dựng bằng các class `.container`, `.row`, và `.col-*`.

**Ví dụ cơ bản:**
```html
<div class="container">
  <div class="row">
    <div class="col">
      Cột 1
    </div>
    <div class="col">
      Cột 2
    </div>
    <div class="col">
      Cột 3
    </div>
  </div>
</div>
```

- `.container` hoặc `.container-fluid`: Container chính, `.container` có độ rộng cố định, `.container-fluid` có độ rộng 100%.
- `.row`: Định nghĩa một hàng, chứa các cột bên trong.
- `.col`: Cột tự động chia đều không gian trong hàng (trong ví dụ trên, mỗi cột chiếm 1/3).

## 3. Cấu trúc Grid System
Bootstrap chia lưới thành **12 cột** và hỗ trợ các breakpoint responsive:
- `xs` (<576px): Màn hình siêu nhỏ.
- `sm` (≥576px): Màn hình nhỏ.
- `md` (≥768px): Màn hình trung.
- `lg` (≥992px): Màn hình lớn.
- `xl` (≥1200px): Màn hình rất lớn.
- `xxl` (≥1400px): Màn hình siêu lớn.

### a. Chỉ định kích thước cột
Sử dụng `.col-{breakpoint}-{số cột}` để chỉ định số cột (từ 1 đến 12) mà cột chiếm tại breakpoint cụ thể.

**Ví dụ:**
```html
<div class="container">
  <div class="row">
    <div class="col-md-4">
      Cột chiếm 4/12 ở md trở lên
    </div>
    <div class="col-md-8">
      Cột chiếm 8/12 ở md trở lên
    </div>
  </div>
</div>
```

- `.col-md-4`: Chiếm 4 cột trên màn hình ≥768px, xếp chồng (stack) trên màn hình nhỏ hơn.
- `.col-md-8`: Chiếm 8 cột trên màn hình ≥768px.

### b. Kết hợp nhiều breakpoint
Có thể kết hợp các class cho các breakpoint khác nhau.

**Ví dụ:**
```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      Cột chiếm 12 cột (xs), 6 cột (md), 4 cột (lg)
    </div>
    <div class="col-12 col-md-6 col-lg-8">
      Cột chiếm 12 cột (xs), 6 cột (md), 8 cột (lg)
    </div>
  </div>
</div>
```

## 4. Tùy chỉnh
### a. Tự động chia đều
Dùng `.col` để các cột tự chia đều không gian.

**Ví dụ:**
```html
<div class="row">
  <div class="col">Cột 1</div>
  <div class="col">Cột 2</div>
</div>
```
- Hai cột sẽ chia đều (mỗi cột 6/12).

### b. Offset
Sử dụng `.offset-{breakpoint}-{số cột}` để đẩy cột sang bên phải.

**Ví dụ:**
```html
<div class="row">
  <div class="col-md-4 offset-md-4">
    Cột chiếm 4/12, đẩy sang phải 4 cột
  </div>
</div>
```

### c. Căn chỉnh hàng (Row)
- **Căn chỉnh dọc**: `.align-items-{start|center|end}`.
- **Căn chỉnh ngang**: `.justify-content-{start|center|end|between|around}`.

**Ví dụ:**
```html
<div class="row align-items-center justify-content-between">
  <div class="col-4">Cột 1</div>
  <div class="col-4">Cột 2</div>
</div>
```

### d. Khoảng cách (Gutters)
Bootstrap tự động thêm khoảng cách giữa các cột (gutters). Có thể tùy chỉnh bằng:
- `.gx-*`: Khoảng cách ngang (gutter-x).
- `.gy-*`: Khoảng cách dọc (gutter-y).
- `.g-*`: Khoảng cách chung (từ 0 đến 5).

**Ví dụ:**
```html
<div class="row g-4">
  <div class="col">Cột 1</div>
  <div class="col">Cột 2</div>
</div>
```

### e. Nested Grid
Lồng các hàng và cột bên trong cột khác.

**Ví dụ:**
```html
<div class="row">
  <div class="col-md-6">
    <div class="row">
      <div class="col">Cột con 1</div>
      <div class="col">Cột con 2</div>
    </div>
  </div>
</div>
```

### f. Responsive tự động
Sử dụng `.col-auto` để cột tự điều chỉnh theo nội dung.

**Ví dụ:**
```html
<div class="row">
  <div class="col-auto">Cột tự điều chỉnh</div>
  <div class="col">Cột còn lại</div>
</div>
```

## 5. Hỗ trợ trợ năng (Accessibility)
- Đảm bảo nội dung trong các cột có ý nghĩa rõ ràng cho trình đọc màn hình.
- Sử dụng các thẻ ngữ nghĩa (như `<header>`, `<main>`, `<section>`) khi cần.
- Kiểm tra bố cục trên các thiết bị để đảm bảo khả năng đọc.

## 6. Lưu ý
- Grid System không yêu cầu JavaScript, chỉ cần CSS của Bootstrap.
- Đảm bảo CDN hoặc file CSS của Bootstrap được bao gồm.
- Kiểm tra bố cục trên các kích thước màn hình để đảm bảo responsive.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

## 7. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/layout/grid/](https://getbootstrap.com/docs/5.3/layout/grid/)