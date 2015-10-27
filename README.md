# layout-loader
html layout loader for webpack

## Usage

``` javascript
var fileContent = require("layout!html!./file.txt");
// => returns file.txt content as string
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## Thanks
- [raw-loader](https://github.com/webpack/raw-loader)