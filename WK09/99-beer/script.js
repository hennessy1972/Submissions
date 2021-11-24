function run()
{
	for (i=99; i>1; i--) {
		document.getElementById("sing").innerHTML+="</br>"+i + " bottles of beer on the wall, " + i + " bottles of beer,</br>Take one down, pass it round " + (i-1)+ " bottles of beer! </br>";
		}
	document.getElementById("sing").innerHTML+="</br> 1 bottle of beer on the wall,  1 bottle of beer,</br>Take it down, pass it round.  No more bottles of beer on the wall! </br>";
}