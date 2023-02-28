var name = prompt("What is your name?");
if (confirm("What's your gender? Click yes if female and cancel if male.") == true){
	alert("You're a female")
	document.getElementById("gender").innerHTML = "F";
} else {alert("You're a male")
	document.getElementById("gender").innerHTML = "M"; 
}

var description = prompt("Add a description");
var username = prompt("Add a username");
var birthyear = prompt("What year were you born?");
var age = 2023-parseInt(birthyear);

if(confirm("Would you like to add a profile picture?") == true){
	var pic = prompt("File name please?");
}
document.getElementById("fname").innerHTML = name;
document.getElementById("desc").innerHTML = description;
document.getElementById("username").innerHTML = username;
document.getElementById("age").innerHTML = age;
document.getElementById("year").innerHTML = birthyear;
document.getElementById("ppic").src = pic;
