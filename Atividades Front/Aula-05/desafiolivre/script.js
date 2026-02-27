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
