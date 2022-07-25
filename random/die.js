function check() {
  let num = Math.random() * 6 + 1;
  num = Math.floor(num);
  if (num == 1) {
    document.getElementById("die").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png";
  } else if (num == 2) {
    document.getElementById("die").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png";
  } else if (num == 3) {
    document.getElementById("die").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1024px-Dice-3-b.svg.png";
  } else if (num == 4) {
    document.getElementById("die").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png";
  } else if (num == 5) {
    document.getElementById("die").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/2048px-Dice-5-b.svg.png";
  } else {
    document.getElementById("die").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png";
  }
}
