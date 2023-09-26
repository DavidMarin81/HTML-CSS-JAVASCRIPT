//Funciones

    function sumar(m : number, n : number) : number{
        let suma = m + n;
        console.log(`${m} + ${n} = ${suma}`);
        return suma;
    }

    sumar(3, 4);

//Funcion void

    increaseBy(): void {
    this.counter ++;
  }

//Funcion con argumento de tipo funcion
    let multiplicar : (m : number, n : number) => number;
    multiplicar = (m, n) => m * n;

    let dividir : (a : number, b : number, callback : (r : number) => void) => void;
    dividir = (a, b, callback) => callback(a * b);
    dividir(4, 5, function(result) {
        console.log(`Resultado: ${result}`);
    })
