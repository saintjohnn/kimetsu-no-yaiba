import validateSchemas from "../../../utils/validate.js";
import bcryptjs from "https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm";

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
const alertUserPassword = document.querySelector(".alert-user-password");
const loginButton = document.querySelector(".btn-login-account");

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

loginButton.addEventListener("click", async () => {
	alertUserEmail.innerHTML = "";
	const verifyFiels = () => {
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
			alertMessageEmptyFields.innerHTML =
				"preencha todos os campos antes do envio";
			return false;
		} else {
			alertMessageEmptyFields.innerHTML = "";
			return true;
		}
	};

	if (!verifyFiels()) return;

	const registeredAccounts = async () => {
		const registeredAccountData = await fetch("http://localhost:3000/users");
		const parsedRegisteredAccountData = await registeredAccountData.json();

		const userData = parsedRegisteredAccountData.find(
			(data) => email.value === data.email,
		);

		if (!userData) {
			alertUserEmail.innerHTML = "este email não existe";
			return;
		} else {
			alertUserEmail.innerHTML = "";
			return userData;
		}
	};

	const user = await registeredAccounts();

	if (user) {
		const checkPassword = bcryptjs.compareSync(password.value, user.password);

		if (!checkPassword) {
			alertUserPassword.innerHTML = "senha incorreta";
		} else {
			alertUserPassword.innerHTML = "";
			localStorage.setItem("userEmail", email.value);
			location.href = "https://saintjohnn.github.io/kimetsu-no-yaiba/";
		}
	}
});
