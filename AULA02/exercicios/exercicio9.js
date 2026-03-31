
function func() {
    
    
    var valor_inicial = Number(document.getElementById("valorI").value);
    var taxa_juros = parseFloat(document.getElementById("taxaJ").value);
    var tempo = Number(document.getElementById("tp").value);
    
    var montante = valor_inicial * (1 + (taxa_juros * tempo));
    
    document.getElementById("result").innerHTML = "<p>O valor do montante é: "+ montante +"</p>";
}