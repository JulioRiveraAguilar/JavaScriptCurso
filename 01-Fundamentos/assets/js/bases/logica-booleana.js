
const regresaTrue = () => {
    console.log ('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log ('regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);// true
console.log(!true); // false
console.log(!false); // true 

console.log( !regresaFalse()); //true

console.warn('And'); // true si todos los valores son verdares
console.log(true && true );// ture
console.log(true && false ); // false
console.log(true && !false ); // true 


console.log('==============');
console.log( regresaFalse() && regresaTrue() ); //false
console.log( regresaTrue() && regresaFalse() ); //false

console.log('==============');
//regresaTrue() && regresaFalse();
regresaFalse() && regresaTrue();//&& no compila lo que le sigue ya que save que al no estar igual mejor igual darias false y por eso solo se muestra 'reutn false';

console.log('4 condiciones:',true && true && true && false);// false


console.warn('OR'); // lo opuesto del And(&&) regresa true cuando algo de lo que esta evaluando sea 'true'
console.log(true || false);
console.log(false || false);
console.log( regresaTrue() || regresaFalse() ); //true
console.log( regresaFalse() || regresaTrue() ); //false
console.log('4 condiciones:',true || true || true || false);// true

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1= true && 'Hola mundo' && 150; //se le asigna el ultimo valor si cumple las condiciones
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3= soyFalso || 'ya no soy falaso';
const a4 = soyFalso || soyUndefined || soyNull ||'ya no soy falaso' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() ||'ya no soy falaso' ;

console.log({ a1, a2, a3, a4, a5});

if(regresaFalse() && regresaTrue() && (true|| false|| true)){ //si se hace muy elaborado es mejor la manera de resumirlo
    console.log('Hacer algo');
}else{
    console.log('Hacer otra cosa');
}
