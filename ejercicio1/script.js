// 1) Extraer la cantidad de párrafos
var cantidadParrafos = document.getElementsByTagName("p"); // Selecciono
var contarParrafos = cantidadParrafos.length; // Cuento
console.log(contarParrafos); // 8 párrafos


// 2) Extraer el texto del segundo párrafo.
var parrafos = document.getElementsByTagName("p"); // Genera una colección de párrafos
var segundoParrafo = parrafos[1].textContent; // Guardo el contenido de la "segunda" posición del array parrafos y extraigo el contenido
// console.log(parrafos);
console.log(segundoParrafo);


// 3) Extraer el número de enlaces de la página.
var cantidadEnlaces = document.getElementsByTagName("a"); // Selecciono
var contarEnlaces = cantidadEnlaces.length; // Cuento
console.log(contarEnlaces); // 4 enlaces


// 4) Extraer La dirección del primer enlace.
var enlaces = document.getElementsByTagName("a"); // Genera una colección de enlaces
var primerEnlace = enlaces[0].getAttribute("href"); // Selecciono el contenido del atributo href
console.log(primerEnlace);


// 5) Extraer La dirección del penúltimo enlace.
// Ya sé que son 4 enlaces en el documento, por tanto sus posiciones serían 0, 1, 2 y 3. Con esta información, selecciono la dirección del penúltimo enlace
var penultimoEnlace = enlaces[2].getAttribute("href"); // Selecciono el contenido del atributo href
console.log(penultimoEnlace);


// 6) Extraer El número de enlaces que apuntan a /wiki/Balaenidae
// Primero crearé una variable con el nombre de la ruta
var ruta = "https://es.wikipedia.org/wiki/Balaenidae";
// Crearé un contador
var contador = 0;
// Y recorreré el array de enlaces, cuando el contenido del atributo href sea igual a la ruta, aumentaré el contador en 1
for(let i=0; i<enlaces.length;i++){
    // Selecciono el href de la posición almacenada en mi array enlaces y verifico si es igual que mi ruta.
    if (enlaces[i].getAttribute("href")===ruta){
        contador ++;
    }
}
console.log("Conciden un total de "+contador+" enlaces");


// 7) Extraer El número de enlaces del primer párrafo.
// Guardo el primer párrafo
var primerParrafo = parrafos[0];
// Selecciono la etiqueta <a> y cuento la cantidad de ellos.
var cantidadEnlacesPrimerParrafo = primerParrafo.getElementsByTagName("a").length;
console.log("La cantidad de enlaces del primer párrafo es de "+cantidadEnlacesPrimerParrafo);


// 8) Añadir una etiqueta con texto
var info = document.getElementById("info");
info.innerHTML = "Texto informativo agregado a través del manejo del DOM";