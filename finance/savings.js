function check() {
  let time = document.getElementById("time").value * 12;
  let income = document.getElementById("income").value * time;
  let spendings = document.getElementById("spendings").value * time;
  income = income - spendings;
  document.getElementById("result").innerText = "Your Savings is $" + income;
}
