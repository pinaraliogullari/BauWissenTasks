/*
Ödev-4) Girilen bir yıl değerinin (örneğin: 1975) artık yıl olup olmadığını bulup konsola sonucu yazdırın. Bir yıl 400'e tam olarak bölünebiliyorsa ya da 4'e tam olarak bölünmekle birlikte 100'e de tam olarak bölünemiyorsa artık yıldır.
*/

let value = prompt("Lütfen bir yıl değeri giriniz");


const isYear = value => {
    if (isNaN(value)) {
        console.log("Geçersiz değer")
    }
    else if (value % 4 == 0 && value % 100 !== 0 || value % 400 == 0) {
        console.log(`${value} bir artık yıldır.`)
    } else {
        console.log(`${value}  bir artık yıl değildir.`)

    }
}

isYear(value);
