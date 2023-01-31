/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const output = document.querySelector('#output');

fetch(ENDPOINT)
  .then((res) => res.json())
  .then((cars) => {
    let result = '';
    for (const car of cars) {
      let models = '';
      car.models.forEach((model) => (models += `<li>${model}</li>`));

      result += `<div class="card">
            <h2>${car.brand}</h2>
            <ul>
              ${models}
            </ul>
        </div>`;
    }
    output.innerHTML = result;
  });
