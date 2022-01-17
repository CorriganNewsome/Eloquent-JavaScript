//Chapter 3
//Recursion
//Define a recursive function isEven corresponding to this description.
//The function should accept a single parameter(a positive, whole number)and return a Boolean.
//Test it on 50 and 75. See how it behaves on -1. Why. Can you think of a way to fix it?
/*
const isEven = (posNum) => {
  if (posNum % 2) {
    console.log("even");
  } else {
    console.log("odd");
  }
  console.log(posNum(50, 75));
};
//Minimum
//Write a function min that takes two arguements and returns their minimums
const min = (num1, num2) => {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
};
console.log(min(200, 301));

//Chapter 2
//Fizz Buzz
//Print all numbers from 1-100, print fizz for numbers divisible by 3
//and print buzz for numbers divisible by 5(and not 3). Then print FizzBuzz for numbers that are
//divisible by both 3 and 5.
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log("fizz");
  }
  if (i % 5 === 0 && i % 3 !== 0) {
    console.log("buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizBuzz");
  } else {
    console.log(i);
  }
}
//Exercise (for loop)
let book = `0`;

for (let book = `#`; book.length <= 7; book = book + `#`) {
  console.log(book);
}
*/

"use strict";
/*
//LEARNING ARRAYS

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//ADD ELEMENTS FROM AN ARRAY
//.push adds element to the end of the array
//.push(); function also gives back the length of an array without having to calculate the array length after the mutation.
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);
//output
["Michael", "Steven", "Peter", "Jay"];

//.unshift() function adds an element to the beginning of an array.
friends.unshift("John");
console.log(friends);

//REMOVE ELEMENTS FROM AN ARRAY
//.pop() removes the last element of an array. .pop() doesn't return the length of the new array, it returns the removed element.
//.pop() also does not need an argument passed through since it is taking away an element.
const popped = friends.pop();
console.log(friends);
console.log(popped);
//Output
//["John", "Michael", "Steven", "Peter"];
//"Jay"

//.shift() function removes an element from the beginning of an array.
friends.shift(friends);
console.log(friends);

//.indexOf(); finds the index location of an element in an array.
console.log(friends.indexOf("Steven"));

//.includes(); returns true if the element is in the array and false if it is not.
console.log(friends.includes("Steven")); //Returns true
console.log(friends.includes("Bob")); //returns false

if (friends.includes("Peter")) {
  console.log("You have a friend called peter");
}

//LEARNING OBJECTS
//object literal syntax
const corrigan = {
  firstName: "Corrigan",
  lastName: "Newsome",
  age: 28,
  job: "Business Development Consultant",
  friends: ["Logan", "Tyler", "Abe", "James"],
};

//How to add to add elements to an object (dot notation)
corrigan.location = "New Mexico";

//bracket notation
corrigan["twitter"] = "@CorriganNewsome";

console.log(corrigan);

console.log(
  `${corrigan.firstName} has ${corrigan.friends.length} friends, and his best friend is called ${corrigan.friends[1]}`
);

const corrigan = {
  firstName: "Corrigan",
  lastName: "Newsome",
  birthYear: 1993,
  job: "Business Development Consultant",
  friends: ["Logan", "Tyler", "Abe", "James"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  //}

  //USING THE 'THIS' KEYWORD
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  //Challenge
  //Write a method to return the informaiton below
  //Corrigan is a 29 year old Business Development Consultant, and he has a drivers license.
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he ${
      this.hasDriversLicense
        ? `has a drivers license`
        : `does not have a drivers license`
    }`;
  },
};
console.log(corrigan.getSummary());

//LOOPS
//For loops keep running while the condition is true.
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weight rep: ${rep}`);
}

//using loops to loop through an array
const corrigan = [
  "Corrigan",
  "Newsome",
  1993,
  "Business Development Consultant",
  ["Logan", "Tyler", "Abe", "James"],
];

const types = [];
//reading from corrigan array
for (let i = 0; i < corrigan.length; i++) {
  console.log(corrigan[i], typeof corrigan[i]);
  //FILLING TYPES OF ARRAYS
  //using variable to add to an array
  types[i] = typeof corrigan[i];
  //using .push to add to an array
  types.push(typeof corrigan[i]);

  console.log(types);
}
//Another example
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

//LEARNING CONTINUE AND BREAK STATEMENT
//Continue is to exit the current iterations of the loop and continue to the next one.
console.log("only strings");
for (let i = 0; i < corrigan.length; i++) {
  if (typeof corrigan[i] !== "string") {
    continue;
  }
  console.log(corrigan[i], typeof corrigan[i]);
}

console.log("testing breaks");
//Break is used to completely terminate the whole loop.
for (let i = 0; i < corrigan.length; i++) {
  if (typeof corrigan[i] === "number") {
    break;
  }
  console.log(corrigan[i], typeof corrigan[i]);
}

//LOOPS WITHIN LOOPS
//Making a loop that has 3 sets of 5 exercises
// i = sets, and j = exercises
for (let i = 1; i <= 3; i++) {
  console.log(`set #${i}`);
  for (let j = 0; j <= 5; j++) {
    console.log(`exercise #${j}`);
  }
}

//LEARNING WHILE LOOPS
//While loops will run while the condition 'what's in parenthesis' is true
let i = 1;
while (i <= 10) {
  console.log(`Rep #${i}`);
  i++;
}

//While loop is more versatile because it does not need a counter, it only needs a condition.
//Example of a loops that doesn't need a counter
//Rolling a dice
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`you rolled a ${dice}, the loop is about to end`);
  }
}
 */

// Coding Challenge

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
This function calculates the average of all numbers in the given array. 
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. 
  To do the addition, start by creating a variable 'sum' that starts at 0. 
  Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. 
  This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
//Solution
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
