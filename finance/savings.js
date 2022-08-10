function check() {
  let time = document.getElementById("time").value * 12;
  let income = document.getElementById("income").value * time;
  let spendings = document.getElementById("spendings").value * time;
  income = income - spendings;
  document.getElementById("result").innerText = "Your Savings is $" + income;
}
function check2() {
  let time = document.getElementById("time2").value * 12;
  let income = document.getElementById("income2").value * time;
  let spendings = document.getElementById("spendings2").value * time;
  income = income - spendings;
  document.getElementById("result").innerText = "Your Savings is $" + income;
}
