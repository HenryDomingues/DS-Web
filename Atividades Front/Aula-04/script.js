let contadorId = 0;

function cadastrarAluno() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const ID = document.getElementById("ID").value;
    const telefone = document.getElementById("telefone").value;
    const turma = document.getElementById("turma").value;

    // Validação
    if (nome === "" || email === "" || ID === "" || telefone === "" || turma === "") {
        alert("Preencha todos os campos!");
        return;
    }

    contadorId++;
    const idAtual = "aluno-" + contadorId;

    const lista = document.getElementById("listaAlunos");

    const alunoDiv = document.createElement("div");
    alunoDiv.setAttribute("id", idAtual);
    alunoDiv.style.border = "1px solid black";
    alunoDiv.style.padding = "10px";
    alunoDiv.style.margin = "10px 0";

    alunoDiv.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>ID:</strong> ${ID}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Turma:</strong> ${turma}</p>
        <button onclick="excluirAluno('${idAtual}')">Excluir</button>
    `;

    lista.appendChild(alunoDiv);

    limparCampos();
}

function excluirAluno(id) {
    if (confirm("Deseja excluir este aluno?")) {
        document.getElementById(id).remove();
    }
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("ID").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("turma").value = "";

    document.getElementById("nome").focus();
}