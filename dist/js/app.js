const form = document.getElementById('tip-form'),
  billInput = document.getElementById('bill-input'),
  tipInput = document.getElementById('tip-input'),
  tipOutput = document.getElementById('tip-output'),
  submit = document.getElementById('submit'),
  results = document.getElementById('results'),
  tipResults = document.getElementById('tip-results'),
  billTotal = document.getElementById('bill-total');

// Listen for form submit
form.addEventListener('submit', calculateBill);

function calculateBill(e) {
  console.log('Clicked');
  e.preventDefault();
}
