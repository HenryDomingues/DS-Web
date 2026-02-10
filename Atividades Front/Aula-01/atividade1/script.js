let nome = prompt("Qual é o seu nome?")
let sobrenome = prompt("Qual é o seu sobrenome?")
console.log(nome + sobrenome)
if(nome === null){
    alert("Você cancelou.");
}else{
    alert("Olá, " + nome +" " + sobrenome + "!");
}