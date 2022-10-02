function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min +1)+
min);
}
//FUNCTION TO IF ELSE IF
function eleccion(jugada){
    let resultado="";
    if(jugada==1){
        resultado= " PIEDRA";
    }else if(jugada==2){
        resultado= " PAPEL";
    }else if(jugada==3){
        resultado=" TIJERA";
    }else{
        resultado="Mal elegido";
    }
    return resultado;
}
//FUNCION COMBATE
function combate(pc, jugador) {
    let desenlace = "";
    if (pc == jugador) {
    desenlace = "EMPATE 🤝";
    } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
    desenlace = "GANASTE 🏆";
    triunfos++;
    } else {
    desenlace = "PERDISTE 😣";
    perdidas++;
    }
    return desenlace;
}
let jugador=0;
//COMENTARIO PARA CREAR CICLOS, PC ARRANCA EN 0//let pc=aleatorio(1,3); // let max=3; // let min=1;
let pc=0;
//AGREGAMOS PARA CREAR 3 TRIUNFOS, tel trinfups
//AGREGAMOS PARA CREAR 3 PERDIDAS, tel trinfups
let triunfos=0;
let perdidas=0;
while(triunfos<3 && perdidas<3){
    //PEGAMOS TODO EL PROGRAMA DE COMBATE MIENTRAS QUE SEAN MENORES QUE 3 TRINUFOS O DERROTAS
    pc=aleatorio(1,3);
    jugador=prompt("Elige: 1 para piedra, 2 parapapel y 3 para tijera");

    alert("PC elige: "+eleccion(pc));
    alert("Tu eliges elige: "+eleccion(jugador));
    //COMBATE CON MENOS CODIGO
    // if(jugador==pc){
    //     alert("tie");
    // }else if(jugador==1 && pc==3 || jugador==2 && pc==1 || jugador==3 && pc==2){
    //     alert("You win");
    //     triunfos=triunfos+1;
    // }else{
    //     alert("You lose");
    //     perdidas=perdidas+1;
    // }

        //COMBATE CON FUNCIONES
        // COMBATE
    alert("Tu " + combate(pc, jugador));
    }
alert("Ganaste "+triunfos+" veces. Perdiste "+ perdidas+" veces");


    //SE INTRODUJO DENTRO DE WHILE ESTE CODIGO
   //aleatorio(1,3);
// jugador=prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera");
    //SE REEMPLAZO CON FUNCION
// if(jugador==1){
//     alert("Elegiste PIEDRA");
// }else if(jugador==2){
//     alert("Elegiste PAPEL");
// }else if(jugador==3){
//     alert("Elegiste TIJERA");
// }else{
//     alert("Elegiste perder");
// }

// if(pc==1){
//     alert("Pc elige PIEDRA");
// }else if(pc==2){
//     alert("Pc elige PAPEL");
// }else if(pc==3){
//     alert("Pc elige TIJERA");
// }

//COMBATE
// if(pc == jugador){
//     alert("Empate");
// }else if(jugador==1 && pc==3){
//     alert("Tu ganas");
// }else if(jugador==2 && pc==1){
//     alert("Tu ganas");
// }else if(jugador==3 && pc==2){
//     alert("Tu ganas");
// }else{
//     alert("Gana la PC");
// }

// alert("PC elige: "+eleccion(pc));
// alert("Tu eliges elige: "+eleccion(jugador));

// //COMBATE CON MENOS CODIGO
// if(jugador==pc){
//     alert("tie");
// }else if(jugador==1 && pc==3 || jugador==2 && pc==1 || jugador==3 && pc==2){
//     alert("You win");
// }else{
//     alert("You lose");
// }