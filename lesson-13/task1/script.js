const checkboxGroup = document.querySelectorAll('input[type="checkbox"]');
const fruitVegetablesSelect = document.querySelector('select');
const body = document.querySelector('body');
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let res = 'You selected';
  for (let i = 0; i < checkboxGroup.length; i++) {
    if (checkboxGroup[i].checked) {
      res += ` ${checkboxGroup[i].value}`;
    }
  }

  res += ` ${fruitVegetablesSelect.value}`;

  const header = document.createElement('h2');
  header.textContent = res;
  body.prepend(header);
});
