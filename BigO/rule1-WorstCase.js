const everyone = ['aa', 'bb', 'cc', 'nemo', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

findNemo(everyone);

// program will run till 4 iterations
//Best case:- nemo at first
//Worst case:- nemo at the end 
