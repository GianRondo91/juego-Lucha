let cambiaPantalla = (pantallaUno, pantallaDos, pantallaTres, pantallaCuatro) => {
    let pantalla1 = document.getElementById(pantallaUno);
    let pantalla2 = document.getElementById(pantallaDos);
    let pantalla3 = document.getElementById(pantallaTres);
    let pantalla4 = document.getElementById(pantallaCuatro);

    //aqui procedemos con el cambio

    pantalla1.style.display = "none";
    pantalla2.style.display = "block";
    pantalla3.style.display = "none";
    pantalla4.style.display = "none";
};


//funcion de delay...

const resolveIn = delay =>
    new Promise(res => setTimeout(() => res(delay), delay));

//Cambiar de pantalla porque ya tenemos a los personajes elegidos

resolveIn(4000).then(delay => {
    cambiaPantalla("pantallaUno", "PantallaDos");

});



// var delayInMilliseconds = 1000; //1 second

// setTimeout(function() {
//   //your code to be executed after 1 second
// }, delayInMilliseconds);