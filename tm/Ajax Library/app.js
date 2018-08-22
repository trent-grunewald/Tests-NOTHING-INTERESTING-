const http = new ezHTTP;

//Get Posts
http.get('https://jsonplaceholder.typicode.com/postss',
function(err, whatever){
  if(err) {
    console.log(err);
  } else {
  console.log(whatever);
  }
});
