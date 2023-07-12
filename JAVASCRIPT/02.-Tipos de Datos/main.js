//Tipos de datos

//Numericos
    var edad = 19; //Integer
    var numFloat = 19.123; //Float

//String 
    var nombre = "David";
    var apellido = "Marin Gomez";
    //Para escapar simbolos:
        var texto = "Estudiando \"Javascript\""; //Escapando el simbolo \
        var texto = 'Estudiando "JavaScript"'; //Poniendo comillas simples
    document.write(nombre + " " + apellido);

//Array
    var amigos = ["Diego", "Julia", "Patri", "Carlos"]; //No tienen que ser del mismo tipo
    //Para recorrer el array
    document.write(amigos[2]); // -> Se imprime "Patri"

//Object
    var objeto = {
        color: "Black",
        size: 12
    }

//Boolean
    var correcto = true;
    var incorrecto = false;

//Undefined
    var total; 

//Null
    var numero2 = 10;
    numero2 = null;

//NaN
    var texto2 = "Hola mundo";
    document.write(texto2 * 2); //Valor inválido, ya que no se puede multiplicar. Muestra un error
