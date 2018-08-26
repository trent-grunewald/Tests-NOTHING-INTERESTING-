// //ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---
// function ezHTTP() {
//   this.http = new XMLHttpRequest();
// }

// //Make an HTTP GET REquest
// ezHTTP.prototype.get = function(url, callback) {
//   this.http.open('GET', url, true);

//   let self = this;
//   this.http.onload = function(){
//     if(self.http.status === 200) {
//      callback(null, self.http.responseText);
//     } else {
//       callback('Error: ' + self.http.status);
//     }
//   }

//   this.http.send();
// }

// //Make an HTTP POST REquest
// ezHTTP.prototype.post = function(url, data, callback) {
//   this.http.open('POST', url, true);
//   this.http.setRequestHeader('Content-type', 'application/json');

//   let self = this;
//   this.http.onload = function() {
//     callback(null, self.http.responseText);
//   }
//   this.http.send(JSON.stringify(data));
// } 

// //Make an HTTP PUT REquest
// ezHTTP.prototype.put = function(url, data, callback) {
//   this.http.open('PUT', url, true);
//   this.http.setRequestHeader('Content-type', 'application/json');

//   let self = this;
//   this.http.onload = function() {
//     callback(null, self.http.responseText);
//   }
//   this.http.send(JSON.stringify(data));
// }

// //Make an HTTP DELETE REquest
// ezHTTP.prototype.delete = function(url, callback) {
//   this.http.open('DELETE', url, true);

//   let self = this;
//   this.http.onload = function(){
//     if(self.http.status === 200) {
//      callback(null, 'Shit Post Deleted' );
//     } else {
//       callback('Error: ' + self.http.status);
//     }
//   }

//   this.http.send();
// }


// ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/**
* @version 2.0.0
* @author Trent Grunewald
* @licence MIT
**/

class ezHTTP {
  //---------------------------------Make an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
    });
  }


  //-------------------------------------Make HTTP POST REQUEST
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
  });
 }


//----------------------------------------Make HTTP PUT / UPDATE REQUEST


  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }


//----------------------------------------Make HTTP DELETE REQUEST

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => resolve('User Deleted'))
      .catch(err => reject(err));
    });
  }
}



  