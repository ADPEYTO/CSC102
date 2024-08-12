function verifyData()
{
    //setting up most of the variables that Ill need.
var nameCheck = 0;
var zipCheck = 0;
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var zipCode = document.getElementById("zipCode").value;
var fullName = firstName + " " + lastName;
//Checking the Full Name variable - First Name + space + Last Name
if(fullName.length > 20 || fullName.lenght < 3)
{
    //Check if valid.  If not change the labels to red and clear the text boxes
    alert("first and last name must be 19 characters or less")
    document.getElementById("firstName").value = " ";
    document.getElementById("firstLabel").style.color = "red";
    document.getElementById("lastName").value = " ";
    document.getElementById("lastLabel").style.color = "red";
    document.getElementById("nameValid").innerHTML = "Name fields are out of range."
    
}   
    else
    {
        //return the changed text to black once a valid entry is entered.
        document.getElementById("firstText").innerHTML = firstName;
        document.getElementById("firstLabel").style.color = "black";
        document.getElementById("lastText").innerHTML = lastName;
        document.getElementById("lastLabel").style.color = "black";
        //value check if the name check is good
        var nameCheck = 1;
    
    }

if(zipCode.length == 5)
{
    //  Check the zipcode to ensure its 5 numbers
    document.getElementById("zipValid").innerHTML = "Good Zip Code";
    //value check if the zip check is good
    var zipCheck = 1;
}
    else
    {
        //error message for zip issue.  clear form and change label to red.
        document.getElementById("zipValid").innerHTML = "Invalid Zip";
        document.getElementById("zipLabel").style.color = "red";
        document.getElementById("zipCode").value = " ";
    }

if(nameCheck == zipCheck)
{
    //is the two sets of data valid.
    alert("Rerouting");
    location.replace = "routed.html";
}

}