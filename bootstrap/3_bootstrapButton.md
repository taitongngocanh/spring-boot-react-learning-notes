# Bootstrap Buttons

## 1. Class cơ bản
```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

## 2. Outline Buttons
```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
```

## 3. Kích thước
```html
<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-primary btn-sm">Small</button>
```

## 4. Block Level Button (chiều ngang 100%)
```html
<button type="button" class="btn btn-primary w-100">Full Width</button>
```

## 5. Disabled Button
```html
<button type="button" class="btn btn-primary" disabled>Disabled</button>
<a href="#" class="btn btn-secondary disabled" tabindex="-1" aria-disabled="true">Disabled Link</a>
```

## 6. Active Button
```html
<button type="button" class="btn btn-primary active">Active</button>
```

## 7. Button trong Form
```html
<button type="submit" class="btn btn-success">Submit</button>
<button type="reset" class="btn btn-warning">Reset</button>
```

## 8. Button Group
```html
<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
```

## 9. Button Toolbar
```html
<div class="btn-toolbar" role="toolbar">
  <div class="btn-group me-2">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
    <button type="button" class="btn btn-secondary">3</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">4</button>
    <button type="button" class="btn btn-secondary">5</button>
  </div>
</div>
```

## 10. Button với Icon (dùng Bootstrap Icons hoặc FontAwesome)
```html
<button type="button" class="btn btn-primary">
  <i class="bi bi-download"></i> Download
</button>
```

---
**Ghi chú**:
- Luôn kèm `btn` + `btn-{style}`.
- Dùng `btn-outline-{style}` cho nút viền.
- Dùng `disabled` hoặc `aria-disabled="true"` cho nút không bấm được.
- `w-100` để full chiều ngang, `btn-lg` / `btn-sm` để đổi kích thước.
- Dùng nhóm (`btn-group`) để gộp nhiều nút.

**Tài liệu**: [Bootstrap Buttons](https://getbootstrap.com/docs/5.3/components/buttons/)
