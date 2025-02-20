

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i=0;

/*while( i < carros.length ){
    console.log(carros[i]);
    // para incrementar i hay varias formas 
    //i = i+1;
    i++;
    //i +=2;
}*/
console.warn('while');
//estas son condiciones que son tomadas como falsas 
//haicendo el ciclo nunca se ejecute 
//undefined
//null
//false

while( carros[i] ){
    if(i === 1){
        //break;
        i++
        continue;
    }

    console.log(carros[i]);
    i++;
}

console.warn('Do while'); //por lo menos va a ejecutar el bloque interno una vez
let j = 1;
do{
    console.log(carros[j]);
    j++
}while(carros[j]);

