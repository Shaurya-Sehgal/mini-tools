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
    document.getElementById("result").innerText =
      "You need at least " + bmr + " calories";
  }
}
