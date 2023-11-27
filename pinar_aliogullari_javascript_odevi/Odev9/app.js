/*
 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
2- Dizi kaç elemanlıdır?
3- Dizinin ilk ve son elemanı nedir?
4- Elma dizinin bir elemanımıdır?
5- Kiraz meyvesini listenin sonuna ekleyiniz.
6- Dizinin son 2 elemanını siliniz.
7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
Öğrenci 1: Kemal Devrimdar 2010 (70,60,80)
Öğrenci 2: Saliha Temel 2012 (80,80,90)
Öğrenci 3: Defne Küp 2009 (60,60,70)
*/

//MEYVELER

let arr = ["Elma", "Armut", "Muz", "Çilek"];
let arrLength = arr.length;
console.log(`Dizi ${arrLength} elemanlıdır.`);
console.log(`Dizinin ilk elemanı : ${arr[0]}`);
console.log(`Dizinin son elemanı : ${arr[arrLength - 1]}`);
let hasElma = arr.includes("Elma");
if (hasElma) {
    console.log("Elma dizinin bir elemanıdır.");
} else {
    console.log("Elma dizinin bir elemanı değildir.");
};

arr.push("Kiraz");
console.log(`Kirazlı dizi: ${arr}`);

arr.pop();
arr.pop();
console.log(`Dizinin son iki elemanı silinmiştir: ${arr}`);

console.log("********************************************************");

//ÖĞRENCİLER




const students = [
    {
        firstName: "Kemal",
        lastName: "Devrimdar",
        dateOfBirth: 2010,
        notes: [70, 60, 80]
    },
    {
        firstName: "Saliha",
        lastName: "Temel",
        dateOfBirth: 2012,
        notes: [80, 80, 90]
    },
    {
        firstName: "Defne",
        lastName: "Küp",
        dateOfBirth: 2009,
        notes: [60, 60, 70]
    }
]



let age = 0;
let total = 0;
let average = 0;

const calculateAge = dateOfBirth => {

    return age = new Date().getFullYear() - dateOfBirth;

}
const calculateAverage = notes => {
    total = 0;
    for (let i = 0; i < notes.length; i++) {
        total += notes[i];
    }
    return total / notes.length;
}

students.forEach(student => {
    age = calculateAge(student.dateOfBirth);
    average = calculateAverage(student.notes).toFixed(2);

    console.log(`${student.firstName} ${student.lastName} - Yaş: ${age} - Not Ortalaması: ${average}`);
});


