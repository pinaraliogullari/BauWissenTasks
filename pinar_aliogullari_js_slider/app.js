const slides = document.querySelectorAll(".image");
const imageSlider = document.querySelector(".image-slider")
const slidesLength = slides.length;
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const intervalTime = 3000;
const auto = true;
let slideInterval;
let currentIndex = 0;


function updateSlider() {
    imageSlider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

const preImage = () => {
    currentIndex = (currentIndex - 1 + slidesLength) % slidesLength
    updateSlider();
};

const nextImage = () => {
    currentIndex = (currentIndex + 1) % slidesLength
    updateSlider();
};

buttonLeft.addEventListener("click", () => {
    if (auto) {
        clearInterval(slideInterval);
        preImage();
        slideInterval = setInterval(nextImage, intervalTime);
    }
});

buttonRight.addEventListener("click", () => {
    if (auto) {
        clearInterval(slideInterval);
        nextImage();
        slideInterval = setInterval(nextImage, intervalTime);
    }
});

if (auto) {
    slideInterval = setInterval(nextImage, intervalTime);
}