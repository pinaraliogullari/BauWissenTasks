/**
 *Ödev-5) Sayı bulmaca oyununu yapın. Puan ve hak sistemi de olsun. Kendiniz karar verin.
 */

let heart = 3;
let random = 0;
let score = 0;

let guesButton = document.getElementById("guess-button");
let againButton = document.getElementById("again-button");
let scoreButton = document.getElementById("score-button");
let result = document.getElementById("result");


function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

guesButton.addEventListener("click", function () {
    let inputDisplay = document.getElementById("number").value;

    random = getRandomNumber();



    if (parseInt(inputDisplay) == random) {
        result.innerHTML = "Tebrikler, bildiniz!";
        score += 10;
        scoreButton.innerHTML = `Puan: ${score}`;
    } else {
        let element = document.querySelectorAll("#hearts>i")[heart - 1];
        element.classList.remove("orange");

        result.classList.remove("hide");
        result.innerHTML = "Bilemediniz, lütfen tekrar deneyin";


        heart--;
    }
    if (heart == 0) {
        guesButton.classList.add("hide");
        guesButton.classList.remove("show");
        againButton.classList.remove("hide");
        againButton.classList.add("show");

        result.classList.add("show");
        result.classList.remove("hide");
        result.innerHTML = `Oyun bitti. Puanınız: ${score}`;
        score = 0;
        scoreButton.innerHTML = "Puan: ";
    }


})

againButton.addEventListener("click", function () {
    heart = 3;
    for (let i = 0; i < 3; i++) {
        let element = document.querySelectorAll("#hearts > i")[i];
        element.classList.add("orange");
    }

    guesButton.classList.add("show");
    guesButton.classList.remove("hide");
    againButton.classList.add("hide");
    againButton.classList.remove("show");
    document.getElementById("number").value = "";
    result.innerHTML = "";

})

