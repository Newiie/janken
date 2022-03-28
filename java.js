function computerPlay() {
    let hands = ["rock", "paper", "scissors"];
    let x = hands[Math.floor(Math.random() * hands.length)];
    return x;
}

let ctr = 0;
function playRound(player, computer)
{
    if (player.toLowerCase() == 'rock' && computer == 'scissors')
    {
        console.log("You won!");
        ctr++;
    }
    else if (player.toLowerCase() == 'scissors' && computer == 'rock')
    {
        console.log("You Lose! Paper beats Rock");  
    }   
    else if (player.toLowerCase() == 'paper' && computer == 'scissors')
    {
        console.log("You Lose! Paper beats Rock");
    }
    else if (player.toLowerCase() == 'scissors' && computer == 'paper')
    {
        console.log("You won!");
        ctr++;
    }
    else if (player.toLowerCase() == 'rock' && computer == 'paper')
    {
        console.log("You Lose! Paper beats RockP1");
    }
    else if (player.toLowerCase() == 'paper' && computer == 'rock')
    {
        console.log("You won!");
        ctr++;
    }
    else
    {
        console.log("Tie!");
    }
}

for (let i = 0; i < 5; i++)
{
    let playerSelection = window.prompt("Select your hand", "Rock");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection); 
    console.log(`Your Wins ${ctr}`);
}
