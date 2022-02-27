---
title: Image Slider
description: 'Fully featured Image Slider component using CSS only, no JS at all'
category: 'Components'
codesandboxLinks: {
  clickToSlide: 'cssonly-image-slider-clickToSlide-f5hr77',
  noArrows: 'cssonly-image-slider-noArrows-l2vvq',
  noDots: 'cssonly-image-slider-nodots-jy90r',
  noTransition: 'cssonly-image-slider-notransition-bbrof',
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
    <div class="dots">
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

  <!-- Optional slider dots -->
  <div class="dots">
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

### Class names
```less
  click-to-slide // move to the prev or next slide when clicking on image. optional
```
<br>

---

## Custom examples

### Click on image to slide
<app-code-sandbox :url="codesandboxLinks.clickToSlide" iframe-height="330px"></app-code-sandbox>

### No Arrows
<app-code-sandbox :url="codesandboxLinks.noArrows" iframe-height="330px"></app-code-sandbox>

### No Dots
<app-code-sandbox :url="codesandboxLinks.noDots" iframe-height="330px"></app-code-sandbox>

### No Transition
<app-code-sandbox :url="codesandboxLinks.noTransition" iframe-height="330px"></app-code-sandbox>
