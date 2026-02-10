//Função para somar dois números

function somarNumeros(num1, num2) {
    return num1 + num2;
}   
let resultado = somarNumeros(5, 10);
console.log("O resultado da soma é: " + resultado);
alert("O resultado da soma é: " + resultado);

//Trabalhando com data e hora
let dataAtual = new Date();
console.log("Data e hora atual: " + dataAtual.toISOString());
alert("Data e hora atual: " + dataAtual.toISOString()); 

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minutos = dataAtual.getMinutes();
let segundos = dataAtual.getSeconds();

console.log(`${dia}/${mes}/${ano} às ${hora}:${minutos}:${segundos}`);
alert(`${dia}/${mes}/${ano} às ${hora}:${minutos}:${segundos}`);

//====================================
//Outro exemplo de date
let hoje = new Date();
let diasParaAdicionar = 7;

//Cria uma nova data a partir da data atual
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasParaAdicionar);