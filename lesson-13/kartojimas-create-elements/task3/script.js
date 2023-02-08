const todoInput = document.querySelector('input');
const todoList = document.querySelector('ul');
const deleteAllButton = document.querySelector('button');
const mainElement = document.querySelector('main');

todoInput.addEventListener('keypress', AddNewTodo);

deleteAllButton.addEventListener('click', () => {
  const allLiElements = document.querySelectorAll('li');

  for (let i = 0; i < allLiElements.length; i++) {
    allLiElements[i].remove();
  }

  toggleButtonVisibility();
});

function AddNewTodo(e) {
  removeWarningParagraph();
  if (e.key === 'Enter') {
    const inputValue = e.target.value;
    if (!inputValue) {
      if (!document.querySelector('p')) {
        const warningParagraph = document.createElement('p');
        warningParagraph.textContent = 'Input is empty';
        mainElement.append(warningParagraph);
      }

      return;
    }

    const li = document.createElement('li');
    li.textContent = `${inputValue}   `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
      li.remove();
      const liElements = document.querySelectorAll('li');

      if (!liElements.length) {
        toggleButtonVisibility();
      }
    });

    li.append(deleteButton);
    todoList.append(li);
    e.target.value = '';

    if (deleteAllButton.classList.contains('invisible')) {
      toggleButtonVisibility();
    }
  }
}

function removeWarningParagraph() {
  const par = document.querySelector('p');
  if (par) {
    par.remove();
  }
}

function toggleButtonVisibility() {
  deleteAllButton.classList.toggle('invisible');
}
