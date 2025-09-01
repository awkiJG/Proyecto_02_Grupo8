function mostrarDatos() {
    // Obtener elementos input
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let libreta = document.getElementById("libreta").value;
    
    // Mostrar datos en alert
    alert("Los datos ingresados son: Nombre: " + nombre + " Apellido: " + apellido + " Libreta Universitaria: " + libreta);
}
