function calcularCustoTotal (passagem, hospedagem, alimentacao, passeios) {
    return (passagem + hospedagem + alimentacao + passeios);
}

let passagem = Number(prompt("Qual o valor da passagem?"));
let hospedagem = Number(prompt("Qual o valor da hospedagem?"));
let alimentacao = Number(prompt("Digite o custo da alimentação:"));
let passeios = Number(prompt("Qual o custo dos passeios?"));

let custoTotal = calculoTotal(passagem, hospedagem, alimentacao, passeios)

console.log(`O custo total foi ${custoTotal}.`)

if (custoTotal >= 2000) {
    console.log("A viagem está totalmente dentro do orçamento!");
} else {
    console.log("A viagem está fora do orçamento indicado.");
}