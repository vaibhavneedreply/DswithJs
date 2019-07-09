boxes = ['aa', 'bb', 'cc', 'dd', 'ee'];

function compressFirstBox(boxes) {
  console.log(boxes[0]);
}

function logFirstTwoBox(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(2)
}

compressFirstBox(boxes); // O(1) --> Constant Time
logFirstTwoBox(boxes); // O(2)
