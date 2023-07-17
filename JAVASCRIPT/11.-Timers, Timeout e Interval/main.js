(function(){

    var contador = 0;

    var saludo = function(){
        console.log('Saludo', contador);
        contador++;
        if(contador === 5){
            clearInterval(intervalo);
        }
    };

    //Timeout -> tiempo de espera hasta que se ejecute la funcion (una sola vez)
    //Timeout(funcion, tiempo en mm);
    setTimeout(saludo, 1000);

    //Interval -> cada cuanto tiempo queremos que se ejecute la funcion (se ejecutará en bucle cada x tiempo)
    var intervalo = setInterval(saludo, 1000);
    
    //Es recomendable agregar el intervalo a una variable. Asi, con "clearInterval", podemos parar el bucle

    //Se podría hacer un bucle con "setTimeout". Cada vez que se ejectute el bucle, se vuelve a llamar a la función para que vuelva a empezar. De esta manera, se crea un bucle
    /* var saludo = function(){
        contador ++;
        console.log(contador);
        setTimeout(saludo, 1000);
    };

    saludo();
    */
    
    

}())