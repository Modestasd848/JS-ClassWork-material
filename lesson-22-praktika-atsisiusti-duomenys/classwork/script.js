document.querySelector('#get').addEventListener('click', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const jsonData = await res.json();
  console.log(jsonData);
});

document.querySelector('#post').addEventListener('click', async () => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      body: 'asdfasetbrsh',
      author: 'Marius',
    }),
  };
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    options
  );
  const jsonData = await res.json();

  console.log(jsonData);
});

const table = document.querySelector('table');

const nameInput = document.querySelector('input[name="name"]');
const lastNameInput = document.querySelector('input[name="last-name"]');
const numberInput = document.querySelector('input[name="number"]');
const hasDogInput = document.querySelector('input[name="has-dog"]');

document.querySelector('#get').addEventListener('click', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const jsonData = await res.json();
  const dataObject = JSON.parse(jsonData);
  console.log(dataObject);

  jsonData.forEach((element) => {
    generateTableEntry(element);
  });
});

document.querySelector('#post').addEventListener('click', async () => {
  const name = nameInput.value;
  const lastName = lastNameInput.value;
  const number = numberInput.value;
  const hasDog = hasDogInput.value;

  const body = JSON.stringify({
    name,
    lastName,
    number,
    hasDog,
  });

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };

  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    options
  );
  const dataJson = await res.json();
  console.log(dataJson);
  generateTableEntry(dataJson);
});

function generateTableEntry(entry) {
  const tableRow = document.createElement('tr');

  const nameTd = document.createElement('td');
  nameTd.textContent = entry.name;
  const lastNameTd = document.querySelector('td');
  lastNameTd.textContent = entry.lastName;
  const numberTd = document.querySelector('td');
  numberTd.textContent = entry.number;
  const hasDogTd = document.querySelector('td');
  hasDogTd.textContent = entry.hasDog === 'on' ? 'Has Dog' : 'No Dog';

  tableRow.append(nameTd, lastNameTd, numberTd, hasDogTd);
  table.append(tableRow);
}
