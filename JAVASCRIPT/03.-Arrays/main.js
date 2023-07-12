//Arrays (Métodos más utilizados. Investigar más sobre arrays)

//Se pueden introducir variables de distinto tipo
var amigos = ["Diego", "Carlos", "Patri", "Julia", true, 4];

//Para mostrar un valor
document.write(amigos[2]) // Se mostraría "Patri"

//Si se accede a un valor que no existe, se mostrará "undefined"
document.write(amigos[10]); // Se mostrará "undefined"

//Si se quiere cambiar un valor del array
amigos[0] = "Arturo"; //Se cambia "Diego" por "Arturo"

//Para agregar un nuevo elemento en el array
amigos[6] = "Nuevo nombre";

//Propiedad length
document.write("Hay " + amigos.length + " elementos en el array");

//Para agregar un elemento al final del Array
amigos[amigos.length] = "Fernando";
amigos.push("Luis", "Daniel", "Clara"); //Para agregar elementos al final del array

//Para eliminar el ultimo elemento del array
amigos.pop(); 

//Para unir dos arrays (.concat)
var amigos2 = ["Luis", "Marta", "Vanesa"];
var amigos3 = amigos.concat(amigos2);
document.write(amigos3);

//Para separar los valores del array. Se usa por diseño a la hora de mostrar los valores
document.write(amigos.join(" -> "));

var amigos2 = amigos.join(" - "); //Con esto se establece que el array se mostrará separado con guiones
document.write(amigos2); //Al imprimir esto, se mostrarán los valores separados con guiones

//Para ordenar los elementos
var ordenador = amigos.sort();