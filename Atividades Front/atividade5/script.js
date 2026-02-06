var vi = Number(prompt("Digite o valor investido:"))
var jr = Number(prompt("Digite a taxa de juros:"))
var t = Number(prompt("Digite o total de meses do ivestimento:"))
var resultado = vi * (1+(jr/100)) ** t 
console.log(vi * (1+(jr/100)) ** t)
alert("O valor final da aplicaçaõ será de: " + resultado.toFixed(2) + " " + "reais")
