
function somaNumeros(){

    var tn1 = window.document.getElementById("num1").value
    var tn2 = window.document.getElementById("num2").value
    var resultado = window.document.getElementById("txtresultado")

    tn1 = Number(tn1)
    tn2 = Number(tn2)
    var soma = tn1 + tn2

    resultado.value = soma
}