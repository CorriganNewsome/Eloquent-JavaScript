//Chapter 2 Fizz Buzz
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
/*
//Chapter 2 Exercise (for loop)
let book = `0`;

for (let book = `#`; book.length <= 7; book = book + `#`) {
  console.log(book);
}
*/
