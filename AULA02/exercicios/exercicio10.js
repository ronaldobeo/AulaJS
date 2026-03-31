function func() {
    
    
    var valorHora = Number(document.getElementById("vhora").value);
    var horas_trabalhadas = Number(document.getElementById("qthora").value);
    
    var salario = valorHora * horas_trabalhadas * 30;

document.getElementById("result").innerHTML = "<p>O valor do salario é: "+ salario +" em 30 dias</p>";
}