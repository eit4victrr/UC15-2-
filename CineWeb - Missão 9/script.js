const produtos = [
{
        nome: "Pipoca",
        preco: 14,
        imagem: "pipoca.png"
    },

{ 
    nome: "chocolate-quente",
    preco: 15,
    imagem : "cachorro quente.png"
},

{
    nome: "chocolate",
    preco: 9,
    imagem: "Chocolates no cinema de luz quente.png"
},

{
    nome: "doce",
    preco: 6,
    imagem:"doce.png"
},

{
    nome: "refrigerante",
    preco: 10,
    imagem: "refrigerante.png"
},

];const produtosDiv = document.querySelector("#produtos");

produtos.forEach((produto, index) => {
    produtosDiv.innerHTML += `
        <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>

            <button onclick="adicionar(${index})">
                Adicionar
            </button>
        </div>
    `;
});

let combo = [];
let total = 0;

function adicionar(index) {

    combo.push(produtos[index]);

    total += produtos[index].preco;

    mostrarCombo();
}

function mostrarCombo() {

    const listaCombo = document.querySelector("#listaCombo");

    listaCombo.innerHTML = "";

    combo.forEach((produto, index) => {

        listaCombo.innerHTML += `
            <div>
                <img src="${produto.imagem}" width="60">

                <h3>${produto.nome}</h3>

                <p>R$ ${produto.preco.toFixed(2)}</p>

                <button onclick="remover(${index})">
                    Remover
                </button>
            </div>
        `;
    });

    listaCombo.innerHTML += `
        <h2>
            Total: R$ ${total.toFixed(2)}
        </h2>
    `;
}

function remover(index) {

    total -= combo[index].preco;

    combo.splice(index, 1);

    mostrarCombo();
}