`myscript-common-element` is the common layer of [myscript-math-web](https://github.com/MyScript/myscript-math-web) and [myscript-text-web](https://github.com/MyScript/myscript-text-web). 
It helps you to integrate an ink editor and handwriting recognition in your **Polymer** webapp.
 
## What is it about?

myscript-common-element is a web component that can be used in every web application to bring handwriting recognition and conversion. It integrates all you need:
* Signal capture,
* Digital ink rendering,
* Rich editing gestures,
* Conversion,
* Import,
* Exports.

Both math and text can be recognized, you just have to define the appropriate configuration settings.

If you are not familiar with webcomponents and Polymer, please use [MyScriptJS](https://github.com/MyScript/MyScriptJS) or [myscript-math-web](https://github.com/MyScript/myscript-math-web) and [myscript-text-web](https://github.com/MyScript/myscript-text-web).  

## Getting started

### Prerequisites

1. Have a MyScript developer account. You can create one [here](https://dev.myscript.com/).
2. Get an application key and HMAC key for your application.
3. Import webcomponents polyfill on your webapp.

```html
    <script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>
```
 
#### Installation
  
1. Download myscript-math-web.
```shell
bower install myscript-common-element
```

2. Create and edit `index.html` file in the same directory. Add the following line in the `head` section to import the library.
```html
  <!-- Load the webcomponent polyfill -->
  <script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>
  <!-- Load myscript-math-web and the related librairies -->
  <link rel="import" href="bower_components/myscript-common-element/myscript-common-element.html">
```

3. Use the component in the `body` section. Use the keys you received by mail.
```html
  <myscript-common-element
    applicationkey="YOUR MYSCRIPT CDK APPLICATION KEY"
    hmackey="YOUR MYSCRIPT CDK HMAC KEY">
  </myscript-common-element>
```

4. Launch a local web-server and use it!


## Examples

Browse [the examples hosted on github.io](https://myscript.github.io/myscript-common-element/components/myscript-common-element/#/elements/myscript-common-element/demos/other-demonstrations).

The [directory examples/](/examples) of this git repository contains all the example source codes. 

## Documentation

A complete guide is available on [MyScript Developer website](https://developer.myscript.com/docs/interactive-ink/1.0/web/web-components/common-element/).

The API Reference is available in the `docs` directory or on [myscript.github.io/myscript-common-element/ website](https://myscript.github.io/myscript-common-element/).

## Contribute

We welcome your contributions:
If you would like to extend myscript-common-element for your needs, feel free to fork it!
Please sign our [Contributor License Agreement](CONTRIBUTING.md) before submitting your pull request.

## Share your feedback

Made a cool app with myscript-common-element? We would love to hear about you!
We’re planning to showcase apps using it so let us know by sending a quick mail to [myapp@myscript.com](mailto://myapp@myscript.com)
