let human = ""

function getHumanChoice () {
    const human = prompt ("Ingresa tu opcion:");
}

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
  /*  getHumanChoice ();*/

let humanScore = 0;
let computerScore = 0;

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
    {resultadoRonda = computer-win;
    computerScore++ 
    console.log (`Perdiste! ${computer} beats ${humanChoice}`);
    }
    console.log(`Puntaje: Humano: ${humanScore}- Computadora: ${computerScore}`);
}