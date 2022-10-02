let ataqueJugador;
let ataqueEnemigo;

let vidaJugador=3;
let vidaEnemigo=3;

function iniciarJuego(){

    let sectionSeleccionarAtaque= document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionBotonReiniciar= document.getElementById('reiniciar-juego');
    sectionBotonReiniciar.style.display = 'none';

    let botonMascotaJugador=document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click',selecionarMascotaJugador);

    let botonFuego=document.getElementById('boton-Fuego');
    botonFuego.addEventListener('click',ataqueFuego);

    let botonAgua=document.getElementById('boton-Agua');
    botonAgua.addEventListener('click',ataqueAgua);

    let botonTierra=document.getElementById('boton-Tierra');
    botonTierra.addEventListener('click',ataqueTierra);

    let botonReinicar=document.getElementById('boton-reiniciar');
    botonReinicar.addEventListener('click',reiniciarJuego);
}

function selecionarMascotaJugador(){
    let inputHipodoge=document.getElementById('Hipodoge');
    let inputCapipepo=document.getElementById('Capipepo');
    let inputRatigueya=document.getElementById('Ratigueya');

    let spanMascotaJugador=document.getElementById('mascota-jugador');

    if(inputHipodoge.checked){
        //alert("Seleccionaste hipodoge");
        spanMascotaJugador.innerHTML='Hipodoge'
    }else if(inputCapipepo.checked){
        //alert("Seleccionaste Capipeo");
       spanMascotaJugador.innerHTML='Capipepo'
    }else if(inputRatigueya.checked){
        //alert("Seleccionaste Ratigueya");
       spanMascotaJugador.innerHTML='Ratigueya'
    }else{
        alert("Selecciona una mascota");
        reiniciarJuego();
    }

    let sectionSeleccionarMascota=document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display='none';

    let sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display='flex';

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo(){
    let enemigo=aleatorio(1,3);
    let spanMascotaEnemigo=document.getElementById('mascota-enemigo');
    if(enemigo==1){
        spanMascotaEnemigo.innerHTML=' Hipodoge';
    }else if(enemigo==2){
        spanMascotaEnemigo.innerHTML=' Capipepo';
    }else if(enemigo==3){
        spanMascotaEnemigo.innerHTML=' Ratigueya';
    }

}

function ataqueFuego(){
    ataqueJugador="Fuego";

    ataqueAleatorioEnemigo();
}
function ataqueAgua(){
    ataqueJugador="Agua";

    ataqueAleatorioEnemigo();
}
function ataqueTierra(){
    ataqueJugador="Tierra";

    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo(){
    ataqueEnemigo=aleatorio(1,3);
    
    if(ataqueEnemigo==1){

        ataqueEnemigo="Fuego";

    }else if(ataqueEnemigo==2){

        ataqueEnemigo="Agua";
    }else if(ataqueEnemigo==3){

        ataqueEnemigo="Tierra";
    }

    combate();

}
function combate(){
    let spanVidasJugador=document.getElementById('vida-jugador');
    let spanVidasEnemigo=document.getElementById('vida-enemigo');
    
    
    if(ataqueJugador==ataqueEnemigo){
        spanVidasJugador.innerHTML=vidaJugador;
        spanVidasEnemigo.innerHTML=vidaEnemigo;
        createMensaje("EMPATE");
    }
    else if(ataqueJugador=="Fuego" && ataqueEnemigo=="Tierra"){
        vidaEnemigo=vidaEnemigo-1;
        spanVidasEnemigo.innerHTML=vidaEnemigo;

        createMensaje("GANASTE");
    }else if(ataqueJugador=="Agua" && ataqueEnemigo=="Fuego"){
        vidaEnemigo=vidaEnemigo-1;
        spanVidasEnemigo.innerHTML=vidaEnemigo;

        createMensaje("GANASTE");
    }else if(ataqueJugador=="Tierra" && ataqueEnemigo=="Agua"){
        vidaEnemigo=vidaEnemigo-1;
        spanVidasEnemigo.innerHTML=vidaEnemigo;

        createMensaje("GANASTE");
    }else{
        vidaJugador=vidaJugador-1;
        spanVidasJugador.innerHTML=vidaJugador;
        createMensaje("PERDISTE");
    }

    revisarVidas();
}
function revisarVidas(){
    if(vidaEnemigo ==0 ){
        createMensajeFinal("Felicitaciones GANASTE");
    }else if(vidaJugador == 0){
        createMensajeFinal("Perdiste");
    }else{

    }
}

function createMensaje(resultado){
    let sectionMensajes=document.getElementById('resultado');
    let ataquesDelJugador=document.getElementById('ataques-del-jugador');
    let ataquesDelEnemgigo=document.getElementById('ataques-del-enemigo');

    let nuevoAtaqueDelJugador=document.createElement('p');
    let nuevoAtaqueDelEnemigo=document.createElement('p');

    sectionMensajes.innerHTML=resultado;
    nuevoAtaqueDelJugador.innerHTML=ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML=ataqueEnemigo;

    //let parrafo=document.createElement('p');
    //parrafo.innerHTML= 'Tu mascota atacó con: '+ataqueJugador+', y la mascota del enemigo atacó con: '+ataqueEnemigo+'--->'+resultado;

    //metemos el parrafo dentro de la seccion mensajes
    //sectionMensajes.appendChild(notificacion);
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemgigo.appendChild(nuevoAtaqueDelEnemigo);
}

function createMensajeFinal(resultadoFinal){
    let sectionMensajes=document.getElementById('resultado');

    sectionMensajes.innerHTML= resultadoFinal;

    //sectionMensajes.appendChild(parrafo);

    //UNA VEZ TERMINEOS EL JUEGO, DESABILITAMOS LOS BOTONOS, CON SU PROIEDAD DISABLED
    let botonFuego=document.getElementById('boton-Fuego');
    botonFuego.disabled=true;

    let botonAgua=document.getElementById('boton-Agua');
    botonAgua.disabled=true;

    let botonTierra=document.getElementById('boton-Tierra');
    botonTierra.disabled=true;

    let sectionBotonReiniciar= document.getElementById('reiniciar-juego');
    sectionBotonReiniciar.style.display = 'block';
}

function reiniciarJuego(){
    location.reload();
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', iniciarJuego);