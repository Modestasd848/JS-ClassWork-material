// const partyUrl = 'https://test-api-faker.herokuapp.com/cafe04/party';

// const getVIP = async (name) => {
//   const response = await fetch(partyUrl);
//   const data = await response.json();
//   const searchResult = data.find((item) => item.name === name);
//   console.log(
//     searchResult
//       ? searchResult.vip
//         ? `${name} is VIP`
//         : `${name} is not a VIP`
//       : `${name} is not in the list`
//   );
// };

// getVIP('Modestas');
// getVIP('Ainas');
// getVIP('Ričardas');
// getVIP('Remigijus');

// function weddingPromise() {
//   return new Promise((resolve) => {
//     fetch(weddingUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         let countPlusOne = 0;
//         let countAttending = 0;
//         let countGuests = 0;
//         data.forEach((guest) => {
//           if (guest.plusOne === true) {
//             countPlusOne++;
//           }
//           if (guest.attending === true) {
//             countAttending++;
//           }
//           switch (true) {
//             case guest.attending && guest.plusOne:
//               countGuests += 2;
//               break;
//             case guest.attending:
//               countGuests++;
//               break;
//             case !guest.attending && guest.plusOne:
//               countGuests += 0;
//               break;
//             default:
//               countGuests += 0;
//               break;
//           }
//         });
//         resolve(
//           `${countPlusOne} plusOnes marked\n${countAttending} Attending marked\n${countGuests} Total guests`
//         );
//       });
//   });
// }

// async function doPromises() {
//   await Promise.all([partyPromise(), weddingPromise()]).then(
//     (resultMessages) => {
//       console.log(resultMessages[0]);
//       console.log(resultMessages[1]);
//     }
//   );
// }

// doPromises();

// // Task 3
// // a) <name> is/is not in the /party list;
// // b) <name> is/is not a VIP guest;
// // c) Amountof attendees who selected plus one option: <amount>;
// // d) Amountof total attendees: <amount>;

// {
//   const input = document.querySelector('input');
//   const button = document.querySelector('button');

//   async function checkName() {
//     try {
//       const name = input.value;
//       const fetchparty = await fetch(partyUrl);
//       const fetchwedding = await fetch(weddingUrl);
//       const partyResponse = await fetchparty.json();
//       const weddingResponse = await fetchwedding.json();

//       let fullResponse = '';

//       const inParty = partyResponse.find((guest) => guest.name === name);
//       if (inParty.name === name) {
//         fullResponse += `${inParty.name} is in the party list\n`;
//         if (inParty.vip === true) {
//           fullResponse += `${inParty.name} is a VIP guest\n`;
//         } else {
//           fullResponse += `${inParty.name} is not a VIP guest\n`;
//         }
//       } else {
//         fullResponse += `${inParty.name} is not in the party list\n`;
//       }

//       let countPlusOne = 0;
//       let countAttending = 0;

//       weddingResponse.forEach((guest) => {
//         if (guest.plusOne === true && guest.attending === true) {
//           countPlusOne++;
//         }
//         if (guest.attending === true) {
//           countAttending++;
//         }
//       });

//       fullResponse += `Amount of attendees who selected plus one option: ${countPlusOne}\nAmount of total attendees: ${countAttending}`;

//       console.log(fullResponse);
//       const fetchMeme = await fetch(memeUrl);
//       const memeResponse = await fetchMeme.json();
//       console.log(memeResponse.imgUrl);
//       const meme = document.createElement('img');
//       meme.setAttribute('src', memeResponse.imgUrl);
//       body.append(meme);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   button.addEventListener('click', checkName);
// }

async function countByParameter(param) {
  const res = await fetch(
    'https://test-api-faker.herokuapp.com/cafe04/wedding'
  );
  const data = await res.json();

  const count = data.filter((element) => element[param]);
  console.log(count.length);

  return count.length;
}

async function countTotal() {
  const res = await fetch(
    'https://test-api-faker.herokuapp.com/cafe04/wedding'
  );
  const data = await res.json();

  let sum = 0;

  data.forEach((element) => {
    if (element.attending) {
      if (element.plusOne) {
        sum += 2;
      } else {
        sum++;
      }
    }
  });
  console.log(sum);
  return sum;
}

const nameInput = document.querySelector('input');
const container = document.querySelector('div');
document.querySelector('button').addEventListener('click', checkHandler);

async function checkHandler() {
  const name = nameInput.value;
  const resParty = await fetch(
    'https://test-api-faker.herokuapp.com/cafe04/party'
  );
  const partyData = await resParty.json();

  const person = partyData.find((person) => person.name.split(' ')[0] === name);
  const inPartyP = document.createElement('p');
  if (person) {
    const partyPTextContent = `${person.name.split(' ')[0]} ${
      person.vip ? 'Is VIP' : 'Is not VIP'
    }`;
    inPartyP.textContent = partyPTextContent;
    container.append(inPartyP);
  }

  const [plusOneCount, countTotalNumber] = await Promise.all([
    countByParameter('plusOne'),
    countTotal(),
  ]);

  const plusOneAttendeesPar = document.createElement('p');
  plusOneAttendeesPar.textContent = await plusOneCount;

  const totalAttendeesPar = document.createElement('p');
  totalAttendeesPar.textContent = countTotalNumber;

  const memeRes = await fetch(
    'https://test-api-faker.herokuapp.com/cafe04/meme'
  );
  const memeData = await memeRes.json();
  const memeImg = document.createElement('img');
  memeImg.src = memeData.imgUrl;
  container.append(plusOneAttendeesPar, totalAttendeesPar, memeImg);
}

// countByParameter('plusOne');
// countByParameter('attending');
// countTotal();
