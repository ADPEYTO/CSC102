


function chooseFighter()
{
    //  Function that enters all the data needed if the player chooses the fighter character.  

    document.getElementById("charType").innerHTML = "Fighter";
    document.getElementById("charImage").src="fighter.png";
    document.getElementById("playerImage").src="fighter.png";
    document.getElementById("playerType").innerHTML = "Fighter";
    document.getElementById("health").innerHTML = "10";
    document.getElementById("pcHealth").innerHTML = "10";
    // Turns the button red to show selection.
    document.getElementById("buttonFighter").style.backgroundColor="red";
    // Makes sure the other buttons are reset to orginal color.  In case of diffrent selections.
    document.getElementById("buttonRogue").style.backgroundColor="lightgray";
    document.getElementById("buttonWizard").style.backgroundColor="lightgray";
    // Disables the selection buttons until rest, death or completion.
    document.getElementById("buttonFighter").disabled=true;
    document.getElementById("buttonRogue").disabled=true;
    document.getElementById("buttonWizard").disabled=true;
    // Fun little alert.
    alert("Go forth and conquer with your strengh of arms.");
  
}

function chooseRogue()
{
//  See the comments for the fighter button...
    document.getElementById("charType").innerHTML = "Rogue";
    document.getElementById("charImage").src="rogue.png";
    document.getElementById("playerImage").src="rogue.png";
    document.getElementById("playerType").innerHTML = "Rogue";
    document.getElementById("health").innerHTML = "8";
    document.getElementById("pcHealth").innerHTML = "8";
    //Above comments
    document.getElementById("buttonFighter").style.backgroundColor="lightgray";
    document.getElementById("buttonRogue").style.backgroundColor="red";
    document.getElementById("buttonWizard").style.backgroundColor="lightgray";
    //Above comments
    document.getElementById("buttonFighter").disabled=true;
    document.getElementById("buttonRogue").disabled=true;
    document.getElementById("buttonWizard").disabled=true;
    alert("Go forth and conquer from the shadows.");

}

function chooseWizard()
{
//  See the comment for the fighter button...
    document.getElementById("charType").innerHTML = "Wizard";
    document.getElementById("charImage").src="wizard.png";
    document.getElementById("playerImage").src="wizard.png";
    document.getElementById("playerType").innerHTML = "Wizard";
    document.getElementById("health").innerHTML = "6";
    document.getElementById("pcHealth").innerHTML = "6";
    //Above
    document.getElementById("buttonFighter").style.backgroundColor="lightgray";
    document.getElementById("buttonRogue").style.backgroundColor="lightgray";
    document.getElementById("buttonWizard").style.backgroundColor="red";
    //Above
    document.getElementById("buttonFighter").disabled=true;
    document.getElementById("buttonRogue").disabled=true;
    document.getElementById("buttonWizard").disabled=true;
    alert("Go forth and conquer with the mystic powers.");

    //document.getElementById("readOut").innerHTML = "6";  code to verify the findEnemy function was working correctly.

}

function findEnemy()
{

    //Function to randomly select an enemy.
    alert("Someone approaches out of the darkness!");
    var charLevel = parseInt(document.getElementById("level").innerHTML)
    var enemySelector = Math.ceil(Math.random() * 6 );
   
    // If the random number generator = 1 summon Earl "The not so wise"
    if(enemySelector == 1)
        { 
            document.getElementById("enemyType").innerHTML = "Earl";
            document.getElementById("enemyImage").src="earl.png";
            document.getElementById("ecHealth").innerHTML = Math.ceil(Math.random() * 8) + charLevel;
        }
    // If the random number generator = 2 summon Rick "The #$%& (we cant say that here)"
    else if (enemySelector == 2)
        {
            document.getElementById("enemyType").innerHTML = "Rick";
            document.getElementById("enemyImage").src="rick.png";
            document.getElementById("ecHealth").innerHTML = Math.ceil(Math.random() * 8) + charLevel;
        }
    // If the random number generator = 3 summon Frank "The Hot dog man"
    else if (enemySelector == 3)
        {
            document.getElementById("enemyType").innerHTML = "Frank";
            document.getElementById("enemyImage").src="frank.png";
            document.getElementById("ecHealth").innerHTML = Math.ceil(Math.random() * 8) + charLevel;
        }
    //  If the random number generator = 4 summon Bill "Nye the Midevel Guy"    
    else if (enemySelector == 4)
        {
            document.getElementById("enemyType").innerHTML = "Bill";
            document.getElementById("enemyImage").src="bill.png";
            document.getElementById("ecHealth").innerHTML = Math.ceil(Math.random() * 8)  + charLevel;
        }
    // If the random number generator = 5 summon Gary "The finger drum of distain"
    else if (enemySelector == 5)
        {
            document.getElementById("enemyType").innerHTML = "Gary";
            document.getElementById("enemyImage").src="gary.png";
            document.getElementById("ecHealth").innerHTML = Math.ceil(Math.random() * 8)  + charLevel;
        }
    // If the random number generator = 6 summon Steve "The guy who told you that".
    else if (enemySelector == 6)
        {
            document.getElementById("enemyType").innerHTML = "Steve";
            document.getElementById("enemyImage").src="steve.png";
            document.getElementById("ecHealth").innerHTML = Math.ceil(Math.random() * 10)  + charLevel;
        }
    //Resets the picture to default
    else
        {
            document.getElementById("enemyType").innerHTML = " ";
            document.getElementById("enemyImage").src="compass.jpg";
            document.getElementById("ecHealth").innerHTML = "0"; 
        }

            document.getElementById("findEnemy").disabled=true;

}

function attack()
{
    var enemyType = document.getElementById("enemyType").innerHTML
    
// Determines if an enemy has been found.  If so run the attack function.  If not alert to prompt selection.  Try to nest the findEnemy() function but it acted strange.
    if( enemyType == " " || enemyType == " Opponent ")
    {
        alert("Choose an Enemy.");
    }
    else
    {
//  Fun little messages
    alert("The two forces clash!")
    var playerType = document.getElementById("charType").innerHTML;
 
//  This section determines the enemys attack roll - a random number between 1 and 20...  Not that I have played any Table Top rpgs.   
    var enemyAttack = Math.ceil(Math.random() * 20);
    document.getElementById("enemyAtkRoll").innerHTML = + enemyAttack;

//  This section looks at the type of character and determines the attack roll.
    if(playerType == "Wizard")
        { 
            var playerAttack = Math.ceil(Math.random() * 20 ) + 5;
        }
            else if(playerType == "Rogue")
                {
                    var playerAttack = Math.ceil(Math.random() * 20 ) + 3;
                }
                else if(playerType == "Fighter")
                    {
                        var playerAttack = Math.ceil(Math.random() * 20 ) + 1;
                    }
                    else
                    {
                        alert("Please Select a Character.");
                    }

//  Displays the roll to make sure its working.                    
    document.getElementById("playerAtkRoll").innerHTML = + playerAttack; 
    
    //  This section add a colored background to the winner of the round to make it easier to tell
    if(playerAttack>enemyAttack)
        {
            var winner = "Player";
            document.getElementById("playerImage").style.backgroundColor="green";
            document.getElementById("enemyImage").style.backgroundColor="transparent"; 
        }

        else if(enemyAttack>playerAttack)
        {
            var winner = "Enemy";
           document.getElementById("enemyImage").style.backgroundColor="green";
           document.getElementById("playerImage").style.backgroundColor="transparent";
        }

       else 
       {
        document.getElementById("enemyImage").style.backgroundColor="transparent";
        document.getElementById("playerImage").style.backgroundColor="transparent";
        document.getElementById("enemyDmgRoll").innerHTML = "Blocked";
        document.getElementById("playerDmgRoll").innerHTML = "Blocked";
       }
    }



//  This section looks to see if the player won the round.  Then looks to see which character the player choose to determine damage.
    if(winner == "Player")
       {
             if(document.getElementById("charType").innerHTML = "Wizard")
                { 
                    var playerDmg = Math.ceil(Math.random() * 4 );
                    var ecHealth = document.getElementById("ecHealth").innerHTML - playerDmg;
                    document.getElementById("ecHealth").innerHTML = ecHealth;
                }
            else if(document.getElementById("charType").innerHTML = "Rogue")
                {
                    var playerDmg = Math.ceil(Math.random() * 8 );
                   var ecHealth = document.getElementById("ecHealth").innerHTML - playerDmg;
                    document.getElementById("ecHealth").innerHTML = ecHealth;
                }
                else if(document.getElementById("charType").innerHTML = "Fighter")
                    {
                        var playerDmg = Math.ceil(Math.random() * 12 );
                        var ecHealth = document.getElementById("ecHealth").innerHTML - playerDmg;
                        document.getElementById("ecHealth").innerHTML = ecHealth;
                    }
            document.getElementById("playerDmgRoll").innerHTML = playerDmg;

            if(ecHealth <= 0 || echealth < 0)
                {
                    document.getElementById("ecHealth").innerHTML = "DEFEAT";
                    alert("Round Won. Find Another Enemy.");
                    roundEnd();
                }

          } 

//  This section looks at if the enemy wins what should happen.
        
    if(winner == "Enemy")
        {
            var enemyDmg = Math.ceil(Math.random() * 5)
            var pcHealth = document.getElementById("pcHealth").innerHTML - enemyDmg;
            document.getElementById("enemyDmgRoll").innerHTML = enemyDmg;
            document.getElementById("pcHealth").innerHTML = pcHealth;

            if(pcHealth <= 0 || pchealth < 0)
                {
                    document.getElementById("pcHealth").innerHTML = "DEFEAT";
                    alert("You have fallen.");
                    startOver();
                }

        }
              
//          Nested this section in an above section as an Else statement.
//            if(playerAttack == enemyAttack)
//        {
//            alert("Stalemate");
//        }

        document.getElementById("playerDmgRoll").innerHTML = playerDmg;
        document.getElementById("enemyDmgRoll").innerHTML = enemyDmg;
    
//  Reset function to return to the begining.
}

function startOver()
{
//All of this reset the game so that it can be played again.  Basically undoing anything that was changed in any of the code above.

    document.getElementById("buttonFighter").style.backgroundColor="lightgray";
    document.getElementById("buttonRogue").style.backgroundColor="lightgray";
    document.getElementById("buttonWizard").style.backgroundColor="lightgray";
    document.getElementById("buttonFighter").disabled=false;
    document.getElementById("buttonRogue").disabled=false;
    document.getElementById("buttonWizard").disabled=false;
    document.getElementById("playerImage").style.backgroundColor="transparent";
    document.getElementById("enemyImage").style.backgroundColor="transparent"; 
    document.getElementById("playerImage").src="compass.jpg";
    document.getElementById("enemyImage").src="compass.jpg";
    document.getElementById("charImage").src="compass.jpg";
    enemySelector = "0";
    document.getElementById("charType").innerHTML = " Opponent ";
    document.getElementById("playerType").innerHTML = " Player ";
    document.getElementById("health").innerHTML = " 0 ";
    document.getElementById("pcHealth").innerHTML = " 0 ";
    document.getElementById("level").innerHTML = "1";
    document.getElementById("enemyType").innerHTML = " Opponent ";
    document.getElementById("playerAtkRoll").innerHTML = "0";
    document.getElementById("enemyAtkRoll").innerHTML = "0";
    document.getElementById("enemyDmgRoll").innerHTML = "0";
    document.getElementById("playerDmgRoll").innerHTML = "0";
    document.getElementById("ecHealth").innerHTML = "0";
    document.getElementById("findEnemy").disabled=false;
}  

function roundEnd()

{

    //  This section advances the round if the player won.  Adds one the character level and resets the health to the new amount.  Base + level.
    var i;
    var h;
    var newHealth;
    i = document.getElementById("level").innerHTML;
    h = document.getElementById("health").innerHTML;
    

    

if(document.getElementById("ecHealth").innerHTML = "DEFEAT" && i < 5)
    {
       
        i++;
        newHealth = parseInt(i)+parseInt(h);
        document.getElementById("level").innerHTML = i;
        document.getElementById("pcHealth").innerHTML =  newHealth;
        document.getElementById("playerImage").style.backgroundColor="transparent";
        document.getElementById("enemyImage").style.backgroundColor="transparent"; 
        document.getElementById("enemyType").innerHTML = " Opponent ";
        document.getElementById("playerAtkRoll").innerHTML = "0";
       
     //  There is a bug here that I can not figure out.  I want to reset the two below values to 0, but it will not work.  I have tried abunch of things and still nothing.
        document.getElementById("enemyAtkRoll").innerHTML = "0";
        document.getElementById("playerDmgRoll").innerHTML = "0";
        document.getElementById("ecHealth").innerHTML = "0";
        document.getElementById("enemyImage").src = "compass.jpg";
        document.getElementById("findEnemy").disabled=false;

        
    }
    else
    {
    alert("You have cleared the challange!");
    alert("You have been awarded the litRPG master peice - He who fights with monsters 1");
    startOver();
    }

}

function buttonHow()

//  This displays the dialog box for the instruction button.
{

    alert("How to Play litRPG Fantasy Battle \r 1) Choose a character. \r Fighter - Highest health and damage with slow attach chance. \r Rogue - Medium health, damage and attack chance. \r Wizard - Lowest health and damage, but hightest attack change. \r 2) Find Oponent. \r 3) ATTACK \r 4) Survive 6 rounds.")

}

