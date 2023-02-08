export function sayHello() {
  console.log('Hello world!');
}

export function sayGoodbye() {
  console.log('bye bye!');
}

export default function fetchData() {
  console.log('Fetching data');
  console.log(generateHtml());
}

function generateHtml() {
  return 'something';
}
