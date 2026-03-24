function Exemplo2() {
    let numero = Number(document.getElementById("numero").value);  
    let quadrado,cubo;

    quadrado = numero * numero; // Poderia ser utilizado ** para fazer a operação
    cubo = numero **3; // Potenciação **


    document.getElementById("resultado").innerHTML = "<p>O quadrado do numero é: "+ quadrado + "<br> O cubo do numero é: "+cubo+ "</p>"
}