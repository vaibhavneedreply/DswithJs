const nemo = ['nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) { // O(n)
    if (array[i] === 'nemo') { // O(n)
      console.log('Found NEMO!'); // O(n)
    }
  }
}

findNemo(nemo); // O(3n) => O(n) --> Linear Time
