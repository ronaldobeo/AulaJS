var valor_inicial = Number(prompt("Digite o valor inicial"));
var taxa_juros = parseFloat(prompt("Digite a taxa de Juros"));
var tempo = Number(prompt("Digite o tempo em anos"));

var montante = valor_inicial * (1 + (taxa_juros * tempo));

document.write("<p>O valor do montante é: "+ montante +"</p>")
