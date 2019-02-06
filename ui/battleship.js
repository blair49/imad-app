var randomLoc=Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2=randomLoc+1;
var location3=randomLoc+2 ;

var guess;
var hits=0;
var guesses=0;

var isSunk = false;

while(!isSunk){
    guess = prompt("Ready, aim, fire!(Enter a number between 0-6");
    if(guess<0 || guess>6){
        alert("Please enter a valid number");
    }
    else{
        guesses++;
        if(guess == location1 || guess == location2 || guess == location3){
            alert("Hit!");
            hits++;
            if(hits==3){
                isSunk = true;
                alert("You sank my battleship!");
            }
        }
        else{
            alert("Miss!");
        }

    }
}
var stats = "You took "+ guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was "+ (3/guesses);
document.getElementById("stat").innerHTML = stats;