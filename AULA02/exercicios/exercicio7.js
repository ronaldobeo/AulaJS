function func(){

    
    var nt1 = parseFloat(document.getElementById("nt1").value);
    var nt2 = parseFloat(document.getElementById("nt2").value);
    var nt3 = parseFloat(document.getElementById("nt3").value);

    
    var media = (nt1 + nt2 + nt3) / 3
    
    document.getElementById("result").innerHTML = "<p> A média das notas é: "+ media +"</p>"
}
