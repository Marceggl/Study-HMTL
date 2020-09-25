//Declarando variáveis
const btn1 = document.getElementById("bt1");
const btn2 = document.getElementById("reload");
var p = document.getElementById("resp");

//Inicio das funções
canc = () => { return alert("Programa Cancelado ! ≡(▔﹏▔)≡"); }

function conf() {
    conf = window.confirm("Deseja iniciar o programa ?");
    if (conf == true) {
        info();
    } else {
        canc();
    }
}

function info() {
    let sal, salDesc;
    sal = 0;

    while (sal == 0) {
        sal = prompt("Digite seu salário");
        sal = sal.replace(',', '.');
        if (sal == null) {
            sal = 1;
            return;
        }
    }
    sal = parseFloat(sal);
    if (sal <= 1434) {
        p.textContent = "Seu salário de R$" + sal + " esta Isento de alíquota";
    } else if (sal > 1434 && sal <= 2150) {
        salDesc = sal - (sal * 0.75);
        p.textContent = "Seu salário de R$" + sal + " receberá uma alíquota de 7,5% virando R$" + salDesc;
    } else if (sal > 2150 && sal < 2866) {
        salDesc = sal - (sal * 0.15);
        salDesc = salDesc.toFixed((2));
        p.textContent = "Seu salário de R$" + sal + " receberá uma alíquota de 15% virando R$" + salDesc;
    } else if (sal > 2866 && sal < 3582) {
        salDesc = sal - (sal * 0.225);
        salDesc = salDesc.toFixed((2));
        p.textContent = "Seu salário de R$" + sal + " receberá uma alíquota de 22,5% virando R$" + salDesc;
    } else if (sal > 3582) {
        salDesc = sal - (sal * 0.275);
        salDesc = salDesc.toFixed((2));
        p.textContent = "Seu salário de R$" + sal + " receberá uma alíquota de 28,5% virando R$" + salDesc;
    }



}
//escutadores de eventos
btn1.addEventListener("click", conf);