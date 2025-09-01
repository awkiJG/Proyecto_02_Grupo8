//Zona de declaración de variables
let requestedString;
let exerciceAlert =
  "Debe ingresar una cadena con dígitos del 0 al 4. El carácter '?' solo puede usarse como separador entre dichos dígitos. Ejemplo válido: 1?4?34?";
let messageAlert = "Ingrese su cadena de caracteres:";
let errorAlert = "Cadena inválida. Por favor, vuelva a intentarlo.";
let messageNullAlert =
  "La cadena debe tener más de 6 caracteres. Por favor, ingrese una cadena como la indicada.";

// Función que se ejecuta cuando se presiona una tecla específicamente el 3. Inicia el ejercicio
function listenKeyDown(keydown) {
  //Si el usaurio presiona la tecla 3
  if (keydown.key === "3") {
    alert("¡Bienvenido usuario!");

    let exerciced = confirm("¿Desea realizar el ejercicio 03?");

    //Sale del ejercicio, si el usuario presiona Cancelar
    if (!exerciced) {
      alert("Saliendo del Ejercicio 03");
      //Inicia el ejercicio si presiona Aceptar
    } else {
      alert(exerciceAlert);
      requestedString = prompt(messageAlert);

      let valid = true;

      if (requestedString.length <= 6) {
        alert(messageNullAlert);
        requestedString = prompt(messageAlert);
        valid = false;
      } else {
        for (let i = 0; i < requestedString.length; i++) {
          const requestedCharacter = requestedString[i];
          if (("01234?".includes(requestedCharacter))) {
            alert("yey")
          } else {
            alert(errorAlert);
            requestedString = prompt(messageAlert);
          }
        }
      }
    }
  }
}

//Revisa en todo el documento si se escucha la entrada del teclado
document.addEventListener("keydown", listenKeyDown);
