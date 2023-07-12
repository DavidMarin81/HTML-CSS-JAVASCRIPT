//IF - ELSE
document.write("Bucle if - else " + "<br>");
var nombre = "Carlos";
var edad = 19;

if (nombre == "Carlos" && edad >= 18){
    document.write("Bienvenido " + nombre);
} else if (edad < 18){
    document.write("No eres mayor de edad");
} else {
    document.write("Bienvenido Usuario Anónimo");
}

//FOR
document.write("<br>" + "Bucle for ");
for(i = 0; i <= 5; i++){
    document.write(i + "<br>");
}

//WHILE
document.write("Bucle While " + "<br>");
var i = 0;
var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
while(diasSemana.length > i){
    document.write(diasSemana[i] + "<br>");
    i++;
}