(function(){
    var saludo = function(){
        alert("Saludo");
    };

    var cambiarTexto = function(){
        var texto = document.getElementById("input");
        texto.setAttribute("placeholder", "Introduce tu nombre");
    };

    var cambiarColor = function(){
        var contenedor = document.getElementById("contenedor");

        if(contenedor.className == "azul"){
            contenedor.className = "rojo";
        } else {
            contenedor.className = "azul";
        }
    };

    var boton = document.getElementById("boton");
    boton.addEventListener("dblclick", (saludo));
    boton.addEventListener("click", cambiarTexto);
    boton.addEventListener("click", cambiarColor);

}())

