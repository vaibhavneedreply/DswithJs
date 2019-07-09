const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

console.log(strings[2]); // Simple lookup O(1)

//push
strings.push('e'); // Simple insert at end O(1)
console.log(strings);

//pop
strings.pop(); // Simple delete at end O(1)
console.log(strings);

//unshift
strings.unshift('x'); // Insert at beginning O(n)
console.log(strings);

//splice
strings.splice(2, 0, 'vaibhav'); // Insert at middle O(n)
console.log(strings);

//splice
strings.splice(2, 1); // delete at middle O(n)
console.log(strings);


// There is two type of array
//  - Static- Fixed in size
//  - Dynamic- No Fixed size -append* O(1)
    //-sometime O(1), In Dynamic array its copy all array and move to different location in order to create space In js it does automatically
    // * can be O(n)
    // when we add any item to array, if its Dynamic array in js its move to different location and assign the new element. Because of this it can be
    //O(n)

// reference type
//context
//instantiation


// Adv object concept
// premitive type:1,null,undefined,false,ture,"hello" [defined by language]
// Reference type/ non premitive type : create object  [defined by programmer]
    // reference type
      var object1 = {value : 10} // new object
      var object2 = object1 // reference to the first
      var object3 = {value : 10} // New object
      console.log(object1 === object2); // true
      console.log(object1 === object3); // false
      console.log(object1.value = 15); // 15
      console.log(object2.value); // 15
      console.log(object3.value); // 10
      [] === []; // false
      [1] === [1]; // false
    // context and scope //context mean where we are within the object
      function a() {
      console.log(this); // inside the global obj
      }
     // a();
// this :- in what environment you are in right now

      // change the this scope
      const object4 = {
         a : function() {
           console.log(this);
         }
      }
      object4.a();
    // instantiation // Make a copy of object and reuse the code 
    // Es6
    class Player {
      constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
      }
      introduce() {
        consloe.log(`i am ${this.name}, and i am ${this.type}`);
      }
    }

    class Wizard extends Player{
      constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
      }
      play() {
        console.log(`i am this type ${this.type}`)
      }
    }

    const wizard1 = new Wizard('vaibhav', 'bestman');
    const wizard2 = new Wizard('vaibhav1', 'bestman1');

  // Old javascript
  // var Player = function(name, type) {
  //   this.name = name;
  //   this.type = type;
  // }

  // Player.prototype.introduce = function() {
  //   consloe.log(`i am ${this.name}, and i am ${this.type}`);
  // }

  // var wizard1 = new Player('vaibhav', 'bestman');
  // var wizard2 = new Player('vaibhav1', 'bestman1');

  // wizard1.play = function() {
  //   console.log(`i am this type ${this.type}`)
  // }

  //How to build array and how to use
  class NewArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }

    get(index) {
      return this.data[index];
    }

    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }

    pop() {
      const lastItem = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return lastItem;
    }

    delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
    }

    shiftItems(index) {
      for(let i = index; i < this.length -1; i++) {
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length-1];
      this.length--;
    }

  }
  const newArray = new NewArray();
  newArray.push('hi');
  newArray.push('you');
  newArray.push('!');
  //newArray.pop()
  newArray.delete(1);
  console.log(newArray);

  //String and array
  // create a function that reverses a string
  // 'Hi My Name is Vaibhav' should be
  // 'vahbiaV si eman yM iH'

  function reverseStringUsingBuiltInFu(str) {
    // const splitString = str.split("");
    // const reverseString = splitString.reverse();
    // const joinString = reverseString.join("");
    return str.split("").reverse().join("");

  }

  function reverseStringUsingLoop(str) {
    var revStr = "";
    for(var i = str.length-1; i >= 0; i--) {
      revStr += str[i];
    }
    console.log(revStr);
  }

  function reverseStringUsingRecursion(str) {
    if(str === "")
      return "";
    else {
      return reverseStringUsingRecursion(str.substr(1)) + str.charAt(0);
    }
  }

  const reverseStringWithEs6 = str => str.split("").reverse().join("");

  const reverseStringWithDestru = str => [...str].reverse().join(""); // [... destructure]

reverseStringUsingBuiltInFu('Hi My Name is Vaibhav');
reverseStringUsingLoop('Hi My Name is Vaibhav');
reverseStringUsingRecursion('Hi My Name is Vaibhav');
reverseStringWithEs6('Hi My Name is Vaibhav');
reverseStringWithDestru('Hi My Name is Vaibhav');

// mergeSortedArray([0,3,4,31], [4,6,30])
// output [ 0,3,4,4,6,30,31 ]

function mergeSortedArray(array1, array2) {
  const mergeArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  while(array1Item || array2Item) {
    if(!array2Item || array1Item < array2Item) {
      mergeArray.push(array1Item);
      array1Item = array1[i];
      i++;
    }
    else {
      mergeArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  console.log(mergeArray);
}

mergeSortedArray([0,3,4,31], [4,6,30]);

//Array
// fast lookup
// fast push/pop
// ordered

//slow insert
// slow deletes
// Fixed size




