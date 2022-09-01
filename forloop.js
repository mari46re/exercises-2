"use strict";

for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}

//Denne log virker ikke, da counter ikke er defineret
//udenfor overstående loop
//I stedet kunne man definere counter udenfor loop, og så virker det.
//OBS: Skal således ikke defineres inde i loop. Altså let skal fjernes
// console.log(`after the loop, counter is ${counter}`);

let counter;

//Tælle fra 1 - 10
for (counter = 1; counter < 11; counter++) {
  console.log(counter);
}

//Tælle fra 10 - 0
for (counter = 10; counter > 0; counter--) {
  console.log(counter);
  if (counter === 0) {
    console.log("Lift off!");
  }
}

console.log("liftoff");

//Tælle fra 1 - 19, men kun ulige numre
for (counter = 1; counter < 20; counter++) {
  console.log(counter++);
}

//Tælle fra 1 - 1677216, men doble hver gang
for (counter = 1; counter < 1677216; counter *= 2) {
  console.log(counter);
}

//Tælle fra 111 til 138 med plus tre
for (counter = 111; counter < 138; counter += 3) {
  console.log(counter);
}

//Tælle fra 100 til 0 af 10 skridt
for (counter = 100; counter > 0; counter -= 10) {
  console.log(counter);
}

//counter = counter - 10 er det samme som counter -= 10
