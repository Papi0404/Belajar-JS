let kata = "ABCDEF";
// console.log(kata.charAt(0));
console.log(kata, kata.charAt(0));
console.log(kata, kata.charAt(1));
console.log(kata, kata.charAt(2));

let namalengkap = "dadang sabrudin";
console.log(namalengkap, namalengkap.indexOf("s"));

let namaDepan ="dadang";
let namaBelakang = "sabrudin";
console.log(namaDepan.concat(" ", namaBelakang,"si bedul"));

//memotong kata
let kata2 = "Darul";
console.log(kata2, kata2.substring(2));

//slice
let kata3 = "Adam Rais";
console.log(kata3, kata3.slice(5, 2));

//replace and string
let kata4 = "saya ingin makan nasi goreng";
console.log(kata4, kata4.replace("nasi goreng", "sate kambing"));

//index of
let kata5 = "saya ingin makan nasi goreng";
console.log(kata5, kata5.indexOf("o"));

//replace
let kata6 = "saya ingin makan nasi goreng";
console.log(kata6, kata6.replace("nasi goreng", "sate kambing").
replace("saya", "aku"));

//format kapitalisasi
let kata7 = "jaka ingin mandi bareng adik nya";
console.log(kata7, kata7.toUpperCase());

//format huruf kecil
let kata8 = "JAKA DIKOJOY PAPA MANTAN";
console.log(kata8, kata8.toLowerCase());

// presisi transmisi angka
let angka = 123;
console.log(angka.i(10));