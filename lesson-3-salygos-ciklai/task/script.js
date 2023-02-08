const price = prompt("Įveskite prekės kainą");
const isDeliveryNeeded = prompt(
  "Ar reikalingas pristatymas į namus? (taip/ne)"
);
let city;
const DELIVERY_FEE = 20;

if (isDeliveryNeeded === "taip") {
  city = prompt("į kurį miestą reiks pristatyti?");
}

if (isDeliveryNeeded !== "taip") {
  console.log(
    `Prekės kaina ${price} $ \nPrekę galite atsiimti nemokamai Vilniuje`
  );
} else if (price >= 50 || city === "Vilnius") {
  console.log(
    `Prekės kaina : ${price} \nPrekę nemokamai pristatysime į  ${city} per 1-3 dienas.`
  );
} else {
  console.log(
    `prekės kainą : ${price} \nPristatymas ${DELIVERY_FEE} \nIš viso: ${
      +price + DELIVERY_FEE
    } \nPrekę nemokamai pristatysime į ${city} per 1-3 dienas.`
  );
}
