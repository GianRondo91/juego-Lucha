class Personaje {
    constructor(nombre, vida, fuerzaAtaque, fuerzaDefenza, suerte) {
        this.nombre = nombre;
        this.vida = vida;
        this.fuerzaAtaque = fuerzaAtaque;
        this.fuerzaDefenza = fuerzaDefenza;
        this.suerte = suerte;
        this.handicap = suerte - Math.floor(Math.random() * 5);
    };

    ataque(enemigo) {
        enemigo.vida -=
            (this.fuerzaAtaque - enemigo.fuerzaDefenza) *
            (this.suerte - this.handicap);
    }
    ataqueEspecial(enemigo) {
        enemigo.vida -=
            (this.fuerzaAtaque *
                0.5 + this.fuerzaDefenza) -
            enemigo.fuerzaDefenza;
    }

};

//INSTANCIA

let mario = new Personaje('mario', 200, 50, 30, 7);
let luigi = new Personaje('luigi', 200, 45, 20, 2);
let peach = new Personaje('peach', 200, 20, 50, 3);
let yoshi = new Personaje('yoshi', 200, 15, 40, 4);

/*JUGADORES*/
let player1 = null;
let player2 = null;
let jugadores = [];

/**PANTALLAS*/

// let cambiaPantalla = (
//     pantallaUno,
//     pantallaDos,
//     pantallaTres,
//     pantallaCuatro
// ) => {
//     let pantalla1 = document.getElementById(pantallaUno);
//     let pantalla2 = document.getElementById(pantallaDos);
//     let pantalla3 = document.getElementById(pantallaTres);
//     let pantalla4 = document.getElementById(pantallaCuatro);

//     //aqui procedemos con el cambio

//     pantalla1.style.display = "none";
//     pantalla2.style.display = "none";
//     pantalla3.style.display = "none";
//     pantalla4.style.display = "none";

// };

/*CAMBIAR PANTALLA UNO A LA DOS */