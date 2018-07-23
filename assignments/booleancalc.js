window.onload=function(){
var input1=document.getElementById("id1");
var input2=document.getElementById("id2");
var res='';

var button = document.getElementById("submit");
var btn2 =  document.getElementById("btn2");
button.onclick = function(){

 res= (input1.value|input2.value);
	alert(res);
}

btn2.onclick=function(){
	var res= (input1.value&input2.value);
	alert( res);
}
document.getElementById("result").innerHTML=res;

}