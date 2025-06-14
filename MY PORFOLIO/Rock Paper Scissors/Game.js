alert("Please zoom out your webpage to 90% for better viewing experience")
let userScore = 0;
let compScore = 0;

const choices =  document.querySelectorAll(".choices");

const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");
const  genCompChoice = () => {
    const options = ["rock", "paper","scissors"]
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
};

const drawGame = () => {
       console.log("game was draw.");
       msg.innerText = "Game was draw. Play Again...";
        msg.style.backgroundColor =  "rgb(9, 9, 56)";
};


const showWinner = (userWin, userChoice, compChoice) => {

     if (userWin) {
        msg.innerText = `You Win!!`;
        msg.style.backgroundColor = "green";
        userScore++
        userScorePara.innerText = userScore;
     } else {
        msg.innerText =`You Lose.`;
         msg.style.backgroundColor = "Red";
           compScore++
        compScorePara.innerText = compScore;
     }

};

const playGame = (userChoice) => {
 console.log("user Choice = ", userChoice);
 const compChoice = genCompChoice();
 console.log ("comp choice = ", compChoice);

 if(userChoice === compChoice) {
       drawGame();
 } else{
    let userWin = true;
    if(userChoice === "rock") {
       userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
         userWin = compChoice === "scissors" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
 }
}

choices.forEach((choice) =>{
        choice.addEventListener("click",() =>{
            const userChoice = choice.getAttribute("id");
           playGame(userChoice);
        });
});

