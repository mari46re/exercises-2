"use strict";

//Objekt med properties/metoder
let person1 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

//Denne consol.log virker ikke, da lastName ikke er defineret endnu
console.log(person1.lastName);

//lastName defineres
person1.lastName = "Tolstrup";

console.log(person1.lastName);

//Her consol.log'er jeg alt indholdet fra objektet, og lastName er tilføjet
console.log(person1);

//
person1.lastName = undefined;

console.log(person1.lastName);
console.log(person1);

console.log(person1.middleName);
console.log(person1);

//lastName er gone 4 good
delete person1.lastName;
console.log(person1.lastName);
console.log(person1);

//modified

const person2 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

console.log(person2);

//person2 bliver 1 år ældre
person2.age++;
console.log(person2);

const person3 = {
  firstName: "bob",
  age: 34,
  student: true,
};

// person2 = person3;

const person4 = person3;

person4.firstName = "Bjarke";

console.log(person3.firstName);
