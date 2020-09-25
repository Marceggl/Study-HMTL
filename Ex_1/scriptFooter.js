//Declarando variáveis
const btn1 = document.getElementById("bt1");
const btn2 = document.getElementById("reload");

var p = document.getElementById("resp");

function conf() {
    conf = window.confirm("Esté pronto?");
    if (conf == true) {
        info();
    } else {
        alert("Programa cancelado !!!")
    }
}

function info() {
    var purchPrice, numOfParcels, altPrice;

    purchPrice = parseFloat(prompt("Digite o valor total da sua compra: "));
    numOfParcels = parseFloat(prompt("Digite a quantidade de parcelas da compra 1x,2x,4x: "));

    if (numOfParcels == 1) {
        alert("Sua compra será a vista e terá o valor de R$" + purchPrice);
    } else if (numOfParcels == 2) {
        altPrice = purchPrice * 1.03;
        p.textContent = "Sua compra de valor R$" + purchPrice + " será feita em " + numOfParcels + "x e terá 3% de juros dando um total de R$" + altPrice;
        p.classList.add("resultado");
    } else if (numOfParcels == 4) {
        altPrice = purchPrice * 1.07;
        p.textContent = "Sua compra de valor R$" + purchPrice + "será feita em " + numOfParcels + "x e terá 7% de juros dando um total de R$" + altPrice;
        p.classList.add("resultado");
    } else {
        p.textContent = "Ooops, algo que digitou não está certo tente de novo :/";
        p.classList.add("resultado");
    }
}


btn1.addEventListener("click", conf);