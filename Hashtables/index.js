// object is type of hash table
// Hash function - convert a string to random number
// Output always be same
// Take value -> conver in to hash -> assign index
// O(1)

//Disadvantage
// If there is collisions its slow down the reading and writing process O(n)
// Solve collisions using linkedlist
// Robinhood chaining

// In Es6 there is two new things 1.map() 2.sets()
// Diff in Map and object is :- in object all defined as string but in
// map we can define key as whatever type we want
//map maintain the insertion operations
//in object its random
// Map allow us to set any datatype as the key 
// set- only stores the key 

let user = {
    age: 27,
    name: 'vaibhav',
    magic: true,
    scream: function() {
      console.log('ahhhhhh!');
    }
  }

  console.log(user.age); //O(1)
  user.spell = 'abra kadabra';  // O(1)
  user.scream(); // O(1)

// hash collisions - inserting the value on same //memory address [and its become an linkedlist]

const a = new Map()
  //const b = new Sets() // only stores the keys


  // Creating hash table
  class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }

    _hash(key) {
      let hash = 0;
      for(let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {
      let address = this._hash(key);
      if(!this.data[address]) {
        this.data[address] = [];
        this.data[address].push([key, value]);
      // console.log(this.data);
      }
      this.data[address].push([key, value]);
      return this.data;
    } //O(1)

    get(key) {
      let address = this._hash(key);
      const currentBucket = this.data[address];
      console.log(currentBucket);
      if(currentBucket) {
        for(let i =0; i < currentBucket.length; i++) {
          if(currentBucket[i][0] === key)
            return currentBucket[i][1]
        }
      } // O(1)
      return undefined;
    } 

    keys() {
      const keysArray = [];  
      for(let i = 0; i < this.data.length; i++) {
        if(this.data[i]) {
          keysArray.push(this.data[i][0][0]);
        }
      }
      return keysArray;
    }

  }

  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000);
  myHashTable.set('apple', 54);
  myHashTable.set('oranges', 2);
  myHashTable.get('grapes');
  myHashTable.keys(); 


  // Google question 
  // Given an array = [2,5,1,2,3,5,1,2,4]
  // It should return 2 => first recurring number

  // Given an array = [2,1,1,2,3,5,1,2,4]
  // It should return 1 => first recurring number

  // Given an array = [2,3,4,5]
  // It should return undefined => first recurring number

  //First approach
  function firstRecurringCharacter(input) {
    for(let i = 0; i < input.length; i++) {
      for(let j = i+1; j < input.length; j++) {
        if(input[i] === input[j]) {
          return input[i]
        }
      }
    }
    return undefined;
  } // O(n^2)

  // Second approach
  function firstRecurringCharacter2(input) {
    let map = {};
    for(let i = 0; i < input.length; i++) { 
      if(map[input[i]] !== undefined) {
        return input[i];
      } else {
        map[input[i]] = i;
      }
      console.log(map)
    }
    return undefined;
  } //O(n)

  firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
  firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);

