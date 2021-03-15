---
title: Rating
description: 'Fully featured Rating component using CSS only, no JS at all'
category: 'Components'
codesandboxLinkParams: '?hidenavigation=1&hidedevtools=1view=preview&theme=light'
codesandboxLinks: {
  initialValueSet: 'https://codesandbox.io/embed/cssonly-rating-initial-value-set-mm25y',
  customIcons: 'https://codesandbox.io/embed/cssonly-rating-custom-icons-nfnst',
  customIconsFontAwesome: 'https://codesandbox.io/embed/cssonly-rating-custom-icons-fontawesome-rwivm'
}
---

## Example
<style>
  .dark .cssonly-rating {
    --non-filled-color: rgb(209, 213, 219);
  }
</style>
<div class="p-10 text-center">
  <div class="cssonly-rating">
    <input type="radio" name="rating" value="5" id="rating-5" />
    <label for="rating-5"></label>
    <input type="radio" name="rating" value="4" id="rating-4" />
    <label for="rating-4"></label>
    <input type="radio" name="rating" value="3" id="rating-3" />
    <label for="rating-3"></label>
    <input type="radio" name="rating" value="2" id="rating-2" />
    <label for="rating-2"></label>
    <input type="radio" name="rating" value="1" id="rating-1" />
    <label for="rating-1"></label>
  </div>
</div>

<br>

<code-group>
  <code-block label="Code">

```html
<div class="cssonly-rating">
  <input type="radio" name="rating" value="5" id="rating-5" />
  <label for="rating-5"></label>
  <input type="radio" name="rating" value="4" id="rating-4" />
  <label for="rating-4"></label>
  <input type="radio" name="rating" value="3" id="rating-3" />
  <label for="rating-3"></label>
  <input type="radio" name="rating" value="2" id="rating-2" />
  <label for="rating-2"></label>
  <input type="radio" name="rating" value="1" id="rating-1" />
  <label for="rating-1"></label>
</div>
```

  </code-block>
</code-group>

## Options

### CSS Variables
```css
--icon-size: <px> // default vlaue: 36px
--filled-icon: <char> // default vlaue: "★"
--non-filled-icon: <char> // default vlaue: "☆"
--filled-color: <color> // default vlaue: #ffb400
--non-filled-color: <color> // default vlaue: rgba(0,0,0,0.26)
```

### HTML Attributes options

<alert type="info">

A default initial value can be set by adding `checked` attribute to one of the radio inputs.

</alert>

---

## Custom examples

### Initial value set
<iframe style="height: 140px;" :src="codesandboxLinks.initialValueSet+codesandboxLinkParams" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" class="w-full overflow-hidden"></iframe>


### Custom icons and colors
<iframe style="height: 140px;" :src="codesandboxLinks.customIcons+codesandboxLinkParams" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" class="w-full overflow-hidden"></iframe>

### Custom icons using FontAwesome
<iframe style="height: 140px;" :src="codesandboxLinks.customIconsFontAwesome+codesandboxLinkParams" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" class="w-full overflow-hidden"></iframe>

<style>
.p-10 {
  padding: 2.5rem;
}
</style>
