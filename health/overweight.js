function check() {
  let givenweight = document.getElementById("weight").value;
  let givenheight = document.getElementById("height").value;
  let bmi = givenweight / (givenheight * givenheight);
  bmi = bmi.toFixed(1);
  if (bmi < 18.5) {
    document.getElementById("result").innerHTML = "You Are Under-Weight";
    document.getElementById("result").style.color = "rgb(255, 95, 95)";
  } else if (bmi <= 24.9) {
    document.getElementById("result").innerHTML = "You Are Healthy";
    document.getElementById("result").style.color = "limegreen";
  } else if (bmi <= 29.9) {
    document.getElementById("result").innerHTML = "You Are Over-Weight";
    document.getElementById("result").style.color = "red";
  } else if (bmi <= 34.9) {
    document.getElementById("result").innerHTML = "You Are Obese";
    document.getElementById("result").style.color = "darkred";
  } else if (bmi >= 35) {
    document.getElementById("result").innerHTML = "You Are Sevearly Obese";
    document.getElementById("result").style.color = "purple";
  }
}
function check2() {
  let givenweight = document.getElementById("weight2").value;
  let givenheight = document.getElementById("height2").value;
  let bmi = givenweight / (givenheight * givenheight);
  bmi = bmi.toFixed(1);
  if (bmi < 18.5) {
    document.getElementById("result").innerHTML = "You Are Under-Weight";
    document.getElementById("result").style.color = "rgb(255, 95, 95)";
  } else if (bmi <= 24.9) {
    document.getElementById("result").innerHTML = "You Are Healthy";
    document.getElementById("result").style.color = "limegreen";
  } else if (bmi <= 29.9) {
    document.getElementById("result").innerHTML = "You Are Over-Weight";
    document.getElementById("result").style.color = "red";
  } else if (bmi <= 34.9) {
    document.getElementById("result").innerHTML = "You Are Obese";
    document.getElementById("result").style.color = "darkred";
  } else if (bmi >= 35) {
    document.getElementById("result").innerHTML = "You Are Sevearly Obese";
    document.getElementById("result").style.color = "purple";
  }
}
