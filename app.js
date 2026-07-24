let yourScore = 0;
let compScore = 0;

const icons = document.querySelectorAll(".icon");
const para = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    para.innerText = "Game Draw";
    para.style.backgroundColor = "#f1c40f";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin === true){
        yourScore++;
        userScorePara.innerText = yourScore;
        para.innerText = `bravo! you won. your ${userChoice} beats ${compChoice}`;
        para.style.backgroundColor = "#2ecc71";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
         para.innerText = `Oops! you lost. ${compChoice} beats your ${userChoice}`;
         para.style.backgroundColor = "#e74c3c";
    }
}

const genCompChoice = () => {
    const options = ["stone" , "paper" ,"scissor"];
    const randId = Math.floor(Math.random() * 3);
    return options[randId];
}

const playGame = (userChoice) => {
    // console.log("user choice =" , userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice =" , compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
         let userWin = true;
         if(userChoice === "stone"){
         userWin = compChoice === "paper"? false : true;   
         }else if(userChoice === "paper"){
         userWin = compChoice === "scissor"? false : true;   
         } else {
            userWin = compChoice === "stone"? false : true;
         }
         showWinner(userWin, userChoice, compChoice);
    }
}

icons.forEach((icon) => {
    icon.addEventListener("click" , () => {
    const userChoice = icon.getAttribute("id");
    playGame(userChoice);
    }); 
});

