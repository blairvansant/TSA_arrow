//Your job is to create a web page that, when the user clicks anywhere in the window, randomly determine if an air traveller should go down the left lane or the right lane by displaying an arrow in that direction.

var output = document.getElementById("arrow");

function randomNumber(){ 
	var randomNumber = Math.floor(Math.random() * 5) + 1;
	if (randomNumber <= 5){
		output.innerHTML = `<div><img src="left-arrow.jpeg"</div>`;
	} else {
		output.innerHTML = `<div><img src="right-arrow.jpeg"</div>`;
	};
}
document.addEventListener("click", randomNumber);