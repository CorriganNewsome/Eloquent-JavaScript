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
// const jessica2 = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
//   family: ["Alice", "Bob"], //deeply assigned
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Davis";
// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");
// console.log(`Before Marriage`, jessica2);
// console.log("After Marriage", jessicaCopy);

//Deep Clone
//Typically uses libraries to achieve this.

//Array Destructuring

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//How to destructure an array
let [main, , secondary] = restaurant.categories;

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//How to destructure an array within an array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
