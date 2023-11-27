let minusButton = document.getElementById("minus-button");
let plusButton = document.getElementById("plus-button");
let resetButton = document.getElementById("reset-button");
let input = document.getElementById("display");

let count = 0;


minusButton.addEventListener("click", function () {
    count--;
    UpdateDisplay();
})

plusButton.addEventListener("click", function () {
    count++;
    UpdateDisplay();

})

resetButton.addEventListener("click", function () {

    count = 0;
    UpdateDisplay();


})

function UpdateDisplay() {
    input.innerHTML = count;
    if (count < 0) {
        input.classList.remove("green");
        input.classList.add("red");
    } else if (count > 0) {
        input.classList.remove("red");
        input.classList.add("green");
    } else {
        input.classList.remove("red", "green");
    }
};

