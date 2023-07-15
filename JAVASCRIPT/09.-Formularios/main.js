var formulario = document.getElementById("formulario");
//var elementos = formulario.elements;
var boton = document.getElementById("boton");

//Se accede a los atributos a través del "name"
var validarNombre = function(e) {
    if (formulario.nombre.value == 0){
        alert("Completa el campo nombre");
        e.preventDefault();
    }
}

//Se accede a los atributos a través del "name"
//formulario.sexo[0] = "hombre" -> formulario.sexo[1] = "mujer"
var validarSexo = function(e){
    if (!formulario.sexo[0].checked && !formulario.sexo[1].checked){
        alert("Selecciona el sexo");
        e.preventDefault();
    }
}

//Se accede a los atributos a través del "name"
var validarTerminos = function(e){
    if (!formulario.terminos.checked){
        alert("Acepta los terminos y condiciones");
        e.preventDefault();
    }
}

var validar = function(e){
    validarNombre(e);
    validarSexo(e);
    validarTerminos(e);
}

formulario.addEventListener("submit", validar);