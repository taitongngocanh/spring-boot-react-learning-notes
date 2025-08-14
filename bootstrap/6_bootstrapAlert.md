# Bootstrap Alert

## 1. Khái niệm
**Alert** là thành phần hiển thị thông báo, cảnh báo hoặc thông tin cho người dùng.

## 2. Ví dụ cơ bản
\`\`\`html
<div class="alert alert-primary" role="alert">A simple primary alert!</div>
<div class="alert alert-secondary" role="alert">A simple secondary alert!</div>
<div class="alert alert-success" role="alert">A simple success alert!</div>
<div class="alert alert-danger" role="alert">A simple danger alert!</div>
<div class="alert alert-warning" role="alert">A simple warning alert!</div>
<div class="alert alert-info" role="alert">A simple info alert!</div>
<div class="alert alert-light" role="alert">A simple light alert!</div>
<div class="alert alert-dark" role="alert">A simple dark alert!</div>
\`\`\`

## 3. Alert có link
\`\`\`html
<div class="alert alert-warning" role="alert">
  A warning with <a href="#" class="alert-link">an example link</a>.
</div>
\`\`\`

## 4. Alert có nút đóng
\`\`\`html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
\`\`\`

---