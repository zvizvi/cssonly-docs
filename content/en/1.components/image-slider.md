---
title: Image Slider
description: 'Fully featured Image Slider component using CSS only, no JS at all'
category: 'Components'
codesandboxLinks: {
  noArrows: 'cssonly-image-slider-noArrows-l2vvq',
  noTracks: 'cssonly-image-slider-notracks-jy90r'
}
---

## Example
<div class="p-10 text-center">
  <div class="cssonly-slider">
    <input type="radio" name="cssonly-slider" id="slide-1" />
    <input type="radio" name="cssonly-slider" id="slide-2" />
    <input type="radio" name="cssonly-slider" id="slide-3" />
    <input type="radio" name="cssonly-slider" id="slide-4" />
    <div class="slides-wrapper">
      <div class="slides">
        <div class="slide">
          <img src="/img_Nature_View.jpg" />
        </div>
        <div class="slide">
          <img src="/img_Qinling_mountains.jpg" />
        </div>
        <div class="slide">
          <img src="/img_Krabi_beach_view.jpg" />
        </div>
        <div class="slide">
          <img src="/img_Eilat_night_hotels.jpg" />
        </div>
      </div>
    </div>
    <div class="prev-arrows">
      <label class="prev-arrow" for="slide-1"></label>
      <label class="prev-arrow" for="slide-2"></label>
      <label class="prev-arrow" for="slide-3"></label>
      <label class="prev-arrow" for="slide-4"></label>
    </div>
    <div class="next-arrows">
      <label class="next-arrow" for="slide-1"></label>
      <label class="next-arrow" for="slide-2"></label>
      <label class="next-arrow" for="slide-3"></label>
      <label class="next-arrow" for="slide-4"></label>
    </div>
    <div class="tracks">
      <label for="slide-1"></label>
      <label for="slide-2"></label>
      <label for="slide-3"></label>
      <label for="slide-4"></label>
    </div>
    <!-- end -->
  </div>
</div>

## Code
```html
<div class="cssonly-slider">
  <input type="radio" name="cssonly-slider" id="slide-1" />
  <input type="radio" name="cssonly-slider" id="slide-2" />
  <input type="radio" name="cssonly-slider" id="slide-3" />
  <input type="radio" name="cssonly-slider" id="slide-4" />
  <div class="slides-wrapper">
    <div class="slides">
      <div class="slide">
        <img src="https://cssonly.vercel.app/img_Nature_View.jpg" />
      </div>
      <div class="slide">
        <img src="https://cssonly.vercel.app/img_Qinling_mountains.jpg" />
      </div>
      <div class="slide">
        <img src="https://cssonly.vercel.app/img_Krabi_beach_view.jpg" />
      </div>
      <div class="slide">
        <img src="https://cssonly.vercel.app/img_Eilat_night_hotels.jpg" />
      </div>
    </div>
  </div>

  <!-- Optional slider arrows -->
  <div class="prev-arrows">
    <label class="prev-arrow" for="slide-1"></label>
    <label class="prev-arrow" for="slide-2"></label>
    <label class="prev-arrow" for="slide-3"></label>
    <label class="prev-arrow" for="slide-4"></label>
  </div>
  <div class="next-arrows">
    <label class="next-arrow" for="slide-1"></label>
    <label class="next-arrow" for="slide-2"></label>
    <label class="next-arrow" for="slide-3"></label>
    <label class="next-arrow" for="slide-4"></label>
  </div>
  <!-- end -->

  <!-- Optional slider tracks -->
  <div class="tracks">
    <label for="slide-1"></label>
    <label for="slide-2"></label>
    <label for="slide-3"></label>
    <label for="slide-4"></label>
  </div>
  <!-- end -->
</div>
```
<br>

## Options

### CSS Variables
```css
  --width: <px> // default value: 500px;
  --height: <px> // default value: 300px;
  --transition-time: <time> // default value: 0.3s;
  --prev-arrow: <char> // default value: "❮";
  --next-arrow: <char> // default value: "❯";
```

---

## No Arrows
<app-code-sandbox :url="codesandboxLinks.noArrows" iframe-height="320px"></app-code-sandbox>

### No Tracks
<app-code-sandbox :url="codesandboxLinks.noTracks" iframe-height="320px"></app-code-sandbox>


<style>
  .dark .cssonly-modal .cssonly-modal-content {
    color: #44403c;
  }
</style>
