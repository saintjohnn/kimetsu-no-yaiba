const registerForm = document.querySelector("[name=register-form]");
const username = document.querySelector("[name=text]");
const email = document.querySelector("[name=email]");
const password = document.querySelector("[name=password]");
const confirmPassword = document.querySelector("[name=confirm-password]");
const checkbox = document.querySelector("[name=agree]");
const submitButton = document.querySelector(".btn-register-account");
const alertMessageUsername = document.querySelector(
	".input-container__user-input__alert-message-username",
);
const alertMessageEmail = document.querySelector(
	".input-container__user-input__alert-message-email",
);

const alertMessagePassword = document.querySelector(
	".input-container__user-input__alert-message-password",
);
const alertMessageConfirmPassword = document.querySelector(
	".input-container__user-input__alert-message-confirm-password",
);
const alertMessageAgree = document.querySelector(
	".input-container__user-input__alert-agree",
);
const alertMessageEmptyFields = document.querySelector(".alert-empty-fields");
const inputContainerUsername = document.querySelector(
	".input-container--username",
);
const inputContainerEmail = document.querySelector(".input-container--email");
const inputContainerPassword = document.querySelector(
	".input-container--password",
);
const inputContainerConfirmPassword = document.querySelector(
	".input-container--confirm-password",
);

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

username.addEventListener("input", () => {
	const schemaUsername = Zod.string()
		.min(1, "preencha este campo")
		.regex(
			/^[a-zA-Z0-9çÇ]+$/,
			"não é permitido caracteres especiais, caracteres acentuados e espaçamentos como nome de usuário",
		)
		.regex(/^[^\d]+$/, "não é permitido números como nome de usuário")
		.min(2, "nome de usuário deve ter no mínimo 2 caracteres")
		.max(30, "nome de usuário deve ter no máximo 30 caracteres");

	validateSchemas(
		schemaUsername,
		username,
		alertMessageUsername,
		inputContainerUsername,
	);
});

email.addEventListener("input", () => {
	const schemaEmail = Zod.string()
		.min(1, "preencha este campo")
		.email("insira um endereço de email válido");

	validateSchemas(schemaEmail, email, alertMessageEmail, inputContainerEmail);
});

password.addEventListener("input", () => {
	const schemaPassword = Zod.string()
		.min(1, "preencha este campo")
		.regex(
			/^[a-zA-Z0-9çÇ]+$/,
			"não é permitido caracteres especiais, caracteres acentuados e espaçamentos como senha",
		)
		.min(6, "senha deve ter no mínimo 6 caracteres")
		.refine(
			(value) => {
				const splitValue = value.split("");
				return splitValue.some((element) => isNaN(element));
			},
			{
				message:
					"a senha deve possuir ao menos um caracterere que não seja numérico",
			},
		)
		.refine(
			(value) => {
				const arrayValue = value.split("");
				return arrayValue.some((element) => !isNaN(element));
			},
			{ message: "a senha deve possuir ao menos um número" },
		);

	validateSchemas(
		schemaPassword,
		password,
		alertMessagePassword,
		inputContainerPassword,
	);

	const schemaConfirmPassword = Zod.string().refine(
		(value) => value === password.value,
		{
			message: "as senhas devem ser iguais",
		},
	);

	validateSchemas(
		schemaConfirmPassword,
		confirmPassword,
		alertMessageConfirmPassword,
		inputContainerConfirmPassword,
	);
});

confirmPassword.addEventListener("input", () => {
	const schemaConfirmPassword = Zod.string()
		.min(1, "preencha este campo")
		.regex(
			/^[a-zA-Z0-9çÇ]+$/,
			"não é permitido caracteres especiais, caracteres acentuados e espaçamentos como senha",
		)
		.refine((value) => value === password.value, {
			message: "as senhas devem ser iguais",
		});

	validateSchemas(
		schemaConfirmPassword,
		confirmPassword,
		alertMessageConfirmPassword,
		inputContainerConfirmPassword,
	);
});

submitButton.addEventListener("click", (event) => {
	if (!checkbox.checked) {
		alertMessageAgree.classList.add("input-container__user-input__alert-agree");
		alertMessageAgree.innerHTML =
			"você deve concordar com os termos de serviço e política de privacidade";
		event.preventDefault();
	} else {
		alertMessageAgree.innerHTML = "";
	}

	const inputValues = {
		username: username.value,
		email: email.value,
		password: password.value,
		confirmPassword: confirmPassword.value,
	};

	const inputValuesSchema = Zod.object({
		username: Zod.string().min(1),
		email: Zod.string().min(1),
		password: Zod.string().min(1),
		confirmPassword: Zod.string().min(1),
	});

	const verifyInputValues = inputValuesSchema.safeParse(inputValues);

	if (verifyInputValues.success === false) {
		alertMessageEmptyFields.classList.add("alert-empty-fields");
		alertMessageEmptyFields.innerHTML =
			"preencha todos os campos antes do envio";
	} else {
		alertMessageEmptyFields.innerHTML = "";
	}

	if (
		alertMessageEmptyFields.innerHTML === "" &&
		alertMessageEmail.innerHTML === "" &&
		alertMessagePassword.innerHTML === "" &&
		alertMessageConfirmPassword.innerHTML === "" &&
		alertMessageUsername.innerHTML === "" &&
		alertMessageAgree.innerHTML === ""
	) {
		localStorage.setItem(email.value.toString(), username.value);
		window.location.href = `https://saintjohnn.github.io/kimetsu-no-yaiba/?email=${encodeURIComponent(email.value)}`;
	}
});
