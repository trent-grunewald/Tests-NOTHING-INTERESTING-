//-----------------------------------------------------AJAX
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //Create XHR object
  const xhr = new XMLHttpRequest();

  //Open
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    //Check to see if status = 200 (200 = ok), (403 = forbidden), (404 = not found);
    if(this.status === 200) {
      console.log(this.responseText);
    }
  }
  xhr.send();
}