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

/* Números - operações e cuidados */

// As quatro operações
10 + 3
10 - 3
10 * 3
10 / 3

// Módulo (resto da divisão)
10 % 3

// Potência
2 ** 8

// Incremento e decremento
let x = 5
x++
x--
x += 3
x *= 2

// O objetivo Math - funções matemáticas

Math.round(4.7)
Math.florr(4.9)
Math.ceil(4.1)
Math.abs(-10)
Math.max(3, 7, 1)
Math.min(3, 7, 1)
Math.sqrt(16)
Math.PI
Math.random()

// Número aleatório entre 1 e 10
Math.floor(Math.random() * 10) + 1

// Quando você soma string com número, JS concatena
'5' + 3
'5' - 3++

// Sempre converser antes de somar 
Number ('5') + 3
parseInt('5') + 3

//O projeto: calculadora de IMC

/* Classificação
Abaixo de 18,5 - Abaixo do peso
18,5 a 24,9 - Peso normal
25 a 29,9 - Sobrepeso
30 a 34,9 - Obesidade grau I
35 a 39,9 - Obesidade grau II
40 ou mais - Obesidade grau III */

let nome = prompt ('Qual é o seu nome?');
let pesoStr = prompt(`Olá, ${nome}! Qual é o seu peso em kg?/n(use vírgula ou ponto - ex: 75,5 ou 75.5)`);
let altStr = prompt ('Qual é a sua altura em metros?/n(ex: 1,75 ou 1.75');

let peso = Number(pesoStr.replace(',', '.'));
let alt = Number(altStr.replace(',','.'))

console.log('Nome:', nome);
console.log('Peso:' peso, typeof peso);
console.log('Altura', alt, typeof alt);

let imc = peso / (alt * alt);
let imcFormatado = imc.toFixed(1);

if (imc < 18.5) {
    classificacao = 'Abaixo do peso'
} else if (imc < 25) {
    classificacao = 'Peso normal'
} else if (imc < 30) {
    classificacao = 'Sobrepeso'
} else if (imc < 35) {
    classificacao = 'Obesidade grau I'
} else if (imc < 40) {
    classificação = 'Obesidade grau II'
} else if {
    classificacao = 'Obesidade grau III'};

    let resultado = `
    Resultado IMC
    
    Nome: ${nome}
    Peso: ${peso} kg
    Altura ${alt} m
    
    IMC: ${imcFormatado}
    Classificação:  ${classificacao}
    --------------------------------`;

    alert(resultado);
    console.log(resultado);

    