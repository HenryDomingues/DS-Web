var numero1 = Number(prompt("Digite o seu primeiro numero:"))
var numero2 = Number(prompt("Digite o seu segundo numero:"))
var resultado = numero1 + numero2
console.log(numero1 + numero2)
alert(resultado)
var resposta = window.confirm("deseja continuar?");
console.log(resposta);
let apagar = confirm("Tem certeza que deseja excluir?");
if(apagar){
    alert("Item apagado!");
}else{
    alert("Ação cancelada.");
}
let nome = prompt("Qual é o seu nome?")
if(nome === null){
    alert("Você cancelou.");
}else{
    alert("Olá, " + nome + "!");
}