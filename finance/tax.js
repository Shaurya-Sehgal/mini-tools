function check() {
  let income = document.getElementById("income").value;
  let tax = null;
  if (income <= 50197) {
    tax = income * 0.15;
  } else if (income <= 100392) {
    tax = income * 0.205;
  } else if (income <= 155625) {
    tax = income * 0.26;
  } else if (income <= 221708) {
    tax = income * 0.2938;
  } else {
    tax = income * 0.33;
  }
  document.getElementById("result").innerText = "Your tax is $" + tax;
}
function check2() {
  let income = document.getElementById("income2").value;
  let tax = null;
  if (income <= 50197) {
    tax = income * 0.15;
  } else if (income <= 100392) {
    tax = income * 0.205;
  } else if (income <= 155625) {
    tax = income * 0.26;
  } else if (income <= 221708) {
    tax = income * 0.2938;
  } else {
    tax = income * 0.33;
  }
  document.getElementById("result").innerText = "Your tax is $" + tax;
}
