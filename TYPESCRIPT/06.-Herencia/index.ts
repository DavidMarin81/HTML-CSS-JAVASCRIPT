class Vehiculo {

    moverse() {
        console.log("El vehículo se ha movido");
    }

}

class VehiculoTerrestre extends Vehiculo {
    moverse() {
        console.log("Brum, brum");
        super.moverse();
    }
}

class VehiculoAereo extends Vehiculo{

}

let vehiculo = new Vehiculo();
vehiculo.moverse(); //Imprime -> "el vehiculo se ha movido"

let vehiculo2 = new VehiculoTerrestre();
vehiculo2.moverse(); //Imprime -> "el vehiculo se ha movido" (Porque lo hereda de su padre) y "Brum, brum"