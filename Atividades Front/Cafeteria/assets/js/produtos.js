
var divResposta = document.getElementById("resposta")
var inputNome    = document.getElementById("nome")
var inputPreco   = document.getElementById("preco")
var inputCategoria = document.getElementById("categoria")

document.addEventListener('DOMContentLoaded', getProdutos)
document.getElementById('botaoEnviar').addEventListener('click', postProduto)


async function getProdutos() {
    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/produtos");
        if (!requisicao.ok) {
            throw new Error(`Erro HTTP: ${requisicao.status}`);
        }
        var resposta = await requisicao.json();

        console.log(resposta);

        const linhas = resposta.data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>R$ ${item.preco}</td>
                <td>${item.id_categoria}</td>
                <td><button onclick="deleteProduto(${item.id})">Deletar</button></td>
            </tr>
        `).join("");
        
        divResposta.innerHTML = `
            <table class="sua-classe">
                <thead>
                    <tr>
                        <th colspan="5"><center>Produtos Cadastrados</center></th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Cat. ID</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    ${linhas}
                </tbody>
            </table>
        `;
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        divResposta.innerHTML = "<p>Erro ao carregar produtos. Verifique se a API está rodando.</p>";
    }
}


async function postProduto() {
    const dados = {
        nome: inputNome.value,
        preco: inputPreco.value,
        id_categoria: inputCategoria.value
    }

    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        if (!requisicao.ok) {
            throw new Error(`Erro HTTP: ${requisicao.status}`);
        }

        var resposta = await requisicao.json();
        console.log(resposta);
        
        inputNome.value = "";
        inputPreco.value = "";
        inputCategoria.value = "";

        getProdutos();
    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
        alert("Erro ao cadastrar produto. Verifique os dados e a API.");
    }
}


async function deleteProduto(id) {
    if (!confirm("Deseja realmente excluir este produto?")) return;

    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/produtos/" + id, {
            method: "DELETE"
        });

        if (!requisicao.ok) {
            throw new Error(`Erro HTTP: ${requisicao.status}`);
        }

        var resposta = await requisicao.json();
        console.log(resposta);

        getProdutos();
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        alert("Erro ao deletar produto. Verifique a API.");
    }
}