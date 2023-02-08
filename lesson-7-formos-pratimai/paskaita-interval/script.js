//! simple setInterval example
// const intervalId = setInterval(logHello, 2000);
// let intervalCounter = 0;

// function logHello() {
//   console.log('hello interval');
//   intervalCounter++;
//   console.log(intervalCounter);
//   if (intervalCounter >= 5) {
//     clearInterval(intervalId);
//   }
// }

//! simple setTimeout example
// console.time('setTimeout timer');

// const logHelloWithTimeout = (firstName, lastName) => {
//   console.log(`My name is ${firstName} and last name is ${lastName}`);
//   console.timeEnd('setTimeout timer');
// };

// const timeoutOd = setTimeout(logHelloWithTimeout, 5000, 'Modestas', 'Dzemida');

//! simple carousel example
const images = [
  'https://images.unsplash.com/photo-1650873797988-abf1338073ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1650872553203-9a2b541245d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1650751557709-06a218d96bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
];
let imageIndex = 0;

const imageElement = document.querySelector('img');
imageElement.src = images[imageIndex];

const intervalID = setInterval(changeImage, 1500);

function changeImage() {
  imageIndex++;

  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  imageElement.src = images[imageIndex];
}

setTimeout(stopCarousel, 5000);

function stopCarousel() {
  clearInterval(intervalID);
  imageElement.src = images[0];
}
