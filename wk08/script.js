function run()
{
	//random number generator code from w3school.
var x = Math.floor((Math.random() * 3) + 1);
	if (x==1){
	document.getElementById("reply").innerHTML = "The computer throws: Rock";
		}
	else if (x==2){
	document.getElementById("reply").innerHTML = "The computer throws: Paper";
		}
	else {
	document.getElementById("reply").innerHTML = "The computer throws: Scissors";
		}
// get radio button values from YouTube Telusko #21 Taking Input from Radiobuttons in Javascript
var r1 = document.getElementById("r1");
var p1 = document.getElementById("p1");
var s1 = document.getElementById("s1");	
var userChoice=0;
	if (r1.checked==true){
		userChoice=(r1.value)
		if (userChoice==1 && x==1){
		document.getElementById("decide").innerHTML = "It's a draw"
		}
		else if (userChoice==1 && x==2){
		document.getElementById("decide").innerHTML = "You lose!"
		}
		else if (userChoice==1 && x==3){
		document.getElementById("decide").innerHTML = "You Win!"
		}
	}
if (p1.checked==true){
		userChoice=(p1.value)
		if (userChoice==2 && x==2){
		document.getElementById("decide").innerHTML = "It's a draw"
		}
		else if (userChoice==2 && x==3){
		document.getElementById("decide").innerHTML = "You lose!"
		}
		else if (userChoice==2 && x==1){
		document.getElementById("decide").innerHTML = "You Win!"
		}
	}
if (s1.checked==true){
		userChoice=(s1.value)
		if (userChoice==3 && x==3){
		document.getElementById("decide").innerHTML = "It's a draw"
		}
		else if (userChoice==3 && x==1){
		document.getElementById("decide").innerHTML = "You lose!"
		}
		else if (userChoice==3 && x==2){
		document.getElementById("decide").innerHTML = "You Win!"
		}
	}
}