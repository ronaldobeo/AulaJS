
function func(){

    var numero = document.getElementById("numero").value;
    
    var quadrado = Number(numero) * Number(numero);
    var cubo = Number(numero) * Number(numero) * Number(numero);
    // Simplificando a potencia : var cubo = Number(numero) * Number(numero) * Number(numero);
    
    document.getElementById("result").innerHTML = "<p>O quadrado é: "+quadrado+" <br> O cubo é: "+cubo+"</p>"
    
}