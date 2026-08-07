let senha = prompt("Digite uma senha:")
console.log("Senha digitada: " + senha)

let tamanho = senha.length
console.log("Quantidade de caracteres: " + tamanho)

let temMaiuscula = senha !== senha.toLowerCase()
let temMinuscula = senha !== senha.toUpperCase()

console.log("Possui letra maiúscula? " + temMaiuscula)
console.log("Possui letra minúscula? " + temMinuscula)

let classificacao

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "Forte"
} else {
    classificacao = "Fraca"
}

console.log("Classificação da senha: " + classificacao)

alert(
    "Quantidade de caracteres: " + tamanho +
    "\nClassificação: " + classificacao
)