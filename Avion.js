// Clase principal (Aviones)//
class Aviones {
    constructor(color, marca, velocidad_Maxima) {
        this.color = color;
        this.marca = marca;
        this.velocidad_Maxima = velocidad_Maxima;
    }

    // Métodos//
    realizarDespegueAutomatico() {
        console.log(`${this.velocidad_Maxima} realizando despegue automático...`);
    }

    realizarDespegueManual() {
        console.log(`${this.velocidad_Maxima} realizar despegue manual...`);
    }
}

// Herencia 1
class AvionPrivado extends Aviones {
    constructor(color, marca, velocidad_Maxima, propietario) {
        super(color, marca, velocidad_Maxima);
        this.propietario = propietario;
    }

    volarPrivadamente() {
        console.log(`Avión privado de ${this.marca} volando para ${this.propietario} Daniel..`);
    }

    // Método polimorfismo//
    realizarAcciones() {
        console.log(`Realizando acciones privadas con ${this.marca} Boeing`);
    } 
}

// Segunda herencia//
class AvionComercial extends Aviones {
    constructor(color, marca, velocidad_Maxima, aerolinea) {
        super(color, marca, velocidad_Maxima);
        this.aerolinea = aerolinea;
    }
}

anunciarViaje() {
    console.log(`Avión comercial de ${this.marca} perteneciente a ${this.aerolinea} anunciando próximo viaje.`);
}
 

// Herencia 3//
class AvionCarga extends Aviones {
    constructor(color, marca, velocidad_Maxima, capacidadCarga) {
        super(color, marca, velocidad_Maxima);
        this.capacidadCarga = capacidadCarga;
    }
}


cargarMercancia() {
    console.log(`Avión de carga ${this.marca} cargando mercancía con capacidad de ${this.capacidadCarga} toneladas.`);
}

const avionComercial = new AvionComercial('blanco', 'Comercial', 900, 'publico');
const avionPrivado = new AvionPrivado('negro', 'Boeing ', 1.061, 'Daniel');
const avionDeCarga = new AvionCarga('gris', 'CargaAir', 700, 5000);

//Metodos//
avionComercial.realizarDespegueAutomatico();
avionComercial.realizarDespegueManual();
avionComercial.anunciarViaje();   

avionPrivado.realizarDespegueAutomatico();
avionPrivado.realizarDespegueManual();
avionPrivado.volarComodamente();


avionDeCarga.realizarDespegueAutomatico();
avionDeCarga.realizarDespegueManual();
avionDeCarga.cargarMercancia();  