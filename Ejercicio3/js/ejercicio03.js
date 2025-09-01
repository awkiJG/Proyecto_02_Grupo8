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
      return;
      //Inicia el ejercicio si presiona Aceptar
    } else {
      alert(exerciceAlert);
      requestedString = prompt(messageAlert);

      // Validación de longitud y caracteres
      //Si el usuario no ingresa ningún dato o la cadena ingresada es menor a 6 caracteres
      if (!requestedString || requestedString.length <= 6) {
        alert(messageNullAlert);
        requestedString = prompt(messageAlert);
      }

      //Valida que los datos ingresados sean dentro "?" o del 0 al 4
      // las barras encierran los parametros aceptados, el ^ da inicio a la cadena y el $ da fin finalmente el signo + advierte que se tomen todos los caracteres que se encuentran dentro del conjunto mencionado.
      let valid = /^[0-4?]+$/.test(requestedString);
      //Si los datos incorrectos son invalidos
      if (!valid) {
        alert(errorAlert);
        requestedString = prompt(messageAlert);
      }

      // Procesamiento de la cadena ingresada por el usuario
      //Resultado es un string vacio por que recibe un string
      let result = "";
      //Recorre las posiciones del string ingresado.
      for (let i = 0; i < requestedString.length; i++) {
        //Esta variable contiene la cadena ingresada
        let char = requestedString[i];
        //Donde el caracter sea "?"
        if (char === "?") {
          //Declaración de variables que toman el resultado de
          //Toma el dato de la izquierda del "?" y lo parsea a entero, si no hay  asume que es 0
          let left = parseInt(requestedString[i - 1]) || 0;
          //Toma el dato de la derecha del "?"  y lo parsea a entero, si no hay  asume que es 0
          let right = parseInt(requestedString[i + 1]) || 0;
          //Declara que la variable  result contenga la suma de ambas variables y luego las transforma en cadena. Ubica la suma donde inicialente estaba "?"
          result += (left + right).toString();
          //Si no es "?" coloca el numero ingresado tal cual
        } else {
          result += char;
        }
      }
      //Muestra el resultado y el caracter ingresado por el usuario
      //Separa las oraciones como br en html  --> \n
      alert(
        "Usted ingresó la siguiente cadena de caracteres: " +
          requestedString +
          "\n Su resultado es: " +
          result
      );
    }
  }
}

//Revisa en todo el documento si se escucha la entrada del teclado
document.addEventListener("keydown", listenKeyDown);
