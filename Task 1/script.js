/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector('form');
const input = document.querySelector('#search');
const output = document.querySelector('#output');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const weightInKg = input.value;
  const weightInLb = weightInKg * 2.2046;
  const weightInG = weightInKg / 0.001;
  const weightInOz = weightInKg * 35.274;

  output.innerHTML = `
    <p>${weightInKg} kilograms is equal to:</p>
    <p>${weightInLb} pounds</p>
    <p>${weightInG} grams</p>
    <p>${weightInOz} ounces</p>
  `;
});
