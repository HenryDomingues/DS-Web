var divResposta = document.getElementById("resposta")
var inputCliente

document.addEventListener('DOMContentLoaded', () => {
    inputCliente = document.getElementById("cliente")
    getPedidos()
})

document.getElementById('botaoEnviar').addEventListener('click', postPedido)

async function getPedidos() {
    var req = await fetch("http://localhost/cafeteria-api/pedidos")
    var res = await req.json()

    const linhas = res.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.cliente}</td>
            <td>${item.total}</td>
            <td>${item.criado_em}</td>
            <td>
                <button onclick="verPedido(${item.id})">Visualizar</button>
                <button onclick="deletePedido(${item.id})">Deletar</button>
            </td>
        </tr>
    `).join("")

    divResposta.innerHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Data</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>${linhas}</tbody>
        </table>
    `
}

function verPedido(id) {
    window.location.href = `pedido-itens.html?id=${id}`
}

async function postPedido() {
    await fetch("http://localhost/cafeteria-api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            cliente: inputCliente.value
        })
    })

    inputCliente.value = ""
    getPedidos()
}

async function deletePedido(id) {
    await fetch("http://localhost/cafeteria-api/pedidos/" + id, {
        method: "DELETE"
    })

    getPedidos()
}
