/*
    2c= a un 2 de Troboles (Clubs)
    2D= a un 2 de Diamantes
    2H= a un 2 de Corazones
    2S= a un 2 de Spadas
*/ 

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0, puntosComputadora = 0;
  

//referecnias html
const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputaora = document.querySelector('#Computadora-cartas');
const puntosHTML = document.querySelectorAll('small');


// Esta funcion crea un nueva deck 
const crearDeck = () =>{
    for( let i = 2; i<=10; i++){
       for( let tipo of tipos ){
            deck.push(i +tipo);
       }
        // deck.push(i+'C');
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp +tipo);
        }
    }
    //console.log( deck );
    deck = _.shuffle(deck) ;
    console.log( deck );
    return deck;

}


crearDeck();

//Esta funcion me perimite tomar una carta 
const pedirCarta = () => {
    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();

   // console.log(deck);
    //console.log(carta);
    return carta;
}

pedirCarta();

const valorCarta = (carta) =>{

    const valor = carta.substring(0, carta.length -1);
    return (isNaN ( valor ) ) ? 
            (valor== 'A') ? 11 :10 
            : valor *1;

    //let puntos = 0;
    /*if( isNaN( valor ) ){
        puntos = ( valor === 'A') ? 11 : 10;
    }else{
       
        puntos = valor * 1;
    }
    console.log(puntos);*/
}

//Turno de la computadora
const turnoComputadora = (puntosMinimos) =>{
   do{
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta  }.png`;
        imgCarta.classList.add('carta');
        divCartasComputaora.append( imgCarta);

        if(puntosMinimos>21){
            break;
        }
    }while( (puntosComputadora < puntosMinimos)&& (puntosMinimos <= 21)) ;

    setTimeout(() => {
        if(puntosComputadora == puntosMinimos){
            alert('Nadie gana')
        } else if ( puntosMinimos > 21){
            alert('La casa gana')
        } else if (puntosComputadora > 21){
            alert('Jugador gana')
        }else{
            alert('Computadora gana')
        }

    }, 10);

}

//const valor = valorCarta(pedirCarta());
//console.log({ valor });

//Eventos
btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta  }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta);

    if(puntosJugador > 21){
        console.warn('Perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    } else if (puntosJugador === 21){
        console.warn('llegaste a 21');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }

});

btnDetener.addEventListener('click', () =>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
})
    
btnNuevo.addEventListener('click', () =>{

    console.clear();
    deck = [];
    deck= crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText=0;
    puntosHTML[1].innerText=0;

    divCartasComputaora.innerHTML ='';
    divCartasJugador.innerHTML ='';
    

    btnPedir.disabled = false;
    btnDetener.disabled = false;
})
    