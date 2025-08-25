var valuutta = 0;
var klikkaus = 1;
var upgrade1Hinta = 20;
var upgrade2Hinta = 200;
var sekunnissa = 0;

function laske_klikkaus() {
    valuutta = valuutta + klikkaus;
    document.getElementById("luku").innerHTML = valuutta;
}

function laske_sekunti() {
    valuutta = valuutta + sekunnissa;
    document.getElementById("luku").innerHTML = valuutta;
}

function upgrade1() {
    if (valuutta - upgrade1Hinta >= 0) {
        klikkaus ++;
        valuutta = valuutta - upgrade1Hinta;
        upgrade1Hinta = Math.round(upgrade1Hinta * 1.5);
        document.getElementById("luku").innerHTML = valuutta;
        document.getElementById("hinta1").innerHTML = "Hinta: " + upgrade1Hinta;
    }
}

function upgrade2() {
    if (valuutta - upgrade2Hinta >= 0) {
        sekunnissa ++;
        valuutta = valuutta - upgrade2Hinta;
        upgrade2Hinta = Math.round(upgrade2Hinta * 1.5);
        document.getElementById("luku").innerHTML = valuutta;
        document.getElementById("hinta2").innerHTML = "Hinta: " + upgrade2Hinta;
    }
}

setInterval(laske_sekunti, 1000);