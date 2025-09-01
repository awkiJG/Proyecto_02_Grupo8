
function calcularPromedio(numero1, numero2, numero3) {

    let promedio = (numero1 + numero2 + numero3) /3; 
    return promedio;
}

document.getElementById("calcular").onclick = function() {

numero1 = parseInt(prompt("Ingresa el primer numero:"));
numero2 = parseInt(prompt("Ingresa el segundo numero:"));
numero3 = parseInt(prompt("Ingresa el tercer numero:"));


    let resultado = calcularPromedio(numero1, numero2, numero3);

    document.getElementById("resultado").innerHTML = 
        "El promedio de los tres numeros es: " + resultado;
};