# Bootstrap Card

## 1. Khái niệm
**Card** là một thành phần linh hoạt và có thể mở rộng trong Bootstrap, dùng để hiển thị nội dung dạng khối như hình ảnh, văn bản, nút bấm... Có thể chứa: tiêu đề, nội dung, danh sách, hình ảnh, footer, header...

## 2. Cấu trúc cơ bản
<div class="card" style="width: 18rem;">
  <img src="img.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Tiêu đề thẻ</h5>
    <p class="card-text">Nội dung văn bản ngắn.</p>
    <a href="#" class="btn btn-primary">Xem thêm</a>
  </div>
</div>

## 3. Các class quan trọng
- `.card` → Khởi tạo thẻ card
- `.card-body` → Chứa nội dung chính
- `.card-title` → Tiêu đề
- `.card-text` → Đoạn văn bản
- `.card-header` / `.card-footer` → Phần đầu hoặc chân của card
- `.card-img-top` → Ảnh ở trên card
- `.card-img-bottom` → Ảnh ở dưới card
- `.list-group` + `.list-group-item` → Thêm danh sách vào card

## 4. Card với danh sách
<div class="card" style="width: 18rem;">
  <div class="card-header">Tiêu đề</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
    <li class="list-group-item">Item 3</li>
  </ul>
</div>

## 5. Card nhóm (Card Group)
<div class="card-group">
  <div class="card"> ... </div>
  <div class="card"> ... </div>
  <div class="card"> ... </div>
</div>
- Card group sẽ đặt các card cùng chiều cao và xếp cạnh nhau.

## 6. Lưu ý
- Có thể kết hợp với Grid system để responsive.
- Có thể thêm utility classes (màu nền, text-center, shadow...) để tùy chỉnh giao diện.
- Thêm inline style hoặc class CSS riêng để thay đổi kích thước.
