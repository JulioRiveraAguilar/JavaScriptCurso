/*
Dias de semana abrimos a las 11,
pero los fines semana abrimos a las 9
*/

// Entra a un sitio web, para consulotar si esta abierto hoy...
const dia = 1;//0 : domingo, 1:Lunes
const horaActual = 10;


let horaApertura;
let mensaje; //Es'a abierto, Est'a cerrado, hoy abrimos a las XX

//if(dia === 0 ||/* || (o)*/  dia ===6 ){
/*if( [0,6].includes( dia ) ){
console.log("Fin de semana");
    horaApertura = 9;
}else{
    console.log('Dia de semana');
    horaApertura = 11;
}*/
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11 ;

/*if(horaActual >= horaApertura ){
    mensaje = 'Esta abierto';
}else{
    mensaje= `Esta cerrado, hoy abrimos a las ${ horaApertura } ` ; // alta + 96 = `
}*/

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto ' : `Esta cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({horaApertura, mensaje});

