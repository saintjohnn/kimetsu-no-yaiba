export default function validateSchemas(
	schema,
	inputName,
	alertMessage,
	inputContainer,
) {
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
