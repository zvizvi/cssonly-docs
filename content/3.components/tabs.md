---
codesandboxLinks: {
  fixedWidth: 'cssonly-tabs-fixed-width-qltpt',
  customColor: 'cssonly-tabs-custom-color-oc5mw'
}
---

# Tabs
Fully featured Tabs component using CSS only, no JS at all

---

## Example
<div class="p-10 text-justify">
  <div class="cssonly-tabs">
    <input type="radio" checked name="cssonly-tabs" id="tab-1" />
    <label for="tab-1">Tab 1</label>
    <div class="tab-content">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make
    </div>
    <input type="radio" name="cssonly-tabs" id="tab-2" />
    <label for="tab-2">Tab 2</label>
    <div class="tab-content">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters
    </div>
    <input type="radio" name="cssonly-tabs" id="tab-3" />
    <label for="tab-3">Tab 3</label>
    <div class="tab-content">
      There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected humour
    </div>
    <input type="radio" name="cssonly-tabs" id="tab-4" />
    <label for="tab-4">Tab 4</label>
    <div class="tab-content">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.
    </div>
    <input type="radio" name="cssonly-tabs" id="tab-5" />
    <label for="tab-5">Tab 5</label>
    <div class="tab-content">
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced
      below for those interested
    </div>
  </div>
</div>

## Code
```html
<div class="cssonly-tabs">
  <input type="radio" checked name="cssonly-tabs" id="tab-1" />
  <label for="tab-1">Tab 1</label>
  <div class="tab-content">
    Tab content
  </div>
  <input type="radio" name="cssonly-tabs" id="tab-2" />
  <label for="tab-2">Tab 2</label>
  <div class="tab-content">
    Tab content
  </div>
  <input type="radio" name="cssonly-tabs" id="tab-3" />
  <label for="tab-3">Tab 3</label>
  <div class="tab-content">
    Tab content
  </div>
  <input type="radio" name="cssonly-tabs" id="tab-4" />
  <label for="tab-4">Tab 4</label>
  <div class="tab-content">
    Tab content
  </div>
  <input type="radio" name="cssonly-tabs" id="tab-5" />
  <label for="tab-5">Tab 5</label>
  <div class="tab-content">
    Tab content
  </div>
</div>
```

<br>

## Options

### CSS Variables
```css
  --tabs-fixed-width: <px>; // Optional. Sets a fixed width for the tabs pans, instead of relative part width.
  --line-color: <color> // default value: #4f46e5
  --transition-time: <time> // default value: 0.2s
```

<br>


---

## Custom examples

### Tabs fixed width
<app-code-sandbox :url="codesandboxLinks.fixedWidth" iframe-height="280px"></app-code-sandbox>

### Custom color and no animation
<app-code-sandbox :url="codesandboxLinks.customColor" iframe-height="280px"></app-code-sandbox>

<style>
  .dark .cssonly-tabs input[type=radio]:checked+label {
    color: #fff;
  }
</style>
