function check() {
  let number = document.getElementById("number").value;
  let outOf = document.getElementById("outOf").value;
  let percent = (number / outOf) * 100;
  document.getElementById("result").innerText = percent + "%";
}

function check2() {
  let number = document.getElementById("number2").value;
  let outOf = document.getElementById("outOf2").value;
  let percent = (number / outOf) * 100;
  document.getElementById("result").innerText = percent + "%";
}
