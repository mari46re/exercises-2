"use strict";

const name = "Peter Heronimous Lind";

// const firstName = name.substring(0, 5);
// console.log(firstName);

// const middleName = name.substring(6, 17);
// console.log(middleName);

// const lastName = name.substring(17);
// console.log(lastName);

// function getNameParts(fullname) {
//   return (fullname = {
//     firstName: name.substring(0, 5),
//     middleName: name.substring(6, 17),
//     lastName: name.substring(17),
//   });
// }

// const result = getNameParts();
// console.log(result);

function fullname(lastName, firstName, middleName) {
  return `My fullname is ${firstName} ${middleName} ${lastName}`;
}

let result = fullname("Højen", "Marikka", "Katrina");
console.log(result);

//   console.log(fullname);
// }

// const names = name.split(" ");

// const firstName = names[0];
// console.log(firstName);

// const middleName = names[1];
// console.log(middleName);

// const lastName = names[2];
// console.log(lastName);

// fullname("Potter", "Harry", "James");
// console.log(lastName, firstName, middleName);

// function fullname(lastName, firstName, middleName) {}
