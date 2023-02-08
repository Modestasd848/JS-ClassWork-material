// document.querySelector('button').addEventListener('click', () => {});
// const now = new Date();
// const later = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7);
// document.cookie = `name=Modestas;expires=${later.toUTCString()}`;
// console.log(document.cookie);

// document.querySelector('button').addEventListener('click', () => {});
// const now = new Date();
// const later = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7);
// document.cookie = `name=Modestas;expires=${now.toUTCString()}`;
// console.log(document.cookie);
// localStorage.setItem(
//   'logged-in',
//   JSON.stringify({
//     value: true,
//     expirationDate: later,
//   })
// );

// console.log(JSON.parse(localStorage.getItem('logged-in')));

const loggedInJSON = localStorage.getItem('logged-in');

const loggedInObj = JSON.parse(loggedInJSON);
console.log(loggedInObj);
if (loggedInObj) {
  if (loggedInObj.expires > Date.now()) {
    setTimeout(() => {
      window.location.replace('https://www.google.com/');
    }, 5000);
  } else {
    console.log('expired');
  }
}

const nameInput = document.querySelector('#name-input');
const passwordInput = document.querySelector('#password-input');

document.querySelector('button').addEventListener('click', () => {
  const name = nameInput.value;
  const password = passwordInput.value;
  // siunciu uzklausa
  // viskas ok gali prisijungti
  const now = new Date();
  const expires = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7);
  localStorage.setItem(
    'logged-in',
    JSON.stringify({
      expires: expires.getTime(),
      value: true,
    })
  );
});
