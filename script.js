function somaNumeros(){
    
    var num1 = window.document.getElementById("num1").value
    var num2 = window.document.getElementById("num2").value
    var resultado = window.document.getElementById("txtresultado")

    num1 = Number(num1)
    num2 = Number(num2)
    var soma = num1 + num2

    resultado.value = soma
}