let image = document.getElementById("moving-image");
let leftPos = 0;

function moveImage() {
  leftPos -= 1;
  image.style.left = leftPos + "px";
};

setInterval(moveImage, 1);

window.onload = moveImage();