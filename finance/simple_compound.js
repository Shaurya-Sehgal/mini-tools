function check() {
  let interest;
  let amount = document.getElementById("amount").value;
  let rate = document.getElementById("rate").value;
  let time = document.getElementById("time").value;
  let select = document.getElementById("options");
  let value = select.options[select.selectedIndex].value;
  if (value == "simple") {
    interest = amount * (rate / 100) * time;
  } else {
    interest = amount * (1 + rate / 100) ** time;
  }
  document.getElementById("result").innerText = "Your Interest is " + interest;
}
function check2() {
  let interest;
  let amount = document.getElementById("amount2").value;
  let rate = document.getElementById("rate2").value;
  let time = document.getElementById("time2").value;
  let select = document.getElementById("options");
  let value = select.options[select.selectedIndex].value;
  if (value == "simple") {
    interest = amount * (rate / 100) * time;
  } else {
    interest = amount * (1 + rate / 100) ** time;
  }
  document.getElementById("result").innerText = "Your Interest is " + interest;
}
