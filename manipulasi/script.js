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

// //overide
// let kata5 = "saya ingin makan nasi goreng";
// console.log(kata5, kata5.replace("nasi goreng", "sate kambing").
// replace("saya", "aku"));

// //uppercase
// let kata6 = "saya ingin makan nasi goreng";
// console.log(kata6, kata6.toUpperCase());
