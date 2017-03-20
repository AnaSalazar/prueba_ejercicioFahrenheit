//debugger;
function conversionFahrenheit(){
  var valorConvertido = document.getElementById("valorC").value * 9/5 + 32;
      document.getElementById("valorConvertido").value = (valorConvertido).toFixed(1) + " grados Fahrenheit";
}

function conversionCelsius(){
  var valorConvertido = (document.getElementById("valorF").value - 32) * 5 / 9;
      document.getElementById("valorConvertido").value = (valorConvertido).toFixed(1) + " grados Celsius";
}
