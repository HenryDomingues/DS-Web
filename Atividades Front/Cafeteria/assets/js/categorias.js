

var divResposta = document.getElementById("resposta")

var inputNome   = document.getElementById("nome")

document.addEventListener('DOMContentLoaded', getCategorias)
document.getElementById('botaoEnviar').addEventListener('click', postCategoria)

async function getCategorias() {
    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/categorias");
        if (!requisicao.ok) {
            throw new Error(`Erro HTTP: ${requisicao.status}`);
        }
        var resposta = await requisicao.json();

        console.log(resposta);

        // Gera as linhas automaticamente para todos os itens do array
        const linhas = resposta.data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td><button onclick="deleteCategoria(${item.id})">Deletar</button></td>
            </tr>
        `).join("");
        
        console.log(linhas);
        divResposta.innerHTML = `
            <table class="sua-classe">
                <thead>
                    <tr>
                        <th colspan="3" ><center>Categorias Cadastradas</center></th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    ${linhas}
                </tbody>
            </table>
        `;
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        divResposta.innerHTML = "<p>Erro ao carregar categorias. Verifique a API.</p>";
    }
}



async function postCategoria() {
    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/categorias", {
            method:  "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:    JSON.stringify({ nome: inputNome.value })
        });
        if (!requisicao.ok) {
            throw new Error(`Erro HTTP: ${requisicao.status}`);
        }
        var resposta = await requisicao.json();
        console.log(resposta);
        
        //Limpa o campo
        inputNome.value = "";

        getCategorias();
    } catch (error) {
        console.error("Erro ao cadastrar categoria:", error);
        alert("Erro ao cadastrar categoria. Verifique a API.");
    }
}


async function deleteCategoria(id) {
    try {
        var requisicao = await fetch("http://localhost/cafeteria-api/categorias/" + id, {
            method: "DELETE"
        });
        if (!requisicao.ok) {
            throw new Error(`Erro HTTP: ${requisicao.status}`);
        }
        var resposta = await requisicao.json();
        console.log(resposta);
 
        getCategorias();
    } catch (error) {
        console.error("Erro ao deletar categoria:", error);
        alert("Erro ao deletar categoria. Verifique a API.");
    }
}
