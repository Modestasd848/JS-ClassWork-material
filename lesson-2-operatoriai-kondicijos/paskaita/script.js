// type conversions
// to number
// const age = prompt("Enter age");
// console.log(typeof age);

// const ageAsNumber = Number(age);
// console.log(typeof ageAsNumber);

console.log(Number("a"));

console.log(parseFloat("2.22"));
console.log(parseFloat("2.22asdawdaw"));
console.log(parseFloat("asfgwea2.22"));

console.log(parseInt("2.22"));
console.log(parseInt(true));

// const age = +prompt("Enter age");

// // const ageAsNumber = +age;
// console.log(typeof age);

// to String
const temperature = 5;
console.log(typeof temperature);
console.log(typeof String(temperature));
// console.log(typeof temperature.toString);

// Numbers and strings from Booleans
console.log(String(true));
console.log(typeof Number(true));

console.log("3" + 4);

console.log("Modestas" + "Dzemida");
const lastName = "Dzemida";
console.log("Modestas $(lastName)");

// Operators

const a = 5;

let b = 2;
b += 5;
console.log(b);

// comparison operators

console.log(1 == "1");
console.log(1 === "1");
console.log(1 !== "1");
console.log(1 > 2);
console.log(1 >= "1");

// increment/decrement operators

let number = 1;
// number++;
// console.log(number);
number--;
console.log(number);

// logical operators

console.log(true && true && true);
console.log(!true);
