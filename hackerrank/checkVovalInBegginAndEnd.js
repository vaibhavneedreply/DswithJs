//The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.

class CheckVovalAtBegginingAndEnd {
  constructor() {

  }

  regexVar(s) {
    const re = {
      "expresion": "^[aeiou]"
    }
    const firstLetter = s.charAt(0);
    const lastLetter = s.charAt(s.length - 1);
    if(s.charAt(0).match("^[aeiou]")) {
      if(firstLetter === lastLetter)
        console.log(true);
      else
      console.log(false);
    }
    else {
      console.log(false);
    }
  }

}

const checkVovalAtBegginingAndEnd = new CheckVovalAtBegginingAndEnd();
checkVovalAtBegginingAndEnd.regexVar('abcda');
