
const entrada     = prompt("Digite a temperatura atual em °C:");
const temperatura = parseFloat(entrada);


const tituloEl      = document.getElementById('titulo');
const temperaturaEl = document.getElementById('temperatura');
const mensagemEl    = document.getElementById('mensagem');


let classificacao = '';

if (temperatura > 35) {
    classificacao = "Está muito quente! ";
} else if (temperatura > 25) {
    classificacao = "Está quente! ";
} else if (temperatura >= 15 && temperatura <= 25) {
    classificacao = "O clima está agradável! ";
} else {
    classificacao = "Está frio! ";
}


temperaturaEl.textContent = `Temperatura informada: ${temperatura}°C`;
mensagemEl.textContent    = classificacao;


console.log(`Temperatura: ${temperatura}°C | Classificação: ${classificacao}`);
