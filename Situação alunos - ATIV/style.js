let nota1q = prompt('Digite a primeira nota:');
let nota2e = prompt('Digite a segunda nota:');

let nota1 = Number(nota1q.replace(',', '.'));
let nota2 = Number(nota2e.replace(',', '.'));

let media = (nota1 + nota2) / 2;
let mediaFormatada = media.toFixed(1);

console.log('Nota 1:', nota1, typeof nota1);
console.log('Nota 2:', nota2, typeof nota2);
console.log('Média:', mediaFormatada);

let situacao = '';

if (media < 4) {
    situacao = 'REPROVADO';
} else if (media >= 5 && media <= 6) {
    situacao = 'RECUPERAÇÃO';
} else if (media > 7) {
    situacao = 'APROVADO';
} else {
    situacao = 'Em análise';
}

console.log('Situação do aluno:', situacao);


let resultado = `
Resultado Final

Nota 1: ${nota1}
Nota 2: ${nota2}

Média: ${mediaFormatada}
Situação: ${situacao}
-------------------------`;

alert(resultado);
console.log(resultado);