// //-----------------------------------------------------XHR-------------------


// //Calls the "Load Data" function on button click
// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
//   //Create XHR object
//   const xhr = new XMLHttpRequest();

//   //Open file "open"
//   //"GET" = read the file / url
//   //"data.txt" what you want to read
//   xhr.open('GET', 'data.txt', true);


//   //OPTIONAL FOR SPINNERS / WHILE LOADING
//   // xhr.onprogress = function(){
//   //   //INSERT SPINNER / LOADER HERE
//   // }

//   //"onload" = Ready state value 4
//   xhr.onload = function() {
//     //Check to see if status = 200 (200 = ok), (403 = forbidden), (404 = not found);
//     if(this.status === 200) {
//       console.log(this.responseText);
//       //ADDS AN H1 AND PUTS TEXT INTO THE HTML
//       document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
//     }
//   }

//   ////THIS IS A GOOD IDEA FOR ERRORS
//   // xhr.onerror = function() {
//   //   console.log('Request error...');
//   // }

//   //READY STATE VALUES
//   //0: Request not initialized
//   //1: Server connection establised
//   //2: Request received
//   //3: Processing request
//   //4: Request finished and response is ready
//   //Sends the data
//   xhr.send();
// }


// ----------------------------------------------------------JSON----------------
//-----------------------------------------JAVASCRIPT OBJECT NOTATION

// document.getElementById('button1').addEventListener('click', loadCustomer);

// document.getElementById('button2').addEventListener('click', loadCustomers);

// function loadCustomer(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customer.json', true);

//   xhr.onload = function() {
//     if(this.status === 200) {
//       const customer = JSON.parse(this.responseText);

//       const output = `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;

//       document.getElementById('customer').innerHTML = output;
//     }
//   }

//   xhr.send();
// }

// //LOAD CUSTOMERS 
// function loadCustomers(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customers.json', true);

//   xhr.onload = function() {
//     if(this.status === 200) {
//       const customers = JSON.parse(this.responseText);
//         let output = '';  
//         //Itterates through the customer array and adds 1 for each customer
//           customers.forEach(function(customers){
//             output += 
//               output = `
//                 <ul>
//                   <li>ID: ${customers.id}</li>
//                   <li>Name: ${customers.name}</li>
//                   <li>Company: ${customers.company}</li>
//                   <li>Phone: ${customers.phone}</li>
//                 </ul>
//                 `;
//              })
//           document.getElementById('customers').innerHTML = output;
//         }
//       }
//     xhr.send();
//   }


// ----------------------------------------------------------CALLBACK FUNCTIONS---


// const posts = [
//   {title: 'post one', body: 'this is body 1'},
//   {title: 'post Two', body: 'this is body 2'},
//   {title: 'post Three', body: 'this is body 3'},
// ];

// function createPost(post, callback) {
//   setTimeout(function() {
//     posts.push(post);
//     callback();
//   },2000)
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Four', body: 'this is post 4'}, getPosts);




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// LATEST ES6 STANDARDS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





// ---------------------------FETCH API-----------------------------------


//-----------------------GET LOCAL TEXT FILE
document.getElementById('button1').addEventListener('click', getText);

function getText(){
  //Fetch returns a Promise
  fetch('data.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data);
    })
    //Logs the error
    .catch(err => {
      console.log(err);
    });
}


// -----------------------------------GET JSON DATA


document.getElementById('button2').addEventListener('click', getJSON);

function getJSON() {
  fetch('movies.json')
   .then(res => res.json())
   
   .then(data => {
     console.log(data);
     let output = '';
     data.forEach(movie => {
       output += `<li>${movie.title}</li>`;
     });

     document.getElementById('output').innerHTML = output;
   })

   .catch(err => {
     console.log(err);
   });
}


// -----------------------------------GET API Data


document.getElementById('button3').addEventListener('click', getAPI);

function getAPI() {
  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(res =>{
    return res.json();
  })
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(user => {
      output += `<li>${user}</li>`;
    });
    document.getElementById('output').innerHTML = output;
    
  })
  .catch = (err) => console.log(err);
  };