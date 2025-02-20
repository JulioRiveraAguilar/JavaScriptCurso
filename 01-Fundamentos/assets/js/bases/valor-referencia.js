let a=10;
let b=a;
a=30;

console.log({a,b});

let juan = { nombre: 'Juan'};
let ana = { ... juan}; //... operador expret simbolisa separa los elementos , rompe la referencia que hay en java scrip y de esa manera poder trabajar en objetos 
                    // y hacer igualaciones que apunten diferentes espacios de memoria 
ana.nombre = 'Ana'; //todos los primitivos se pasan por valor y todos los objetos son pasados por referencia

console.log({juan, ana});
 
const cambiarNombre = ({... persona}  ) =>{
    persona.nombre = 'Tony';
    return persona;
};

let peter = {nombre : 'Peter'};
let tony = cambiarNombre(peter);

console.log({peter, tony});

// Arreglos
const frutas = ['Manzana', 'pera', 'Piña']

console.time('slice');
const otrasFrutas = frutas.slice(); 
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas});