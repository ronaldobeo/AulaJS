var qtProduto = Number(prompt("Digite a quantidade do produto"));
var precoProduto = parseFloat(prompt("Digite o preço do produto"));

var subtotal = qtProduto * precoProduto;
var desconto = (subtotal * 10) / 100;
var descSubtotal = subtotal - desconto;

document.write("<p>Subtotal do produto:"+ subtotal + "</p>");
document.write("<p>Valor de desconto(10%):"+ desconto + "</p>");
document.write("<p>Valor final(aplicado o desconto):"+ descSubtotal + "</p>");
