// MAKING A MINI BARS FOR NAVIGATION BAR FOR RESPONSIVENESS
// ----------------START----------------

const ambar = document.getElementById("ambar");
const navbar = document.getElementById("navbar");
const closeButton = document.getElementById("close-button");

if (ambar) {
  ambar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}

if (closeButton) {
  closeButton.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}

// SINGLE PRODUCT DETAILS SECTION
// ----------- START ------------->

// Creating function for changing main image from small images

var topImage = document.querySelector("#main-img");
var subImages = document.querySelectorAll(".sub-img");

subImages[0].onclick = () => {
  topImage.src = subImages[0].src;
};

subImages[1].onclick = () => {
  topImage.src = subImages[1].src;
};

subImages[2].onclick = () => {
  topImage.src = subImages[2].src;
};

subImages[3].onclick = () => {
  topImage.src = subImages[3].src;
};
