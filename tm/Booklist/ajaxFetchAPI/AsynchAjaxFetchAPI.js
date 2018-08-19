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


