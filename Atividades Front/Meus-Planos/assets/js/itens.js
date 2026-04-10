const URL_BASE = "http://localhost/meus-planos-api";

// Seletores
const divResposta = document.getElementById("resposta");
const inputNome = document.getElementById("nome");
const selectCategoria = document.getElementById("categoria_id");

// Variável global para armazenar os nomes das categorias
let categoriasCache = [];

function isFeito(value) {
    return value === true || value === 1 || value === '1' || value === 'true';
}

function toFeitoPayload(value) {
    return isFeito(value) ? 1 : 0;
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', async () => {
    // 1º Carregamos as categorias, pois os itens dependem delas para exibir o nome
    await getCategorias();
    // 2º Carregamos os itens
    await getItens();
});

document.getElementById('botaoEnviar').addEventListener('click', postItem);

// --- 1. BUSCAR CATEGORIAS (Preencher Select e Cache) ---
async function getCategorias() {
    try {
        const requisicao = await fetch(`${URL_BASE}/categorias`);
        const resposta = await requisicao.json();

        // Armazena no cache (usando resposta.data do seu exemplo)
        categoriasCache = resposta.data || resposta;

        // Preenche o Select do formulário
        selectCategoria.innerHTML = '<option value="">Selecione uma categoria</option>';
        categoriasCache.forEach(cat => {
            const option = document.createElement("option");
            option.value = cat.id;
            option.textContent = cat.nome;
            selectCategoria.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
    }
}

// --- 2. LISTAR ITENS NA TABELA (Com nome da categoria) ---
async function getItens() {
    try {
        const requisicao = await fetch(`${URL_BASE}/itens`);
        const resposta = await requisicao.json();
        const itens = resposta.data || resposta;

        const linhas = itens.map(item => {
            const feito = isFeito(item.feito);
            const nomeCategoria = item.categoria_nome || (categoriasCache.find(c => c.id == item.categoria_id)?.nome) || "Sem Categoria";

            return `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.nome}</td>
                    <td>${nomeCategoria}</td>
                    <td>
                        <button onclick="updateStatusItem(${item.id}, ${feito ? 1 : 0})">
                            ${feito ? "✅ Concluído" : "⏳ Pendente"}
                        </button>
                    </td>
                    <td><button onclick="deleteItem(${item.id})">Deletar</button></td>
                </tr>
            `;
        }).join("");

        divResposta.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Status</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>${linhas}</tbody>
            </table>
        `;
    } catch (error) {
        console.error("Erro ao buscar itens:", error);
    }
}

// --- 3. MUDAR STATUS (PUT) ---
async function updateStatusItem(id, statusAtual) {
    try {
        const novoStatus = !isFeito(statusAtual);

        const requisicao = await fetch(`${URL_BASE}/itens/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ feito: toFeitoPayload(novoStatus) })
        });

        if (!requisicao.ok) throw new Error('Falha na resposta do servidor');

        // Atualiza a lista para refletir a mudança
        await getItens();
    } catch (error) {
        console.error("Erro ao mudar status:", error);
        alert("Erro ao atualizar status. Verifique se a rota PUT /itens/{id} está correta.");
    }
}

// --- 4. CADASTRAR ITEM (POST) ---
async function postItem() {
    const dados = {
        nome: inputNome.value,
        categoria_id: selectCategoria.value,
        feito: 0
    };

    if (!dados.nome || !dados.categoria_id) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
        const requisicao = await fetch(`${URL_BASE}/itens`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });

        if (requisicao.ok) {
            inputNome.value = "";
            selectCategoria.value = "";
            await getItens();
        }
    } catch (error) {
        console.error("Erro no cadastro:", error);
    }
}

// --- 5. DELETAR ITEM ---
async function deleteItem(id) {
    if (!confirm("Deseja deletar?")) return;
    try {
        await fetch(`${URL_BASE}/itens/${id}`, { method: "DELETE" });
        await getItens();
    } catch (error) {
        console.error("Erro ao deletar:", error);
    }
}