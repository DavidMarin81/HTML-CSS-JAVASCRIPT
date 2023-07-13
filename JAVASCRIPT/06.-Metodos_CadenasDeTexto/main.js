//Métodos y propiedades para Cadena de texto

//Número de caracteres
var nombre = "David Marin"; //Devuelve 11
document.write(nombre.length); 

//Para coger un trozo de la cadena
var apellido = nombre.substring(6); //Devuelve "Marin"
var nombre = nombre.substring(0, 5); //Devuelve "David"

document.write(nombre + " " + apellido);

//Para saber la posición de un caracter
var nuevoTexto = nombre.indexOf(1); //Nos devuelve 'a'

//Para buscar la posición de un caracter a partir de una posición
nuevoTexto = nombre.indexOf("n", 6); //Buscará la 'n' a partir de la posición 6
nuevoTexto = nombre.lastIndexOf("a"); //Buscará la 'a' desde el final de la cadena

//Para reemplazar una cadena de texto por otra
nuevoTexto = nombre.replace("David", "Xian"); //Cambia "David" por "Xian"
var palabra = "pasapalabra";
var nuevaPalabra = palabra.replace("a", "o"); //Cambia la primera coincidencia de 'a' por la 'o'
var paraReplaceAll = nuevaPalabra.replaceAll("a", "o"); //Cambia todas las "a" por "o"
document.write(nuevaPalabra);
document.write(paraReplaceAll);

