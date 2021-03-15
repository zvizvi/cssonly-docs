---
title: Tooltip
description: 'Fully featured Tooltip component using CSS only, no JS at all'
category: 'Components'
---

## Example
<div class="p-10 text-center">
  <div class="inline-block text-left">
    <span cssonly-tooltip="Nice cssonly tooltip">Hover me!</span>
    <br>
    <span cssonly-tooltip="Nice cssonly tooltip" class="cssonly-tooltip-top-left">Hover me! [top-left]</span>
    <br>
    <span cssonly-tooltip="Nice cssonly tooltip" class="cssonly-tooltip-light">Hover me! [light]</span>
    <br>
    <span cssonly-tooltip="Nice cssonly tooltip" class="cssonly-tooltip-bottom-right">Hover me! [bottom-right]</span>
    <br>
    <span cssonly-tooltip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." class="cssonly-tooltip-multiline">Hover me! [Long multiline text]</span>
  </div>
</div>

## Code
```html
<span cssonly-tooltip="Nice cssonly tooltip">Hover me!</span>,
```

<br>

## Options

### Class names
```html
  // the default alignment is top center
  cssonly-tooltip-top-left // top left
  cssonly-tooltip-top-right // top right
  cssonly-tooltip-bottom // bottom center
  cssonly-tooltip-bottom-right // bottom right
  cssonly-tooltip-bottom-left // bottom left
  cssonly-tooltip-light // light appearance
  cssonly-tooltip-multiline // long multiline text
```
<br>

<style>
.p-10 {
  padding: 2.5rem;
}
</style>
