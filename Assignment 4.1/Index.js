function start()
{
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;

        // All the variables that I created to make this work.  I am sure there is an easier way to accomplish this project, but this is only one I could get to work. 
        var image = document.getElementById("dvdLogo");
        //Amount to move
        var change = 5;
        // Variable to change x and y coords
        var yChange = 100;
        var xChange = 100;
        // Variable to set the bouncing area of the image.  In reality you would get the screen size and base the limits on that.
        var xLow = 100;
        var xHigh = 800;
        var yLow = 100;
        var yHigh = 400;
        // Variable to set the direction of travel for each plane.
        var yDir = 0;
        var xDir = 0;
        // Position variables
        var yPos = image.style.left;
        var xPos = image.style.top;

        intervalID = setInterval(function()
        {
           // Set direction variables.
            if(yPos == yLow+"px")
            {
                yDir = 0;
            }
            if(yPos == yHigh+"px")
            {
                yDir = 1;
            }
            if(xPos == xLow+"px")
            {
                xDir = 0;
            }
            if(xPos == xHigh+"px")
            {
                xDir = 1
            }

            // Detemine direction of travel.  Diagonal Top left to botton Right
            // yDir with +=5 is left to right  yDir with -=5 is right to left.
            //xDir with +=5 is top to bottom  xDir with -=5 is bottom to top
            if(yDir == 0 && xDir == 0)
                { // left to right top to bottom
                    yPos=yChange+"px";
                    image.style.top=yPos;
                    yChange+=5;

                    xPos=xChange+"px";
                    image.style.left=xPos;
                    xChange+=5;

                }
            // Determine direction of treavel.    
            if(yDir == 0 && xDir == 1)   
                { // left to right bottom to top
                    yPos=yChange+"px";
                    image.style.top=yPos;
                    yChange+=5;

                    xPos=xChange+"px";
                    image.style.left=xPos;
                    xChange-=5;
                
                }
                
                // Determine direction of travel.
                if(yDir == 1 && xDir == 0)   
                    { //right to left top to bottom
                        yPos=yChange+"px";
                        image.style.top=yPos;
                        yChange-=5;
    
                        xPos=xChange+"px";
                        image.style.left=xPos;
                        xChange+=5;
                    
                    }

                if(yDir == 1 && xDir == 1)   
                    { //right to left bottom to top
                        yPos=yChange+"px";
                        image.style.top=yPos;
                        yChange-=5;
        
                          xPos=xChange+"px";
                        image.style.left=xPos;
                        xChange-=5;
                        
                    }
                
                    // update the screen with the current coords.
                document.getElementById("coord").innerHTML = "x: "+xPos+" y: "+yPos;
            //another failed attempt.
                //if(yPos == "100px")
              //  {
                //image.style.left = yChange+"px";
                //yChange+=5;
                //}
                //else
                //{
                //    image.style.left=yChange+"px";
                //    yChange-=5;
                //}

                //image.style.top = change+"px";
                //change +=5;
        },50);

           // Failed attempt to change direction of the image. 
          //  while(yDir == 0)
          //  {
          //  image.style.left = yChange+"px";
          //  yChange += 5;
          //      if(image.style.left == xHigh)
          //      {
          //          xDir = 1;
          //      }
          //  }

          //  while(xDir == 0)
          //  {
          //  image.style.top = xChange+"px";
          //  xChange += 5;
          //      if(image.style.top == yHigh)
          //      {
          //          xDir = 1;
          //      }
          //  }
          //  },50);
    
    
}

function stop()
{
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    resetAll();
}





function resetAll()
{
    document.getElementById("dvdLogo").style.left= 100+"px";
    document.getElementById("dvdLogo").style.top= 100+"px";
    clearInterval(intervalID);
    clearInterval;
}



