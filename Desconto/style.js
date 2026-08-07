const Cliente = "Maria";
const precoCompra = 700.00;
const clientVip = true;

let percentDesconto = 0;

if (clientVip) {
    percentDesconto = 20;
} else if (precoCompra >= 500) {
    percentDesconto = 15;
} else if (precoCompra >= 200) {
    percentDesconto = 10;
} else {
    percentDesconto = 0;
}

const valorDesconto = (precoCompra * percentDesconto) / 100;
const valorFinal = precoCompra - valorDesconto;

console.log(`Nome: ${Cliente}`);
console.log(`Valor da compra: R$ ${precoCompra.toFixed(2)}`);
console.log(`Desconto: ${percentDesconto}%`);
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);


