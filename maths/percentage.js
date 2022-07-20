function check() {
  let number = document.getElementById("number").value;
  let outOf = document.getElementById("outOf").value;
  let percent = (number / outOf) * 100;
  document.getElementById("result").innerText = percent + "%";
}
