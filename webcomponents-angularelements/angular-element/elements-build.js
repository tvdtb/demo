const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
  // Instead of /CustomElements/ put your project name - just check a dist folder to see how its formatted and make it that way
  const files = [
    './dist/angular-element-demo/runtime-es2015.js',
    './dist/angular-element-demo/polyfills-es2015.js',
    './dist/angular-element-demo/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/demo.js');
  await fs.copyFile(
    './dist/angular-element-demo/styles.css',
    'elements/styles.css'
  );
})();