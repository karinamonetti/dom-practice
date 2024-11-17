function crearFormularioDinamicamente(){

    var contenedorBody = document.getElementsByTagName("body")[0]; // Selecciono el body, que será el contenedor de mi form

    var form = document.createElement("form"); // Creo el form dentro del body
    contenedorBody.appendChild(form); //Le agrego al body el formulario como hijo.

    

    // NombreDisco
    //LBL
    var lblNombreDisco = document.createElement("label"); // Creo el label para el nombre del disco
    lblNombreDisco.textContent = "Nombre del Disco: "; // Le agrego un texto a ese LBL
    form.appendChild(lblNombreDisco); // Agrego el lbl al form
    // Input
    var inputNombreDisco = document.createElement("input");
    inputNombreDisco.setAttribute("type", "text"); // Le agrego un atributo tipo type, cuyo valor será text
    inputNombreDisco.setAttribute("name", "nombreDisco"); // Le agrego un atributo tipo name, cuyo valor será nombreDisco
    lblNombreDisco.appendChild(inputNombreDisco); // Agrego el input al lbl
    form.appendChild(document.createElement("br")); // Genero un salto de línea



    // GrupoCantante
    //LBL
    var lblGrupoCantante = document.createElement("label"); 
    lblGrupoCantante.textContent = "Grupo o cantante: "; 
    form.appendChild(lblGrupoCantante); 
    // Input
    var inputGrupoCantante = document.createElement("input");
    inputGrupoCantante.setAttribute("type", "text"); 
    inputGrupoCantante.setAttribute("name", "grupoCantante"); 
    lblGrupoCantante.appendChild(inputGrupoCantante); 
    form.appendChild(document.createElement("br"));


    // AñoPublicacion
    //LBL
    var lblanioPublicacion = document.createElement("label"); 
    lblanioPublicacion.textContent = "Año de publicación: "; 
    form.appendChild(lblanioPublicacion); 
    // Input
    var inputAnioPublicacion = document.createElement("input");
    inputAnioPublicacion.setAttribute("type", "number"); 
    inputAnioPublicacion.setAttribute("name", "anioPublicacion"); 
    inputAnioPublicacion.setAttribute('min', '1900');
    lblanioPublicacion.appendChild(inputAnioPublicacion); 
    form.appendChild(document.createElement("br"));


    // Genero (Input tipo SELECT)
    //LBL
    var lblGenero = document.createElement("label"); 
    lblGenero.textContent = "Género: "; 
    form.appendChild(lblGenero); 
    // Input
    var selectGenero = document.createElement("select"); // Creo el elemento select
    selectGenero.setAttribute("name", "genero"); 
    var opciones = ["Rock", "Punk", "Pop", "Indie"]; // Creo las opciones y las almaceno en un Array
    opciones.forEach(function(opcion){ // Creo un forEach que recorre el array opciones, opcion es lo mismo que decir i en un for.
        var option = document.createElement("option"); // Creo las opciones que irán dentro del select
        option.value = opcion; // Asigno el valor para cada opción
        option.textContent = opcion; // Asigno el texto visible de cada opción
        selectGenero.appendChild(option);
    });
    form.appendChild(selectGenero); // Una vez que recorro el Array, agrego las opciones dentro de select.
    form.appendChild(document.createElement("br"));


    // Prestado
    //LBL
    var lblPrestado = document.createElement("label"); 
    lblPrestado.textContent = "¿Está prestado?: "; 
    form.appendChild(lblPrestado); 
    // Input
    var inputPrestado = document.createElement("input"); // Creo el elemento select
    inputPrestado.setAttribute("type", "checkbox"); 
    inputPrestado.setAttribute("name", "prestado");
    lblPrestado.appendChild(inputPrestado);
    form.appendChild(document.createElement("br"));


    // BTN Submit
    var btnEnviar = document.createElement("button");
    btnEnviar.setAttribute("type", "submit");
    btnEnviar.textContent = "Guardar Disco";
    form.appendChild(btnEnviar);
    // Ahora necesito crear un evento que guarde los datos de los inputs y los envie.
    form.addEventListener("submit", function(event){ // El evento se agrega en el form y no en el botón porque el que envia, en realidad, es el form.
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página
        const disco = { // Creo un objeto disco y almaceno en el los valores que están dentro de los inputs.
            nombreDisco: inputNombreDisco.value,
            grupoCantante: inputGrupoCantante.value,
            anioPublicacion: inputAnioPublicacion.value,
            genero: selectGenero.value,
            prestado:inputPrestado.checked,
        };

        /* Verifico que se esté almacenando correctamente.
        alert("Nombre disco: " + disco.nombreDisco + "\n" + "Nombre de grupo o cantante: " + disco.grupoCantante + "\n" + 
            "Año de publicacion: " + disco.anioPublicacion + "\n" + "Tipo de musica: " + disco.genero + "\n" +"Prestado: " + disco.prestado + "\n"
         ); 
        */

    });
}

window.onload = crearFormularioDinamicamente; // La función se ejecuta cuando la página se cargue