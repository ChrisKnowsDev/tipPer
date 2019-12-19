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

// Calculate Bill
function calculateBill(e) {
  // Get value of bill & tip amount
  const bill = Number(billInput.value),
    tax = Number(tipInput.value),
    // Calculate tip amount
    tipAmount = bill * (tax / 100),
    // Add tip to bill
    billPlusTip = bill + tipAmount;

  // Display result values
  tipResults.value = tipAmount.toFixed(2);
  billTotal.value = billPlusTip.toFixed(2);

  // Show results section
  results.style.display = 'block';
  e.preventDefault();
}
