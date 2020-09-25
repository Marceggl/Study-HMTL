//Declarando variáveis
const btn1 = document.getElementById("bt1");
const btn2 = document.getElementById("reload");
var p = document.getElementById("resp");

//Inicio das funções
function conf() {
    conf = window.confirm("Deseja iniciar o programa ?");
    if (conf == true) {
        info();
    } else {
        alert("Okay, programa não iniciado então (✿◠‿◠)")
    }
}


function info() {
    var num1, num2;
    num1 = parseFloat(prompt("Digite um número"))
    num2 = parseFloat(prompt("Digite outro número"))

    if (isNaN(num1) || isNaN(num2)) {
        p.textContent = "OoOooops, digite números por favor !!! §(*￣▽￣*)§";
    } else if (num2 < num1) {
        p.textContent = num1 + " é maior que " + num2;
    } else if (num2 > num1) {
        p.textContent = num2 + " é maior que " + num1;
    } else {
        p.textContent = num2 + " é igual a " + num1;
    }

}


//escutadores de eventos
btn1.addEventListener("click", conf);
