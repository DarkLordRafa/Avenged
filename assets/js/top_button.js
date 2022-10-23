
const topButton = document.querySelector(".top-button");

function toggleTopButton(){
	if (window.pageYOffset > "300"){
		topButton.classList.add("top-button-enabled");
	}
	else{
		topButton.classList.remove("top-button-enabled");
	}
}

window.addEventListener("scroll", toggleTopButton);