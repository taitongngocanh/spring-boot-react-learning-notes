# Tóm tắt kiến thức về Card trong Bootstrap

## 1. Giới thiệu
Card trong Bootstrap là một thành phần giao diện linh hoạt, dùng để hiển thị nội dung như văn bản, hình ảnh, liên kết, hoặc các thành phần khác trong một bố cục gọn gàng, có viền. Card thường được dùng cho blog, sản phẩm, danh sách bài viết, hoặc bất kỳ nội dung nào cần trình bày đẹp mắt.

## 2. Cấu trúc cơ bản
Card được tạo bằng thẻ `<div>` với class `.card`. Nội dung bên trong thường bao gồm các phần như tiêu đề, hình ảnh, nội dung chính, và chân trang.

**Ví dụ cơ bản:**
```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Tiêu đề Card</h5>
    <p class="card-text">Đây là nội dung của card.</p>
    <a href="#" class="btn btn-primary">Nút hành động</a>
  </div>
</div>
```

- `.card`: Container chính của Card.
- `.card-body`: Phần nội dung chính của Card.
- `.card-title`: Tiêu đề (thường dùng thẻ `<h5>`).
- `.card-text`: Văn bản nội dung.
- `.btn`: Nút hành động (thường dùng class của Bootstrap Button).

## 3. Tùy chỉnh
### a. Hình ảnh
Thêm hình ảnh vào Card với class `.card-img-top` (hình trên) hoặc `.card-img-bottom` (hình dưới).

**Ví dụ:**
```html
<div class="card">
  <img src="image.jpg" class="card-img-top" alt="Hình ảnh">
  <div class="card-body">
    <h5 class="card-title">Card có hình</h5>
    <p class="card-text">Nội dung mô tả.</p>
  </div>
</div>
```

### b. Tiêu đề và chân trang
- `.card-header`: Phần đầu của Card.
- `.card-footer`: Phần chân của Card.

**Ví dụ:**
```html
<div class="card">
  <div class="card-header">Tiêu đề</div>
  <div class="card-body">
    <h5 class="card-title">Nội dung chính</h5>
    <p class="card-text">Mô tả chi tiết.</p>
  </div>
  <div class="card-footer">Chân trang</div>
</div>
```

### c. Màu sắc
Sử dụng các class ngữ cảnh để thay đổi màu nền hoặc viền:
- `.bg-primary`, `.bg-success`, `.bg-info`, v.v.
- `.border-primary`, `.border-success`, v.v.

**Ví dụ:**
```html
<div class="card bg-light border-primary">
  <div class="card-body">
    <h5 class="card-title">Card màu</h5>
    <p class="card-text">Nội dung card.</p>
  </div>
</div>
```

### d. Bố cục Card
- **Nhóm Card**: Sử dụng `.card-group` hoặc `.card-deck` để nhóm nhiều Card ngang nhau.
- **Cột Card**: Sử dụng hệ thống lưới (grid) với `.row` và `.col` để sắp xếp Card.

**Ví dụ nhóm Card:**
```html
<div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card 1</h5>
      <p class="card-text">Nội dung 1.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card 2</h5>
      <p class="card-text">Nội dung 2.</p>
    </div>
  </div>
</div>
```

### e. Kích thước
- Card tự động điều chỉnh theo nội dung hoặc container cha.
- Sử dụng hệ thống lưới Bootstrap (`.col`, `.row`) để kiểm soát kích thước.

**Ví dụ:**
```html
<div class="row">
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card trong cột</h5>
        <p class="card-text">Nội dung.</p>
      </div>
    </div>
  </div>
</div>
```

### f. Văn bản và liên kết
- `.card-link`: Tạo liên kết trong Card.
- `.card-text`: Tùy chỉnh văn bản với các class tiện ích như `.text-muted`.

**Ví dụ:**
```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card với liên kết</h5>
    <p class="card-text">Mô tả.</p>
    <a href="#" class="card-link">Liên kết 1</a>
    <a href="#" class="card-link">Liên kết 2</a>
  </div>
</div>
```

## 4. Hỗ trợ trợ năng (Accessibility)
- Sử dụng `alt` cho hình ảnh (`<img>`).
- Đảm bảo các liên kết và nút có văn bản mô tả rõ ràng.
- Sử dụng các thẻ ngữ nghĩa như `<h5>` cho tiêu đề để hỗ trợ trình đọc màn hình.

## 5. Lưu ý
- Bootstrap 5.x không yêu cầu jQuery, Card hoạt động thuần CSS và HTML.
- Có thể dùng JavaScript để thêm tính năng động, như cập nhật nội dung Card.
- Đảm bảo CDN hoặc file CSS/JS của Bootstrap được bao gồm.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## 6. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/components/card/](https://getbootstrap.com/docs/5.3/components/card/)