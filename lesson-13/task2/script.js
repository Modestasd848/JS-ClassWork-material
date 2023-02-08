// "Book: [title]\nDescription: [description]\nMovie: [title]\nDescription: [description]"

const titleBook = document.querySelector('input[name="book-title"]');
const descriptionBook = document.querySelector(
  'input[name="book-description"]'
);
const titleMovie = document.querySelector('input[name="movie-title"]');
const descriptionMovie = document.querySelector(
  'input[name="movie-description"]'
);

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = titleBook.value;
  //   const bookDesc = descriptionBook.value;
  const movieTitle = titleMovie.value;
  //   const movieDesc = descriptionMovie.value;

  alert(`Book title=${bookTitle}\nMovie title=${movieTitle}`);
});
