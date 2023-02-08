// const userNumberInput = document.querySelector('input');
// userNumberInput.addEventListener('input', checkIfNumberIsBetween);

// const paragraph = document.querySelector('p');

// function checkIfNumberIsBetween() {
//   const userNumber = userNumberInput.value;
//   console.log(userNumber);
//   if (userNumber >= 50 && userNumber <= 99) {
//     paragraph.textContent = userNumber + ' is in a range of 50 and 99';
//   } else {
//     paragraph.textContent = userNumber + ' is not in a range of 50 and 99';
//   }
// }

// const height = 5;

// function drawl(n) {
//   let firstLine = '';
//   for (let j = 0; j < n; j++) {
//     firstLine += 'C';
//   }
//   console.log(firstLine);
//   for (let i = 2; i < n; i++) {
//     console.log('C');
//     if (i === n - 1) {
//       let lastLine = '';
//       for (let j = 0; j < n; j++) {
//         lastLine += 'C';
//       }
//       console.log(lastLine);
//     }
//   }
// }

// drawl(height);

function addNameToList(event) {
  const name = event.target.value.trim();
  const outputElement = document.getElementById('output');
  if (name) {
    outputElement.innerText += `${name}, `;
  }
}

document.getElementById('name').addEventListener('blur', addNameToList);
