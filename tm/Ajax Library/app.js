const http = new ezHTTP;

// //Get Posts
// http.get('https://jsonplaceholder.typicode.com/postss',
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