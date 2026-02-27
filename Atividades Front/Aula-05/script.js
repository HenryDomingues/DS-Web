//Eventos do mouse
var area = document.getElementById("area")
var mensagem = document.getElementById("mensagem")
area.addEventListener("click", function () {
    mensagem.textContent = "Clique simples detectado!";
    area.style.backgroundColor = "orange";
    area.style.color = "lightgreen";
});

area.addEventListener("dblclick", function () {
    area.style.background = "lightgreen";
    area.style.color = "brown";
    mensagem.textContent = "Clique duplo detectado!";
});
area.addEventListener("mouseenter", function () {
    mensagem.textContent = "O mouse entrou na área!";
    area.style.backgroundColor = "red";
    area.style.color = "black";
});
area.addEventListener("mouseleave", function () {
    mensagem.textContent = "O mouse saiu da área!";
    area.style.backgroundColor = "blue";
    area.style.color = "white";
});
var posicao = document.getElementById("posicao");
area.addEventListener("mousemove", function (event) {
    posicao.textContent = "X:" + event.clientX + " Y:"
        + event.clientY;
});
area.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Botão direito clicado!");
});

//Eventos do teclado
document.addEventListener("keydown", function (event) {
    console.log("Tecla pressionada: " + event.key);
});
document.addEventListener("keyup", function (event) {
    console.log("Tecla liberada: " + event.key);
});
document.addEventListener("keypress", function (event) {
    console.log("Caractere digitado: " + event.key);
});
document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
var campo = document.getElementById("resultado");
campo.textContent = "Tecla pressionada: " + event.keyCode;

// Também mostra no console
console.log("Tecla pressionada: " + event.key);
});

//Eventos do Formulário

//Eventos da janela