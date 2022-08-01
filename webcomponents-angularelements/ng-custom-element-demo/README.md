# Custom-Element-Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

It provides a simple angular element `my-custom-element` showing how to use Angular `@Input` and `@Output`
for WebComponents.

Build using

```
npm run build:element
```

Copy `elements/custom-element-demo.js` bundle as a static asset to your application.


Include element into DOM:

```
<my-custom-element id="custom1" message="default message"></my-custom-element>
```

The element 

- accepts `@Input` message as a DOM attribute
- accenpts calling `@Input` public method `doSomethingExternal(string)` 
- fires custom event  `importantEvent` when button is pressed

See `src/index.html`  (development bundle will be compiled and included by dev server running `ng serve`).