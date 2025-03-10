

const fher={
    nombre:'Fernanado',
    edad: 30 ,
    imprimir(){
        console.log(`Nombre: ${ this.nombre}-edad: ${this.edad}`);
    }
}

const pedro={
    nombre:'pedro',
    edad: 15 ,
    imprimir(){
        console.log(`Nombre: ${ this.nombre}-edad: ${this.edad}`);
    }
}

//fher.imprimir();
//esto se debe crear con la palabra new
function Persona(nombre,edad){
    console.log('Se ejecuto esta Linea');
    
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre} - edad: ${this.edad}`);
    }
} //esto se hacia antes para crear clases en java 
 

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);
console.log(maria);
maria.imprimir();
melissa.imprimir();