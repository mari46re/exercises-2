"use strict";

console.log("Hey, så skal der laves arrays!");

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters[4]);

let newarr = letters;

//Denne erstatter index[4] med en stjerne.
newarr[4] = "*";
console.log(letters);

//Array method: push, pop, slice, splice

const people = ["Harry", "Ron", "Hermione"];
let result;

//Result: 4 people i array
//People: Draco tilføjes til Arrayet
result = people.push("Draco");
//Result: viser Draco som string.
//People: Array uden Draco
result = people.pop();
//Result: 4 people i array
//People: Neville erstatter Draco sidst i array.
result = people.push("Neville");
//Result: 5 people i array
//People: Luna tilføjes sidst array.
result = people.push("Luna");
//Result: Viser de tre første i array.
//People: Viser alle 5 i array
result = people.slice(0, 3);
//Result: Viser tomme []
//People: Cho indskrives i array på index[1]
result = people.splice(1, 0, "Cho");
//Result: Viser tomme []
//People: Ginny erstatter Ron som index[1] i array.
people[1] = "Ginny";
//Result: 8 people i array
//Poeple: Både Fred og George tilføjes sidst i Arrayet
result = people.push("Fred", "George");
//Result: Index for Fred er [6]
//People: 8 people i array
result = people.indexOf("Fred");
//Result: Fred vises alene
//People: Fred er ikke i Arrayete mere
result = people.splice(result, 1);

console.log(result);
console.log(people);
