
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenuModal = document.querySelector(".mobile-menu-modal");
const mobileMenu = document.querySelector(".mobile-menu");

function closeMobileMenuModal(click){
	if (click.target == mobileMenuModal){
		mobileMenuModal.classList.toggle("mobile-menu-modal-closed");
		mobileMenu.classList.toggle("mobile-menu-closed");
	}
}

function toggleMobileMenu(){
	mobileMenuModal.classList.toggle("mobile-menu-modal-closed");
	mobileMenu.classList.toggle("mobile-menu-closed");
}

mobileMenuButton.addEventListener("click", toggleMobileMenu);
mobileMenuModal.addEventListener("click", closeMobileMenuModal);
