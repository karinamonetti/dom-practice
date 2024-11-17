// 1) Introduce un botón en la página que, cuando lo pulses, te muestre un prompt  para que el usuario introduzca un texto.
// Selecciono el btn
var boton = document.querySelector("button");
// Le agrego el evento que escuche al hacer clic
// addEventListener recibe dos parámetros, el primero es el tipo de evento que está esperando y el segundo es la función que se va a ejecutar cuando ese evento se cumpla.
boton.addEventListener("click", function () {
  //console.log("Me hicieron clic")
  var mensaje = prompt("Ingresa el texto que será cargado en la lista"); // Mensaje que ingresa el usuario


  // 2) Una vez cerrado el prompt el valor se añadirá como un nuevo <li> a la lista  creada.
  var item = document.createElement("li"); // Crea un item de una lista
  item.textContent = mensaje; // Le agrego el mensaje como contenido al li creado
  document.querySelector("ul").appendChild(item); // Selecciono la lista y con appendChild le agrego un hijo, en este caso, el item creado.
});



// 3) Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de  modo que cuando pulses el primer botón borre el primer elemento de la lista  y cuando pulses el último borre el último elemento de la lista.
var lista = document.querySelector("ul"); // Selecciono la lista


// Pasos para BTN borrar-primero
var borrarPrimero = document.getElementsByClassName("borrar-primero")[0]; // Selecciono el btn que tiene como clase "borrar-primero"
borrarPrimero.addEventListener("click", function () {
  // Si hago clic en el botón de borrar primero ocurrirá lo siguiente:

  lista.removeChild(lista.firstElementChild); // Como getElementByClassName nos devuelve un NodeList (funciona similar a un Array, pero no lo es, por eso no funcionan sus métodos) deberemos utilizar el método correspondiente para éste, que es removeChild() y dentro se le pasa como parámetro lo que quieres borrar.
});


// Pasos para BTN borrar-ultimo
var borrarUltimo = document.getElementsByClassName("borrar-ultimo")[0]; // Selecciono el btn que tiene como clase "borrar-ultimo"
borrarUltimo.addEventListener("click", function () {
  // Si hago clic en el botón de borrar ultimo ocurrirá lo siguiente:

  if (lista.children.length > 0) {
    // Verifico que mi NodeList tenga al menos 1 elemento, no es necesario, pero la validación es útil
    lista.removeChild(lista.lastElementChild); // Elimino el último elemento de la lista
  }
});
