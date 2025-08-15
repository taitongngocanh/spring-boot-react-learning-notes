# Tóm tắt kiến thức về Accordion trong Bootstrap

## 1. Giới thiệu
Accordion trong Bootstrap là một dạng đặc biệt của thành phần Collapse, cho phép hiển thị/ẩn nội dung theo kiểu gập/mở. Mỗi mục trong Accordion chỉ có một mục được mở tại một thời điểm, thường dùng cho FAQ, danh sách câu hỏi, hoặc nội dung cần tổ chức gọn gàng.

## 2. Cấu trúc cơ bản
Accordion được tạo bằng thẻ `<div>` với class `.accordion`, chứa các `.accordion-item` gồm tiêu đề (`.accordion-header`) và nội dung (`.accordion-body`) gập/mở.

**Ví dụ cơ bản:**
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
- `.accordion-header`: Tiêu đề của mục, chứa nút điều khiển.
- `.accordion-button`: Nút gập/mở, có trạng thái `.collapsed` khi đóng.
- `.accordion-collapse`: Vùng nội dung gập/mở.
- `.accordion-body`: Nội dung bên trong vùng gập/mở.
- `data-bs-parent="#id"`: Đảm bảo chỉ một mục được mở tại một thời điểm.
- `data-bs-toggle="collapse"`: Kích hoạt hành vi gập/mở (yêu cầu Bootstrap JS).
- `aria-expanded`: Trạng thái gập/mở (hỗ trợ trợ năng).
- `aria-labelledby`: Liên kết nội dung với tiêu đề.

## 3. Tùy chỉnh
### a. Mở mặc định
Thêm class `.show` vào `.accordion-collapse` để mục đó mở mặc định.

**Ví dụ:**
```html
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    Nội dung mục 1 (mở mặc định).
  </div>
</div>
```

### b. Không giới hạn mở (Flush Accordion)
Sử dụng `.accordion-flush` để bỏ viền và nền, tạo giao diện tối giản.

**Ví dụ:**
```html
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Mục 1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
      <div class="accordion-body">
        Nội dung mục 1.
      </div>
    </div>
  </div>
</div>
```

### c. Tùy chỉnh nội dung
Accordion có thể chứa bất kỳ nội dung HTML nào trong `.accordion-body`, như văn bản, hình ảnh, hoặc biểu mẫu.

**Ví dụ:**
```html
<div class="accordion-body">
  <p>Nội dung văn bản.</p>
  <img src="image.jpg" alt="Hình ảnh" class="img-fluid">
</div>
```

### d. Kích thước và căn chỉnh
- Kích thước Accordion phụ thuộc vào nội dung hoặc container cha.
- Sử dụng hệ thống lưới Bootstrap (`.row`, `.col`) để căn chỉnh.

**Ví dụ:**
```html
<div class="row">
  <div class="col-md-6">
    <div class="accordion" id="accordionExample">
      <!-- Các accordion-item -->
    </div>
  </div>
</div>
```

## 4. Hỗ trợ trợ năng (Accessibility)
- Sử dụng `aria-expanded` để chỉ trạng thái gập/mở.
- Thêm `aria-controls` để liên kết nút với vùng nội dung.
- Sử dụng `aria-labelledby` để liên kết nội dung với tiêu đề.
- Đảm bảo nội dung trong `.accordion-body` rõ ràng và có ý nghĩa cho trình đọc màn hình.

## 5. Lưu ý
- Accordion yêu cầu Bootstrap JavaScript (hoặc `bootstrap.bundle.min.js`) để hoạt động.
- Có thể dùng JavaScript để điều khiển trạng thái gập/mở động.
- Đảm bảo CDN hoặc file CSS/JS của Bootstrap được bao gồm.

**Ví dụ CDN Bootstrap 5:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## 6. Tài liệu tham khảo
- Tài liệu chính thức: [https://getbootstrap.com/docs/5.3/components/accordion/](https://getbootstrap.com/docs/5.3/components/accordion/)