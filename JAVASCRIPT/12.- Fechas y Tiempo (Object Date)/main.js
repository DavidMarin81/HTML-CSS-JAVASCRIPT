//Muestra la fecha y la hora
var fecha = new Date().toLocaleString();
console.log(fecha);

//Muestra solo la hora
var hora = new Date().toLocaleTimeString();
console.log(hora);

//Muestra la fecha en formato largo. En este caso, se pueden coger los valores con los métodos get
var fecha2 = new Date();
console.log(fecha2);

console.log(fecha2.getDay()); //Dia de la semana (del 0 al 6);
console.log(fecha2.getDate());
console.log(fecha2.getMonth());
console.log(fecha2.getFullYear());

//Para formatear el día de la semana
var semana = ['Domingo', 'Lunes', 'Martes', 'Miecoles', 'Jueves', 'Viernes', 'Sabado'];

console.log("Estamos a " + semana[fecha2.getDay()]);