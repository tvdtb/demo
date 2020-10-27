const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
  const files = [
    './dist/ng-wc-test/runtime.js',
    './dist/ng-wc-test/polyfills.js',
    './dist/ng-wc-test/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/bundle.js');
})();
