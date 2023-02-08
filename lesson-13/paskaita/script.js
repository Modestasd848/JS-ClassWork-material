const nameInput = document.querySelector('input[name="name"]');
const ageInput = document.querySelector('input[name="age"]');
const emailInput = document.querySelector('input[name="email"]');
const colorInput = document.querySelector('input[name="color"]');

const carSelect = document.querySelector('select');

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();
  console.log(nameInput.value);
  console.log(ageInput.value);
  console.log(emailInput.value);
  console.log(colorInput[0].value);
  console.log(carSelect.selectedIndex);
});
