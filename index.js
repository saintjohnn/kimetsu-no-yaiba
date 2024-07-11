const headerMenuButton = document.querySelector(".header__menu-button");
const headerNavigation = document.querySelector(".header__navigation");
const headerNavigationCloseButton = document.querySelector(
	".header__navigation-close-button",
);
const modesLight = document.querySelector(".modes__dark");
const modes = document.querySelector(".modes");
const btnLogin = document.querySelector(".btn-login");
const btnRegister = document.querySelector(".btn-register");
const btnUsername = document.querySelector(".btn-username");
const btnLogout = document.querySelector(".btn-logout");
const btnUsernameText = document.querySelector(".btn-username__text");

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
		localStorage.setItem("class", "ri-sun-line");
	} else {
		modesLight.classList.remove("ri-sun-line");
		modesLight.classList.add("ri-contrast-2-fill");
		localStorage.removeItem("class");
	}
});

if (localStorage.getItem("class")) {
	modesLight.classList.remove("ri-contrast-2-fill");
	modesLight.classList.add("ri-sun-line");
}

modes.addEventListener("click", () => {
	if (!localStorage.getItem("dark")) {
		localStorage.setItem("dark", "mode");
		document.body.classList.add("modes--dark");
	} else {
		localStorage.removeItem("dark");
		document.body.classList.remove("modes--dark");
	}
});

if (localStorage.getItem("dark")) {
	document.body.classList.add("modes--dark");
}

const totalUsers = localStorage.length;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userEmail = urlParams.get("email");
//let userEmail = urlParams.get("email");

//const registerUsers = [];
/*
for (let i = 0; i < totalUsers; i++) {
	registerUsers.push(localStorage.key(i));
}
*/

function setDisplay(elements, displayStyle) {
	elements.forEach((element) => {
		element.style.display = displayStyle;
	});
}

if (totalUsers) {
	setDisplay([btnUsername, btnLogout], "flex");
	setDisplay([btnLogin, btnRegister], "none");
	btnUsernameText.innerHTML = localStorage.getItem(userEmail);
	//localStorage.setItem(`${userEmail}.`, `${localStorage.getItem(userEmail)}.`);
}

btnLogout.addEventListener("click", () => {
	/*localStorage.removeItem("login");*/
	setDisplay([btnUsername, btnLogout], "none");
	setDisplay([btnLogin, btnRegister], "flex");
	/*/
	const newUrl =
		window.location.protocol +
		"//" +
		window.location.host +
		window.location.pathname;
	window.location.replace(newUrl);
	localStorage.removeItem(urlParams.get("email"));
	*/
});

/*
17 caracteres
background: linear-gradient(to right, black, transparent);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
*/
