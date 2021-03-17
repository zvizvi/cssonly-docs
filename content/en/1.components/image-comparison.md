---
title: Image Comparison
description: 'Fully featured Image Comparison component using CSS only, no JS at all'
category: 'Components'
codesandboxLinkParams: '?hidenavigation=1&hidedevtools=1view=preview&theme=light'
codesandboxLinks: {
  initialWidthSet: 'https://codesandbox.io/embed/cssonly-image-comparison-custom-initial-width-t1pd2',
  customOverlay: 'https://codesandbox.io/embed/cssonly-image-comparison-custom-overlay-c28rr'
}
---

## Example
<div class="p-10 text-center">
  <div class="cssonly-image-comparison">
    <div>
      <img src="/img_snow.jpg" style="max-width: unset !important;" />
    </div>
    <div>
      <img src="/img_forest.jpg" />
    </div>
  </div>
  <center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Drag the resizer here 👆 to move the overlay slide</center>
</div>

## Code
```html
<div class="cssonly-image-comparison">
  <div>
    <img src="https://cssonly.vercel.app/img_snow.jpg" />
  </div>
  <div>
    <img src="https://cssonly.vercel.app/img_forest.jpg" />
  </div>
</div>
```

<br>

## Options

### CSS Variables
```css
--height: <px> // default vlaue: 400px;
--width: <px> // default vlaue:  600px;
--initial-overlay-width: <percent> // default vlaue: 50%;
```
<br>
<br>

<d-alert type="info">

**Note:** The first image ovelay can be also a `css-filter` div instead of an image,

As you can see example below.

</d-alert>

---

## Custom examples

### Initial overlay width
<iframe style="height: 500px;" :src="codesandboxLinks.initialWidthSet+codesandboxLinkParams" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" class="w-full overflow-hidden"></iframe>

### Custom filter overlay
<iframe style="height: 500px;" :src="codesandboxLinks.customOverlay+codesandboxLinkParams" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" class="w-full overflow-hidden"></iframe>

<style>
.cssonly-image-comparison img {
  margin: 0;
}
</style>
