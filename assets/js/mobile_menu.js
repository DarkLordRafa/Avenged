const body = document.body;
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenuModal = document.querySelector(".mobile-menu-modal");
const mobileMenuWing = document.querySelector(".mobile-menu__wing");
const mobileMenu = document.querySelector(".mobile-menu");


function closeMobileMenuModal(click){
	if (click.target == mobileMenuModal){
		mobileMenuModal.classList.remove("mobile-menu-modal-opened");
		mobileMenuWing.classList.remove("mobile-menu__wing-opened");
		mobileMenu.classList.remove("mobile-menu-opened");
	}
}

function toggleMobileMenu(){
	mobileMenuModal.classList.toggle("mobile-menu-modal-opened");
	mobileMenuWing.classList.toggle("mobile-menu__wing-opened");
	mobileMenu.classList.toggle("mobile-menu-opened");
}


mobileMenuButton.addEventListener("click", toggleMobileMenu);
mobileMenuModal.addEventListener("click", closeMobileMenuModal);
