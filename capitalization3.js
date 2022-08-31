"use strict";

let name = "marikka";

let firstLetters = name.substring(0, 2);
let thirdCharacter = name.substring(2, 3).toUpperCase();
let restOfLetters = name.substring(3);

console.log(firstLetters + thirdCharacter + restOfLetters);
