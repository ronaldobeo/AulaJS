

function calcular(){
    let valorkm = Number(document.getElementById("valorQ").value)
    let kmpercorrido = Number(document.getElementById("quilometro").value)
    let minutos = Number(document.getElementById("minutos").value)
let total = (valorkm * kmpercorrido) + (minutos * 0.50);
console.log(total);
document.getElementById("resultado").innerHTML = "<p>O valor total é:</p>" + total;

}