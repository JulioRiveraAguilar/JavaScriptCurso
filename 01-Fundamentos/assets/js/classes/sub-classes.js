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
class Heroe extends Persona{
    clan='sin clan';

    constructor(nombre, codigo,frase){
        super(nombre,codigo,frase);
        //El this debe de ir depues de aver llamado el super para disparar el constructor de la clase a la cual se extendio
        this.clan = 'Los avengers';

    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}
const spiderman = new Heroe('Peter parker','Spider', 'Soy tu amigable y vecino spidermna'); 
//const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();