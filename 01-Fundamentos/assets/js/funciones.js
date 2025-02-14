function saludar( nombre ){
    //console.log(arguments);
    //console.log('Hola ' + nombre );
    return [1,2,3,4,5];

    //Esto nunca se va a ejecutar por estar depues del return
    console.log('Doy un codigo que esta despues del return')
}

const saludar2 = function(nombre){
    console.log('Hola '+ nombre);
}

const saludarFlecha = () =>{
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) =>{
    console.log('Hola ' + nombre);
}


const retornoDeSaluda = saludar('Fernando', 40, true, 'Costa Rica');

//saludar2('Fernando');

//saludarFlecha();
//saludarFlecha2('Melissa');

function sumar(a,b){
    return a+ b;
}

/*const sumar2= (a,b) => {
    return a+b;
}*/
const sumar2= (a,b) => a+b;

function getAleatorio(){
    return Math.random();
};
// En un funcion de flecha, que no tenga llaves {}
const getAleatorio2= () => Math.random();

console.log(getAleatorio2());
