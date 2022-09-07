"use strict";

// let theNumber = 2;

// function multiplyBySelf(number) {
//   return number * number;
// }

// theNumber = multiplyBySelf(42);

//Logger resultatet af 42 * 42, dvs 1764
// console.log(theNumber);

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const result = greeting("Marikka");

// console.log("Result: ", result);

// greeting("any name");

// console.log(greeting("any name"));

// greeting();

// console.log(greeting());

function moreReturns() {
  const a = 23;
  const b = "Hi";
  const c = true;

  /* THIS DOESN'T WORKS, because you can't return multiply values*/
  //   return a, b, c;

  /* THIS WORKS*/
  //   return `${a}, ${b}, ${c}`;

  /* THIS IS THE BEST WAY. PUT IT IN AN OBJECT*/
  return { a, b, c };
}

console.log("Test: ", moreReturns());

function returnHuman() {
  /*MATH.FLOOR LAVER HELE TAL*/
  const age = Math.floor(Math.random() * 100);
  const salute = "Hi";
  const isHuman = true;

  /* THIS IS THE BEST WAY. PUT IT IN AN OBJECT*/
  return { age, salute, isHuman };
}

console.log("Test human: ", returnHuman());

const realHuman = returnHuman();
console.log("Test real human: ", realHuman);
console.log("Age of real human: ", realHuman.age);

const realHumanAge = returnHuman().age;
console.log("Real human age: ", realHumanAge);
