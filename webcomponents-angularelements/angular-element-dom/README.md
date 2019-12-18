# local dev server

```shell script
ng serve
``` 

# Build and run

```shell script
ng build --aot --prod  --vendor-chunk=false --output-hashing=none

http-server dist/demo
# OR
browser-sync start --server dist/demo
```

# Create bundle

```shell script
pushd dist/demo
cat runtime-es2015.js > bundle.js
echo "" >> bundle.js
cat polyfills-es2015.js   >> bundle.js
echo "" >> bundle.js
cat scripts.js  >> bundle.js
echo "" >> bundle.js
cat main-es2015.js  >> bundle.js
echo "" >> bundle.js

```

# Test code 

(Copy-Paste to WebDevTools console input)

Modify attribute

```javascript
document.querySelector("app-some-element").message = 'hello'
```
Send custom event

```javascript
document.body.dispatchEvent(new CustomEvent('my-send-message', {
  bubbles: true,
  detail: { message: 'hello world'}
}));
```

Call method of component (special code)

```javascript
document.querySelector("app-some-element").doSomethingExternal()
```
Create another instance 

```javascript
let ele = document.createElement('app-some-element')
document.body.appendChild(ele)
```
