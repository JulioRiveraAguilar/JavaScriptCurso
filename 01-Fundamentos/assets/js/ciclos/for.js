
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for( let i= 0; i < heroes.length/*5*/; i++ ){
    console.log( heroes [i] );
}

console.warn('For in');

for(let i in heroes){
    console.log(heroes[i]);
}

console.warn('For off');
for( let heroe of heroes){
    console.log(heroe);
}