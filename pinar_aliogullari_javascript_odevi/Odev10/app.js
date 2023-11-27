
const siparis1 = {
    siparisId: 101,
    siparisTarihi: "31.12.2022",
    odemeSekli: "kredi kartı",
    kargoAdresi: "Yahya kaptan mah.Kocaeli İzmit",

    satinAlinanUrunler: [
        {
            urunId: 5,
            urunBasligi: "IPhone 13 Pro",
            urunUrl: "http://abc.com/iphone-13-pro",
            urunFiyati: 22000,
        },
        {
            urunId: 6,
            urunBasligi: "IPhone 13 Pro Max",
            urunUrl: "http://abc.com/iphone-13-pro-max",
            urunFiyati: 25000,

        }
    ],

    musteri: {
        musteriId: 12
    },
    satici: {
        firmaId: 34,
        firmaAdi: "Apple Türkiye"
    }
};


const siparis2 = {
    siparisId: 102,
    siparisTarihi: "30.12.2022",
    odemeSekli: "kredi kartı",
    kargoAdresi: "Yahya kaptan mah.Kocaeli İzmit",

    satinAlinanUrunler: [

        {
            urunId: 6,
            urunBasligi: "IPhone 13 Pro Max",
            urunUrl: "http://abc.com/iphone-13-pro-max",
            urunFiyati: 25000,

        }

    ],
    musteri: {
        musteriId: 12
    },
    satici: {
        firmaId: 34,
        firmaAdi: "Apple Türkiye"
    }
};

let totalSeperate = 0;
let total = 0;
const getTotalSeperate = siparis => {
    totalSeperate = 0;
    siparis.satinAlinanUrunler.forEach(urun => {
        totalSeperate += urun.urunFiyati * 1.8;
    });
    return totalSeperate;
}


const getTotal = (siparis1, siparis2) => {
    total = getTotalSeperate(siparis1) + getTotalSeperate(siparis2);
    return total;

}

console.log(`Sipariş 1'in toplam tutarı: ${getTotalSeperate(siparis1)} TL`);
console.log(`Sipariş 2'nin toplam tutarı: ${getTotalSeperate(siparis2)} TL`);
console.log(`Tüm siparişlerin toplam tutarı: ${getTotal(siparis1, siparis2)} TL`);


