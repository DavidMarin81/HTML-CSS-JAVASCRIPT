//Arrays

    let dias : string[] = ["lunes", "martes", "miercoles", "jueves", "viernes"];

    /* Si no se asigna el tipo de dato, se pueden mezclar */

    console.log(dias[2]);

//Tuplas (no existe en JavaScript)

    let tupla : [string, number, string] = 
        ["Dani", 26, "Macarrones"];

    /* Tambien se puede asignar un nombre a cada tipo */
    let db : [nombre: string, edad : number, comida : string] = 
        ["Dani", 26, "Macarrones"];

//Objectos //Los primeros parentesis definen que es de tipo objeto var persona : {} = ...

    let objeto : object = {
        nombre : "Pepe Perez",
        edad : 40,
        pais : "Colombia"
    }

//Ver que laboral es un dato de tipo objeto (lleva {})

    let persona : {
        nombre : string,
        edad : number,
        pais : string,
        laboral : {
            empresa : string,
            sector : string,
        }
    } = {
        nombre : "Pepe Perez",
        edad : 30, 
        pais : "Colombia",
        laboral: {
            empresa : "Empresita",
            sector : "Informatica"
        }
    }

    console.log(persona.nombre);