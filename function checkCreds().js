function checkCreds()
{
var firstName = document.getElementById("firstName"). value; 
var lastName = document.getElementById("lastName"). value;
var badgeNumber = document.getElementById("badgeNumber"). value;

var combo = firstName + lastName;
if (combo.length > 20 || combo.length < 4 )
{
    document.getElementById("LoginStatus").innerHTML = "First and Last name too long or too short please try again";
    alert("login error");
}
else if (badgeNumber > 5000 || badgeNumber < 4)
{
    document.getElementById("LoginStatus"). innerHTML = "Badge Number too long or too short please try again";
    alert("login error");
}
else 
{
    document.getElementById("LoginStatus"). innerHTML = "Login Succesful";
}







}