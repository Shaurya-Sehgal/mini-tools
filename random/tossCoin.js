function check() {
  let num = Math.random() * 100;
  num = Math.floor(num);
  if (num % 2 == 0) {
    document.getElementById("result").innerText = "Heads";
  } else {
    document.getElementById("result").innerText = "Tails!";
  }
}
