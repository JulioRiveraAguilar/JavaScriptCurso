

class Persona{
    //todas las clases tienen el use strict

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo+' instancia';
    }

    static mensaje(){
        console.log(this.nombre); // undefined
        console.log('Hola a todos, soy un método stático' );
    }

    nombre= '';
    codigo= '';
    frase = '';
    comida ='';
    constructor(nombre='Sin nombre',codigo='sin codigo',frase='Sin frase'){
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase =frase;

        Persona._conteo++;
    }

    //Sets y Gets
    set setComidaFavorita( comida){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida fvorita de ${this.nombre} es ${this.comida}`;
    }
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice ${this.frase}`);
    }
}

const spiderman = new Persona('Peter parker','Spider', 'Soy tu amigable y vecino spidermna'); 
const iroman= new Persona('Tony Stark', 'Iroman', 'Yo soy Iromna');


//console.log(iroman)

spiderman.miFrase();
//iroman.quienSoy();

spiderman.setComidaFavorita = 'El pide de cereza de la tia May';
spiderman.comida = 'Duende verde';

//console.log(spiderman.getComidaFavorita);

//console.log( spiderman );
//Persona._conteo =2;
console.log('Conteo estatico',Persona._conteo);
console.log(Persona.conteo)
Persona.mensaje();

Persona.PropiedadExterna= 'Hola Mundo';

console.log(Persona.PropiedadExterna);
console.log(Persona)