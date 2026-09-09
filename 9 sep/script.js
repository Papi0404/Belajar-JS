let namaInput = document.getElementById("namaInput");
let mottoInput = document.getElementById("mottoInput");
let button = document.getElementById("button_merge");

button.addEventListener("click", function () {
    let nama = namaInput.value;
    let motto = mottoInput.value;

    console.log("Nama: " + nama);
    console.log("Motto: " + motto);
});