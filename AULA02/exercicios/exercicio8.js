var peso = parseFloat(prompt("Digite o peso em kg"));
var altura = parseFloat(prompt("Digite a altura em metros"));

var imc = peso / (altura * altura);
document.write("<p>Peso: "+ peso +"</p>");
document.write("<p>Altura: "+ altura +"</p>");
document.write("<p>O índice de massa corporal é de: "+ imc +"</p>")