function func() {
    
    var base = parseFloat(document.getElementById("bT").value);
    var altura = parseFloat(document.getElementById("hT").value);
    
    var area = (base * altura) / 2;
    
    document.getElementById("result").innerHTML = "<p>A area do triangulo é: " + area + "</p>";
    
}