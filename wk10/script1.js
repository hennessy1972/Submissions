	var subjects=parseInt(prompt("How many subjects are you taking?"));
	var grades=[];	
function calculateGrades() {
    for(i=1;i<=subjects;i++){
	
	var para = document.createElement('p');
	para.innerHTML="Subject " +i+" "+prompt("Enter name of Subject");
	para.id="s"+i;
	document.getElementById("main").appendChild(para);

	grades[i]=parseInt(prompt("enter grade "+i));
	document.getElementById("s"+i).innerHTML+=" "+(grades[i]);
	if(grades[i]>=80){
		document.getElementById("s"+i).innerHTML+="   A";
		}
	else if((grades[i]<80)&&(grades[i]>=60)){
		document.getElementById("s"+i).innerHTML+="   B";
	}
	else if((grades[i]<60)&&(grades[i]>=40)){
	document.getElementById("s"+i).innerHTML+="   C";
	}
	else {
	document.getElementById("s"+i).innerHTML+="   F";
	}
}

}
function total(){
sum=0;
for(let i=0;i<=grades.length;i++){
	sum += grades[i];
	}
	console.log(sum);
	document.getElementById("p").innerHTML+=sum+"%";
}