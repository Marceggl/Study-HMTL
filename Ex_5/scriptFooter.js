//Declarando variáveis
const btn1 = document.getElementById("bt1");
const btn2 = document.getElementById("reload");
var p = document.getElementById("resp");

//Inicio das funções
canc = () => { alert("Programa Cancelado ! ≡(▔﹏▔)≡"); }

function conf() {
    conf = window.confirm("Deseja iniciar o programa ?");
    if (conf == true) {
        info();
    } else {
        canc();
    }
}

function info() {
    let price, code, finalPrice, secAtp;
    price = 0;
    code = 0;

    while (price <= 0) {
        price = prompt("Digite o valor da compra");
        price = parseFloat(price);
        if (price == null) {
            price = 1;
            return;
        }
    }
    while (code <= 0) {
        code = prompt("Digite o código da modalidade (conforme a tabela no site)");
        if (code == null) {
            code = 1;
            return;
        }
    }
    if (code == 1) {
        finalPrice = parseFloat(price - (price * 0.1));
        p.textContent = "Sua compra terá um desconto de 10% e sairá por R$" + finalPrice;
    } else if (code == 2) {
        finalPrice = parseFloat(price + (price * 0.2));
        p.textContent = "Sua compra terá juros de 2% e sairá por R$" + finalPrice;
    } else if (code == 3) {
        finalPrice = parseFloat(price + (price * 0.7));
        p.textContent = "Sua compra terá juros de 7% e sairá por R$" + finalPrice;
    } else {
        secAtp = window.confirm("Você não digitou um código válido, deseja tentar de novo ? ＞︿＜");
        if (secAtp == true) {
            info();
        } else {
            canc();
        }
    }



}


//escutadores de eventos
btn1.addEventListener("click", conf);