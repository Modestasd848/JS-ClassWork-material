const data = ['Apple', 'Banana', 'Orange', 'Grape', 'Peach', 'Mango'];

const ulElement = document.createElement('ul');

for (let index = 0; index < data.length; index++) {
  const liElement = document.createElement('li');
  liElement.textContent = data[index];

  ulElement.append(liElement);
}

document.querySelector('body').append(ulElement);
