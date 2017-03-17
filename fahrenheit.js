
//debugger;
function conversion(grados){
  var valorConvertido;

  if(grados == "valorC"){
    valorConvertido = document.getElementById('valorC').value * 9/5 + 32;
      return document.getElementById("valorF").value = Math.round(valorConvertido);
  } else {
    valorConvertido = document.getElementById("valorF").value -32 * 5 / 9;
      return document.getElementById("valorC").value = Math.round(valorConvertido);
  }
}
//Funciona pero no como yo quisiera
//conversion(250);
