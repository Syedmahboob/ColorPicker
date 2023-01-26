function myColor() {
  let Red = document.getElementById("Red").value;
  let Blue = document.getElementById("Blue").value;
  let Green = document.getElementById("Green").value;
  let color = "rgb(" + Red + "," + Blue + "," + Green + ")";
  document.body.style.backgroundColor = color;
  document.getElementById("box").value = color;
}

document.getElementById("Red").addEventListener("input", myColor);
document.getElementById("Blue").addEventListener("input", myColor);
document.getElementById("Green").addEventListener("input", myColor);
