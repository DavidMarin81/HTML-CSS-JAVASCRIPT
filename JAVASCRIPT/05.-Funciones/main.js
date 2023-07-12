//Funciones

//Sin parametros
var nombre = "Carlos";
function saludo(){
    document.write("Hola "+ nombre);
}

//Con parametros
function saludo2(usuario){
    document.write("Hola " + usuario);
}

//Con varios parametros
function sumar(numero1, numero2){
    var resultado = numero1 + numero2;
    document.write(resultado);
}

//Funciones con return
function restar(numero1, numero2){
    var resultado = numero1 - numero2;
    return resultado;
}

//Funciones return dentro de una variable
var multiplicacion = function(numero1, numero2){
    var resultado = numero1 * numero2;
    return resultado;
}

//Funcion con varios returns
function numeroMaximo(valor1, valor2){
    if (valor1 > valor2){
        return valor1;
    } else if (valor2 > valor1){
        return valor2;
    } else{
        return valor1;
    }
}

//Se usa la funcion sin parametros
saludo();

//Se usa la funcion con parametros
saludo2("David");

//Se usa la funcion con varios parametros
sumar(20, 30);

//Se usa la funcion con return
document.write(restar(60, 20));

//Se usa la variable con la funcion
document.write(multiplicacion(7, 3));

//Funcion con varios returns
var numMaximo = numeroMaximo(80, 50);
document.write("El numero maximo es " + numMaximo);

document.write("<br>");

//Ejercicio con calculadora

document.write("CALCULADORA" + "<br>");

var suma = function(numero1, numero2){
    //Se parsea para que devuelva un int y no un String
    numero1 = parseInt(document.getElementById("numero1").value);
    numero2 = parseInt(document.getElementById("numero2").value);
    
    var resultado = numero1 + numero2;
    return resultado;
}