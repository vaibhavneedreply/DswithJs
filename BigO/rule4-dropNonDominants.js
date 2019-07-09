function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sum');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber){
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5]);


//BIGO => O(n + n^2) => O(n^2) Dominants term
// only worride about scall here
// for eg:- O(x^2+3x+100+x/2) => if x = 5000 //  x^2 incress significantly
// so it becomes O(x^2) 
