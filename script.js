// to select <h3> tag
var css = document.querySelector("h3");
// to select both colors input
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
// to select the body to change the background
var body = document.getElementById("gradient");

// create a function to set the gradient
function setGradient() {
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

}

// this display the original gradient when page load
css.textContent = body.style.background + ";";

// have the color to listen to an event with "input"
// this can also be used in 'html' with the attribute 'oninput' and set it to the function 'setGradient()'
// it'll get the same effect as below 2 line codes

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


var button = document.getElementById("random");

function getRandomColor() {
    var lettersA = '0123456789ABCDEF'.split('');
    var lettersB = '0123456789ABCDEF'.split('');
    var colorA = '#';
    var colorB = '#';

    for (var i = 0; i < 6; i++ ) {
        colorA += lettersA[Math.floor(Math.random() * 16)];
    }
    for (var i = 0; i < 6; i++ ) {
        colorB += lettersB[Math.floor(Math.random() * 16)];
    }

    body.style.background = 
    "linear-gradient(to right," 
	+ colorA
	+ "," 
	+ colorB 
	+ ")";

	css.textContent = body.style.background + ";";

}

button.addEventListener("click", getRandomColor);