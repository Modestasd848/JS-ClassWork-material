//! Common array methods

const students = [
  {
    id: 1,
    f_name: 'Alex',
    l_name: 'B',
    gender: 'M',
    married: false,
    age: 17,
    paid: 250,
    courses: ['JavaScript', 'React'],
  },
  {
    id: 2,
    f_name: 'Ibrahim',
    l_name: 'M',
    gender: 'M',
    married: true,
    age: 32,
    paid: 150,
    courses: ['JavaScript', 'PWA'],
  },
  {
    id: 3,
    f_name: 'Rubi',
    l_name: 'S',
    gender: 'F',
    married: false,
    age: 27,
    paid: 350,
    courses: ['Blogging', 'React', 'UX'],
  },
  {
    id: 4,
    f_name: 'Zack',
    l_name: 'F',
    gender: 'M',
    married: true,
    age: 36,
    paid: 250,
    courses: ['Git', 'React', 'Branding'],
  },
];

//! forEach
//array.forEach(function(currentValue, index, arr), thisValue)

// students.forEach(function (student, index, array) {
//   console.log(student.f_name, index, array);
// });

//! map
//array.map(function(currentValue, index, arr), thisValue)

const fullNames = students.map(
  (student) => student.f_name + ' ' + student.l_name
);

// console.log(fullNames);

//! includes
// array.includes(element, start)

const includesArray = ['Marijus', 'Petras', 'Jonas'];

// console.log(includesArray.includes("Marijus"));
// console.log(includesArray.includes("Linas"));

//! filter
// array.filter(function(currentValue, index, arr), thisValue)

const maleStudents = students.filter((student) => student.gender === 'M');
// console.log(maleStudents);

//! reduce
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const reduceArray = [1, 3, 9];

const sum = reduceArray.reduce((sum, value) => sum + value, -10);
// console.log(sum);

const balance = students.reduce(
  (accountBalance, student) => accountBalance - student.paid,
  1500
);

// console.log(balance);

//! some
//array.some(function(value, index, arr), this)

const hasUnderagedStudents = students.some((student) => student.age < 18);
// console.log(hasUnderagedStudents);

//! every
//array.every(function(currentValue, index, arr), thisValue)

const hasAllSelected2Courses = students.every(
  (student) => student.courses.length >= 2
);
// console.log(hasAllSelected2Courses);

//! sort
// array.sort(a, b)

const wordsArray = ['javascript', 'css', 'html'];
// console.log(wordsArray.sort());

const numbersArray = [10, 9, 5];

// console.log(numbersArray.sort((a, b) => b - a));

//! Array.from
//Array.from(object, mapFunction, thisValue)
const divs = document.querySelectorAll('div');
// console.log(divs);
// const divContents = divs.map((div) => div.textContent);
// console.log(divContents);
const arrayOfDivs = Array.from(divs);
// console.log(arrayOfDivs);

const divContents = arrayOfDivs.map((div) => div.textContent);
// console.log(divContents);

//! find (findIndex)
//array.find(function(currentValue, index, arr),thisValue)

const secondStudent = students.find((student) => student.id === 2);
// console.log(secondStudent);

//todo Practice

//? Task 1
//Sum up values of two arrays
const numArrayOne = [1, 2, 3, 14];
const numArrayTwo = [2, 8, 15, -5];

const sumOfArrays = [...numArrayOne, ...numArrayTwo].reduce(
  (sum, current) => sum + current
);
console.log(sumOfArrays);

//? Task 1.1 And multiply values by 3

const sumOfArraysMultipliedByThree = [...numArrayOne, ...numArrayTwo]
  .map((number) => number * 3)
  .reduce((sum, current) => sum + current);

console.log(sumOfArraysMultipliedByThree);

//? Task 2
//Sum means of transport
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const meansOfTransport = data.reduce((total, currentValue) => {
  if (total[currentValue]) {
    total[currentValue]++;
  } else {
    total[currentValue] = 1;
  }
  return total;
}, {});

// console.log(meansOfTransport);

//!Task 3
//Sort people alphabetically by first name

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

const sortedNames = people.sort((personA, personB) => {
  const personAName = personA.split(' ')[1];
  const personBName = personB.split(' ')[1];
  return personAName > personBName ? 1 : -1;
});
console.log(sortedNames);
