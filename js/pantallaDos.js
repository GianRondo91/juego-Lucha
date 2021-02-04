/*AVATARES*/

let marioDiv = document.getElementById('mario');
let luigiDiv = document.getElementById('luigi');
let peachDiv = document.getElementById('yoshi');
let yoshiDiv = document.getElementById('peach');

/*EVENTO CLICK */
marioDiv.addEventListener('click', () => {
    console.log('Sleccionaste a ', marioDiv);
});

luigiDiv.addEventListener('click', () => {
    console.log('Sleccionaste a ', luigiDiv);
});
peachDiv.addEventListener('click', () => {
    console.log('Sleccionaste a ', peachDiv);
});
yoshiDiv.addEventListener('click', () => {
    console.log('seleccionaste a ', yoshiDiv);
});

jugadores.push(mario, luigi, peach, yoshi);

console.log(jugadores);

/*SELECCIONAR PERSONAJES */
let seleccion = (personajes) => {

    //Introducimos personaje en PLAYER  

}

/*PANTALLA */
go.addEventListener('click', () => {
    if (pantalla2.style.display === "block") {
        pantalla2.style.display = "none";
        pantalla3.style.display = "block";
        pantalla1.style.display = "none";
        pantalla4.style.display = "none";
        go.removeAttribute('disabled')
    } else {
        pantalla2.style.display = "none";
    };
});