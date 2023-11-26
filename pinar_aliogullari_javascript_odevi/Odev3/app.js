/*
 Ödev-3) 1 den büyük olup 1 veya kendisi haricinde hiçbir sayıya kalansız bölünemeyen sayılara asal sayı denir.
Örneğin 5 bir asal sayıdır. Çünkü 2,3 ve 4 e kalansız bölünemez.
2 den n e kadar olan asal sayıları bulan kodu yazınız.
Örneğin n = 10 için sonuç 2,3,5,7 olacaktır.
NOT: Kod her türlü n değeri için çalışmalıdır, sabit bir sayı değildir.
 */



let primeNumbers = [];
let value = prompt("Lütfen bir sayı giriniz");

let numberConverted= parseInt(value);

if (isNaN(numberConverted) || numberConverted <= 1) {
    alert("Geçersiz bir sayı girdiniz. Lütfen pozitif bir tam sayı giriniz.");
} else {
    const getPrimeNumbers= numberConverted => {
        for (let i = 2; i <= numberConverted; i++) {
            let isPrime = true;

            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                primeNumbers.push(i);
            }
        }

        return primeNumbers;
    }

    console.log(`2 den n' e kadar olan asal sayılar: ${getPrimeNumbers(numberConverted) }`);
}