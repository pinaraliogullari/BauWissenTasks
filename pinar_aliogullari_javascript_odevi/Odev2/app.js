/*
 * Ödev-2) Kullanıcıya her defasında 100'den büyük bir sayı girmesi için prompt ile veri girmesini isteyin. Eğer farklı bir değer girerse tekrardan değer girmesi talebinde bulunun.
Kullanıcı 100 den büyük bir sayı veya boş satıra onay verene kadar döngüye devam edilmelidir.
Burada kullanıcının sadece sayısal değerler gireceğini farzedin. Ayrıca sayısal değerleri kontrol için bir kod yazmak ile uğraşmayın.
 */

let inputValue = prompt("Lütfen 100'den büyük bir sayı giriniz.");
while (inputValue != null &&  parseInt(inputValue) < 100  ) {
    inputValue = prompt("Lütfen tekrar deneyiniz.")
}
