class Rectangulo{
    //No hace falta declarar las variables dentro de la clase
    //El modificador "readonly" funciona igual que si fuera "final" en Java (no puede cambiar su valor)
    private ancho : number

    private alto : number

    private _nombre : string

    //readonly ancho : number
    //private readonly ancho : number

    //Constructor
    constructor(ancho : number, alto : number){
        this.ancho = ancho;
        this.alto = alto;
    }

    //Getter
    get nombre() {
        return this._nombre;
    }

    //Setter
    set nombre(value : string) {
        this._nombre = value;
    }
}

//Se instancia un objeto
let r = new Rectangulo(10, 5);
//console.log(`${r.ancho} * ${r.alto} = ${r.area()}`);

//Se usa el getter, pero exteriormente se usa como un atributo, para no descubrir si es un atributo o un metodo, de ahí que no se pongan los parentesis "r.area()"
console.log(r.nombre);
