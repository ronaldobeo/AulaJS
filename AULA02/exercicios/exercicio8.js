function func() {
    
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    var imc = peso / (altura * altura);
  
    
    document.getElementById("result").innerHTML = 
    
    "<p>Peso: "+ peso +"</p>" +
    "<p>Altura: "+ altura +"</p>"+
    "<p>O índice de massa corporal é de: "+ imc +"</p>";
}