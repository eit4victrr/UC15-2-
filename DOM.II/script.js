function mostrarCidade() {
    let cidade = document.getElementById("cidade").value;

    document.getElementById("mensagem").textContent =
        "Você escolheu ir para " + cidade + "!";
}

function destacarMensagem() {
    document.getElementById("mensagem").style.color = "blue";
    document.getElementById("mensagem").style.fontSize = "25px";
}

let contador = 10;

function aumentar() {
    contador++;

    document.getElementById("numero").textContent = contador;
}

function diminuir() {
    contador--;

    document.getElementById("numero").textContent = contador;
}