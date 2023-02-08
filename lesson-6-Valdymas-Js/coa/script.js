// const form = document.querySelector('form');
// form.addEventListener('submit', handleFormSubmit);

// function handleFormSubmit(e) {
//   e.preventDefault();
//   console.dir(e);
// }

//! task-2

// const container = document.querySelector('button');
// container.addEventListener('click', () =>
//   alert(document.querySelector('input[type=text]').value)
// );

//! task-3
// document.querySelector('form').addEventListener('submit', ageResult);

// function ageResult(event) {
//   event.preventDefault();
//   const result = document.querySelector('input[name=age]').value;

//   document.querySelector('h1').textContent = result;
// }

const ageInput = document.getElementById('age');
const form = document.querySelector('form');
const priceDisplay = document.getElementById('kaina');

function handleFormSubmit(event) {
  event.preventDefault();
  const price = 6;
  const age = Number(ageInput.value);

  if (age >= 60) {
    priceDisplay.textContent = ((1 / 3) * price).toFixed(2);
  } else if (age <= 16) {
    priceDisplay.textContent = (0.5 * price).toFixed(2);
  } else {
    priceDisplay.textContent = price.toFixed(2);
  }
}

form.addEventListener('submit', handleFormSubmit);
