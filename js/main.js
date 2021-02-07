/*CREO MI CLASE */
class Personaje {
    constructor(nombre, vida, fuerzaAtaque, fuerzaDefenza, suerte) {
        this.nombre = nombre;
        this.vida = vida;
        this.vidaInicial = vida;
        this.fuerzaAtaque = fuerzaAtaque;
        this.fuerzaDefenza = fuerzaDefenza;
        this.suerte = suerte;
        this.handicap = Math.floor(Math.random() * (suerte - 1));
    };

    resetLife() {
        this.vida = this.vidaInicial;
    }

    attack(enemigo) {
        //calculo el daño
        //Math.max -> controlo que la vida y el daño no vayan por debajo de 0
        let damage = Math.max(
            (this.fuerzaAtaque - enemigo.fuerzaDefenza) *
            (this.suerte - this.handicap),
            0);
        enemigo.vida = Math.max(enemigo.vida - damage, 0);
    };

    specialAttack(enemigo) {
        let damage = Math.max(
            ((this.fuerzaAtaque + this.fuerzaAtaque * 0.5) - enemigo.fuerzaDefenza) *
            (this.suerte - this.handicap),
            0);
        enemigo.vida = Math.max(enemigo.vida - damage, 0);
    }
};

//INSTANCIA

let mario = new Personaje('mario', 400, 35, 15, 7);
let luigi = new Personaje('luigi', 400, 32, 12, 2);
let peach = new Personaje('peach', 400, 28, 16, 3);
let yoshi = new Personaje('yoshi', 400, 38, 18, 4);



/*JUGADORES*/
let player1 = null;
let player2 = null;

/*PANTALLAS */

let pantallas = [
    document.getElementById('pantallaUno'),
    document.getElementById('pantallaDos'),
    document.getElementById('pantallaTres'),
    document.getElementById('pantallaCuatro')
];

let pantallaActual = 0;

let cambiarPantalla = (pantalla) => {
    pantallas[pantallaActual].style.display = "none";
    pantallas[pantalla].style.display = "block";

    //Me acuerdo en que pantalla estoy
    pantallaActual = pantalla;
};

cambiarPantalla(0);