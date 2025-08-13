## Bootstrap `.container`

Trong **Bootstrap**, `.container` là thành phần cơ bản để tạo bố cục web có khoảng cách hợp lý và canh giữa nội dung.  
Nó đóng vai trò như một “khung” giúp nội dung không bị kéo dài toàn màn hình, đặc biệt hữu ích khi muốn tạo giao diện gọn gàng và dễ nhìn.

---

### 1. Các loại `.container`

| Class            | Đặc điểm                                                                                         | Khi dùng                                                 |
|------------------|--------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `.container`     | Chiều rộng **cố định** theo từng breakpoint (`sm`, `md`, `lg`, `xl`, `xxl`) của Bootstrap        | Khi muốn nội dung **canh giữa** và **giới hạn chiều rộng** |
| `.container-fluid` | Chiều rộng **100% toàn màn hình** ở mọi kích thước thiết bị                                     | Khi muốn nội dung **tràn full-width**                    |
| `.container-{breakpoint}` | Full-width **trước** breakpoint chỉ định, fixed-width **sau** breakpoint               | Khi muốn nội dung thay đổi hành vi theo thiết bị         |

---

### 2. Breakpoint và chiều rộng

| Breakpoint | Kích thước màn hình ≥ | `.container` width |
|------------|-----------------------|--------------------|
| `sm`       | 576px                 | 540px              |
| `md`       | 768px                 | 720px              |
| `lg`       | 992px                 | 960px              |
| `xl`       | 1200px                | 1140px             |
| `xxl`      | 1400px                | 1320px             |

*(Dữ liệu dựa trên Bootstrap 5)*

---

### 3. Cách sử dụng cơ bản

```html
<!-- Cố định chiều rộng và canh giữa -->
<div class="container">
  <h1>Hello, Bootstrap!</h1>
</div>

<!-- Full width -->
<div class="container-fluid">
  <h1>Full Width Content</h1>
</div>

<!-- Thay đổi theo breakpoint -->
<div class="container-md">
  <h1>Full-width trên mobile, fixed-width trên desktop</h1>
</div>
