window.onload = function() {
	var button = document.getElementById("btn");
	var input1 = document.getElementById("name1");
	var input2 = document.getElementById("password");

	button.onclick = function() {
	
	if(input1.value=="")
	alert("name not given");
	else if(input2.value== "")
	alert("password not given");
	else
	console.log('clicked' , input1.value , input2.value);
	
	

}
}
