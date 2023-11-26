/*Ödev-1) Prompt aracılığı ile kullanıcıdan bir saniye değeri alın. Örneğin 1500. Ardından bu girilen değerin kaç dakika, kaç saniye olduğunu hesaplayıp konsola düzgün bir şekilde yazdırın.
Örnek sonuç:
Girilen değer: 1270
Sonuç: 21 dakika 10 saniye */




let inputValue = prompt("Lütfen herhangi bir saniye değeri giriniz.");

let  minute = Math.trunc(inputValue / 60);
let second = inputValue - (60 * minute);
console.log(`${minute} dakika ${second} saniye`);


