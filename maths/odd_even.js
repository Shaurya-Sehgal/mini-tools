function check() {
  let number = document.getElementById("number").value;
  console.log(number);
  if (number % 2 == 0) {
    document.getElementById("result").innerText = "Even";
  } else {
    document.getElementById("result").innerText = "Odd";
  }
}
