function check() {
  let number = document.getElementById("number").value;
  console.log(number);
  if (number == "") {
    alert("Enter Number");
  } else if (number % 2 == 0) {
    document.getElementById("result").innerText = "Even";
  } else {
    document.getElementById("result").innerText = "Odd";
  }
}
function check2() {
  let number = document.getElementById("number2").value;
  console.log(number);
  if (number == "") {
    alert("Enter Number");
  } else if (number % 2 == 0) {
    document.getElementById("result").innerText = "Even";
  } else {
    document.getElementById("result").innerText = "Odd";
  }
}
