let usuarioCorreto = "Bruno";
let senhaCorreta = "1411";

let usuarioDigitado = prompt("Digite o Usuário:");
let senhaDigitada = prompt("Digite a Senha:");

if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    console.log("Login realizado com sucesso!");
} else if (usuarioDigitado !== usuarioCorreto) {
    console.log("Usuário incorreto.");
} else {
    console.log("Senha incorreta.");
}