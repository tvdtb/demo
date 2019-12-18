# local dev server

```shell script
ng serve
``` 

# Build and run

```shell script
ng build
browser-sync start --server dist/demo
```

# Test code 

(Copy-Paste to WebDevTools console input)

Modify attribute

```javascript
document.querySelector("app-some-element").message = 'hello'
```
Send custom event

```javascript
document.body.dispatchEvent(new CustomEvent('my-custom-event', {
  bubbles: true,
  detail: { message: 'hello world'}
}));
```

Call method of component (special code)

```javascript
document.querySelector("app-some-element").doSomethingExternal()
```
