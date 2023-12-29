let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const GenCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was Draw !");
    msg.innerText = "Game was draw ! Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin === true){
        userScore++;
        console.log('You win !');
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScorePara.innerText = userScore;
    }
    else{
        compScore++;
        console.log('You Lose !');
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) =>{
    console.log("User-choice :", userChoice);
    // Generate computer choice 
    const compChoice = GenCompChoice();
    console.log("Computer-choice :",compChoice);

    if( userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if( userChoice === "rock"){
            // scissors / paper
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if( userChoice === "paper"){
            // rock / scissors
            if( compChoice === "scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else{
            // rock / paper
            if( compChoice === "rock"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach( (choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}) 