var valor = parseFloat(prompt("Digite a prestação em atraso"))
var taxa = parseFloat(prompt("Digite a taxa de juros"))
var tempo = parseFloat(prompt("Digite p tempo de dias de atraso"))

var parcela = valor + (valor * (taxa ** 2 / 100) * tempo)

document.write("O valor da parcela será: " + parcela)