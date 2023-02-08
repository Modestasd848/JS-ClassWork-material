// const people = [
//   {
//     name: 'Petras',
//     age: '18',
//   },
//   {
//     name: 'Jonas',
//     age: 15,
//   },
//   {
//     name: 'Antanas',
//     age: 20,
//   },
//   {
//     name: 'Urtė',
//     age: 10,
//   },
//   {
//     name: 'Diana',
//     age: 25,
//   },
//   {
//     name: 'Ieva',
//     age: 16,
//   },
// ];

// console.log(
//   people
//     .filter((x) => x.age >= 18)
//     .map((people) => people.name)
//     .sort()
// );

// const item = [
//   {
//     name: 'Megztinis',
//     price: 25,
//   },
//   {
//     name: 'Kailiniai',
//     price: 190,
//   },
//   {
//     name: 'Batai',
//     price: 80,
//   },
// ];

// function fn(items) {
//   items.sort((a, b) => a.price < b.price);
//   return {
//     pigiausias: items[0].name,
//     brangiausias: items[items.length - 2].name,
//   };
// }

// console.log(fn(item));

// console.log(2 === 2);
// true;
// console.log(2 === 2);
// true;
// console.log(2 !== 2);
// false;
// console.log(5 < 5);
// false;
// console.log(5 >= 4);
// true;
// console.log(true !== false);
// true;
// console.log(9 - 5 === 4);
// true;
// console.log(5 * 5 !== '25');
// false;----
// console.log(true && true);
// true;
// console.log(2 === 5 && true);
// false;
// console.log(6 * 6 === 36 && 15 - 9 == '6');
// true;
// console.log(false || false);
// false;
// console.log(10 === 10 || 5 == 2);
// false;
// console.log((2 * 2) / 2 == '1' || 5 * 5 === 25);
// true;
// console.log(14 * 2 !== '28' || 'Jonas' == 'Jonas');
// true;
// console.log(10 && 15 > 10);
// true;
// alert(!!'Petras' || 'Jonas') && (22 * 5 || 15 - 1 === 13);
// true;
// alert(!!'jonas' === 'Jonas');
// false;
// alert(!!'Petras' + 5 === 'Petras' + '5');
// false;
// alert(!!'Jonas' + 5 + 5 === 'Jonas10');
// false;
// alert(!!5 + 10 + 'Antanas' === '15Antanas');
// false;
// alert(!!2 + 1 + 'Jonas' + 3 + 2 === '3Jonas5');
// false;
// alert(!!10 % 1 === 1);
// false;
// alert(!!5 * '5' === 25);
// false;

//! If else
//? Task 1
// const legalAge = 20;
// const clientAge = 2;

// if (clientAge < legalAge) {
//   alert('nepasiekes legalaus amžiaus');
// } else if ((clientAge) => legalAge) {
//   alert('pasiekes legalu amžiu');
// }

//? Task 2
// const myName = 'Modestas';
// const nameLength = 6;
// if (myName.length >= nameLength) {
//   alert('Long Name');
// } else;

//? Task 3
// const car = 'Audi';

// if (
//   car === 'VW' ||
//   car === 'Audi' ||
//   car === 'Bentley' ||
//   car === 'Buggati' ||
//   car === 'Lamborghini' ||
//   car === 'Porsche'
// ) {
//   console.log('VW Group');
// } else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
//   console.log('BMW Group');
// }

//! salygos ir ciklai
//? Task-1

// const car = 'Audi';

// switch (car) {
//   case 'VW':
//   case 'Audi':
//   case 'Bentley':
//   case 'Bugatti':
//   case 'Lamborghini':
//   case 'Porsche':
//     console.log('VW Group');
//     break;
//   case 'BMW':
//   case 'Mini':
//   case 'Rolls-Royce':
//     console.log('BMW Group');
//     break;
//   default:
//     console.log('nerandu tokios markės');
// }

//? Task-2

// const userInput = 'Morka';

// switch (userInput) {
//   case 'Bananas':
//   case 'Obuolys':
//   case 'Kriause':
//   case 'Vysnia':
//   case 'Slyva':
//     console.log('Vaisius');
//     break;
//   case 'Svogunas':
//   case 'Morka':
//   case 'Kopustas':
//   case 'Brokolis':
//   case 'Petrazole':
//     console.log('Darzove');
//     break;
//   default:
//     console.log('Neatpazinta');
// }

//? Task-3

// let weekDay = new Date().getDay();
// switch (weekDay) {
//   case 0:
//     weekDay = 'Sekmadienis';
//     break;
//   case 1:
//     weekDay = 'Pirmadienis';
//     break;
//   case 2:
//     weekDay = 'Antradienis';
//     break;
//   case 3:
//     weekDay = 'Trečiadienis';
//     break;
//   case 4:
//     weekDay = 'Ketvirtadienis';
//     break;
//   case 5:
//     weekDay = 'Penktadienis';
//     break;
//   case 6:
//     weekDay = 'Šeštadienis';
//     break;
// }
// console.log(weekDay);

//! Ternary Operatorius
//? Task-1
