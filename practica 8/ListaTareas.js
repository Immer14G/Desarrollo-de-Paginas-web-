// Seleccionar el campo de entrada, el botón agregar y la lista de tareas
var nuevaTareaInput = document.getElementById("nuevaTarea");
var agregarBoton = document.getElementById("agregar");
var listaTareas = document.getElementById("listaTareas");

// Agregar un evento al botón de agregar para escuchar los clics
agregarBoton.addEventListener("click", function() {
  // Obtener el texto ingresado en el campo nueva tarea
  var nuevaTarea = nuevaTareaInput.value;

  // Verificamos que el campo no esté vacío
  if (nuevaTarea != "") {
    // Creamos un elemento "li" para la tarea
    var tarea = document.createElement("li");
    tarea.classList.add("tarea");

    // Creamos un span para contener el texto de la tarea
    var tareaTexto = document.createElement("span");
    tareaTexto.textContent = nuevaTarea;
    tarea.appendChild(tareaTexto);

    // Creamos un div para los botones
    var divBotones = document.createElement("div");

    // Creamos un evento para eliminar la tarea
    var eliminarBoton = document.createElement("button");
    eliminarBoton.classList.add("eliminarBTN");
    eliminarBoton.textContent = "Eliminar";

    eliminarBoton.addEventListener("click", function() {
      listaTareas.removeChild(tarea);
    });

    // Creamos un evento para modificar la tarea
    var modificarBoton = document.createElement("button");
    modificarBoton.classList.add("modificarBTN");
    modificarBoton.textContent = "Modificar";

    // Definimos la variable del input editable fuera de la condición
    var inputModificacion;

    modificarBoton.addEventListener("click", function() {
      // Verificar si la tarea está en modo de edición
      if (modificarBoton.textContent === "Modificar") {
        modificarBoton.textContent = "Guardar";

        // Convertir el contenido de la tarea en un campo de texto editable
        inputModificacion = document.createElement("input");
        inputModificacion.type = "text";
        inputModificacion.value = tareaTexto.textContent;
        tarea.replaceChild(inputModificacion, tareaTexto);

      } else {
        modificarBoton.textContent = "Modificar";
        // Recuperamos el valor del campo del texto editable
        var nuevoTexto = inputModificacion.value;

        // Actualizar el texto del span
        tareaTexto.textContent = nuevoTexto;

        // Reemplazamos el campo de entrada por el nuevo texto
        tarea.replaceChild(tareaTexto, inputModificacion);
      }
    });

    // Agregamos los botones al div de botones
    divBotones.appendChild(eliminarBoton);
    divBotones.appendChild(modificarBoton);

    // Agregamos el div de botones a la tarea
    tarea.appendChild(divBotones);

    // Agregamos la tarea a la lista
    listaTareas.appendChild(tarea);

    // Limpiar el campo de entrada después de agregar la tarea
    nuevaTareaInput.value = "";
  } else {
    // Si el campo está vacío, mostrar una alerta
    alert("Por favor, ingresa una tarea");
  }
});



