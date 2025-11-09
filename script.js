let userScore = 0;
let compScore = 0;

const userScoreShow = document.querySelector("#user-score");
const compScoreShow = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");

const makeCompChoice = () => {
    const options = ["rock", "paper", "sci"];
    const randId = Math.floor( Math.random() * 3 );
    return options[randId];
}

const winner = (userState) =>{
    if (userState){
        // console.log("You win!");
        userScore++;
        userScoreShow.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "#92f46fff"
    }
    else {
        // console.log ("You lose :(");
        compScore++;
        compScoreShow.innerText = compScore;
        msg.innerText = "You lose :(";
        msg.style.backgroundColor = "#EF6461"
    }
}
// randomnotetesting123
const playGame = (userChoice) => {
    // console.log("you chose =",(userChoice));

    const compChoice = makeCompChoice ();
    // console.log("comp chose =", compChoice);

    let userState = true;
    if (userChoice === compChoice) {
        // console.log("game was draw.");
        msg.innerText = "The game was Draw :) Play again.";
        msg.style.backgroundColor = "#ffbf57";      
        return;
    }
    else { 
        if (userChoice === rock){
            userState = compChoice === "paper" ? false : true;
        }
        else if (userChoice === paper) {
            userState = compChoice === "sci" ? false: true;
        }
        else {
            userState = compChoice === "rock" ? false: true;
        }
       winner(userState) 
    }
}

choices.forEach((choice) => {
    choice.addEventListener ("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})