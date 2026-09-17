let aritmatika1, operatorAritmatika, aritmatika2, hasilAritmatika;

document.getElementById('buttonAritmatika').onclick = function() {

aritmatika1 = parseInt(document.getElementById('aritmatika1').value);
aritmatika2 = parseInt(document.getElementById('aritmatika2').value);
operatorAritmatika = document.getElementById('operatorAritmatika').value;

if (operatorAritmatika == "+") {
    hasilAritmatika = aritmatika1 + aritmatika2;
} else if (operatorAritmatika == "-") {
    hasilAritmatika = aritmatika1 - aritmatika2;
} else if (operatorAritmatika == "/") {
    hasilAritmatika = aritmatika1 / aritmatika2;
} else if (operatorAritmatika == "%") {
    hasilAritmatika = aritmatika1 % aritmatika2;
} else if (operatorAritmatika == "*") {
    hasilAritmatika = aritmatika1 * aritmatika2;
}

document.getElementById('hasilAritmatika').innerHTML = hasilAritmatika;

}
