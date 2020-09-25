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
        alert("Okay, programa não iniciado então ԅ(¯﹃¯ԅ)")
    }
}

function info() {
    var num1, num2, num3, media;
    num1 = parseFloat(prompt("Digite a primeira nota do aluno"));
    num2 = parseFloat(prompt("Digite a segunda nota do aluno"));
    num3 = parseFloat(prompt("Digite a terceira nota do aluno"));


    if (isNaN(num1) || isNaN(num2)) {
        p.textContent = "OoOooops, digite números por favor !!! ¯\\_(ツ)_/¯";
    } else {
        media = (num1 + num2 + num3) / 3
        if (media >= 6) {
            p.textContent = "Este aluno foi Aprovado";
        } else if (media >= 3 && media < 6) {
            p.textContent = "Este aluno ficou de Exame";
        } else {
            p.textContent = "Aluno REPROVADO !!! X﹏X"
        }

    }

}


//escutadores de eventos
btn1.addEventListener("click", conf);
