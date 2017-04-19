# myscript-common-element

`myscript-common-element` is the common layer of [myscript-math-web](https://github.com/MyScript/myscript-math-web) and [myscript-text-web](https://github.com/MyScript/myscript-text-web). 
It helps you to integrate handwriting panel and recognition in your webapp.
 
![myscript-common-element preview](./preview.gif)

```html
<html>
<head>
    <script src="../../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../myscript-common-element.html">
</head>
<body>
    <myscript-common-element
        type="MATH"
        host="webdemoapi.myscript.com"
        applicationkey="515131ab-35fa-411c-bb4d-3917e00faf60"
        hmackey="54b2ca8a-6752-469d-87dd-553bb450e9ad">
    </myscript-common-element>
</body>
</html>
```

## Examples

* [Simple shape REST demo](./demo/index.html)
* [Programmatic init](demo/programmatic-init.html)
* [Customize style](./demo/customstyle.html)
* [Error handling](./demo/init-error.html)
* [Get statistics](./demo/stats.html)
* [Interactive ink preview (MATH)](./demo/iink_preview.html)


* [Retrieve available languages](./demo/languages.html)
   
## [Documentation](./docs/index.html)

## Build from sources

1. Install dependencies.
    * `bower install`
    
**Start coding**

2. Run using polyserve.
    * `polyserve`. Documentation and demo will be available on `http://localhost:8080/components/myscript-common-element/`
3. Debug using your favorite browser dev tools.

## Contribute

We welcome your contributions: If you would like to extend myscript-common-element for your needs, feel free to fork it!
Please sign our [Contributor License Agreement](CONTRIBUTING.md) before submitting your pull request.

## Share your feedback

Made a cool app with myscript-common-element? We would love to hear about you!
We’re planning to showcase apps using it so let us know by sending a quick mail to [myapp@myscript.com](mailto://myapp@myscript.com)
