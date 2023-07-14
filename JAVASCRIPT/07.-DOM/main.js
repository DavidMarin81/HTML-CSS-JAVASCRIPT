//Document Object Model

//Para traer los elementos por la etiqueta -> se recogen en un Array
var elementosP = document.getElementsByTagName("p"); //Dentro de los paréntesis se pone la etiqueta

    //Para mostrar un elemento del Array recogido
    //document.write(elementosP[0].innerHTML);

    //Para cambiar un elemento
    elementosP[0].innerHTML = "Se cambie el texto de la primera etiqueta <p>"

//Para traer los elementos por el id 
var segundoParrafo = document.getElementById("segundo");


//Creando nodos -> agregando etiquetas o elementos

    // 1.- Crear el elemento
        var elemento = document.createElement("h2");

    // 2.- Crear un nodo de texto
        var contenido = document.createTextNode("Este es nuestro titular");

    // 3.- Añadir el nodo de texto al elemento
        elemento.appendChild(contenido);

    // 4.- Agregar atributos al elemento
        elemento.setAttribute("align", "center"); // align:"center"

    // 5.- Agregar el elemento al documento
        document.getElementById("subtitulo").appendChild(elemento);


//Agregando nodos al DOM

    //Se crea un elemento con su contenido
    var elemento = document.createElement("li");
    var contenido = document.createTextNode("Nuevo texto");
    elemento.appendChild(contenido);

    //Se agrega el elemento con el contenido creado a la lista (Por defecto se agrega al final)
        //Para cuando no conozcamos su ID
            //var padre = document.getElementsByTagName("li")[0].parentNode;
        //Cuando conozcamos su ID
            var padre = document.getElementById("lista");
            padre.appendChild(elemento);
        //Para agregarlo al principio de la lista
            //Se localiza el primer elemento de la lista
                //var primerElemento = document.getElementsByTagName("li")[0];
            //Se inserta antes de ese primerElemento
                //padre.insertBefore(elemento, primerElemento);


//Modificando, Reemplazando y Eliminando Nodos del DOM

    //Accedemos al primer elemento de la lista
    var primerElemento = document.getElementById("primerElemento");

    //Para modificar el texto del primer elemento
        //Con .innerHTML (permite agregar etiquetas HTML)
        primerElemento.innerHTML = "Nuevo Texto <i> con texto en cursiva </i>";
        //Con .textContent = Para modificar el texto (solo permite texto plano)
        primerElemento.textContent = "Nuevo Texto sin etiquetas HTML";

    //Para reemplazar un elemento
        //Se localiza el elemento padre a traves de su ID    
        var padre = document.getElementById("lista2");
        //Se localiza el elemento que queremos reemplazar
        var elementoAReemplazar = document.getElementById("primerElemento");
        //Se crea el elemento que se quiere reemplazar
        var nuevoElemento = document.createElement("li");
        var nuevoContenido = document.createTextNode("Texto para reemplazar en el primer elemento de la lista");
        nuevoElemento.appendChild(nuevoContenido);
        //Con .replaceChild se pasan dos parámetros: el elemento nuevo, el elemento a reemplazar
        padre.replaceChild(nuevoElemento, elementoAReemplazar);

    //Para eliminar nodos del DOM
        //Se localiza el padre    
        var padre = document.getElementById("lista2");
        //Se localiza el elemento que queremos eliminar
        var elementoAEliminar = document.getElementById("segundoElemento");
        //Se elimina el elemento
        padre.removeChild(elementoAEliminar);

    //Acceso a los atributos del DOM
        //Se localiza al padre
        var padreCuadrado = document.getElementById("contenedor");
        //Se localiza una referencia para colocar el nuevo cuadrado
        var referencia = document.getElementsByTagName("div")[1];
        //Se crea el nuevo cuadrado
        var cuadrado = document.createElement("div");
        //Se le asignan los atributos (Se puede usar para modificar los demás atributos que tenga)
        cuadrado.setAttribute("class", "azul");
        //Se inserta el cuadrado antes del primer cuadrado (que ya lo tenemos localizado con su referencia)
        padreCuadrado.insertBefore(cuadrado, referencia);


        //Se pueden modificar los atributos de otra manera
        cuadrado.className = "rojo"; //Cambiará el cuadrado a rojo, por los estilos .css
        cuadrado.id = "NuevoId"; //Se le asigna un id al cuadrado

    //Modificando el estilo de los elementos
        var encabezado = document.getElementById("encabezado");
        //Se asignan dos estilos al elemento (van separados por un espacio)
        encabezado.className = "tituloH1 tituloH1Grande"; 
        //Se le cambia el color a la letra
        encabezado.style.color = "navy";
        //Se le cambia el color de fondo
        encabezado.style.background = "lime";

