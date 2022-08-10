function check() {
  let number = document.getElementById("number").value;
  let i = 2;
  let flag = 1;
  while (i < number) {
    if (number % i == 0) {
      document.getElementById("result").innerText = "Composite Number";
      flag = 0;
      break;
    }
    i = i + 1;
  }
  if (flag == 1) {
    document.getElementById("result").innerText = "Prime Number";
  }
}
function check2() {
  let number = document.getElementById("number2").value;
  let i = 2;
  let flag = 1;
  while (i < number) {
    if (number % i == 0) {
      document.getElementById("result").innerText = "Composite Number";
      flag = 0;
      break;
    }
    i = i + 1;
  }
  if (flag == 1) {
    document.getElementById("result").innerText = "Prime Number";
  }
}
