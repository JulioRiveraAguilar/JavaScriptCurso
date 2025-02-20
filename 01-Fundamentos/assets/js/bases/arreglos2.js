let juegos =['zelda', 'Mario', 'Metroid', 'Gos of war' ];
console.log('Largo:', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1 ];

console.log({primero,ultimo});

juegos.forEach( (elemento, indice, arr) =>{
    console.log({elemento , indice, arr})
} ); //ejecuta una instruccion por cada uno de los elementos que se encuntra en el arreglo

let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos });

let juegoBorrado= juegos.pop();
console.log({juegoBorrado, juegos});


let pos = 1;

console.log(juegos);
let juegosBorrados= juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metrpodIndex = juegos.indexOf('Metroid'); //CaSeSeNsItIvE -1 significa que no encontro 
console.log({ metrpodIndex});

//Todo: Referencia