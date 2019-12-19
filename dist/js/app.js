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
  const bill = Number(billInput.value),
    tax = Number(tipInput.value),
    tipAmount = bill * (tax / 100),
    billPlusTip = bill + tipAmount;

  tipResults.value = tipAmount.toFixed(2);
  billTotal.value = billPlusTip.toFixed(2);

  results.style.display = 'block';
  e.preventDefault();
}
