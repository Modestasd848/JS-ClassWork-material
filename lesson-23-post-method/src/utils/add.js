import { makePostRequest } from './requests.js';

const ENDPOINT_URL = 'https://olive-bead-glazer.glitch.me';

const body = document.querySelector('body');
const brandInput = document.querySelector('input[name="brand"]');
const modelInput = document.querySelector('input[name="model"]');

document.querySelector('button').addEventListener('click', async () => {
  const brand = brandInput.value;
  const model = modelInput.value;

  const carObject = {
    brand,
    model,
  };

  const res = await makePostRequest(ENDPOINT_URL, carObject);

  if (res.msg === 'Duomenys irasyti') {
    showSuccessMessage();
  } else {
    throw new Error('FAILED');
  }
});

function showSuccessMessage() {
  const pTag = document.createElement('p');
  pTag.textContent = 'Successfully added car';

  body.append(pTag);

  setTimeout(() => {
    body.removeChild(pTag);
  }, 5000);
}
