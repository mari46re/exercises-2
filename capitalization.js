"use strict";

// capitalize();
// function capitalize(str) {
//   let name = "marikka";

//   let firstLetters = name.substring(0, 1);
//   let thirdCharacter = name.substring(1, 2).toUpperCase();
//   let restOfLetters = name.substring(2);

//   str = firstLetters + thirdCharacter + restOfLetters;

//   console.log(str);
// }

const name = "marikKa";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

const cap = capitalize(name);

console.log(cap);
