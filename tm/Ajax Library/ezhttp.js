//ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---
function ezHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an HTTP GET REquest
ezHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200) {
     callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

//Make an HTTP POST REquest


//Make an HTTP PUT REquest


//Make an HTTP DELETE REquest



// ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---ES5---