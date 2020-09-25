//Declarando variáveis
const btn1 = document.getElementById("bt1");
const btn2 = document.getElementById("reload");

var p = document.getElementById("resp");

function conf() {
    conf = window.confirm("Deseja iniciar o programa ?");
    if (conf == true) {
        info();
    } else {
        alert("Okay, programa não iniciado então 〜(￣▽￣〜)")
    }
}

function info() {
    var num, veri;
    num = parseFloat(prompt("Digite um número"))

    if (isNaN(num)) {
        p.textContent = "Você não digitou um número (ಥ _ ಥ)";
    } else {
        veri = num % 2;
        if (veri == 0) {
            p.textContent = "Seu número é par";
            alert(num + " É par");
        } else {
            p.textContent = "Seu número é impar";
            alert(num + " É impar");
        }
    }
}


btn1.addEventListener("click", conf);