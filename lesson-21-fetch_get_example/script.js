//! Fetch GET examples

//? 1. get github users

// const url = 'https:api.github.com/users';
// const body = document.querySelector('body');

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const list = document.createElement('ul');
//     data.forEach((user) => {
//       const userListItem = document.createElement('li');
//       userListItem.textContent = user.login;
//       list.append(userListItem);
//     });
//     body.append(list);
//   })
//   .catch((error) => {
//     const errorMessage = document.createElement('h1');
//     errorMessage.textContent = 'Error catched: ' + error;
//     body.append(errorMessage);
//   })
//   .finally(() => console.log('fetch finished'));

//? 2 get bunch picsum photos

// const urlPicsum = 'https://picsum.photos/v2/list';

// const getBunchPhotos = async () => {
//   try {
//     const response = await fetch(urlPicsum);
//     const data = await response.json();
//     body.style.display = 'flex';
//     body.style.flexWrap = 'wrap';
//     data.forEach((imageData) => {
//       const image = document.createElement('img');
//       image.setAttribute('src', imageData.download_url);
//       image.setAttribute('width', '200px');
//       body.append(image);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// document.querySelector('button').addEventListener('click', getBunchPhotos);

//? 3 get specific page with GET parmater

// const urlPicsum = 'https://picsum.photos/v2/list';

// const getBunchPhotos = async (pageNumber) => {
//   try {
//     const response = await fetch(urlPicsum + '?page=' + pageNumber);
//     const data = await response.json();
//     body.style.display = 'flex';
//     body.style.flexWrap = 'wrap';
//     data.forEach((imageData) => {
//       const image = document.createElement('img');
//       image.setAttribute('src', imageData.download_url);
//       image.setAttribute('width', '200px');
//       body.append(image);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// getBunchPhotos(10);

//todo Task 3 from previous lecture
// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.25) {
//     resolve('Good');
//   } else {
//     reject('Bad');
//   }
// });

// const getMathValue = async () => {
//   try {
//     console.log(await promise);
//   } catch (err) {
//     console.log('Rejected with message ' + err);
//   }
// };

// getMathValue();
