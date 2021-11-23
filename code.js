function play() {
    // Creating the function, does not take any parameters
    var die1 = Math.ceil(Math.random()*6)
    var die2 = Math.ceil(Math.random()*6)
    //create 2 variables that are random roll of dice
    
    //Add them to get the sum of the two numbers of the dice
    var sum = die1+die2
    document.write("Die 1 = " + die1) 
    document.write("<br/>") 
    document.write("Die 2 = " + die2) 
    document.write("<br/>") 
    document.write("Sum = " + sum)
    document.write("<br/>") 
    //All the top writes the values with line breaks

    //Conditional to determine whether user won or not
    if (sum == 7 || sum == 11) 
    { document.write("You win!") 
    document.write("<br/>") 
    }
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("Craps - You lose!") 
    document.write("<br/>") 
    }else{
        document.write("Point! <br/>")
        document.write("Roll again")
    }
    //If and Else if statements to determine results
    }