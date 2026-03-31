var divResposta = document.getElementById("resposta");

var botaoHello = document.getElementById("btn-hello");
botaoHello.addEventListener("click", requisicaoHello);

async function requisicaoHello() {
    var requisicao = await fetch("http://localhost/primeira-api/hello");
    var resposta = await requisicao.json();
    console.log(resposta);
}