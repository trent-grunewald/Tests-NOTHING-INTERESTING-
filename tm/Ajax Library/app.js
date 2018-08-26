const http = new ezHTTP;

// //Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, whatever){
//   if(err) {
//     console.log(err);
//   } else {
//   console.log(whatever);
//   }
// });

// //GET Single Posts(1 at the end of the url)
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err, whatever){
//   if(err) {
//     console.log(err);
//   } else {
//   console.log(whatever);
//   }
// });

//POST REQUEST
//Create data
// const data ={
//   title: 'Custom Post',
//   body: 'I am post'
// };

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, whatever) {
//   if(err) {
//         console.log(err);
//       } else {
//       console.log(whatever);
//       }
// });


//PUT REQUEST
//Create data
// const data ={
//   title: 'Custom Post',
//   body: 'I am post'
// };

// //Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, whatever) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(whatever);
//   }
// });


// //DELETE POST
// http.delete('https://jsonplaceholder.typicode.com/posts/1',
// function(err, whatever){
//   if(err) {
//     console.log(err);
//   } else {
//   console.log(whatever);
//   }
// });







// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




// //Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//User Data
const data = {
  name: 'Trent',
  username: 'Se_7_eN',
  email: 'Trent@trentgrunewald.com'
}

//Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// //Update Post
//     http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


//DELETE Users
    // http.delete('https://jsonplaceholder.typicode.com/users/2')
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));


  // -----------------------------------------ASYNC AWAIT-------------------


//   // Get users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

  //Update Post
  http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));