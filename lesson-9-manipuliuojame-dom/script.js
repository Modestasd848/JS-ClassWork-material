// //! style manipulation examples

// console.dir(document.querySelector('div'));
// console.dir(document.querySelector('div').style);
// console.dir(document.querySelector('div').style.border);

const allDivs = document.querySelectorAll('div');

// //! 1 manipulate with .style property changes
for (let i = 0; i < allDivs.length; i++) {
  //   console.log(allDivs[i]);
  allDivs[i].style.width = '200px';
  allDivs[i].style.height = '200px';
  allDivs[i].style.border = '1px solid black';
  allDivs[i].style.backgroundColor = 'red';
}

// //! 2 set with function setAttribute('atribute name', 'new attribute value');
allDivs[0].setAttribute(
  'style',
  'width: 200px; height: 200px; border: 1px solid black; background-color: green;'
);

// //! 3 set with cssText
allDivs[1].style.cssText =
  'width: 200px; height: 200px; border: 1px solid black; background-color: blue;';

//? Task-1
// color: crimson;
// font-size: 30px;

const allHeadings = document.querySelectorAll('h1, h2, h3');

//! H1
for (let i = 0; i < allHeadings.length; i++) {
  allHeadings[i].style.color = 'crimson';
  allHeadings[i].style.fontSize = '30px';
}

//! H2
allHeadings[1].style.cssText = 'color: crimson; font-size: 30px';

//! h3
allHeadings[2].setAttribute('style', 'color: crimson; font-size: 30px');
//! Date object

let result;

result = new Date();
result = new Date(0);
result = new Date(24 * 60 * 60 * 1000);
result = new Date('1995-05-11');
result = typeof new Date();
result = new Date().getTime();
result = Date.now();
result = +new Date();

const dateNow = new Date();
result = dateNow.getFullYear();
result = dateNow.getMonth();
result = dateNow.setFullYear('1991');
result = dateNow.getFullYear();
result = dateNow.toISOString();
result = dateNow.toLocaleDateString();
result = dateNow.toLocaleTimeString();

console.log(result);

const runClock = () => {
  document.querySelectorAll(
    'div'
  ).innerHTML = `<h1>${new Date().toLocaleTimeString()}</h1>`;
};

setInterval(runClock, 1000);


//!Extras 