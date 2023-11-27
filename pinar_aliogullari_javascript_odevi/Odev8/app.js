/**
 *Ödev-8) Verilen url ve ders adı bilgisini kullanarak aşağıdaki işlemleri yapınız.
url="https://www.wissenakademie.com&quot;;
dersAdi="Fullstack Web Developer Eğitimi";
-url kaç karakterlidir?
-ders adı kaç kelimeden oluşmaktadır?
-url https ile başlıyor mu?
-ders adı içinde Eğitimi kelimesi geçiyor mu?
-url ve ders adını kullanarak aşağıdaki string ifadeyi oluşturun:
https://www.wissenakademie.com/fullstack-web-gelistirme-egitimi
 */




let url = "https://www.wissenakademie.com&quot;";
let lessonName = "Fullstack Web Developer Eğitimi";


//urlnin karakter sayısı
let urlLetterCount = url.length;
console.log(`Url'deki karakter sayısı: ${urlLetterCount}`);

// ders adının kelime sayısı
let wordCount = (lessonName.split(" ")).length;
console.log(`Ders adındaki kelime sayısı: ${wordCount}`);

//url https ile başlıyor mu?
let hasHttps = url.includes("https");
if (!hasHttps) console.log("Url https ile başlamıyor.");
else {
    console.log("Url 'https' ile başlıyor.");
}

//ders adı içinde Eğitimi kelimesi geçiyor mu ?
let indexEgitim= lessonName.indexOf("Eğitimi");
console.log(`Ders adı içinde "Eğitimi" kelimesi bulunmaktadır. Ve index numarası: ${indexEgitim} tür.`);


//-url ve ders adını kullanarak aşağıdaki string ifadeyi oluşturun:
//https://www.wissenakademie.com/fullstack-web-gelistirme-egitimi

let indexAndQuot =url.indexOf("&");
let sliceUrl= url.slice(0,30);

let lessonNameReplace=(lessonName.replace("Developer", "Gelistirme")).replace("ğ","g");
let lessonNameLower = lessonNameReplace.toLowerCase();
let newLessonName = (lessonNameLower.split(" ")).join("-");
let newUrl= sliceUrl.concat("/", newLessonName);

console.log(`Yeni Url: ${newUrl}`);

