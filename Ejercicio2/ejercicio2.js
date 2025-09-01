
// funcion para calcular el promedio de 3 numeros
function calcularPromedio(numero1, numero2, numero3) { 

    let promedio = (numero1 + numero2 + numero3) /3; //promedio
    return promedio;
}

// boton calcular
document.getElementById("calcular").onclick = function() {

    //pedir 3 numeros al usuario con prompt
numero1 = parseInt(prompt("Ingresa el primer numero:"));
numero2 = parseInt(prompt("Ingresa el segundo numero:"));
numero3 = parseInt(prompt("Ingresa el tercer numero:"));


    let resultado = calcularPromedio(numero1, numero2, numero3);

    // muestra el resultado
    document.getElementById("resultado").innerHTML = 
        "El promedio de los tres numeros es: " + resultado;
};