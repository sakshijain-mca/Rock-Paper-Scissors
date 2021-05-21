
const gameArray = ["Rock", "Paper", "Scissors"];
let countPlayerSore=0;
let countComputerScore=0;
let computerSelection;
let playerSelection;
function game()
{
    for(var i=0;i<5;i++)
    {
        playerSelection = window.prompt("Enter Your Choice");
        computerSelection = _.sample(gameArray);
        console.log(playerSelection, computerSelection);
        if (playerSelection.toLowerCase() === computerSelection.toLowerCase() || playerSelection.toUpperCase == computerSelection.toUpperCase()) {
            console.log("It's a Tie");
        }
        else 
        {   if((playerSelection.toLowerCase()==='paper' && computerSelection.toLowerCase()==='rock') || (playerSelection.toUpperCase()==='PAPER' && computerSelection.toUpperCase()==='ROCK')) 
            {
                countPlayerSore++;
            }    
            else
            {
                if((playerSelection.toLowerCase()==='scissors' && computerSelection.toLowerCase()==='paper') || (playerSelection.toLowerCase()==='SCISSORS' && computerSelection.toLowerCase()==='PAPAR'))
                {
                
                    countPlayerSore++;
                }
                else
                {
                    if((playerSelection.toLowerCase()==='rock' && computerSelection.toLowerCase()==='scissors') || (playerSelection.toLowerCase()==='ROCK' && computerSelection.toLowerCase()==='SCISSORS'))
                    {
                    
                        countPlayerSore++;
                    }
                    else
                    {
                        
                        countComputerScore++;
                    }
                }
            }
        } 
    }    
    if(countComputerScore>countPlayerSore)
    {
        console.log("Oh no Computer won");
    }
    else if(countComputerScore<countPlayerSore)
    {
        console.log("Yeah you won");
    }
    else{
        console.log("It's a tie");
    }
        
} 
game();   