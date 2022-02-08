---
title: Image Comparison
description: 'Fully featured Image Comparison component using CSS only, no JS at all'
category: 'Components'
codesandboxLinks: {
  initialWidthSet: 'cssonly-image-comparison-custom-initial-width-t1pd2',
  customOverlay: 'cssonly-image-comparison-custom-overlay-c28rr'
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
--height: <px> // default value: 400px
--width: <px> // default value: 600px
--initial-overlay-width: <percent> // default value: 50%
```

<br>

<d-alert type="info">

**Note:** The first image overlay can be also a `css-filter` div instead of an image,

As you can see example below.

</d-alert>

---

## Custom examples

### Initial overlay width
<app-code-sandbox :url="codesandboxLinks.initialWidthSet" iframe-height="500px"></app-code-sandbox>

### Custom filter overlay
<app-code-sandbox :url="codesandboxLinks.customOverlay" iframe-height="500px"></app-code-sandbox>

<style>
.cssonly-image-comparison img {
  margin: 0;
}
</style>
