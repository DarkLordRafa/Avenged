
const logo = document.querySelector(".header__logo");
const eyes = document.querySelectorAll(".deathbat-eyes div");


function activeEyes(){
	eyes.forEach(function(element){
		element.classList.toggle("deathbat-eyes-active");
	});
}

logo.addEventListener("mouseover", activeEyes);
logo.addEventListener("mouseout", activeEyes);
