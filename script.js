console.log('hello!');

function getCompChoice() {
    let x = Math.floor(Math.random() * (3));
    let choice;
    if (x == 0){ choice = "rock";}
    if (x == 1){ choice = "paper";}
    if (x == 2){ choice = "scissors";}
    return choice;
}

console.log(getCompChoice());

function getHumanChoice(){
    let input = prompt("Enter your choice:");
    console.log(input);
}