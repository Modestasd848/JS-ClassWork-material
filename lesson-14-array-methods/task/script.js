//todo Practice

//? Task 1
//Sum up valuse of two arrays
const numArrayOne = [1, 2, 3, 14];
const numArrayTwo = [2, 8, 15, -5];

const suOfArrays = [...numArrayOne, ...numArrayTwo].reduce(
  (sum, current) => sum + current
);
console.log(suOfArrays);

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

console.log(meansOfTransport);

//? Task 3
//Sort people by
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
  const personAName = personA.split('')[1];
  const personBName = personB.split('')[1];
  return personAName > personBName ? 1 : -1;
});
console.log(sortedNames);
