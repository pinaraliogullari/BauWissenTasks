const slides = document.querySelectorAll(".image");
const imageSlider = document.querySelector(".image-slider")
const slidesLength = slides.length;
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const intervalTime = 3000;
const auto = true;
let slideInterval;
let currentIndex = 0;

//imageSlider div'ine X ekseni üzerinde 100% oranında kaymasını sağlıyor.
function updateSlider() {
    imageSlider.style.transform = `translateX(${-currentIndex * 100}%)`;
}
//currentIndex değişkenini -1 değerinde azaltıp slides array'in length'i ile topluyoruz.
//eğer currentIndex 0(sıfır) ise 0 - 1 den -1 ve -1 + 7 den 6 sonucu çıktığı için
//imageSlider div'in translateX(600%) (6 * 100) olacak ve en son resme dönecek
const preImage = () => {
    currentIndex = (currentIndex - 1 + slidesLength) % slidesLength
    updateSlider();
};
//slides array'inin length'ini alıp bunu currentIndex(default = 0) ile topluyoruz. ve bunun modunu alıyoruz
//currentIndex değişkeni 7 yani slides array'inin length'ine eşit olunca sonuç sıfır olacak
//ve imageSlider div'in translateX(0%)(0 * 100) olacak ve başa dönecek.
const nextImage = () => {
    currentIndex = (currentIndex + 1) % slidesLength
    updateSlider();
};
//setInterval method'u temizleniyor ve preImage method'unu çağırıyor.
buttonLeft.addEventListener("click", () => {
    if (auto) {
        clearInterval(slideInterval);
        preImage();
        slideInterval = setInterval(nextImage, intervalTime);
    }
});
//setInterval method'u temizleniyor ve nextImage method'unu çağırıyor
buttonRight.addEventListener("click", () => {
    if (auto) {
        clearInterval(slideInterval);
        nextImage();
        slideInterval = setInterval(nextImage, intervalTime);
    }
});
//otomatik nextImage method'u intervalTime değeri süresince çağırılıyor.
if (auto) {
    slideInterval = setInterval(nextImage, intervalTime);
}