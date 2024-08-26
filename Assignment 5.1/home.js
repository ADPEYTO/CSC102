//Allen Peyton CSC102
//set the index for the slides
let slideIndex = 1;
showSlides(slideIndex);

// cycles the slide index
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

// I am not actually sure what this does.  It was inthe example and the codes doesnt seem to function without it.  Reading the the code.  It sets currentSlide to n and then sets showSlide to n also.  It seem repeative.
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

//Creates the slide show funcstion
function showSlides(n) 
{
  let i;
  //gets the slide information from the HTML file.
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  // Check to see where the cycle is int the pictures.  If more than number of pictures starts over.
  if (n > slides.length) 
    {
      slideIndex = 1
    }
  // If less than the total number of slides add on to slides
  if (n < 1) 
  {slideIndex = slides.length}
  //When the slide changes it make the last active slide stop displaying.  If not in all the picture will stack up.
  for (i = 0; i < slides.length; i++) 
    {
    slides[i].style.display = "none";
    }
  //allows the slides to be choosen using the dots so you.
  for (i = 0; i < dots.length; i++) 
    {
    dots[i].className = dots[i].className.replace(" active", "");
    }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  //if (slideIndex > slides.length) {slideIndex = 1}
  //slides[slideIndex-1].style.display = "block";
  //setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//Tryied to make it an automatic slide show but I could not get it to function.

// I tried to update the table with nex team members, and it worked.  the issue was keeping the data that is above my head so far.
/*
function addTableData()
{
    var position = document.getElementById("title").value;
    var name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    var area = document.getElementById("subjectMatter").value;
    var loc = document.getElementById("location").value;
    
    var table = document.getElementById("teamTable");
    var row = table.insertRow(-1);
    var posCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var smeCell = row.insertCell(2);
    var locCell = row.insertCell(3);


    posCell.innerHTML = position;
    nameCell.innerHTML = name;
    smeCell.innerHTML = area;
    locCell.innerHTML = loc;

    document.getElementById("title").value = " ";
    document.getElementById("firstName").value = " ";
    document.getElementById("lastName").value = " ";
    document.getElementById("smeCell").value = " ";
    document.getElementById("location").value = " ";

}
*/

function logIn()
{
  
  var username = document.getElementById("userName").value;
  var password = document.getElementById("password").value;

  if(username == "qwerty" && password == "1234")
  {
    location.replace("Home.html");
  }
    else
    {
      alert("Username or password does not match.");
      document.getElementById("userName").value = " ";
      document.getElementById("password").value = " ";
    }
}
/*  Tried to put is a progress bar and then a gif of a spinning progress thing but I could not get the timer part working.
//function runPalin()
//{
  //var bar = document.getElementById("file");
  //bar.style.display = "block";
 // setInterval(move(), 2500);
  //bar.style.display = "none";
  //palinCheck();

//}

function move()
{
  var t = 0

  if(t < 10)
  {
    t++
  }
}
*/
function palinCheck()
{
    var inputString = document.getElementById("inputString").value;
    
    if(inputString == "")
       { 
        alert("Please enter a string.");
       }
    else
    {
        //get the string value from the input field.  Declare and set the starting values of the variables.
        var inputString = document.getElementById("inputString").value;
        var strReverse = "";
        var result = document.getElementById("results");
        var next = document.getElementById("isIt");
        result.style.display = "block";
        next.style.display = "block";

        document.getElementById("results").innerHTML = "Palinedrome Results";
      
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

enterAnother()
{
    var answer = confirm("Enter another string?");
    if(answer == true)
    {
      alert("made it");
    }



}