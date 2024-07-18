const inputContainerUserInputUsername = document.querySelector("[name=text]");
const inputContainerUserInputConfirmPassword = document.querySelector(
	"[name=confirm-password]",
);
const usernameLabel = document.querySelector("#username-label");
const confirmPasswordLabel = document.querySelector("#confirm-password-label");

inputContainerUserInputUsername.addEventListener("focus", () => {
	usernameLabel.classList.add("input-container__user-input-event");
	setTimeout(() => {
		inputContainerUserInputUsername.setAttribute(
			"placeholder",
			"Insira seu nome de usuário",
		);
	}, 15);
});

inputContainerUserInputConfirmPassword.addEventListener("focus", () => {
	confirmPasswordLabel.classList.add("input-container__user-input-event");
	setTimeout(() => {
		inputContainerUserInputConfirmPassword.setAttribute(
			"placeholder",
			"Confirme sua senha",
		);
	}, 15);
});
