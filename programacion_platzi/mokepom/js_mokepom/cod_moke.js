
   //INICIARJUEGO
const sectionSeleccionarAtaque= document.getElementById('seleccionar-ataque')
const sectionBotonReiniciar= document.getElementById('reiniciar-juego');
const botonMascotaJugador=document.getElementById('boton-mascota');
const botonFuego=document.getElementById('boton-Fuego');
const botonAgua=document.getElementById('boton-Agua');
const botonTierra=document.getElementById('boton-Tierra');
const botonReinicar=document.getElementById('boton-reiniciar');

    //MASCOAJUGADOR()
const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota');
// const sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')   //Variable repetida, se puede eliminar

const spanMascotaJugador=document.getElementById('mascota-jugador');
    //MASCOENEMIGO()   
const spanMascotaEnemigo=document.getElementById('mascota-enemigo');
    //COMBATE
const spanVidasJugador=document.getElementById('vida-jugador');
const spanVidasEnemigo=document.getElementById('vida-enemigo');
    //CREATEMENSAJE()
const sectionMensajes=document.getElementById('resultado');
const ataquesDelJugador=document.getElementById('ataques-del-jugador');
const ataquesDelEnemgigo=document.getElementById('ataques-del-enemigo');

const contenedorTarjetas=document.getElementById('contenedorTarjetas');


    //MessageFinal
    //variables borrados= repetidos, no necesarias
//let sectionMensajes=document.getElementById('resultado');
//let botonFuego=document.getElementById('boton-Fuego');
//let botonAgua=document.getElementById('boton-Agua');
//let botonTierra=document.getElementById('boton-Tierra')
//let sectionBotonReiniciar= document.getElementById('reiniciar-juego');

let mokepones = [];

let ataqueJugador;
let ataqueEnemigo;
    //usamos para inyectar un valor en el html desde javascript dentro del forEach, templates literarios, con comilla invertidas, dentro se mete estructura html
let opcionDeMokepones;

let inputHipodoge
let inputCapipepo
let inputRatigueya

let vidaJugador=3;
let vidaEnemigo=3;

class Mokepon{
    constructor(nombre,foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = []
    }
}

let Hipodoge = new Mokepon('Hipodoge','./img_mokepon/mokepons_mokepon_hipodoge_attack.png',5);

let Capipepo = new Mokepon('Capipepo', './img_mokepon/mokepons_mokepon_capipepo_attack.png', 5);

let Ratigueya = new Mokepon('Ratigueya', './img_mokepon/mokepons_mokepon_ratigueya_attack.png', 5);

    //Agregar objetos a un arreglo .push
//mokepones.push(Hipodoge,Capipepo,Ratigueya);
Hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-Agua'},
    {nombre: '💧', id: 'boton-Agua'},
    {nombre: '💧', id: 'boton-Agua'},
    {nombre: '🌱', id: 'boton-Tierra'},
    {nombre: '🔥', id: 'boton-Fuego'}
);

Capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-Tierra'},
    {nombre: '🌱', id: 'boton-Tierra'},
    {nombre: '🌱', id: 'boton-Tierra'},
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '💧', id: 'boton-Agua'}
);

Ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🌱', id: 'boton-Tierra'},
    {nombre: '💧', id: 'boton-Agua'}
);

    //creamos nuevos objetos 
mokepones.push(Hipodoge,Capipepo,Ratigueya);

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none';
    sectionBotonReiniciar.style.display = 'none';   //desactivamos el boton reainiciar

        //USAMOS UN MÉTODO PARA ITERAR O RECORRER EL OBJETO QUE ESTA DENTRO DEL ARREGLO
        //forEach = por cada uno de los elementos  haz algo
        //por cada mokepon que existe dentro de nuestro arreglo de mokepones haz lo siguiente
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
         <input type="radio" name="mascota" id=${mokepon.nombre} />
         <label class="tarjeta-de-mokepom" for="${mokepon.nombre}">
            <p>${mokepon.nombre}</p>
            <img src="${mokepon.foto}" alt="${mokepon.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones;

        inputHipodoge= document.getElementById('Hipodoge');
        inputCapipepo= document.getElementById('Capipepo');
        inputRatigueya= document.getElementById('Ratigueya');
    });

    botonMascotaJugador.addEventListener('click',selecionarMascotaJugador);

    botonFuego.addEventListener('click',ataqueFuego);
    botonAgua.addEventListener('click',ataqueAgua);
    botonTierra.addEventListener('click',ataqueTierra);

    botonReinicar.addEventListener('click',reiniciarJuego);
}

function selecionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display='none';

    
    sectionSeleccionarAtaque.style.display='flex';

    

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

    

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo(){
    let enemigo=aleatorio(1,3);
    
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

    sectionMensajes.innerHTML= resultadoFinal;

    //sectionMensajes.appendChild(parrafo);

    //UNA VEZ TERMINEOS EL JUEGO, DESABILITAMOS LOS BOTONOS, CON SU PROIEDAD DISABLED
    
    botonFuego.disabled=true;
    
    botonAgua.disabled=true;
    botonTierra.disabled=true;

    sectionBotonReiniciar.style.display = 'block';
}

function reiniciarJuego(){
    location.reload();
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', iniciarJuego);