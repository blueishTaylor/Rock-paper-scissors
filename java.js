function getComputerchoice () {
    const randomNumber = Math.random ();

    if (randomNumber < 0.3333) {
        return "rock";
    }

    else if (randomNumber < 0.6666) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

console.log ("Eleccion 1:", getComputerchoice ());
console.log ("Eleccion 2:", getComputerchoice ());
console.log ("Eleccion 3:", getComputerchoice ()); 

function getHumanChoice () {
    const choice = prompt ("Ingresa tu opcion:");
    alert ("Tu opcion es: " + choice);
    }

    getHumanChoice ();

let puntajeUser = 0;
let puntajeComputer = 0;
const PuntosPorAcierto = 1;

function humanScore () {
    humanScore = humanScore + puntajeUser;
}

function computerScore () {
    computerScore = computerScore + puntajeComputer;
}


