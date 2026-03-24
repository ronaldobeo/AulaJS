function func() {
    
    
    var valor = parseFloat(document.getElementById("prestA").value);
    var taxa = parseFloat(document.getElementById("txj").value);
    var tempo = parseFloat(document.getElementById("tempD").value)
    
    var parcela = valor + (valor * (taxa ** 2 / 100) * tempo)
    
    document.getElementById("result").innerHTML = "O valor da parcela será: " + parcela
}