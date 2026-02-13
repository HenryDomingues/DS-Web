//Manipulando o Dom

document.getElementById("conteudo").innerHTML = "<p>É o carro do ovo passando na sua rua😇</p>"


//alternando propriedades CSS
document.getElementById("conteudo").style.backgroundColor = "lightblue";
//Criando uma função para um botão
function mu(){
    document.getElementById("conteudo").style.backgroundColor = "red";
    document.getElementById("conteudo").innerHTML = "<p>É o carro da rua passando no seu ovo😈</p>"
    console.log(document.getElementById("conteudo").innerHTML);
}