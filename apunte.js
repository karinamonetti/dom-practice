/*      M A N E J O   
          D E L   
          D O M                */ 


// Lo que selecciono en el DOM siempre es útil guardarlo en una variable para poder hacer algo con ello luego.

// Selección X etiquetas
var etiqueta = document.getElementsByTagName("etiqueta");

// Selección X atributo name
var atributoName = document.getElementsByName("atributoName");

// Selección X ID
var id = document.getElementById("id");

// Selección x nombre de clase
var nombreClase= document.getElementByClassName("nombreClase");

// Selección X selector --> Devolverá el primero que coincida
var selector = document.querySelector("div") // Seleccionará el primer div que encuentre
var selector2 = document.querySelector("div.clase") // Seleccionará el primer div que encuentre que tenga ese nombre de clase.

// Selección X selector --> Devolverá TODOS los que coincidan
var allSelectors = document.querySelectorAll("div") // Seleccionará todos los div del documento

