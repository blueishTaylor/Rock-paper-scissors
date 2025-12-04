    let humanScore = 0;
    let computerScore = 0;

function getHumanChoice () {
    const humanInput = prompt ("Ingresa tu opcion:");
    return humanInput;
}
    

function getComputerchoice () {
    const randomNumber = Math.random ();

    if (randomNumber < 0.3333) {
        return "rock";
    } else if (randomNumber < 0.6666) {
        return "paper";
    }else {
        return "scissors";
    }
}
function playRound (humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase(). trim();
    const computer = computerChoice. toLowerCase() .trim ();
    let resultadoRonda = "";

    if (human === computer) {
    resultadoRonda = "Empate";
    console.log (`Empate!Ambos eligieron ${humanChoice}`);
    }

    else if (
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock" )
    ) {
    resultadoRonda = "human-win";
    humanScore++
    console.log (`Ganaste! ${human} beats ${computer}`);
    }
    else
    {resultadoRonda = "computer-win";
    computerScore++ 
    console.log (`Perdiste! ${computer} beats ${humanChoice}`);
    }
}

function playGame () {
console.log ("---Inicio juego Rock, Paper, Scissors---")
for (let i =0; i<5;i++) {
console.log (`\n---Ronda ${i + 1}---`);
    const humanSelection = getHumanChoice ();
    const computerSelection = getComputerchoice ();
playRound (humanSelection,computerSelection);
console.log (`Puntaje acumulado: User ${humanScore} | Computer ${computerScore}`);
}


console.log ("\n---FIN DEL JUEGO---");
        if (humanScore> computerScore) {
            console.log (`FELICIDADES! GANASTE CON ${humanScore} a ${computerScore}`);
        } else if (computerScore>humanScore) {
            console.log (`FIN DEL JUEGO. LA COMPUTADORA GANA CON ${computerScore} a ${humanScore}`);
        } else {
            console.log ("FIN DEL JUEGO! ES UN EMPATE")
        } 
}

playGame ()