//Criando o contador de itens
var contadorItem = 0


function adicionar() {

//incrementando o contador de intens
contadorItem ++

//crio o item
let novoItem = document.createElement("li");
//adiciono texto ao meu item
novoItem.textContent = contadorItem + " - " + prompt("Digite o nome da tarefa");
//atribuo um id
novoItem.setAttribute("id", contadorItem)
//
document.getElementById("lista").appendChild(novoItem);

//cria o botão de remover
let botaoRemover = document.createElement("button")
botaoRemover.textContent = "Remover"
botaoRemover.setAttribute("onclick", "remover("+contadorItem+")")//adiciona uma função ao botão

novoItem.appendChild(botaoRemover)//adiciona botão ao novo item
document.getElementById("lista").appendChild(novoItem);
}
function remover(id) {
    var item = document.getElementById(id);
    document.getElementById("lista").removeChild(item);
}