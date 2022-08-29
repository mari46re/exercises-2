"use strict";

// console.log("\u{1f385}");

// const longline =
//   "A very, very, very, very, very, very, very lone line of text, \nthat spans across the width of the editor";

// const name = "Peter";
// const drink = `Coca-cola`;

// const text = `Hello ${name},

// would you like a ${drink}?`;

// console.log(text);

// const len = name.length;

// console.log(`${name} is ${len} characters long`);

// const letter = name[1];

// console.log(`The second letter of ${name} is ${letter}`);

const str1 = "\t  There is  space here \n ";
const str2 = str1.trim();

console.log(str1, `_${str2}_`);

const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 5);
//This will go from character 17 and to the end.
const lastName = fullName.substring(17);

console.log(`First name is: _${firstName}_`);
console.log(`Lastname is: _${lastName}_`);

//substring-exercises
const name = "Albus Percial Wulfric Brian Dumbledore";
const total = name.length;

//exercise 1
const nameFirst = name.substring(0, 5);
console.log(nameFirst);

//exercise 2
const nameLast = name.substring(28);
console.log(nameLast);

//exercise 3
const nameMiddle = name.substring(14, 21);
console.log(nameMiddle);

//exercise 4
const nameMiddleSpace = name.substring(13, 22);
console.log(nameMiddleSpace);

//exercise 5
const endOfBrian = name.substring(24, 27);
console.log(endOfBrian);

//exercise 6
const endOfAlbus = name.substring(2, 5);
console.log(endOfAlbus);

console.log(`The total number of characters is ${total}`);

const indexTwo = name[2];
console.log(`The character at index two is ${indexTwo}`);

const indexSix = name[6];
console.log(`The character at index six is ${indexSix}`);

// 3.	Find the end of the first name in a full name
const myName = "Marikka Katrina Højen Jørgensen";
const letter = myName[6];

console.log(`The last letter of Marikka is ${letter}`);

//17.	Convert only the first character in a string to CAPITAL, and the rest to non-capital?
// You might need several different methods for this.

const string = "heey, HVAD sååÅÅ så der";

const firstLetter = string.substring(0, 1);
const restOfSentence = string.substring(1);

console.log(firstLetter.toUpperCase() + restOfSentence.toLowerCase());

//18. Convert a german word like “Goethestraße” correctly to “GOETHESTRASSE”

const germanWord = "Goethestraße";

console.log(germanWord.replace("ß", "ss").toUpperCase());

console.log(germanWord.toUpperCase());

//8.	Create a string of a specific number of * (e.g. the same number as the number of characters in another string)

const passw = "johnny123!";
let passwStr = "";

passwStr = passwStr.padEnd(passw.length, "*");

console.log(passwStr);
