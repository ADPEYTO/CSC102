//  Allen Peyton - CSC102 Assignment 3.1

function palinCheck()
{
    
    if(inputString == " ")
       { 
        alert("Please enter a string.");
       }
    else
    {
        //get the string value from the input field.  Declare and set the starting values of the variables.
        var inputString = document.getElementById("inputString").value
        var strReverse = ""
        document.getElementById("results").innerHTML = "Palinedrome Results";
        //The dividing marks in the () are ; not , that little mistake cost me 30 minutes of rage...)
        // I like the for loop to accomplish the palincheck. it is very elegant and neat.
            for(var i = inputString.length - 1; i >= 0; i--)
                {
                    strReverse += inputString[i];
                }

                    
                    //check if its a palindrone if so change the screen.
            if(strReverse == inputString)
                {
                    //var vidClip = document.getElementById("fireworkVid").innerHTML;
                    //vidClip.play();
                   document.getElementById("isIt").innerHTML = "PALINDROME!"     

                }
                else    
                {
                    // update the screen if not a palindrome instead of using an alert.
                    document.getElementById("isIt").innerHTML = "Better luck next time."
                }
        }
}