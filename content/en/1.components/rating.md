---
title: Rating
description: ''
category: 'Components'
features:
  - Write in Markdown
  - Use Vue components
  - Designed with TailwindCSS
  - Light and Dark mode
codesandboxLink: 'https://codesandbox.io/embed/cssonly-rating-mm25y?hidenavigation=1&hidedevtools=1view=preview&theme=light'
---

<code-group>
  <code-block label="Example" active>
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
  </code-block>

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

<list :items="features"></list>


## Codesandbox

<iframe style="height: 300px;" :src="codesandboxLink" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" class="w-full overflow-hidden"></iframe>
