# myscript-common-element

`myscript-common-element` is the common layer of [myscript-math-web](https://github.com/MyScript/myscript-math-web) and [myscript-text-web](https://github.com/MyScript/myscript-text-web). 
It helps you to integrate an ink editor and handwriting recognition in your webapp.
 
![myscript-common-element preview](./preview.gif)

## What is it about?

myscript-common-element is a web component that can be used in every web application (whatever javascript framework you are using) to bring handwriting recognition. 
It integrates all you need:
* Signal capture,
* Nice digital ink rendering,
* Plug with MyScript CDK to bring handwriting recognition.

## Prerequisites

1. Have a MyScript developer account. You can create one [here](https://dev.myscript.com/).
2. Get an application key and HMAC key for your application.
3. Import webcomponents polyfill on your webapp.

```html
    <script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>
```
 
## Installation

1. Download it.

       bower install myscript-common-element

2. Import it on your webapp.

```html
    <link rel="import" href="bower_components/myscript-common-element/myscript-common-element.html">
```

3. Configure it.

```html
    <myscript-common-element
        type="MATH"
        applicationkey="YOUR MYSCRIPT CDK APPLICATION KEY"
        hmackey="YOUR MYSCRIPT CDK HMAC KEY">
    </myscript-common-element>
```
   
4. Use it!

## Examples

- [examples/non-version-specific/get_started.html](examples/non-version-specific/get_started.html) Get started with iink
- [examples/v3/get_started_legacy.html](examples/v3/get_started_legacy.html) Get started with legacy api (v3)
- [examples/index.html](examples/index.html) Other demonstrations

## Documentation

The API Reference is available here: [https://myscript.github.io/myscript-common-element/](https://myscript.github.io/myscript-common-element/)

## Contribute

We welcome your contributions:
If you would like to extend myscript-common-element for your needs, feel free to fork it!
Please sign our [Contributor License Agreement](CONTRIBUTING.md) before submitting your pull request.

## Share your feedback

Made a cool app with myscript-common-element? We would love to hear about you!
We’re planning to showcase apps using it so let us know by sending a quick mail to [myapp@myscript.com](mailto://myapp@myscript.com)
