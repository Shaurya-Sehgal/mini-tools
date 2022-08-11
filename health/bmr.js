function check() {
  let select = document.getElementById("options");
  let value = select.options[select.selectedIndex].value;
  let givenheight = document.getElementById("height").value;
  let givenweight = document.getElementById("weight").value;
  let givenage = document.getElementById("age").value;
  if (value == "male") {
    let bmr =
      88.362 +
      13.397 * givenweight +
      4.799 * givenheight -
      5.677 * givenage +
      5;
    bmr = bmr.toFixed(2);
    document.getElementById("result").innerText =
      "You need at least " + bmr + " calories";
  } else {
    let bmr =
      447.593 + 9.247 * givenweight + 3.098 * givenheight - 4.33 * givenage;
    bmr = bmr.toFixed(2);
    document.getElementById("result").innerText =
      "You need at least " + bmr + " calories";
  }
}
function check2() {
  let select = document.getElementById("options");
  let value = select.options[select.selectedIndex].value;
  let givenheight = document.getElementById("height2").value;
  let givenweight = document.getElementById("weight2").value;
  let givenage = document.getElementById("age2").value;
  if (value == "male") {
    let bmr =
      88.362 +
      13.397 * givenweight +
      4.799 * givenheight -
      5.677 * givenage +
      5;
    bmr = bmr.toFixed(2);
    document.getElementById("result").innerText =
      "You need at least " + bmr + " calories";
  } else {
    let bmr =
      447.593 + 9.247 * givenweight + 3.098 * givenheight - 4.33 * givenage;
    bmr = bmr.toFixed(2);
    document.getElementById("result").innerText =
      "You need at least " + bmr + " calories";
  }
}
