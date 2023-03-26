---
codesandboxLinks: {
  onHover: 'cssonly-dropdown-onhover-pgx9b',
  dropup: 'cssonly-dropdown-dropup-wgkeo',
  alignRight: 'cssonly-dropdown-right-6cro8',
  noClose: 'cssonly-dropdown-noclose-nry1f',
}
---

# Dropdown
Fully featured Dropdown component using CSS only, no JS at all

---

## Example
<div class="p-10 text-center">
  <details class="cssonly-dropdown">
    <summary>Show dropdown <small style="vertical-align:text-top;">⯆</small></summary>
    <ul class="cssonly-dropdown-menu">
      <li><a>Action</a></li>
      <li><a>Another action</a></li>
      <li><a>One more action</a></li>
      <li class="divider"></li>
      <li><a>Separated item</a></li>
    </ul>
  </details>
</div>

## Code
```html
<details class="cssonly-dropdown">
  <summary>Show dropdown</summary>
  <ul class="cssonly-dropdown-menu">
    <li><a>Action</a></li>
    <li><a>Another action</a></li>
    <!-- Optional divider -->
    <li class="divider"></li>
    <!-- end -->
    <li><a>Separated link</a></li>
  </ul>
</details>
```

<br>

## Options

### CSS Variables
```css
  --background-color: <color> // default value: #fff;
  --color: <color> // default value: #333;
  --hover-background-color: <color> // default value: #f5f5f5;
  --hover-color: <color> // default value: #262626;
```

### Class names
```less
  cssonly-dropdown-left // align the dropdown starting point to left (this is the default)
  cssonly-dropdown-right // align the dropdown starting point to right
  cssonly-dropdown-dropup // open the dropdown upwards
  cssonly-dropdown-onhover // open the dropdown by hovering with the mouse
  no-close // don't close the dropdown when click outside
```
<br>

::alert{type=info}
**Important:** When using the `cssonly-dropdown-onhover` option, you most also replace the `<details>` element with a regular `<div>` tag (see an example below).
::
<br>


---

## Custom examples

### Open on hover
<app-code-sandbox :url="codesandboxLinks.onHover" iframe-height="210px"></app-code-sandbox>

### Open upwards
<app-code-sandbox :url="codesandboxLinks.dropup" iframe-height="210px"></app-code-sandbox>

### Right alignment
<app-code-sandbox :url="codesandboxLinks.alignRight" iframe-height="210px"></app-code-sandbox>

### No closing when clicked outside
<app-code-sandbox :url="codesandboxLinks.noClose" iframe-height="210px"></app-code-sandbox>

<style>
  .cssonly-dropdown .cssonly-dropdown-menu li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .cssonly-dropdown .cssonly-dropdown-menu li a {
    border-bottom :0;
  }
  .cssonly-dropdown .cssonly-dropdown-menu li:before {
    content: none;
  }
  .cssonly-dropdown .cssonly-dropdown-menu li a:hover {
    border: none;
  }
  .dark .cssonly-dropdown {
    --background-color: #292524;
    --color: rgba(214, 211, 209, var(--tw-text-opacity));
    --hover-background-color: rgba(68, 64, 60, var(--tw-bg-opacity));
    --hover-color: rgba(255, 255, 255, var(--tw-text-opacity));
  }
</style>
