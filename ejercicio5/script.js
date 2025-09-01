// Selecciona los elementos del DOM
let form = document.getElementById('salarioForm');
let calcularBtn = document.getElementById('calcularBtn');
let resultadoDiv = document.getElementById('resultado');

// Evento al hacer clic en el botón
calcularBtn.addEventListener('click', function() {
    // Obtiene los valores de los inputs
    let nombre = document.getElementById('nombre').value;
    let horas = parseFloat(document.getElementById('horas').value);
    let pagoHora = parseFloat(document.getElementById('pagoHora').value);

    // Validación de campos
    if (!nombre || isNaN(horas) || isNaN(pagoHora) || horas < 0 || pagoHora < 0) {
        resultadoDiv.textContent = 'Por favor, ingresa datos válidos (nombre y valores positivos).';
        return;
    }

    // Calcula el salario base
    let salarioBase = horas * pagoHora;

    // Calcula el bono si aplica (20% si horas > 160)
    let bono = 0;
    if (horas > 160) {
        bono = salarioBase * 0.20; // 20% del salario base
    }

    // Calcula el salario total
    let salarioTotal = salarioBase + bono;

    // Muestra el resultado
    if (bono > 0) {
        resultadoDiv.textContent = `${nombre}, tu pago total es $${salarioTotal.toFixed(2)} (incluye un bono de $${bono.toFixed(2)} por exceder 160 horas).`;
    } else {
        resultadoDiv.textContent = `${nombre}, tu pago total es $${salarioTotal.toFixed(2)}.`;
    }
});