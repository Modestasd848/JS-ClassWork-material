document.querySelector('#get').addEventListener('click', async () => {
  const res = await fetch('https://olive-bead-glazer.glitch.me');
  const jsonData = await res.json();
  console.log(jsonData);
});
const brand = document.querySelector('tr');
const model = document.querySelector('tr');

document.querySelector('#get').addEventListener('click', async () => {
  const res = await fetch('https://olive-bead-glazer.glitch.me');
  const jsonData = await res.json();
  const dataObject = JSON.parse(jsonData);
  console.log(dataObject);

  jsonData.forEach((element) => {
    generateTableEntry(element);
  });
});

function generateTableEntry(entry) {
  const brand1 = document.createElement('td');
  brand.textContent = entry.brand;
  const model1 = document.createElement('td');
  model.textContent = entry.model;

  brand.append(brand1);
  model.append(model1);
}
