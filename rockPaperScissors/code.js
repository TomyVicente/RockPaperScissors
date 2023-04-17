//Genera un numero random entre el 1 y el 3 , y dependiendo el numero que salga la funcion devuelve piedra papel o tijeras
function getComputerChoice(){
    let ran = Math.ceil(Math.random()*3);
    if(ran == 1){
        return "scissors"
    }else if(ran ==  2){
        return "paper"
    }else if(ran == 3){
        return "rock"
    }
}
// Genera una ronda sabiendo las dos opciones , tanto de la computadora como del jugador
function oneRoundRPS(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return(`It's a draw , you both pick ${playerSelection}`);
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return(`You've won. You picked ${playerSelection} and your rival picked ${computerSelection}`);
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return(`You've lost. You picked ${playerSelection} and your rival picked ${computerSelection}`);
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return(`You've won. You picked ${playerSelection} and your rival picked ${computerSelection}`);
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return(`You've lost. You picked ${playerSelection} and your rival picked ${computerSelection}`);
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return(`You've lost. You picked ${playerSelection} and your rival picked ${computerSelection}`);
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return(`You've won. You picked ${playerSelection} and your rival picked ${computerSelection}`);
    }
}

//Chequea que el input del usuario este dentro del programa
function playerSelectionCheck(){
    let playerOption = prompt("Enter if you want to choose rock,paper or scissors");
    if (playerOption == "rock" || playerOption == "paper" || playerOption == "scissors"){
        return playerOption;
    }else{
        while (playerOption != "rock" && playerOption != "paper" && playerOption != "scissors"){
            playerOption = prompt("Enter if you want to choose rock,paper or scissors");
            playerOption =playerOption.toLowerCase();
        }
        return playerOption;
    }
}

let playerSelection = playerSelectionCheck();
console.log(playerSelection);

let computerSelection = getComputerChoice();
console.log(computerSelection);

console.log(oneRoundRPS(playerSelection,computerSelection));