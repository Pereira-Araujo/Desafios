let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let visibleLine = document.getElementById("visibleLine");

const box = () => {
  first.classList.toggle("firstRotate");
  second.classList.toggle("secondRotate");
  third.classList.toggle("thirdRotate");
  fourth.classList.toggle("fourthRotate");
  visibleLine.classList.toggle("visible");
}
