let produto = prompt("Escreva o nome do produto: ")
console.log("Produto: " + produto)

let preco = Number(prompt("Escreva o preço original do produto: "))
console.log("Preço original: R$ " + preco)

let desconto = Number(prompt("Escreva o percentual de desconto: "))
console.log("Desconto: " + desconto + "%")

let valorDesconto = preco * (desconto / 100)
let precoFinal = preco - valorDesconto

console.log("Resultado")
console.log("Produto: " + produto)
console.log("Valor do desconto: R$ " + valorDesconto)
console.log("Preço final: R$ " + precoFinal)

alert(
    "Produto:  " + produto)
  alert(  "Valor do desconto: R$ " + valorDesconto )
   alert( "Preço final: R$ " + precoFinal )

