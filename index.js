const headerMenuButton = document.querySelector(".header__menu-button");
const headerNavigation = document.querySelector(".header__navigation");
const headerNavigationCloseButton = document.querySelector(
	".header__navigation-close-button",
);
const modesLight = document.querySelector(".modes__dark");
const modes = document.querySelector(".modes");
const login = document.querySelector("#login");
const register = document.querySelector("#register");
const btnLogin = document.querySelector(".btn-login");
const btnRegister = document.querySelector(".btn-register");

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

const getLogin = localStorage.getItem("login");

if (getLogin) {
	const logoutIcon = document.createElement("i");
	logoutIcon.className = "ri-logout-box-line";

	const logouText = document.createTextNode(" Logout");

	//btnRegister.style.width = "fitcontent";
	register.innerHTML = "";
	register.appendChild(logoutIcon);
	register.appendChild(logouText);

	const userIcon = document.createElement("i");
	userIcon.className = "ri-shield-user-line";

	const userText = document.createTextNode(inputUsername);

	login.innerHTML = "";
	btnLogin.style.justifyContent = "flex-start";
	btnLogin.style.width = "fit-content";
	btnLogin.style.paddingLeft = "5px";

	login.appendChild(userIcon);
	login.appendChild(userText);
}
