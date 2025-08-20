var valuutta = 0;
var klikkaus = 1;
var upgrade1Hinta = 20;
var upgrade2Hinta = 200;

function laske() {
    valuutta = valuutta + klikkaus;
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
    
}