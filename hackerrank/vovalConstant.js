class VovalConstant {
  constructor() {

  }

  diffVovalConstant(s) {
    const voval = [];
    const constant = [];
    if(s.length === 0) {
      return;
    }
    for(let i = 0; i < s.length; i++) {
      if(s.charAt(i) === 'a' || s.charAt(i) === 'e' || s.charAt(i) === 'i' || s.charAt(i) === 'o' || s.charAt(i) === 'u'){
        voval.push(s.charAt(i))
      }
      else {
        constant.push(s.charAt(i))
      }
    }
    const combineStr = voval.join('').concat(constant.join(''));
    for(let j = 0; j < combineStr.length; j++ ) {
      console.log(combineStr[j]);
    }
  }
}

const vovalConstant = new VovalConstant();
vovalConstant.diffVovalConstant('javascriptloops');
