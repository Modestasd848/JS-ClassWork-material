//! PUT request with fetch
//? 1st example

// const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

// const getPosts = async () => {
//   const response = await fetch(JSON_PLACEHOLDER_BASE_URL);
//   const data = await response.json();
  //   console.log(data);
// };

// getPosts();

// const updatePost = async (postId) => {
//   const response = await fetch(JSON_PLACEHOLDER_BASE_URL + postId, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ title: 'updated title', body: 'updated body' }),
//   });
//   const info = await response.json();
//   console.log(info);
// };

// updatePost(55);

//? 2nd example

// const DUMMY_BASE_URL = 'https://dummy.restapiexample.com/api/v1';

// const getEmployes = async () => {
//   try {
//     const response = await fetch(DUMMY_BASE_URL + '/employees');
//     const data = await response.json();
//     console.log(empleyees);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getEmployes();

// const updatedEmployee = async (empleyeeId) => {
//   try {
//     const response = await fetch(DUMMY_BASE_URL + '/update/' + empleyeeId, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: 'test',
//         salary: '123',
//         age: '23',
//       }),
//     });
//     const info = await response.json();
//     console.log(info);
//   } catch (err) {
//     console.log(err);
//   }
// };

// updatedEmployee(21);

//! DELETE
//? 1st example

// const deletePosts = async (postId) => {
//   try {
//     const response = await fetch(JSON_PLACEHOLDER_BASE_URL + postId, {
//       method: 'DELETE',
//     });
//     console.log(response);
//     if (response.ok) console.log('deleted successfully');
//     const info = await response.text();
//     console.log(info);
//   } catch (err) {
//     console.log(err);
//   }
// };

// deletePosts(20);

//? 2nd example

// const FAKE_URL = 'https://fakestoreapi.com/products/';

// const deleteProduct = async (productID) => {
//   const response = await fetch(FAKE_URL + productID, {
//     method: 'DELETE',
//   });
//   console.log(response);
//   const info = await response.json();
//   console.log(info);
// };

// deleteProduct(5);
