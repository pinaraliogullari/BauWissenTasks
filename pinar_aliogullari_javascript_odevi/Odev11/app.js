let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

//1- sayilar listesindeki her bir elemanın karesini yazdırınız.
console.log("sayilar dizisindeki elemanlarin kareleri:")
sayilar.forEach((sayi, index) => {
    console.log(`${index}. index nolu sayının karesi: ${Math.pow(sayi, 2)}`);
});

console.log("********************************************************")

//2 - sayilar listesindeki hangi sayılar 5' in katıdır?

let beseBolunenler = sayilar.filter((sayi) => sayi % 5 == 0);
console.log(`sayilar dizisi icerisindeki 5'e bölünen sayilar: ${beseBolunenler.join("-")}`);

console.log("********************************************************")


//3- sayilar listesindeki çift sayıların toplamını bulunuz.
let total = 0
let ciftSayilar = sayilar.filter((sayi) => sayi % 2 == 0);
ciftSayilar.forEach(cift => {
    total += cift;
});

console.log(`sayilar dizisi icerisindeki cift sayilar: ${ciftSayilar.join("-")} ve toplamlari: ${total}`);

console.log("********************************************************")

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];

//4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
console.log("Dizi içindeki elemanların büyük harfli versiyonu:");
urunler.forEach(urun => {
    console.log(urun.toUpperCase());
});
console.log("********************************************************")


//5- urunler listesinde samsung geçen kaç ürün vardır?

let samsung = urunler.filter((urun) => urun.toLowerCase().includes("samsung"))
let count = samsung.length;


console.log(`urunler dizisi icerisinde  adında "samsung" gecen ${count} adet urun vardir.`);

console.log("********************************************************")

let ogrenciler = [
    { "ad": "yiğit", "soyad": "bilgi", "notlar": [60, 70, 60] }, //63.33
    { "ad": "ada", "soyad": "bilgi", "notlar": [80, 70, 80] }, //76.66
    { "ad": "çınar", "soyad": "turan", "notlar": [10, 20, 60] } //30
];
console.log(ogrenciler)

//6- ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
let averageNotes = 0;
let totalNotes = 0;
let result = " ";
let allAverage = 0;
let gno = 0;

function getAverage(notlar) {
    for (let i = 0; i < notlar.length; i++)
        totalNotes += notlar[i];
    return averageNotes = totalNotes / notlar.length;
}

ogrenciler.forEach(ogrenci => {
    totalNotes = 0;
    averageNotes = getAverage(ogrenci.notlar).toFixed(2);
    result = averageNotes <= 50 ? "basarisiz" : averageNotes >= 60 && averageNotes <= 70 ? "normal" : "basarili"
    console.log(`${ogrenci.ad} ${ogrenci.soyad} - not ortalamasi : ${averageNotes}  -basari durumu: ${result}`);
    allAverage += parseFloat(averageNotes);


});



//7- tüm öğrencilerin not ortalaması kaçtır?

gno = allAverage / ogrenciler.length
console.log(`Tüm ögrencilerin not ortalamasi: ${gno.toFixed(2)}`);