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
function oneRoundRPS(playerSelection ,computerSelection){

    if (playerSelection == computerSelection){
        return(`It's a draw , you both pick ${playerSelection}`);
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return(`You've won! ${playerSelection} beats ${computerSelection}`);
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return(`You've lost! ${computerSelection} beats ${playerSelection}`);
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return(`You've won! ${playerSelection} beats ${computerSelection}`);
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return(`You've lost! ${computerSelection} beats ${playerSelection}`);
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return(`You've lost! ${computerSelection} beats ${playerSelection}`);
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return(`You've won! ${playerSelection} beats ${computerSelection}`);
    }
}

//Chequea que el input del usuario este dentro del programa
/*
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
*/

//Loops one round game to create a 
function game(){
    /*
    let winsPlayer =0;
    let winsComputer = 0;
    let rounds = 5;
    for(i =0; i< rounds;i++){
    let roundResult = oneRoundRPS();
        if (roundResult.substring(0,10)== "You've won"){
            console.log(roundResult);
            winsPlayer++;
        }else if(roundResult.substring(0,11)== "You've lost"){
            console.log(roundResult);
            winsComputer++;
        }else{
            console.log(roundResult);
        }
    }
    if(winsPlayer > winsComputer){
        console.log("You're god tier player of Rock , Paper and Scissors");
    }else if (winsComputer > winsPlayer){
        console.log("You lose against a computer :( .Try again until you win bro")
    }else {
        console.log("It's a draw")
    }
    */
}


//Crear Listener en los tres botones 
const but = document.querySelectorAll('button');
for(let i=0;i<but.length;i++){
but[i].addEventListener('click',(e) =>{
    let div =document.querySelector('div');
    let p = document.createElement('p');
    if(e.target.innerText == '✂️'){
       p.textContent = oneRoundRPS("scissors",getComputerChoice());
       div.appendChild(p);
    }else if(e.target.innerText == '📄'){
        p.textContent = oneRoundRPS("paper",getComputerChoice());
        div.appendChild(p);
    }
    else if(e.target.innerText == '🪨'){
        p.textContent = oneRoundRPS("rock",getComputerChoice());
       div.appendChild(p);
    }
});
}