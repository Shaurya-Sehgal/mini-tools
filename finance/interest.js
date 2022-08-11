function check() {
  let annualRate = document.getElementById("annualRate").value;
  let money = document.getElementById("money").value;
  let interestMoney = (annualRate / 100 / 12) * money;
  interestMoney = interestMoney.toFixed(2);
  annualRate = (annualRate / 100 / 12) * 100;
  annualRate = annualRate.toFixed(2);
  document.getElementById("result").innerHTML =
    "Your monthly interest is " +
    annualRate +
    "%, <br> And the monthly interest on $" +
    money +
    " is $" +
    interestMoney;
}
function check2() {
  let annualRate = document.getElementById("annualRate2").value;
  let money = document.getElementById("money2").value;
  let interestMoney = (annualRate / 100 / 12) * money;
  interestMoney = interestMoney.toFixed(2);
  annualRate = (annualRate / 100 / 12) * 100;
  annualRate = annualRate.toFixed(2);
  document.getElementById("result").innerHTML =
    "Your monthly interest is " +
    annualRate +
    "%, <br> And the monthly interest on $" +
    money +
    " is $" +
    interestMoney;
}
