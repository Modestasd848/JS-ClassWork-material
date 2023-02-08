//! Sync/async

//programos dalys
//1. duomenys; - memory heap;
//2. veiksmai(funkcijos) - call stack;

//? memory heap
// debugger;
const age = 700;
const city = 'Vilnius';

//? call stack

function logIt(number) {
  logItMore(number);
}

function logItMore(number) {
  //   console.log(number);
}

logIt(1);
logIt(2);
logIt(3);

//? stack overflow
function stackOverflow() {
  stackOverflow();
}

// stackOverflow();

//? asynchronouse example with Web api
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
