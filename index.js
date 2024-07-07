const headerMenuButton = document.querySelector(".header__menu-button");
const headerNavigation = document.querySelector(".header__navigation");
const headerNavigationCloseButton = document.querySelector(
	".header__navigation-close-button",
);
const modesLight = document.querySelector(".modes__dark");
const modes = document.querySelector(".modes");

if (headerMenuButton) {
	headerMenuButton.addEventListener("click", () => {
		headerNavigation.classList.add("show-menu");
	});
}

if (headerNavigationCloseButton) {
	headerNavigationCloseButton.addEventListener("click", () => {
		headerNavigation.classList.remove("show-menu");
	});
}

modesLight.addEventListener("click", () => {
	if (modesLight.classList.contains("ri-contrast-2-fill")) {
		modesLight.classList.remove("ri-contrast-2-fill");
		modesLight.classList.add("ri-sun-line");
	} else {
		modesLight.classList.remove("ri-sun-line");
		modesLight.classList.add("ri-contrast-2-fill");
	}
});

modes.addEventListener("click", () => {
	if (document.body.classList.contains("modes--dark")) {
		document.body.classList.remove("modes--dark");
	} else {
		document.body.classList.add("modes--dark");
	}
});
