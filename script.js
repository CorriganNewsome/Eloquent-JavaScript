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

// const restaurant = {
//   restaurantName: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelievered: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
//     );
//   },
// };
// restaurant.orderDelievered({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   starterIndex: 2,
//   mainIndex: 2,
// });
// //Destructuring objects
// const { restaurantName, openingHours, categories } = restaurant;
// console.log(restaurantName, openingHours, categories);
// //Renaming variables in an object
// const {
//   restaurantName: newName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(tags);
// //Setting a default value (helpful when data is not hard coded/3rd party data)
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// //How to destructure an array
// let [main, , secondary] = restaurant.categories;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// //How to destructure an array within an array
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//Spread Operator
const restaurant = {
  restaurantName: "Classico Italiano",
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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelievered: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
    );
  },
  orderPasta: (ing1, ing2, ing3) => {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
//spread operator example
const newMenu = [...restaurant.mainMenu, "Gonocci"];
console.log(newMenu);
//Creates a shallow copy of the mainMenu array in the restaurant object
const mainMenuCopy = [...restaurant.mainMenu];

//Joining arrays together
//spread operator takes all of the elements in the array and creates a new array.
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = "Jonas";
const letters = [...str, " ", "s"];
console.log(letters);

//Can only use the spread operator when building arrays or passing values into a function
console.log(...str);

//real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingrident 1?"),
//   prompt(`Ingrident 2?`),
//   prompt(`Ingrident 3?`),
//];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects(spread operator)
const newRestaurant = { ...restaurant, founder: "Guiseppe", foundedIn: 1998 };

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";

console.log(restaurantCopy.name);
console.log(restaurant.restaurantName);
