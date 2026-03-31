
function func() {
    
    var qtProduto = Number(document.getElementById("qtp").value);
    var precoProduto = parseFloat(document.getElementById("preco").value);
    
    var subtotal = qtProduto * precoProduto;
    var desconto = (subtotal * 10) / 100;
    var descSubtotal = subtotal - desconto;
    
    
    document.getElementById("result").innerHTML = " <p>Subtotal do produto:"+ subtotal + "</p>"+"<p>Valor de desconto(10%):"+ desconto + 
    "</p>"+"<p>Valor final(aplicado o desconto):"+ descSubtotal + "</p>";
    
} 