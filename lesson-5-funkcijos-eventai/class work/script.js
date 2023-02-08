//! Functions

//? function decralaration
// function printMyName() {
//   console.log(`My name is ${myName}`);
// }

// printMyName();

//? function with inner variales

// function printMyName() {
//     const myName = 'Modestas';
//     console.log(`My name is ${myName}`);
//   }

//?function with outer (gloal) variables;

// const myName = 'Modestas';

// function printMyName() {
//   console.log(`My name is ${myName}`);
// }

// printMyName();

//? function with parameters;

// const myName = 'Modestas';

// function printMyName(myFirstName) {
//   console.log(`My name is ${myFirstName}`);
// }

// printMyName(myName);

//? function default parameters;

// const myName = 'Modestas';

// function printMyName(myFirstName = 'Modestas', lastName = 'Dzemida') {
//   console.log(`My name is ${myFirstName} ${lastName}`);
// }

// printMyName(undefined, 'Jonaitis');

//? function return statement;
// function sum(a, b) {
//   return a + b;
// }

// const suma = sum(2, 3);
// console.log(suma);
// console.log(sum(2, 3));

//? function usage example;
function checkAge(age) {
  //   if (age >= 18) {
  //     return true;
  //   } else {
  //     return confirm('Do you have permission from your parents?');
  //   }
  // }
  //   //? variantas su ternary
  //   function checkAge(age) {
  //     age >= 18 ? true : confirm('did parents allow you');
  //   }
  //   //? variants su OR operatorium
  //   return age >= 18 ? true : confirm('did parents allow you');
}

// let age = prompt('How old are you?', 18);

// if (checkAge(age)) {
//   alert('Access granted');
// } else {
//   alert('Access denied');
// }

//? function expression

const printMyName = function () {
  const myName = 'Modestas';
  console.log('My name is ${myName}');
};

printMyName();

//? Arrow function
//!function declaration - regular function
function sum(a, b) {
  return a + b;
}

sum(2, 3);

//!Function expression - arrow function
const sum2 = (a) => a * a;
sum2(2);
