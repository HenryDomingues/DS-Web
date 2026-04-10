var divResposta = document.getElementById("resposta")

var inputNome   = document.getElementById("nome")
var inputPreco   = document.getElementById("preco")
var inputCategoria   = document.getElementById("categoria_id")
var inputDisponivel   = document.getElementById("disponivel")


document.addEventListener('DOMContentLoaded', getProdutos)
document.getElementById('botaoEnviar').addEventListener('click', postProduto)

async function getProdutos() {
    var requisicao = await fetch("http://localhost/cafeteria-api/produtos")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.preco}</td>
            <td>${item.categoria_id}</td>
            <td>${item.disponivel}</td>
            <td><button onclick="deleteProduto(${item.id})">Deletar</button></td>
        </tr>
    `).join("");
   
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="6" ><center>Produtos Cadastrados</center></th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Categorias</th>
                    <th>Disponível</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}



async function postProduto() {
    var requisicao = await fetch("http://localhost/cafeteria-api/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: inputNome.value,
            preco: inputPreco.value,
            categoria_id: inputCategoria.value,
            disponivel: inputDisponivel.value
        })
    });

    var resposta = await requisicao.json();
    console.log(resposta);

    inputNome.value = "";
    inputPreco.value = "";
    inputCategoria.value = "";
    inputDisponivel.value = "";

    getProdutos();
}


async function deleteProduto(id) {
    var requisicao = await fetch("http://localhost/cafeteria-api/produtos/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getProdutos()
}