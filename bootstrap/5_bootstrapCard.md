# Bootstrap Card

## 1. Khái niệm
**Card** là thành phần chứa nội dung và hình ảnh, có thể dùng để hiển thị thông tin ngắn gọn, gọn gàng.

## 2. Cấu trúc cơ bản
\`\`\`html
<div class="card" style="width: 18rem;">
  <img src="image.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
\`\`\`

## 3. Card không ảnh
\`\`\`html
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>
\`\`\`

## 4. Card với header & footer
\`\`\`html
<div class="card">
  <div class="card-header">Featured</div>
  <div class="card-body">Content here...</div>
  <div class="card-footer text-muted">Footer</div>
</div>
\`\`\`

---