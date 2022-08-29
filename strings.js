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

// console.log(`The total number of characters is ${total}`);

// const indexTwo = name[2];
// console.log(`The character at index two is ${indexTwo}`);

// const indexSix = name[6];
// console.log(`The character at index six is ${indexSix}`);
