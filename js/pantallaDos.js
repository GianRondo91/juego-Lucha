/*AVATARES*/

let marioDiv = document.getElementById('mario');
let luigiDiv = document.getElementById('luigi');
let peachDiv = document.getElementById('peach');
let yoshiDiv = document.getElementById('yoshi');

//Divs vacios donde iran la seleccin para la pantalla 3
let player1Element = document.getElementById('player1');
let player2Element = document.getElementById('player2');

/*EVENTO CLICK */
marioDiv.addEventListener('click', () => {
    seleccion(mario);
});

luigiDiv.addEventListener('click', () => {
    seleccion(luigi);
});
peachDiv.addEventListener('click', () => {
    seleccion(peach);
});
yoshiDiv.addEventListener('click', () => {
    seleccion(yoshi)
});


//Desababilito boton
let go = document.getElementById('go');


/*SELECCIONAR PERSONAJES */
let seleccion = (personaje) => {
    let opcion = null;

    //
    if (player1 != null && player2 != null) {
        return;
    }
    //
    if (player1) {
        if (player1 === personaje) {
            alert("¡¡No puedes elegir el mismo personaje!!");
            return;
        }

        player2 = personaje;
        go.disabled = false;
        opcion = "dos";
        //Dibujo la imagen seleccionada en el div de la pantalla 3
        selectPlayer(player2, player2Element);

    } else {
        player1 = personaje;
        opcion = "uno";
        //Dibujo la imagen seleccionada en el div de la pantalla 3
        selectPlayer(player1, player1Element);
    };

    //Introducimos personaje en PLAYER  
    let personajeDiv = document.getElementById(personaje.nombre);

    //Le damos un color de seleccion a cada jugador
    personajeDiv.firstElementChild.className += " select-player-" + opcion;
}

//Funcion para elegir el personaje que aparecera en la pantalla 3
let selectPlayer = (player, element) => {
    //meter em pantalla 3 la imagen seleccionada
    switch (player) {
        case mario:
            element.firstElementChild.src = "img/marioAtaque.png";
            element.className = "player marioLucha";
            break;
        case luigi:
            element.firstElementChild.src = "img/luigiAtaque.png";
            element.className = "player luigiLucha";
            break;
        case peach:
            element.firstElementChild.src = "img/peachAtaque.png";
            element.className = "player peachLucha";
            break;
        case yoshi:
            element.firstElementChild.src = "img/yoshiAtaque.png";
            element.className = "player yoshiLucha";
            break;
        default:
            break;
    }

    let progress = document.getElementById('progress-' + element.id);
    progress.style.width = "100%";

}

/*PANTALLA */
go.addEventListener('click', () => {
    cambiarPantalla(2);
});