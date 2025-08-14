# Bootstrap Spinner

## 1. Khái niệm
**Spinner** là thành phần hiển thị hiệu ứng tải (loading) để cho người dùng biết rằng một tác vụ đang xử lý.

## 2. Spinner dạng viền & phát triển
\`\`\`html
<!-- Spinner dạng viền -->
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Spinner dạng phát triển -->
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
\`\`\`

## 3. Kích thước & màu sắc
\`\`\`html
<div class="spinner-border spinner-border-sm text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
\`\`\`

## 4. Spinner trong nút
\`\`\`html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
\`\`\`

---

**Ghi chú chung**:
- Card: dùng `.card`, có thể thêm header/footer, hình ảnh, text, link.
- Alert: dùng `.alert` + `alert-{color}`, có thể đóng/mở bằng `.alert-dismissible`.
- Spinner: chỉ hiển thị hiệu ứng, không có logic tải thực sự, nên kết hợp `visually-hidden` để hỗ trợ accessibility.