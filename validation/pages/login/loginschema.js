/*const formLogin = document.querySelector("[name=login-form]");*/
const email = document.querySelector("[name=email]");
const password = document.querySelector("[name=password]");
const alertMessageEmail = document.querySelector(
	".input-container__user-input__alert-message-email",
);
const alertMessagePassword = document.querySelector(
	".input-container__user-input__alert-message-password",
);
const inputContainerEmail = document.querySelector(".input-container--email");
const inputContainerPassword = document.querySelector(
	".input-container--password",
);
const alertMessageEmptyFields = document.querySelector(".alert-empty-fields");
const alertUserEmail = document.querySelector(".alert-user-email");
const loginButton = document.querySelector(".btn-login-account");

function validateSchemas(schema, inputName, alertMessage, inputContainer) {
	const validate = schema.safeParse(inputName["value"]);

	if (validate.success === false) {
		alertMessage.style.display = "inline";
		alertMessage.innerHTML = validate.error.issues[0].message;
		inputContainer.style.borderBottomColor = "red";
	} else {
		inputContainer.style.borderBottomColor = "black";
		alertMessage.innerHTML = "";
	}
}

email.addEventListener("input", () => {
	const schemaEmail = Zod.string()
		.min(1, "preencha este campo")
		.regex(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			"insira um endereço de email válido",
		);

	validateSchemas(schemaEmail, email, alertMessageEmail, inputContainerEmail);
});

password.addEventListener("input", () => {
	const schemaPassword = Zod.string()
		.min(1, "preencha este campo")
		.regex(/^[a-zA-Z0-9çÇ]+$/, "insira uma senha valida");

	validateSchemas(
		schemaPassword,
		password,
		alertMessagePassword,
		inputContainerPassword,
	);
});

loginButton.addEventListener("click", () => {
	const inputValues = {
		email: email.value,
		password: password.value,
	};

	const inputValuesSchema = Zod.object({
		email: Zod.string().min(1),
		password: Zod.string().min(1),
	});

	const verifyInputValues = inputValuesSchema.safeParse(inputValues);

	if (verifyInputValues.success === false) {
		alertMessageEmptyFields.classList.add("alert-empty-fields");
		alertMessageEmptyFields.innerHTML =
			"preencha todos os campos antes do envio";
	} else {
		alertMessageEmptyFields.innerHTML = "";
	}

	if (!localStorage.getItem(email.value)) {
		alertUserEmail.classList.add("alert-user-email");
		alertUserEmail.innerHTML = "este email não existe";
	} else {
		alertUserEmail.innerHTML = "";
	}

	if (
		alertMessageEmptyFields.innerHTML === "" &&
		alertMessageEmail.innerHTML === "" &&
		alertMessagePassword.innerHTML === "" &&
		alertUserEmail.innerHTML === ""
	) {
		window.location.href = "https://saintjohnn.github.io/kimetsu-no-yaiba/";
		btnUsernameText.innerHTML = localStorage.getItem(email.value.toString());
	}
});
