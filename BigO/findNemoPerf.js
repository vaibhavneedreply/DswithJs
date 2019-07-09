const { performance } = require('perf_hooks');
const nemo = ['nemo'];
const everyone = ['aa', 'bb', 'cc', 'nemo', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log('Call to find nemo took ' + (t1 - t0) + 'milliseconds');
}

findNemo(everyone);
