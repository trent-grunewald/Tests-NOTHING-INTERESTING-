//Listen for submit
document.querySelector('#loan-form').addEventListener('submit', calculateResults);

//calculate Results
function calculateResults(e){
  //UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayments = document.getElementById('monthly-payment');
  const totalPayments = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  
  //Monthly Payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayments.value = monthly.toFixed(2);
    totalPayments.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    
  }else{
    showError("Please enter valid numbers");
  }

  e.preventDefault();
}

//Show Errors
function showError(error){
  //create Div
  const errorDiv = document.createElement('div');

  //Get Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //add Class
  errorDiv.className = 'alert alert-danger';

  //create Text Node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //insert error above heading
  card.insertBefore(errorDiv, heading);

  //remove error after x time
  setTimeout(clearError, 3000);
}

  //clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }