// Task: Write a function called maxDifference that takes in an array of numbers and returns the maximum difference between any two elements in the array. The difference between two elements is the absolute value of their difference.
// For example, the maximum difference between the elements in the array [1, 2, 3, 4] is 3, because 4 - 1 = 3. The maximum difference between the elements in the array [4, 2, 1, 3] is 3 as well, because 4 - 1 = 3.

const arr = [1, 3, 2, 4, 8, 9];

function maxDifference(numbers) {
  const sorted = numbers.sort((a, b) => b - a);
  return sorted[0] - sorted[sorted.length - 1];
}

// console.log(maxDifference(arr));

// Task: Write a function called longestWord that takes in an array of strings and returns the longest string in the array.
// For example, the following input array:
// ['cat', 'dog', 'fish', 'zebra', 'elephant']

//! Task 2
const animals = ['cat', 'dog', 'fish', 'zebra', 'elephant'];

function longestWord(words) {
  return words.reduce((longest, current) => {
    if (!longest) {
      return current;
    }
    if (longest.length < current.length) {
      return current;
    }
  });
}

// console.log(longestWord(animals));

//! Task 3
// Task: Write a function called evenNumbers that takes in an array of numbers and returns a new array containing only the even numbers from the input array.
// For example, the following input array:
// [1, 2, 3, 4, 5]

const numbers = [1, 2, 3, 4, 5];

function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
// console.log(evenNumbers(numbers));

//! Task 4
// Use the foreach method to calculate the sum of the following array of numbers:

let numbers1 = [1, 2, 3, 4, 5];
let sum = 0;
numbers1.forEach((x) => {
  sum += x;
});

// console.log(sum);

//! Task 5
// Use the find method to find the first element in the following array that is a multiple of 4:

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const number = numbers2.find((number) => number % 4 === 0);
// console.log(number);

//! Task 6
// Use the map method to create a new array that contains the square of each number in the following array:

let numbers3 = [1, 2, 3, 4, 5];

const squaredNumbers = numbers3.map((num) => {
  return num * num;
});

// console.log(squaredNumbers);

//! Task 7

// Use the sort method to sort the following array of objects by their age property in ascending order:

let people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 },
  { name: 'Alice', age: 20 },
];

// console.log(people.sort((a, b) => a.age - b.age));

//! Task 8
// Use the reduce method to calculate the average age of the following array of objects:

let people1 = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 },
  { name: 'Alice', age: 20 },
];

const sum1 = people1.reduce((acc, person) => {
  return acc + person.age;
}, 0);

const avg = sum1 / people1.length;

// console.log(avg);

//! Task 9
// Use the filter method to create a new array that contains only the objects in the following array that have a score property greater than or equal to 70:

let students = [
  { name: 'John', score: 75 },
  { name: 'Jane', score: 65 },
  { name: 'Bob', score: 85 },
  { name: 'Alice', score: 50 },
  { name: 'Mike', score: 90 },
];

const bestStudents = students.filter((student) => student.score >= 70);

// console.log(bestStudents);

//! Task 10

// Use the find method to find the first object in the following array that has a name property with the value "John":

let people2 = [
  { name: 'Jane', age: 21 },
  { name: 'John', age: 30 },
  { name: 'Mary', age: 25 },
];

const firstJohn = people2.find(
  (person) => person.name.toLowerCase() === 'John'
);

// if (firstJohn) {
//   console.log(firstJohn);
// } else {
//   console.log('there is no John found');
// }

//! Task 11

// Use the map method to create a new array that contains the full names of the following people:

let people3 = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Jones' },
];

const fullNames = people3.map((person) => {
  return person.firstName + ' ' + person.lastName;
});

// console.log(fullNames);

//! Task 13
// Write a function called sortByLength that takes in an array of strings and returns a new array containing the same strings, sorted by length in ascending order.

const animals1 = ['cat', 'dog', 'fish', 'zebra', 'elephant'];
const sortedAnimals = animals.sort((a, b) => a.length - b.length);
// console.log(sortedAnimals);

//! Task 14

// Write a function called sumOfOddNumbers that takes in an array of numbers and returns the sum of all odd numbers in the array.
// For example, the following input array:

const numbers4 = [1, 2, 3, 4, 5];

function sumOfOddNumbers(num) {
  return num.reduce((acc, x) => {
    if (x % 2 !== 0) {
      return acc + x;
    } else {
      return acc;
    }
  });
}

// console.log(sumOfOddNumbers(numbers4));

//! Task 15

// Write a function called positiveNumbers that takes in an array of numbers and returns a new array containing only the positive numbers from the input array.
// For example, the following input array:

let array = [1, -2, 3, -4, 5];
function positiveNumbers(arr) {
  return arr.fiter((number) => number > 0);
}

// console.log(positiveNumbers);

//! Task 16

// Use the find method to find the first object in the following array of arrays that has a name property with the value "John":

let groups = [
  [
    { name: 'Jane', age: 21 },
    { name: 'John', age: 30 },
  ],
  [
    { name: 'Bob', age: 25 },
    { name: 'Mary', age: 35 },
  ],
  [
    { name: 'Alice', age: 40 },
    { name: 'Mike', age: 45 },
  ],
];

const john = groups.find((group) => {
  return group.find((person) => person.name === 'John');
});

// console.log(john);
