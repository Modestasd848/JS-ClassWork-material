document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  const age = Number(e.target.elements.age.value);
  const isLegalAge = age >= 18;

  console.log(isLegalAge);
  const person = {
    name: name,
    isLegalAge: isLegalAge,
  };

  console.log(person);
});
