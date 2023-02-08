const isItWiter = false;
const isItSumer = false;
// if (isItWiter) {
//   console.log("It is winter and it is cold");
// } else {
//   console.log("I dont know if it is cold or not");
// }

if (isItWiter) {
  console.log("It is winter and it is cold");
} else if (isItSumer) {
  console.log("It might be hot outside");
} else {
  console.log("i dont know if it is cold or not");
}

const isItEvening = true;

//  ternary operator
isItEvening ? console.log("Evening") : console.log("not evening");

let isUserAdult = confirm("Are you adult?");

isUserAdult
  ? alert("You can watch X rated movies")
  : alert("It is time to sleep");

// switch statement

const weekday = 2;

switch (weekday) {
  case 1:
    console.log("Pirmadienis");
    break;
  case 2:
    console.log("Antradienis");
    break;
  case 3:
    console.log("Trečiadienis");
}
