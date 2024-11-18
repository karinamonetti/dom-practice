// 1° Selecciono el form y lo guardo en una variable para que cada vez que le den un click a alguno de los botones poder cargar los elementos ahí. 
var form = document.querySelector("form");

// 1) Crear un input de tipo texto. Le preguntará al usuario mediante un prompt qué nombre (atributo name) tiene el input.
var inputTexto = document.getElementsByClassName("input-texto")[0]; // Selecciono el botón con clase input-texto.
inputTexto.addEventListener("click", function(){ // Si le dan click a mi botón inputTexto quiero que...
    //Crear un LBL que albergará el input, lo almacenaré en una variable para después poder hacer cosas con él
    var lblInputTexto = document.createElement("label"); //Creo el LBL
    var textoLblInputTexto = prompt("¿Cómo se llamará este label?"); //Le pregunto al usuario cómo se llamará
    lblInputTexto.textContent = textoLblInputTexto; //Le agrego eso que me contestó al contenido del lbl
    var inputTexto = document.createElement("input"); //Creo el input
    inputTexto.setAttribute("type", "text"); // Le agrego un atributo tipo type, cuyo valor será text
    var atributoName = prompt("¿Cuál es el nombre del atributo name de este input?"); //Le pregunto por el nombre del atributo name
    inputTexto.setAttribute("name", atributoName); // le agrego un atributo name con el contenido de lo que me ha contestado
    form.appendChild(lblInputTexto); //Agrego el lbl al form
    lblInputTexto.appendChild(inputTexto); // Agrego el input al lbl
    form.appendChild(document.createElement("br")); //Agrego un salto de linea al form
});


// 2) Crear un input de tipo password. Le preguntará al usuario mediante un prompt qué nombre (atributo name) tiene el  input.
var inputPassword = document.getElementsByClassName("input-password")[0]; // Selecciono el botón con clase input-texto.
inputPassword.addEventListener("click", function(){ // Si le dan click a mi botón inputTexto quiero que...
    //Crear un LBL que albergará el input, lo almacenaré en una variable para después poder hacer cosas con él
    var lblInputPassword = document.createElement("label"); //Creo el LBL
    var textoLblInputPassword = prompt("¿Cómo se llamará este label?"); //Le pregunto al usuario cómo se llamará
    lblInputPassword.textContent = textoLblInputPassword; //Le agrego eso que me contestó al contenido del lbl
    var inputPassword = document.createElement("input"); //Creo el input
    inputPassword.setAttribute("type", "password"); // Le agrego un atributo tipo type, cuyo valor será text
    var atributoName = prompt("¿Cuál es el nombre del atributo name de este input?"); //Le pregunto por el nombre del atributo name
    inputPassword.setAttribute("name", atributoName); // le agrego un atributo name con el contenido de lo que me ha contestado
    form.appendChild(lblInputPassword); //Agrego el lbl al form
    lblInputPassword.appendChild(inputPassword); // Agrego el input al lbl
    form.appendChild(document.createElement("br")); //Agrego un salto de linea al form
});

// 3) Crear un textarea. Le preguntará al usuario mediante un prompt el nombre y generará automáticamente un textarea de 40 columnas y 5  filas.
var textArea = document.getElementsByClassName("input-textarea")[0]; // Selecciono el botón con clase input-textarea.
textArea.addEventListener("click", function(){ // Si le dan click a mi botón inputTexto quiero que...
    //Crear un LBL que albergará el input, lo almacenaré en una variable para después poder hacer cosas con él
    var lblTextArea = document.createElement("label"); //Creo el LBL
    var textoTextArea = prompt("¿Cómo se llamará este label?"); //Le pregunto al usuario cómo se llamará
    lblTextArea.textContent = textoTextArea; //Le agrego eso que me contestó al contenido del lbl
    var inputTextArea = document.createElement("textarea"); //Creo el textarea
    inputTextArea.setAttribute("cols", "40"); // Le agrego un atributo tipo cols (columnas), cuyo valor será 40
    inputTextArea.setAttribute("rows", "5"); // Le agrego un atributo tipo rows(filas, cuyo valor será 5
    var atributoName = prompt("¿Cuál es el nombre del atributo name de este input?"); //Le pregunto por el nombre del atributo name
    inputTextArea.setAttribute("name", atributoName); // le agrego un atributo name con el contenido de lo que me ha contestado
    form.appendChild(lblTextArea); //Agrego el lbl al form
    lblTextArea.appendChild(inputTextArea); // Agrego el input al lbl
    form.appendChild(document.createElement("br")); //Agrego un salto de linea al form
});


// 4) Crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src).
var img = document.getElementsByClassName("img")[0]; // Selecciono el botón con clase img.
img.addEventListener("click", function(){ //Le creo un evento tipo click al btn seleccionado
    var imgCreada = document.createElement("img"); //Creo la img
    var rutaImg = prompt("Ingresa la ruta de la imagen:"); //Le pregunto al usuario la ruta de la img
    imgCreada.setAttribute("src", rutaImg); //Le añado la ruta a la img
    form.appendChild(imgCreada); //Añado la img al form
    form.appendChild(document.createElement("br")); //Agrego un salto de linea al form
});


// 5) Crear un checkbox. Preguntará al usuario el nombre y el valor (atributos name y value). 
var checkbox = document.getElementsByClassName("input-checkbox")[0]; // Selecciono el botón con clase input-checkbox.
checkbox.addEventListener("click", function(){ // Si le dan click a mi botón inputTexto quiero que...
    //Crear un LBL que albergará el input, lo almacenaré en una variable para después poder hacer cosas con él
    var lblInputCheckbbox = document.createElement("label"); //Creo el LBL
    var textoLblInputCheckbox = prompt("¿Cómo se llamará este label?"); //Le pregunto al usuario cómo se llamará
    lblInputCheckbbox.textContent = textoLblInputCheckbox; //Le agrego eso que me contestó al contenido del lbl
    var inputCheckbox = document.createElement("input"); //Creo el input
    inputCheckbox.setAttribute("type", "checkbox"); // Le agrego un atributo tipo type, cuyo valor será checkbox
    var atributoName = prompt("¿Cuál es el nombre del atributo name de este input?"); //Le pregunto por el nombre del atributo name
    inputCheckbox.setAttribute("name", atributoName); // le agrego un atributo name con el contenido de lo que me ha contestado
    var atributoValue = prompt("¿Cuál es el nombre del atributo value de este input?"); //Le pregunto por el nombre del atributo value
    inputCheckbox.setAttribute("value", atributoValue); // le agrego un atributo value con el contenido de lo que me ha contestado
    form.appendChild(lblInputCheckbbox); //Agrego el lbl al form
    lblInputCheckbbox.appendChild(inputCheckbox); // Agrego el input al lbl
    form.appendChild(document.createElement("br")); //Agrego un salto de linea al form
});


// 6) Crear un radio. Preguntará al usuario el nombre y el valor (atributos name y value)
var radio = document.getElementsByClassName("input-radio")[0]; // Selecciono el botón con clase input-radio.
radio.addEventListener("click", function(){ // Si le dan click a mi botón inputTexto quiero que...
    //Crear un LBL que albergará el input, lo almacenaré en una variable para después poder hacer cosas con él
    var lblInputRadio = document.createElement("label"); //Creo el LBL
    var textoLblInputRadio = prompt("¿Cómo se llamará este label?"); //Le pregunto al usuario cómo se llamará
    lblInputRadio.textContent = textoLblInputRadio; //Le agrego eso que me contestó al contenido del lbl
    var inputRadio= document.createElement("input"); //Creo el input
    inputRadio.setAttribute("type", "radio"); // Le agrego un atributo tipo type, cuyo valor será checkbox
    var atributoName = prompt("¿Cuál es el nombre del atributo name de este input?"); //Le pregunto por el nombre del atributo name
    inputRadio.setAttribute("name", atributoName); // le agrego un atributo name con el contenido de lo que me ha contestado
    var atributoValue = prompt("¿Cuál es el nombre del atributo value de este input?"); //Le pregunto por el nombre del atributo value
    inputRadio.setAttribute("value", atributoValue); // le agrego un atributo value con el contenido de lo que me ha contestado
    form.appendChild(lblInputRadio); //Agrego el lbl al form
    lblInputRadio.appendChild(inputRadio); // Agrego el input al lbl
    form.appendChild(document.createElement("br")); //Agrego un salto de linea al form
});


// 7) Crear un botón (submit). Preguntará al usuario el nombre.
var btn = document.getElementsByClassName("btn-submit")[0]; // Selecciono el botón con clase btn-submit.
btn.addEventListener("click", function(){ // Si le dan click a mi botón btnSubmit quiero que...
    var btnSubmit = document.createElement("button"); //Creo el btn
    btnSubmit.setAttribute("type", "submit"); //Le agrego el type submit
    var contenidoBtnSubmit = prompt("¿Cómo se va a llamar este botón?"); 
    btnSubmit.textContent = contenidoBtnSubmit; //Agrego lo que contestó al contenido del btn
    form.appendChild(btnSubmit); //Agrego el btn al form
    form.appendChild(document.createElement("br")); //Agrego un salto de linea al form
});