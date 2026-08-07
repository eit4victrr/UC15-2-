let nome = prompt ("Qual o seu nome?")
console.log("O nome digitado foi: " + nome)

let cargo = prompt ("Qual seu cargo?")
console.log("O cargo do usuário é: " + cargo)

let empresa = prompt ("Qual sua empresa?")
console.log("A empresa do usuário é: " + empresa)

let email = prompt ("Qual seu E-Mail?")
console.log("O E-mail do usuário é: " + email)


let nomeMaiusculo = nome.toUpperCase()
let cargoMaiusculo = cargo.toUpperCase()
let empresaMaiusculo = empresa.toUpperCase()
let emailMaiusculo = email.toUpperCase()

console.log("Bem vindo!")
console.log("Nome: " + nomeMaiusculo)
console.log("Cargo: " + cargoMaiusculo)
console.log("Empresa: " + empresaMaiusculo)
console.log("E-Mail: " + emailMaiusculo)

alert("Cartão criado com sucesso!")