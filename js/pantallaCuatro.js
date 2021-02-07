let volver = document.getElementById('volver');

/*PANTALLA */
volver.addEventListener('click', () => {
    //Reseteo
    player1.resetLife();
    player2.resetLife();

    //
    let personajeDiv = document.getElementById(player1.nombre);
    personajeDiv.firstElementChild.className = "avatar avatar-" + player1.nombre;

    //
    personajeDiv = document.getElementById(player2.nombre);
    personajeDiv.firstElementChild.className = "avatar avatar-" + player2.nombre;

    // 
    player1 = null;
    player2 = null;

    cambiarPantalla(0);
});

/*MUESTO POR PANTALLA A LOS 2 PERSONAJES SELECCIONADOS */

/*PONGO ESTRELLA AL GANADOR */