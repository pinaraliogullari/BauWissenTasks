/**
 Ödev-6) Aşağıdaki kodu if else yapısına çeviriniz.

switch (tarayici) {
case 'Edge':
alert( "Edge browser kullanıyorsun" );
break;

case 'Chrome':
case 'Firefox':
case 'Safari':
case 'Opera':
alert( 'Tamam bunları destekliyoruz.' );
break;

default:
alert( 'Umarım sayfanız güzel görünüyordur' );
}
 */




let tarayici = navigator.userAgent; //tarayıcıyı tespit etmek için
if (tarayici.includes("Edge")){
    alert("Edge browser kullanıyorsun.");
}
else if (tarayici.includes("Chrome") || tarayici.includes("Firefox") || tarayici.includes("Safari") || tarayici.includes("Opera") ) {
    alert("Tamam bunları destekliyoruz.");

}
else {
    alert('Umarım sayfanız güzel görünüyordur.');

};