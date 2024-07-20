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

function setDisplay(elements, displayStyle) {
	for (const modifyElements of elements) {
		modifyElements.style.display = displayStyle;
	}
}

function checkUsernameTextLength() {
	if (btnUsernameText && btnUsernameText.innerText.length > 11) {
		const text = btnUsernameText.textContent;

		const part1 = text.slice(0, 13);
		const part2 = text.slice(13);

		btnUsernameText.innerHTML = `<span class="fade-text">${part1}</span><span class="display-none">${part2}</span>`;
	}
}

if (localStorage.getItem("userEmail")) {
	const userLoginData = async () => {
		try {
			const userData = await fetch("http://localhost:3000/users");
			const parsedUserData = await userData.json();

			parsedUserData.some((datas) => {
				if (localStorage.getItem("userEmail") === datas.email) {
					btnUsernameText.innerHTML = datas.username;
					checkUsernameTextLength();
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	userLoginData();

	setDisplay([btnUsername, btnLogout], "flex");
	setDisplay([btnLogin, btnRegister], "none");
}

if (localStorage.getItem("username")) {
	setDisplay([btnUsername, btnLogout], "flex");
	setDisplay([btnLogin, btnRegister], "none");
	btnUsernameText.innerHTML = localStorage.getItem("username");
}

if (btnLogout) {
	btnLogout.addEventListener("click", () => {
		setDisplay([btnUsername, btnLogout], "none");
		setDisplay([btnLogin, btnRegister], "flex");

		localStorage.removeItem("username");
		localStorage.removeItem("userEmail");
		location.href = "https://saintjohnn.github.io/kimetsu-no-yaiba/";
	});
}

checkUsernameTextLength();
