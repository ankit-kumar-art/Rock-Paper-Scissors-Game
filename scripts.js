let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        userScore++;
        userscorePara.innerText=userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compscorePara.innerText=compScore;
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompchoice = ()=>{
    const options = ['rock','paper','scissors'];
    //rock,paper,scissors
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame = ()=>{
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "black";
}
const playgame = (userChoice)=>{
    const compChoice = genCompchoice();
    if(userChoice === compChoice){
    drawgame();
    }
    else{
        let userwin =true;
        if(userChoice ==="rock"){
            userwin= compChoice ==="paper" ? false :true;
        }else if(userChoice == "paper"){
            userwin=compChoice === "scissors"? false : true;
        }else {
            userwin =compChoice ==="rock"?false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
