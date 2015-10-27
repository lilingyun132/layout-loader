# layout-loader
html layout loader for webpack, with layout-loader, you can use require directly in html now!

## Usage

- a.html

```html
<div>content from a.html</div>

```

- b.html

```html
<!-- require('layout!html!./a.html') -->
<div>content for b.html</div>

```

- js

``` javascript
var htmlContent = require("layout?l!html!layout?r./b.html");
// => see result.html
```

- result.html

```html
<div>content from a.html</div>
<div>content for b.html</div>
```

## Thanks
- [raw-loader](https://github.com/webpack/raw-loader)
- [html-loader](https://github.com/webpack/html-loader)