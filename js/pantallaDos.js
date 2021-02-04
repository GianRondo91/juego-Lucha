/*AVATARES*/

let marioDiv = document.getElementById('mario');
let luigiDiv = document.getElementById('luigi');
let peachDiv = document.getElementById('peach');
let yoshiDiv = document.getElementById('yoshi');

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

    if (player1 != null && player2 != null) {
        return;
    }

    if (player1) {
        if (player1 === personaje) {
            alert("¡¡No puedes elegir el mismo personaje!!");
            return;
        }

        player2 = personaje;
        go.disabled = false;
        opcion = "dos";
    } else {
        player1 = personaje;
        opcion = "uno";
    };

    //Introducimos personaje en PLAYER  
    let personajeDiv = document.getElementById(personaje.nombre);

    //Le damos un color de seleccion a cada jugador
    personajeDiv.className += " select-player-" + opcion;
}


/*PANTALLA */
go.addEventListener('click', () => {

    cambiarPantalla(2);
});