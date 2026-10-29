function calcularMedia() {
    // Captura dos elementos do DOM
    const nomeInput = document.getElementById('nome');
    const nota1Input = document.getElementById('nota1');
    const nota2Input = document.getElementById('nota2');
    const nota3Input = document.getElementById('nota3');
    const resultadoDiv = document.getElementById('resultado');

    // Resgate e limpeza de valores
    const nome = nomeInput.value.trim();
    const n1 = parseFloat(nota1Input.value);
    const n2 = parseFloat(nota2Input.value);
    const n3 = parseFloat(nota3Input.value);

    // Validação de Nome Vazio
    if (nome === "") {
        exibirMensagem("Por favor, informe o nome do estudante.", "erro");
        return;
    }

    // Validação de Notas (se foram preenchidas e se estão no intervalo de 0 a 10)
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        exibirMensagem("Por favor, preencha todas as três notas.", "erro");
        return;
    }

    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
        exibirMensagem("As notas devem conter valores obrigatoriamente entre 0.0 e 10.0.", "erro");
        return;
    }

    // Cálculo da média aritmética
    const media = (n1 + n2 + n3) / 3;
    
    // Definição da situação acadêmica
    let situacao = "";
    let classeEstilo = "";

    if (media >= 7.0) {
        situacao = "Aprovado(a)";
        classeEstilo = "aprovado";
    } else if (media >= 5.0 && media < 7.0) {
        situacao = "Recuperação";
        classeEstilo = "recuperacao";
    } else {
        situacao = "Reprovado(a)";
        classeEstilo = "reprovado";
    }

    // Exibição dos resultados formatados
    resultadoDiv.className = classeEstilo;
    resultadoDiv.innerHTML = `
        <h3>Resultado da Consulta</h3>
        <p><strong>Estudante:</strong> ${nome}</p>
        <p><strong>Média:</strong> ${media.toFixed(1)}</p>
        <p><strong>Situação:</strong> ${situacao}</p>
    `;
}

function exibirMensagem(mensagem, classe) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = classe;
    resultadoDiv.innerHTML = `<p><strong>Erro:</strong> ${mensagem}</p>`;
}

function limparCampos() {
    // Reseta o formulário
    document.getElementById('nome').value = "";
    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";
    document.getElementById('nota3').value = "";
    
    // Oculta a div de resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = "resultado-oculto";
    resultadoDiv.innerHTML = "";
}