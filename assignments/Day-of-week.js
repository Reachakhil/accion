	window.onload=function(){

	var btn2=document.getElementById("btn1");
btn2.onclick=function day(){
			 	var date = new Date(document.getElementById("date").value);
    			var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
      			document.getElementById.innerHTML("res1=days[date.getDay()]);
			}
		}
