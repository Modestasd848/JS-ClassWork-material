// uzduotis nr. 3
// let number = prompt("Prasome ivesti skaiciu:");

// if (number % 2 == 0) {
//   console.log("Skaicius lyginis.");
// } else {
//   console.log("Skaicius nelyginis.");
// }

// uzduotis 2

// let group = prompt("įveskite žmonių skaičių");

// if (group == "0") {
//   console.log("ne grupė");
// } else if (group === 1) {
//   console.log("solo");
// } else if (group === 2) {
//   console.log("duetas");
// } else if (group === 3) {
//   console.log("trio");
// } else if (group === 4) {
//   console.log("kvartetas");
// } else if (group >= 4) {
//   console.log("didelė grupė");
// }

// uzduotis 3

const groupSecond = 2;

switch (groupSecond) {
  case 0:
    console.log("Tai nera grupe");
    break;
  case 1:
    console.log("Tai yra Solo");
    break;
  case 2:
    console.log("Tai yra duetas");
    break;
  case 3:
    console.log("Tai yra trio");
    break;
  case 4:
    console.log("Tai yra kvartetas");
    break;
  case 5:
    console.log("Tai yra grupe");
    break;
  default:
    console.log("Nesuprantama ka norite pasakyti");
}
