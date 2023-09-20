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

//Listas de eventos más usados
/*
    Eventos de teclado:
        onkeydown = cuando una tecla es presionada
        onkeypress = cuando una tecla es presionada y soltada
        onkeyup = cuando una tecla es soltada

    Eventos de raton:
        onclick = cuando se realiza un click con el raton
        ondblclick = cuando se realiza un doble click con el raton
        onmousedown = cuando el boton del raton es presionado
        onmousemove = cuando el puntero del raton se mueve
        onmouseover = cuando el puntero del raton pasa por encima del elemento
        onmouseup = cuando el boton del raton es soltado

    Eventos en <form>:
        onblur = cuando se pierde el foco
        onchange = cuando cambia algun elemento
        onfocus = cuando algun elemento obtiene el foco
        onrest = cuando el form es reseteado
        onselect = cuando un elemento es seleccionado
        onsubmit = cuando el form le hicieron el submit

    Eventos de <body> y <frameset>
        onunload = cuando la pagina es cambiada
        onload = cuando la pagina es cargada
*/
