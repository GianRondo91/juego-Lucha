/*CORREGIR- START-para empezar juego */
let start = document.getElementById('start');

start.addEventListener('click', () => {
    // cambiarPantalla(3);
    iniciarBatalla();
});

let battleState = 3;

/**BATALLA */

let iniciarBatalla = () => {
    battleState = 3;

    let startMessage = document.getElementById('startMessage');

    startMessage.style.display = "block";
    startMessage.innerHTML = "";

    let updateStateMessage = () => {

        if (battleState == 0) {
            startMessage.innerHTML = "fight!!!";
            resolveIn(1000).then(delay => {
                startMessage.style.display = "none";
                //Si battleState es -1 -> ahora empieza a pegar
                battleState--;
            });

        } else {
            //Muestro el mensage de batlleStata
            startMessage.innerHTML = "" + battleState;
            battleState--;

            //Muestro el mensaje cada 1s
            resolveIn(1000).then(delay => {
                updateStateMessage();
            });
        };
    };

    updateStateMessage();
};

//Divs vacios donde ira el ganador y perdedor

//Funcion para elegir el personaje que aparecera en la pantalla 4
let showWinnerImage = (winner) => {
    let winnerElement = document.getElementById("winnerElement");
    switch (winner) {
        case mario:
            winnerElement.firstElementChild.src = "img/marioWins.png";
            winnerElement.className = "marioWinner";
            break;
        case luigi:
            winnerElement.firstElementChild.src = "img/luigiWins.gif";
            winnerElement.className = "luigiWinner";
            break;
        case peach:
            winnerElement.firstElementChild.src = "img/peachWins.gif";
            winnerElement.className = "peachWinner";
            break;
        case yoshi:
            winnerElement.firstElementChild.src = "img/yoshiWins.gif";
            winnerElement.className = "yoshiWinner";
            break;
        default:
            break;
    };
};

let showLooserImage = (looser) => {
    let looserElement = document.getElementById("looserElement");
    switch (looser) {
        case mario:
            looserElement.firstElementChild.src = "img/marioLooser.png";
            looserElement.className = "marioLooser";
            break;
        case luigi:
            looserElement.firstElementChild.src = "img/luigiLooser.png";
            looserElement.className = "luigiLooser";
            break;
        case peach:
            looserElement.firstElementChild.src = "img/peachLooser.png";
            looserElement.className = "peachLooser";
            break;
        case yoshi:
            looserElement.firstElementChild.src = "img/yoshiAtaque.png";
            looserElement.className = "yoshiLooser";
            break;
        default:
            break;
    };
};


let finishBattle = (winner) => {
    battleState = 3;
    //Muesto en pantalla 4 los resultados

    if (player1 == winner) {
        showWinnerImage(player1);
        showLooserImage(player2);
    } else {
        showLooserImage(player1);
        showWinnerImage(player2);
    };


    //
    cambiarPantalla(3);
}

let showBomb = (playerId) => {

    //Agrego bomba y quito en medio segundo
    let bomb = document.createElement("div");
    bomb.className = "explosion-player explosion-" + playerId;
    bomb.innerHTML = '<img src="img/explosion.gif" alt="" class="explosion">';

    bomb.style.position = "relative";

    //Mover el top y left de la bombita
    bomb.style.top = Math.floor(Math.random() * 10) + "px";
    bomb.style.left = Math.floor(Math.random() * 10) + "px";

    resolveIn(500).then(delay => {
        bomb.remove();
    });

    //Agrego bomb en bombContainer
    let bombContainer = document.getElementById("bombContainer");
    bombContainer.appendChild(bomb);

}

let attack = (player) => {
    /*Pegar al enemigo*/
    //Saber quien es mi enemigo e identificar los id de los player
    let target = player1;
    let playerId = "player2";
    let targetPlayerId = "player1";

    if (player == player1) {
        target = player2;
        playerId = "player1";
        targetPlayerId = "player2";
    }

    //Random para ver si es ataque especial o no.
    if (Math.random() < 0.9) {
        player.attack(target);
    } else {
        player.specialAttack(target);
    };

    //Actualizar la barra de vida
    let progress = document.getElementById('progress-' + targetPlayerId);
    let lifePerc = Math.floor((target.vida * 100) / target.vidaInicial);

    progress.style.width = lifePerc + "%";

    //Mostrar bomba
    showBomb(targetPlayerId);

    //Si se murio enemigo, finaliza partida
    if (target.vida == 0) {
        finishBattle(player, target);
    }
};

document.addEventListener('keypress', evt => {
    if (battleState != -1) {
        return;
    }

    if (evt.code === 'KeyQ') {
        attack(player1);
    } else if (evt.code === 'KeyP') {
        attack(player2);
    }
});


/*Cambio de pantalla cuando finalizo el juego*/

/* */

//funcion de delay...
const resolveIn = delay =>
    new Promise(res => setTimeout(() => res(delay), delay));