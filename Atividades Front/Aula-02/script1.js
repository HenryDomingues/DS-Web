//Manipulando o Dom

document.getElementById("conteudo").innerHTML = "<p>Chosen One😇</p>"

//usando setAttribute e o getAttribute
document.getElementById("foto").setAttribute("src","imagem.jpg");

console.log(document.getElementById("foto").getAttribute("src"));

//alternando propriedades CSS
document.getElementById("conteudo").style.backgroundColor = "lightblue";
document.getElementById("conteudo").style.width = "1100px";
document.getElementById("foto").style.width = "1100px";
//Criando uma função para um botão
function mudaTamanho(){
    document.getElementById("foto").setAttribute("src","imagem2.jpg");
    document.getElementById("conteudo").style.backgroundColor = "red";
    document.getElementById("conteudo").innerHTML = "<p>The Sith😈</p>"
    document.getElementById("conteudo").style.width = "1100px";
    document.getElementById("foto").style.width = "1100px";
    console.log(document.getElementById("conteudo").innerHTML);
}