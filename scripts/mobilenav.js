// JavaScript Document
function navToggle() {	
	var x = document.getElementById("nav");
	var y = document.getElementById("myCarousel");
	if (x.style.height !== "287px") {
		x.style.height = "287px";
		y.style.marginTop = "287px";
		x.style.transition = "all .5s"; 
		y.style.transition = "all .5s"; 
	} else {
		x.style.height = "0px";
		y.style.marginTop = "0px";
		x.style.transition = "all .5s";  
		y.style.transition = "all .5s"; 
	}
}