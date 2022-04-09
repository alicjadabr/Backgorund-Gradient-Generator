var css = document.querySelector("p");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var input = document.getElementById("userinput"); 

  
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function copyToClipboard() {
	/* Get the text field */
	var copyText = css.textContent;
	 /* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText);
}

function setDirection(direction) {
	body.style.background = 
	"linear-gradient("
	+ direction
	+ ", " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function inputLength() {
	return input.value.length;
}

function setDegs(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		const degrees = input.value + "deg";
		setDirection(degrees);
	}
}

input.addEventListener("keypress", setDegs);


