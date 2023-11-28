const slides = document.querySelectorAll(".image");
const slidesLength = slides.length;
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const intervalTime = 3000;
const auto = true;
let slideInterval;

const preImage = () => {
    const activeİmage = document.querySelector(".active");
    activeİmage.classList.remove("active");
    if (activeİmage.previousElementSibling) {
        activeİmage.previousElementSibling.classList.add("active");
    } else {
        slides[slidesLength - 1].classList.add("active");
    }

};

const nextImage = () => {
    const activeİmage = document.querySelector(".active");
    activeİmage.classList.remove("active");
    if (activeİmage.nextElementSibling) {
        activeİmage.nextElementSibling.classList.add("active");
    } else {
        slides[0].classList.add("active");
    }

};

buttonLeft.addEventListener("click", () => {
    preImage();

    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(preImage, intervalTime);
    }

});
buttonRight.addEventListener("click", () => {
    nextImage();

    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(preImage, intervalTime);
    }
});


if (auto) {
    slideInterval = setInterval(nextImage, intervalTime);
}


