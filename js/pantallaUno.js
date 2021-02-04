// window.addEventListener('load', init, false);

let entrar = document.getElementById('entrar');
let start = document.getElementById('start');
let volver = document.getElementById('volver');
let go = document.getElementById('go');

let pantalla1 = document.getElementById('pantallaUno');
let pantalla2 = document.getElementById('pantallaDos');
let pantalla3 = document.getElementById('pantallaTres');
let pantalla4 = document.getElementById('pantallaCuatro');
// console.log('donde');
// let inciar = () => {
//     pantalla1.style.visibility = "block";

//     entrar.addEventListener('click', function(e) {
//         if (pantalla1.style.visibility === "block") {

//             pantalla1.style.visibility = "none";
//             pantalla2.style.visibility = "block";
//             pantalla3.style.visibility = "none";
//             pantalla4.style.visibility = "none";
//         } else {
//             pantalla1.style.visibility = "none";
//         };
//     });
//     false;
//     console.log('donde');
// };
// console.log('donde');

let inciar = () => {};
/*INICIAMOS LA PANTALLA */
pantalla1.style.display = "block";
pantalla2.style.display = "none";
pantalla3.style.display = "none";
pantalla4.style.display = "none";

/*EVENTO PANTALLA */
entrar.addEventListener('click', () => {
    if (pantalla1.style.display === "block") {
        pantalla1.style.display = "none";
        pantalla2.style.display = "block";
        pantalla3.style.display = "none";
        pantalla4.style.display = "none";
    } else {
        pantalla1.style.display = "none";
    };
});