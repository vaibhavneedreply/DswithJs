function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(item[0]); // O(1)
  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while(index < middleIndex) { // O(n/2)
    console.log(items[index]);
    index++;
  }

  for(var i = 0; i < 100; i++) { // O(100)
    console.log('hi');
  }

}

// BIGO => O(1 + n/2 + 100)
// O(n)
