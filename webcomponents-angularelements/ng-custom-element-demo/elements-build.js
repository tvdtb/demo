const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
  // Instead of /CustomElements/ put your project name - just check a dist folder to see how its formatted and make it that way
  const files = [
    './dist/runtime.js',
    './dist/polyfills.js',
    './dist/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/custom-element-demo.js');
  await fs.copyFile(
    './dist/styles.css',
    'elements/styles.css'
  );
})();