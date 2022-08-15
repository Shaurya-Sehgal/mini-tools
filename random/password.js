let elements = ["t", "x", "e", "p", "3", "8", "1", "$", "#", "@"];
function create() {
  let i = 0;
  let password = "";
  while (i < 6) {
    let number = Math.random() * 10;
    number = Math.floor(number);
    password = password + elements[number];
    i = i + 1;
  }
  document.getElementById("result").innerText = password;
}
