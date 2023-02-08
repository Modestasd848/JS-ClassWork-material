//! how add element to html
// const par = document.createElement('p');
// par.textContent = 'Mano sukurtas paragrafas';
// console.log(par);

// const div = document.querySelector('div');
// console.log(div);

// div.append(par);

// const par = document.createElement('p');
// par.textContent = 'Mano sukurtas paragrafas';
// console.log(par);

// const div = document.querySelector('div');
// console.log(div);

// div.append(par);

// par.setAttribute('id', 'manoId');

// const atribute = par.getAttribute('id');
// console.log(atribute);

//? task1

// const main = document.querySelector('main');

// const header = document.createElement('h2');
// header.textContent = 'this is my h2 tag';

// const pTag = document.createElement('p');
// pTag.textContent = 'This is my P tag';

// const ulTag = document.createElement('ul');
// const liTag = document.createElement('li');
// liTag.textContent = 'This is Li tag';
// ulTag.append(liTag);

// const pTag2 = document.createElement('p');
// pTag2.textContent = 'This is second P tag';

// main.append(header, pTag, ulTag, pTag2);

// const h1Tag = document.createElement('h1');
// h1Tag.textContent = 'This was added to the front of main tag';

// main.prepend(h1Tag);

//? task2
const mainTag = document.querySelector('main');

const cityList = document.createElement('ul');

const cityListItem1 = document.createElement('li');
cityListItem1.textContent = 'Vilnius';
const cityListItem2 = document.createElement('li');
cityListItem2.textContent = 'Kaunas';
const cityListItem3 = document.createElement('li');
cityListItem3.textContent = 'Klaipėda';

cityList.append(cityListItem1, cityListItem2, cityListItem3);

const cityInput = document.createElement('input');
cityInput.type = 'text';
cityInput.addEventListener('keypress', (e) => {
  //   const warningText = document.querySelector('p');
  //   if (warningText) {
  //     warningText.remove();
  //   }

  if (e.key === 'Enter') {
    const inputValue = e.target.value;
    if (checkIfCityArleadyExists(inputValue)) {
      if (!document.querySelector('p')) {
        const cityAlreadyExsistWaring = document.createElement('p');
        cityAlreadyExsistWaring.textContent = 'City already exists';
        mainTag.append(cityAlreadyExsistWaring);
        setTimeout(() => {
          cityAlreadyExsistWaring.remove();
        }, 1500);
      }
    } else {
      const newCityLiElement = document.createElement('li');
      newCityLiElement.textContent = inputValue;
      cityList.append(newCityLiElement);
    }
    e.target.value = '';
  }
});

function checkIfCityArleadyExists(inputValue) {
  const allCities = document.querySelectorAll('li');
  for (let i = 0; i < allCities.length; i++) {
    if (inputValue.toLowerCase() === allCities[i].textContent.toLowerCase()) {
      return true;
    }
  }
  return false;
}

mainTag.append(cityList, cityInput);
