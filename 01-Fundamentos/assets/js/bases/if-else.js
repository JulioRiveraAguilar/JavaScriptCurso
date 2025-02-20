

let a = 5;


if( a >= 10){ // unfifinrd , null, uns asignacion
    console.log('A es mayor o igual  10');
} else{
    console.log('A es menor a 10');
}

//console.log('Fin de programa ');

const hoy = new Date(); //{}
//console.log( hoy );
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2 Martes...

console.log({ dia });
if( dia === 0){
    console.log('Domingo');
}else if(dia ===1){
    console.log('Lunes');
    /*if(dia===1){
        console.log('Lunes');
    }else{
        console.log('No es lunes ni domingo');
    }*/
} else if(dia == 2){
    console.log('martes');
} else {
    console.log('No es lunes, martes o domingo...');
}


// sin usar if else o switch unicamento objetos 
dia =6;
const diaLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',    
    4: 'jueves',
    5: 'viernes',
    6: 'sábado',
}

const diaLetras2 = ['domingo','lunes','martes','miércoles','jueves', 'viernes','sábado',]; 
// dia de la semana 
console.log(diaLetras2[dia] || 'Dia no es definido');