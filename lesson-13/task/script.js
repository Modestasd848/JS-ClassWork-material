const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const colorInputs = document.querySelectorAll('iput[name="color"]');

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  let color;

  for (let index = 0; index < colorInputs.length; index++) {
    if (colorInputs[index].checked) {
      color = colorInputs[index].value;
    }
  }

  alert(
    `name=${name} \nemail=${email} \nfavorite color=${
      color ? color : 'no color is selected'
    }`
  );
});
