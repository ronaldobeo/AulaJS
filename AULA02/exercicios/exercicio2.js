function func() {
    
    var tFahrenheit = Number(document.getElementById("tempF").value)
    
    var tCelsius = ((Number(tFahrenheit) - 32) * 5) / 9 
    
    document.getElementById("result").innerHTML = "A temperatura em Celsius é: " + tCelsius
} 