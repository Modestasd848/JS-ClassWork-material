//? Task-2

class Movie {
  constructor(name, year, director, budget, income) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.budget = budget;
    this.income = income;
  }
  getIntroduction() {
    return `${this.name} was created by ${this.director} on ${this.year}`;
  }
  getProfit() {
    return `The movie profit was ` + (this.budget - this.income);
  }
}

const movie1 = new Movie(
  'Avengers: Infinity War',
  2018,
  'Anthony Russo',
  316000000,
  2000000000
);
const movie2 = new Movie(
  'Avengers: Endgame',
  2019,
  'Joe Russo',
  356000000,
  2800000000
);

// console.log(movie1);
// console.log(movie1.getIntroduction());
// console.log(movie1.getProfit());
// console.log(movie2);
// console.log(movie2.getIntroduction());
// console.log(movie2.getProfit());

//? Task-2
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit exentds Animal{
//   constructor(name) {
//     this.name = name;
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit('White Rabbit');

//? Task-3

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getIntroduction() {
    return `${this.make} make ${this.model}`;
  }
  getAge() {
    return new Date().getFullYear() - this.year <= 10
      ? `10 metu arba naujesnis`
      : `11 metu arba senesnis`;
  }
}

const car1 = new Car('BMW', 'X6', 2008);
const car2 = new Car('Audi', 'A8-D5', 2017);

// console.log(car1.getIntroduction());
// console.log(car1.getAge());
// console.log(car2.getIntroduction());
// console.log(car2.getAge());

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.addToTable = function () {
    const nameColumn = document.createElement('td');
    nameColumn.textContent = this.name;
    const surnameColumn = document.createElement('td');
    surnameColumn.textContent = this.surname;
    const tr = document.createElement('tr');
    tr.append(nameColumn, surnameColumn);
    document.querySelector('table > tbody').append(tr);
  };
}

const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const fullname = document.getElementById('fullname').value;
  const [name, surname] = fullname
    .split(' ')
    .map((namePart) => capitalize(namePart.trim()));

  const person = new Person(name, surname);
  person.addToTable();
});
