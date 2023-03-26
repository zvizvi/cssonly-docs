---
codesandboxLinks: {
  initialValueSet: 'cssonly-rating-initial-value-set-mm25y',
  customIcons: 'cssonly-rating-custom-icons-nfnst',
  customIconsFontAwesome: 'cssonly-rating-custom-icons-fontawesome-rwivm',
  resetOption: 'cssonly-rating-reset-option-j8o6v'
}
---

# Rating
Fully featured Rating component using CSS only, no JS at all

---

## Example
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

## Code
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
<br>

## Options

### CSS Variables
```css
--icon-size: <px> // default value: 36px
--filled-icon: <char> // default value: "★"
--non-filled-icon: <char> // default value: "☆"
--filled-color: <color> // default value: #ffb400
--non-filled-color: <color> // default value: #bdbdbd
```

### HTML Attributes options

::alert{type=info}
A default initial value can be set by adding `checked` attribute to one of the radio inputs.
::

---

## Custom examples

### Initial value set
<app-code-sandbox :url="codesandboxLinks.initialValueSet" iframe-height="140px"></app-code-sandbox>

### Custom icons and colors
<app-code-sandbox :url="codesandboxLinks.customIcons" iframe-height="140px"></app-code-sandbox>

### Custom icons using FontAwesome
<app-code-sandbox :url="codesandboxLinks.customIconsFontAwesome" iframe-height="140px"></app-code-sandbox>

### Reset option
<app-code-sandbox :url="codesandboxLinks.resetOption" iframe-height="140px"></app-code-sandbox>

<style>
  .dark .cssonly-rating {
    --non-filled-color: rgb(209, 213, 219);
  }
</style>
