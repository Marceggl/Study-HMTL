//Declarando variáveis
const btn1 = document.getElementById("bt1");
const btn2 = document.getElementById("reload");
var p = document.getElementById("resp");

//Inicio das funções
canc = () => { return alert("Programa Cancelado !\n┻━┻ ︵ ＼( °□° )／ ︵ ┻━┻"); }

function conf() {
    conf = window.confirm("Deseja iniciar o programa ?");
    if (conf == true) {
        info();
    } else {
        canc();
    }
}

function tntD() {
    let conf

    conf = window.confirm("Você não digitou um código de operação válido !! <( ￣^￣)\nDeseja tentar de novo?");

    if (conf == true) {
        info()
    } else {
        alert("Você não quer tentar de novo... okay ಥ_ಥ")
    }

}

function info() {
    let num1, num2, code, res;

    num1 = 0;
    num2 = 0;
    code = 0;

    while (num1 == 0) {
        num1 = prompt("Digite um número");
        num1 = num1.replace(',', '.');
        num1 = parseFloat(num1);
        if (num1 == null) {
            num1 = 1;
            return;
        }

    }
    while (num2 == 0) {
        num2 = prompt("Digite outro número");
        num2 = num2.replace(',', '.');
        num2 = parseFloat(num2);
        if (num2 == null) {
            num2 = 1;
            return;
        }

    }
    while (code == 0) {
        code = prompt("Digite um codigo de acordo com a tabela no site");
        code = code.replace(',', '.');
        if (code == null) {
            code = 1;
            return;
        }
    }

    switch (code) {
        case "1":
            res = num1 + num2;
            p.textContent = "A soma entre " + num1 + " + " + num2 + " = " + res;
            break;
        case "2":
            res = num1 - num2;
            p.textContent = "A divisão entre " + num1 + " - " + num2 + " = " + res;
            break;
        case "3":
            res = num1 * num2;
            p.textContent = "A soma entre " + num1 + " x " + num2 + " = " + res;
            break;
        case "4":
            res = num1 / num2;
            p.innerHTML = "A soma entre " + num1 + " &divide; " + num2 + " = " + res;
            break;
        default:
            tntD();
            break;
    }
}

//escutadores de eventos
btn1.addEventListener("click", conf);