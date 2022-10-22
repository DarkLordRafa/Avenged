
const logo = document.querySelector(".header__logo");
const eyes = document.querySelectorAll(".deathbat-eyes div");
const scream = document.querySelector("#scream-audio");


function activeEyes(){
	eyes.forEach(function(element){
			element.classList.add("deathbat-eyes-active");
		}
		);
}

function disableEyes(){
	eyes.forEach(function(element){
			element.classList.remove("deathbat-eyes-active");
	}
	);
}


logo.addEventListener("mouseover", activeEyes);
logo.addEventListener("mouseout", disableEyes);
logo.addEventListener("click", activeEyes);
logo.addEventListener("click", () => scream.play());
scream.addEventListener("ended", disableEyes);
