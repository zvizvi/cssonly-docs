---
title: Modal
description: 'Fully featured Modal Box component using CSS only, no JS at all'
category: 'Components'
codesandboxLinks: {
  noBackdrop: 'cssonly-modal-no-backdrop-61vo4',
  staticBackdrop: 'cssonly-modal-static-backdrop-yxc0j',
  noCloseButtons: 'cssonly-modal-no-close-buttons-xntjg'
}
---

## Example
<style>
  .dark .cssonly-modal .cssonly-modal-content {
    color: #44403c;
    --non-filled-color: rgb(209, 213, 219);
  }
</style>
<div class="p-10 text-center">
  <input type="checkbox" class="cssonly-modal-checkbox" name="modal1" id="modal1" />
  <label for="modal1" class="cursor-pointer">Show Modal</label>

  <div class="cssonly-modal" id="modal1">
    <label class="cssonly-modal-backdrop" for="modal1"></label>
    <div class="cssonly-modal-content text-left">
      <label for="modal1" class="cssonly-modal-close"></label>
      <div class="cssonly-modal-header">Modal Header</div>
      <div class="cssonly-modal-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="cssonly-modal-footer">
        <label for="modal1"><a>Close</a></label>
      </div>
    </div>
  </div>
</div>

## Code
```html
<input type="checkbox" class="cssonly-modal-checkbox" name="modal1" id="modal1" />
<label for="modal1">Show Modal</label>

<div class="cssonly-modal" id="modal1">
  <!-- Optional backdrop -->
  <label class="cssonly-modal-backdrop" for="modal1"></label>
  <!-- end -->
  <div class="cssonly-modal-content">
    <!-- Optional close button -->
    <label for="modal1" class="cssonly-modal-close"></label>
    <!-- end -->
    <div class="cssonly-modal-header">Modal Header</div>
    <div class="cssonly-modal-body">
      Lorem ipsum dolor...
    </div>
    <div class="cssonly-modal-footer">
      <!-- Optional close button -->
      <label for="modal1">Close</label>
      <!-- end -->
    </div>
  </div>
</div>
```
<br>

## Options

### CSS Variables
```css
--animation-time: <time> // default value: 0.3s
```

### HTML Options ###
<d-alert type="info">

The `cssonly-modal-backdrop` can be changed from `<label>` to a `<div>` tag, to make it static - non-clickable

</d-alert>

<br>


---

## Custom examples

### No backdrop
<app-code-sandbox :url="codesandboxLinks.noBackdrop" iframe-height="320px"></app-code-sandbox>

### Static backdrop
<app-code-sandbox :url="codesandboxLinks.staticBackdrop" iframe-height="320px"></app-code-sandbox>

### No close buttons
<app-code-sandbox :url="codesandboxLinks.noCloseButtons" iframe-height="320px"></app-code-sandbox>
