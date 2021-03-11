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
<code-group>
  <code-block label="Example" active>
    <div class="p-10 text-center">
      <div class="cssonly-image-comparison">
        <div>
          <img src="/img_snow.jpg" style="max-width: unset !important;" />
        </div>
        <div>
          <img src="/img_forest.jpg" />
        </div>
      </div>
    </div>
    <center style="position: relative;top: -30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Drag the resizer here 👆 to move the overlay slide</center>
  </code-block>
</code-group>

<code-group>
  <code-block label="Code">

```html
<div class="cssonly-image-comparison">
  <div>
    <img src="https://www.w3schools.com/howto/img_snow.jpg" />
  </div>
  <div>
    <img src="https://www.w3schools.com/howto/img_forest.jpg" />
  </div>
</div>
```

  </code-block>
</code-group>

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

<alert type="info">

**Note:** The first image ovelay can be also a `css-filter` div, instead of an image,

As you can see example below.

</alert>

---

## Custom examples

### Initial overlay width
<iframe style="height: 500px;" :src="codesandboxLinks.initialWidthSet+codesandboxLinkParams" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" class="w-full overflow-hidden"></iframe>

### Custom filter overlay
<iframe style="height: 500px;" :src="codesandboxLinks.customOverlay+codesandboxLinkParams" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" class="w-full overflow-hidden"></iframe>

<style>
.p-10 {
  padding: 2.5rem;
}
</style>
