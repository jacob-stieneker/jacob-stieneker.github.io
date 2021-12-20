function RollDice() {
    // Variables to set up the dice //
    var die1 = Math.ceil( Math.random()*6);
    var die2 = Math.ceil( Math.random()*6);
    var sum = die1+die2;
    
    // HTML User Display //
    
    // Die 1 //
    document.getElementById("die1Value").innerHTML = "Die 1: "+ die1;
    // Die 2 //
    document.getElementById("die2Value").innerHTML = "Die 2: "+ die2;
    // Sum //
    document.getElementById("sum").innerHTML = "Roll Value: " + sum;
    
    // Loss //
    if(sum == 7 || sum ==11) {
        document.getElementById("result").innerHTML = "CRAPS - You Lose! <br/> Try Again?";
    }
    // Win //
    else if(die1 == die2 && die1%die2 == 0) {
        document.getElementById("result").innerHTML = "DOUBLES - You Win! <br/> Try for More?";
    }
    // Redundant Roll //
    else {
        document.getElementById("result").innerHTML = "Redundant Roll <br/> Try again?"
    }
    
    }