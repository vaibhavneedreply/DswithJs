const nemo = ['nemo'];

function findNemo(array) {
    for(let i = 0; i < array.length; i++) {
      if(array[i] === 'nemo') {
        console.log('Found NEMO!');
      }
    }
}

const findNemo2 = array => {
  array.forEach(fish => {
    if(fish === 'nemo') {
      console.log('Found NEMO!');
    }
  });
}

const findNemo3 = array => {
  for(let fish of array){
    if(fish === 'nemo') {
      console.log('Found NEMO!');
    }
  };
}

findNemo(nemo);
findNemo2(nemo);
findNemo3(nemo);
