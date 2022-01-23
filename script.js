"use strict";
"use strict";
//SCOPING IN PRACTICE
// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//     //block scope
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }
//     //Can't find because it's outside of the block scope.
//     //console.log(str);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Corrigan';
// calcAge(1993);

//HOISTING AND TDZ IN PRACTICE

// var me = 'corrigan';
// let job = 'teacher';
// const year = 1991;

//The THIS keyword

const calcAge = function (birthYear) {};
calcAge(1993);

const calcAgeArrow = (birthYear) => {};
calcAge(1993);

const corrigan = {
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
corrigan.calcAge();
//the this keyword always points to the object calling the method
const matilda = {
  year: 2017,
};

matilda.calcAge = corrigan.calcAge;
matilda.calcAge();
