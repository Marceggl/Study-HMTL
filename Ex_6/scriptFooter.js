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
    let h, w, s, imc;
    h = 0;
    w = 0;
    s = 0;

    while (h == 0) {
        h = prompt("Qual é sua altura em metros ?");
        h = h.replace(',', '.');
        if (h == null) {
            h = 1;
            return;
        }

    }
    while (w == 0) {
        w = prompt("Qual seu peso em Kg ?");
        w = w.replace(',', '.');
        if (w == null) {
            w = 1;
            return;
        }
    }
    while (s == 0) {
        s = prompt("Qual se sexo ? f - Feminino / m - Masculino")

        if (s == null) {
            s = 1;
            return;
        } else {
            s = s.toLowerCase();

        }
    }
    if (s == "f") {
        imc = parseFloat(w / (h * h));
        imc = imc.toFixed(2);

        if (imc < 19.1) {
            p.innerHTML = "Seu imc é: " + imc + "<br/>Você está abaixo do peso <br/>┗|｀O′|┛";
            alert("Você está abaixo do peso");
        } else if (imc >= 19.1 && imc <= 25.8) {
            p.innerHTML = "Seu imc é: " + imc + "<br/>Você está no peso ideal <br/>（︶^︶）";
            alert("Você está no peso ideal");
        } else if (imc >= 25.8 && imc <= 27.3) {
            p.innerHTML = "Seu imc é: " + imc + "<br/>Você está pouco acima do peso <br/>￣へ￣";
            alert("Você está pouco acima do peso");
        } else if (imc >= 27.3 && imc <= 32.3) {
            p.innerHTML = "Seu imc é: " + imc + "<br/>Você está acima do peso <br/>o((>ω< ))o";
            alert("Você está acima do peso");
        } else if (imc > 32.3) {
            p.innerHTML = "Seu imc é: " + imc + "<br/>Zona de perigo, você esta com obesidade <br/>ಥ_ಥ";
            alert("Zona de perigo, você esta com obesidade");
        }
    }
    if (s == "m") {
        imc = parseFloat(w / (h * h));
        imc = imc.toFixed(2);

        if (imc < 20.7) {
            p.innerHTML = "Seu imc é: " + imc + "<br/>Você está abaixo do peso <br/>┗|｀O′|┛"
            alert("Você está abaixo do peso");
        } else if (imc >= 20.7 && imc < 26.4) {
            p.innerHTML = "Seu imc é: " + imc + "<br/>Você está no peso ideal <br/>（︶^︶）"
            alert("Você está no peso ideal");
        } else if (imc >= 26.4 && imc <= 27.8) {
            p.innerHTML = "Seu imc é: " + imc + "<br/>Você está pouco acima do peso <br/>￣へ￣"
            alert("Você está pouco acima do peso");
        } else if (imc > 27.8 && imc < 31.1) {
            p.innerHTML = "Seu imc é: " + imc + "<br/>Você está Acima do peso <br/>o((>ω< ))o"
            alert("Você está acima do peso");
        } else if (imc > 31.1) {
            p.innerHTML = "Seu imc é: " + imc + "<br/>Zona de perigo, você esta com obesidade <br/>ಥ_ಥ"
            alert("Zona de perigo, você esta com obesidade");
        }
    }
}
//escutadores de eventos
btn1.addEventListener("click", conf);