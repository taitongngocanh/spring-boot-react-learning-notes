# Tóm tắt kiến thức về Collapse trong Bootstrap

## 1. Giới thiệu
Collapse trong Bootstrap là thành phần giao diện cho phép ẩn/hiện nội dung khi người dùng nhấp vào một nút hoặc liên kết. Nó thường được dùng để tạo accordion, nội dung gập/mở, hoặc tiết kiệm không gian giao diện.

## 2. Cấu trúc cơ bản
Collapse được tạo bằng thẻ `<div>` với class `.collapse` kết hợp với nút hoặc liên kết để kích hoạt.

**Ví dụ cơ bản:**
```html
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Hiện/Ẩn nội dung
</button>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Đây là nội dung có thể gập/mở.
  </div>
</div>
```

- `.collapse`: Class chính để tạo vùng nội dung có thể ẩn/hiện.
- `data-bs-toggle="collapse"`: Kích hoạt hành vi Collapse (yêu cầu Bootstrap JS).
- `data-bs-target="#id"`: Liên kết nút với vùng Collapse có `id` tương ứng.
- `aria-expanded="false"`: Trạng thái gập/mở (hỗ trợ trợ năng).
- `aria-controls`: Chỉ định vùng nội dung được điều khiển.

## 3. Tùy chỉnh
### a. Hiển thị mặc định
Thêm class `.show` vào `.collapse` để nội dung hiển thị mặc định.

**Ví dụ:**
```html
<div class="collapse show" id="collapseExample">
  <div class="card card-body">
    Nội dung hiển thị mặc định.
  </div>
</div>
```

### b. Collapse trong Accordion
Accordion là một dạng Collapse nhiều mục, sử dụng class `.accordion`. Mỗi mục có `.accordion-item`, `.accordion-header`, và `.accordion-body`.

**Ví dụ Accordion:**
```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Mục 1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Nội dung mục 1.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Mục 2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Nội dung mục 2.
      </div>
    </div>
  </div>
</div>
```

- `.accordion`: Container chính của Accordion.
- `.accordion-item`: Mỗi mục trong Accordion.
- `.accordion-button`: Nút điều khiển gập/mở.
- `.accordion-collapse`: Vùng nội dung gập/mở.
- `data-bs-parent`: Đảm bảo chỉ một mục được mở trong Accordion.

### c. Collapse ngang (Horizontal)
Sử dụng `.collapse-horizontal` để tạo Collapse mở theo chiều ngang (yêu cầu điều chỉnh CSS `width`).

**Ví dụ:**
```html
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHorizontal" aria-expanded="false" aria-controls="collapseHorizontal">
  Mở ngang
</button>
<div class="collapse collapse-horizontal" id="collapseHorizontal">
  <div class="card card-body" style="width: 300px;">
    Nội dung mở ngang.
  </div>
</div>
```

### d. Nhiều mục tiêu (Multiple Targets)
Một nút có thể điều khiển nhiều vùng Collapse bằng cách liệt kê các `id` trong `data-bs-target`.

**Ví dụ:**
```html
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne, #collapseTwo" aria-expanded="false" aria-controls="collapseOne collapseTwo">
  Điều khiển nhiều vùng
</button>
<div class="collapse" id="collapseOne">
  <div class="card card-body">
    Vùng 1.
  </div>
</div>
<div class="collapse" id="collapseTwo">
  <div class="card card-body">
    Vùng 2.
  </div>
</div>
```

## 4. Hỗ trợ trợ năng (Accessibility)
- Sử dụng `aria-expanded` để chỉ trạng thái gập/mở.
- Thêm `aria-controls` để liên kết nút với vùng nội dung.
- Trong Accordion, sử dụng `aria-labelledby` để liên kết nội dung với tiêu đề.
- Đảm bảo nội dung trong `.collapse` có ý nghĩa rõ ràng cho trình đọc màn hình.

## 5. Lưu ý
- Collapse yêu cầu Bootstrap JavaScript (hoặc `bootstrap.bundle.min.js`) để hoạt động.
- Có thể dùng JavaScript để điều khiển Collapse động (mở/đóng).
- Đảm bảo CDN hoặc file CSS/JS của Bootstrap được bao gồm.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## 6. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/components/collapse/](https://getbootstrap.com/docs/5.3/components/collapse/)