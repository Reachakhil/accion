function result1() {
var input1=document.getElementById("id1");
var input2=document.getElementById("id2");
var res='';

var button = document.getElementById("submit");
var btn2 =  document.getElementById("btn2");



if(button.value== 'on'){
 res= (input1.value|input2.value);
 console.log(button.value);

}

else if(btn2.value== 'on'){
	var res= (input1.value&input2.value);
	console.log(button.value);
	
}
document.getElementById("result").innerHTML="The result is"+res;
}