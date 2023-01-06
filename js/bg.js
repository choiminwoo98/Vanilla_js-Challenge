const bgImg = document.getElementsByTagName("img");

const images = ["0.jpg", "1.png", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

bgImage.style = `position: absolute; top: 0;
 left: 0; z-index: -1; object-fit: fill;
  width:${window.innerWidth}px; height: ${window.innerHeight}px;`;

document.body.appendChild(bgImage);

function handleWindowResize() {
  bgImage.style.width = window.innerWidth + "px";
  bgImage.style.height = window.innerHeight + "px";
}
window.addEventListener("resize", handleWindowResize);
