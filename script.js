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

// const calcAge = function (birthYear) {};
// calcAge(1993);

// const calcAgeArrow = (birthYear) => {};
// calcAge(1993);

// const corrigan = {
//   year: 1993,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// corrigan.calcAge();
// //the this keyword always points to the object calling the method
// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = corrigan.calcAge;
// matilda.calcAge();

//REGULAR FUNCTIONS VS. ARROW FUNCTIONS

/*
const corrigan = {
  firstName: "Corrigan",
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

corrigan.greet();
corrigan.calcAge();
*/
// //Primitive Types
// let age = 28;
// let oldAge = age;
// age = 29;
// // console.log(age);
// // console.log(oldAge);

// const me = {
//   name: "Corrigan",
//   age: 29,
// };
// //Reference Types
// const friend = me;
// friend.age = 27;
// // console.log("Friend", friend.age);
// // console.log("me", me.age);

//PRIMITIVES VS. OBJECTS IN PRACTICE
// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";

// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// // console.log(`Before Marriage`, jessica);
// // console.log("After Marriage", marriedJessica);

// marriedJessica;

//Copying Objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"], //deeply assigned
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log(`Before Marriage`, jessica2);
console.log("After Marriage", jessicaCopy);

//Deep Clone
//Typically uses libraries to achieve this.
