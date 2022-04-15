function computerPlay() {
    let hands = ["rock", "paper", "scissors"];
    let x = hands[Math.floor(Math.random() * hands.length)];
    return x;
}

let ctr = 0, compctr = 0, pctr = 0;

function playRound(player, computer)
{
    if (player.toLowerCase() == 'rock' && computer == 'scissors')
    {
        ++ctr;
        ++pctr;
        para.textContent = `Round ${ctr} Score = ${pctr} - ${compctr}`;
        box.appendChild(para);
        // box.appendChild(`You won round ${ctr} Score = ${pctr} - ${compctr}`);
        console.log(`You won round ${ctr} Score = ${pctr} - ${compctr}`);
    }
    else if (player.toLowerCase() == 'scissors' && computer == 'rock')
    {
        ctr++; 
        compctr++;
        para.textContent = `Round ${ctr} Score = ${pctr} - ${compctr}`;
        box.appendChild(para);
        // box.appendChild(`You Lose! Paper beats Rock  Score = ${pctr} - ${compctr}`);
        console.log(`You Lose! Paper beats Rock  Score = ${pctr} - ${compctr}`); 
    }   
    else if (player.toLowerCase() == 'paper' && computer == 'scissors')
    {
        ctr++; 
        compctr++;
        para.textContent = `Round ${ctr} Score = ${pctr} - ${compctr}`;
        box.appendChild(para);
        // box.appendChild(`You Lose! Paper beats Rock  Score = ${pctr} - ${compctr}`);
        console.log(`You Lose! Paper beats Rock  Score = ${pctr} - ${compctr}`);
    }
    else if (player.toLowerCase() == 'scissors' && computer == 'paper')
    {
        ++ctr;
        ++pctr;
        para.textContent = `Round ${ctr} Score = ${pctr} - ${compctr}`;
        box.appendChild(para);
        // box.appendChild(`You won round ${ctr} Score = ${pctr} - ${compctr}`);
        console.log(`You won round ${ctr} Score = ${pctr} - ${compctr}`);
    }
    else if (player.toLowerCase() == 'rock' && computer == 'paper')
    {
        ++ctr;
        ++compctr;
        para.textContent = `Round ${ctr} Score = ${pctr} - ${compctr}`;
        box.appendChild(para);
        // box.appendChild(`You Lose! Paper beats Rock  Score = ${pctr} - ${compctr}`);
        console.log(`You Lose! Paper beats Rock  Score = ${pctr} - ${compctr}`);
    }
    else if (player.toLowerCase() == 'paper' && computer == 'rock')
    {
        ++ctr;
        ++pctr;
        para.textContent = `Round ${ctr} Score = ${pctr} - ${compctr}`;
        box.appendChild(para);
        // box.appendChild(`You won round ${ctr} Score = ${pctr} - ${compctr}`);
        console.log(`You won round ${ctr} Score = ${pctr} - ${compctr}`);
    }
    else
    {
        ctr++;
        pctr++;
        compctr++;
        para.textContent = `Round ${ctr} Score = ${pctr} - ${compctr}`;
        box.appendChild(para);
        // box.appendChild(`Tie! round ${ctr} Score = ${pctr} - ${compctr}`);
        console.log(`Round ${ctr} Score = ${pctr} - ${compctr}`);
    }
}


function game(e) {
    let playerSelection = e.target.textContent;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection); 
    console.log(`Your Wins ${pctr}`);
    if (pctr === 5 && compctr === 5)
    {
        para.textContent = `You are tied with the Computer`;
        box.appendChild(para);
        btns.forEach(btn => btn.disabled = true);
    }
    else if (pctr === 5) {
        para.textContent = `                    You won the game!` + `\r\n` + `Click play again button to play new Round`;
        box.appendChild(para);
        console.log("You won the game!");
        btns.forEach(btn => btn.disabled = true);
    }
    else if (compctr === 5) {
        para.textContent = `                    Computer Wins!` + '\r\n' + `Click play again button to play new Round`;
        box.appendChild(para);
        console.log("Computer Wins!");
        btns.forEach(btn => btn.disabled = true);
    }
}

function reenable(e) {
    ctr = pctr = compctr = 0;
    para.textContent = `Start Round: Score: Human 0 - Computer 0`;
    box.appendChild(para);
    btns.forEach(btn => btn.disabled = false);
}

const btns = Array.from(document.querySelectorAll('.btn'));
btns.forEach(btn => btn.addEventListener('click', game));

const pa = document.querySelector('.pa');
pa.addEventListener('click', reenable);

const box = document.querySelector('.box');

const para = document.createElement('p');
para.textContent = `Start Round: Score: Human 0 - Computer 0`;
para.style.cssText = 'font-size: 25px; color: black; white-space: pre;';
box.appendChild(para);
