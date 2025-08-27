var valuutta = 0;
var klikkaus = 1;
var upgrade1Hinta = 20;
var upgrade2Hinta = 200;
var sekunnissa = 0;

const luku = document.getElementById("luku");
const hinta1 = document.getElementById("hinta1");
const hinta2 = document.getElementById("hinta2");

function laske_klikkaus() {
    valuutta = valuutta + klikkaus;
    update_page();
}

function laske_sekunti() {
    valuutta = valuutta + sekunnissa;
    update_page();
}

function upgrade1() {
    if (valuutta >= upgrade1Hinta) {
        klikkaus ++;
        valuutta = valuutta - upgrade1Hinta;
        upgrade1Hinta = Math.round(upgrade1Hinta * 1.5);
        update_page();
    }
}

function upgrade2() {
    if (valuutta >= upgrade2Hinta) {
        sekunnissa ++;
        valuutta = valuutta - upgrade2Hinta;
        upgrade2Hinta = Math.round(upgrade2Hinta * 1.5);
        update_page();
    }
}

function update_page() {
    luku.innerHTML = valuutta;
    hinta1.innerHTML = "Hinta: " + upgrade1Hinta;
    hinta2.innerHTML = "Hinta: " + upgrade2Hinta;
}

setInterval(laske_sekunti, 1000);
