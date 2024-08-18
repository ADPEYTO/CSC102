function startMusic()
{
    //Allen Peyton
    //alert("init");
    //Toggling buttons
    
    document.getElementById("startButton").disabled = true;
    document.getElementById("stpButton").disabled = false;
    music();
    // Open domain classical piano song.  Thought it was fuuny.
    document.getElementById("caption").innerHTML = "Schumann - The Happy Farmer";
    var img = document.getElementById("dancingFarmer");
    //  Have to makel sure you are using the same attribute to change states.  Example cant hide using "Display" and show using "Visibilty".  Took awhile to figure that out.
    img.style.visibility="visible";

}

function stopMusic()
{

    //alert("outit");
    document.getElementById("stpButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    stopSound();

}

function music()
{
    // Create a function to play the sound.
    var mySound = new sound("theHappyFarmer.mp3");
    mySound.play();
}

function sound(src)
{
    // built the constructor
    //create the element
    this.sound = document.createElement("audio");
    //set the source of the element
    this.sound.src = src;
    this.play = function(){this.sound.play();}
   
}

function stopSound()
{
    // reload the page to stop the music
    window.location.reload(); 
}
