function check() {
  let givenweight = document.getElementById("weight").value;
  let givenheight = document.getElementById("height").value * 100;
  let bsa = (givenweight * givenheight) / 3600;
  bsa = Math.sqrt(bsa);
  bsa = bsa.toFixed(2);
  document.getElementById("result").innerText = "Your BSA Is " + bsa;
}
