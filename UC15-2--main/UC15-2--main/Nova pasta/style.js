let nome = ' Pedro';
let curso = 'MedTec';
let ano = 2;

console.log("Bem Vindo! " + nome + "Você é do curso " + curso)

/*let texto = "Bem Vindo! " + nome + "Você é do curso " + curso + "da série do " + ano + "º" */

/*let texto = `Bem vindo ${nome}! você é do ${curso} e da série ${ano}`*/

console.log(texto)

let multilinhas = `
Primeira linha
Segunda linha
Terceira linha 
`;

console.log(multilinhas)

let texto = ' Desenvolvedor Front-end ';

// Comprimento

let tamanho = tamanho.length

// Remover espaços das bordas
let remove = texto.trim()

console.log (remove)

// Maiúsculo e minúsculo

texto.trim().toUpperCase()
texto.trim().toLowerCase()

console.log(maiusculo)
console.log(minusculo)

let mudanca = texto.replace('Front-end', 'Back-end')

console.log(mudanca)
console.log(tamanho)

if (!nome || nome.trim() === '') {
    alert('Nome não pode estar vazio!');

}else if (isNaN(peso) || is NaN(alt)) {
    alert('Digite apenas números para peso e altura');

}else if (peso <== 0 || alt <==0) {
    alert('Peso e altura precisam ser maiores que zero.');

} else {
    let imc = peso / (alt * alt);
    let imcFormatado = imc.toFixed(1);

    let classificação = '';
    let emoji = '';
}