"use strict";

const name = "Peter Heronimous Lind";

// const firstName = name.substring(0, 5);
// console.log(firstName);

// const middleName = name.substring(6, 17);
// console.log(middleName);

// const lastName = name.substring(17);
// console.log(lastName);

getNameParts();

function getNameParts(fullname) {
  fullname = {
    firstName: name.substring(0, 5),
    middleName: name.substring(6, 17),
    lastName: name.substring(17),
  };

  //   middleName = null;
  console.log(fullname);
  //   console.log({ firstName, middleName, lastName });
}

// const names = name.split(" ");

// const firstName = names[0];
// console.log(firstName);

// const middleName = names[1];
// console.log(middleName);

// const lastName = names[2];
// console.log(lastName);
