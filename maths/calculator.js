let result = document.getElementById("result");
function check(operator) {
  let firstNum = document.getElementById("number1").value;
  let secondNum = document.getElementById("number2").value;
  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);
  if (operator == "addition") {
    result.innerText = firstNum + secondNum;
  } else if (operator == "subtraction") {
    result.innerText = firstNum - secondNum;
  } else if (operator == "multiplication") {
    result.innerText = firstNum * secondNum;
  } else if (operator == "division") {
    result.innerText = firstNum / secondNum;
  }
}
