/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const btn = document.getElementById('btn');
const output = document.getElementById('output');
const message = document.getElementById('message');

btn.addEventListener('click', async () => {
  message.style.display = 'none';
  const response = await fetch('https://api.github.com/users');
  const data = await response.json();

  let html = '';
  data.forEach((user) => {
    html += `
      <div class="card">
        <div class="card-header">
          <p>${user.login}</p>
        </div>
        <div class="card-body">
          <img src="${user.avatar_url}" alt="Avatar" />
        </div>
      </div>
    `;
  });
  output.innerHTML = html;
});
