function func() {
    var lado = Number(document.getElementById("lado").value);
    var area = lado ** 2;
    
    document.getElementById("result").innerHTML="<p>A area do quadrado é: " + area + "</p>";
}