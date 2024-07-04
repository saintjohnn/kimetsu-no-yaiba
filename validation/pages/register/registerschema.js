import { z } from "../../../node_modules/zod/lib/index.mjs";

const input = document.getElementsByTagName("input");
const registerForm = document.querySelector("[name=register-form]");
const username = document.querySelector("[name=text]");
const email = document.querySelector("[name=email]");
const password = document.querySelector("[name=password]");
const confirmPassword = document.querySelector("[name=confirm-password]");
const checkbox = document.querySelector("[name=agree]");
const submitButton = document.querySelector(".btn-register-account");
const alertMessageUsername = document.querySelector(
  ".input-container__user-input__alert-message-username"
);
const alertMessageEmail = document.querySelector(
  ".input-container__user-input__alert-message-email"
);

const alertMessagePassword = document.querySelector(
  ".input-container__user-input__alert-message-password"
);
const alertMessageConfirmPassword = document.querySelector(
  ".input-container__user-input__alert-message-confirm-password"
);
const alertMessageAgree = document.querySelector(
  ".input-container__user-input__alert-agree"
);
const alertMessageEmptyFields = document.querySelector(".alert-empty-fields");
const inputContainerUsername = document.querySelector(
  ".input-container--username"
);
const inputContainerEmail = document.querySelector(".input-container--email");
const inputContainerPassword = document.querySelector(
  ".input-container--password"
);
const inputContainerConfirmPassword = document.querySelector(
  ".input-container--confirm-password"
);

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

function validateSchemas(schema, inputName, alertMessage, inputContainer) {
  const validate = schema.safeParse(inputName["value"]);

  if (validate.success === false) {
    alertMessage.style.display = "inline";
    alertMessage.innerHTML = validate.error.issues[0].message;
    inputContainer.style.borderBottomColor = "red";
  } else {
    inputContainer.style.borderBottomColor = "black";
    alertMessage.style.display = "none";
  }
}

username.addEventListener("input", () => {
  const schemaUsername = z
    .string()
    .min(1, "preencha este campo")
    .min(2, "nome de usuário deve ter no mínimo 2 caracteres")
    .max(30, "nome de usuário deve ter no máximo 30 caracteres");

  validateSchemas(
    schemaUsername,
    username,
    alertMessageUsername,
    inputContainerUsername
  );
});

email.addEventListener("input", () => {
  const schemaEmail = z
    .string()
    .min(1, "preencha este campo")
    .email("insira um endereço de email válido");

  validateSchemas(schemaEmail, email, alertMessageEmail, inputContainerEmail);
});

password.addEventListener("input", () => {
  const schemaPassword = z
    .string()
    .min(1, "preencha este campo")
    .min(6, "senha deve ter no mínimo 6 caracteres")
    .refine(
      (value) => {
        const splitValue = value.split("");
        return splitValue.some((element) => isNaN(element));
      },
      {
        message:
          "a senha deve possuir ao menos um caracterere que não seja numérico",
      }
    )
    .refine(
      (value) => {
        const arrayValue = value.split("");
        return arrayValue.some((element) => !isNaN(element));
      },
      { message: "a senha deve possuir ao menos um número" }
    );

  validateSchemas(
    schemaPassword,
    password,
    alertMessagePassword,
    inputContainerPassword
  );

  const schemaConfirmPassword = z
    .string()
    .refine((value) => value === password.value, {
      message: "as senhas devem ser iguais",
    });

  validateSchemas(
    schemaConfirmPassword,
    confirmPassword,
    alertMessageConfirmPassword,
    inputContainerConfirmPassword
  );
});

confirmPassword.addEventListener("input", () => {
  const schemaConfirmPassword = z
    .string()
    .min(1, "preencha este campo")
    .refine((value) => value === password.value, {
      message: "as senhas devem ser iguais",
    });

  validateSchemas(
    schemaConfirmPassword,
    confirmPassword,
    alertMessageConfirmPassword,
    inputContainerConfirmPassword
  );
});

submitButton.addEventListener("click", () => {
  if (!checkbox.checked) {
    alertMessageAgree.classList.add("input-container__user-input__alert-agree");
    alertMessageAgree.innerHTML =
      "você deve concordar com os termos de serviço e política de privacidade";
  }

  const inputValues = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  const inputValuesSchema = z.object({
    username: z.string().min(1),
    email: z.string().min(1),
    password: z.string().min(1),
    confirmPassword: z.string().min(1),
  });

  const verifyInputValues = inputValuesSchema.safeParse(inputValues);

  if (verifyInputValues.success === false) {
    alertMessageEmptyFields.classList.add("alert-empty-fields");
    alertMessageEmptyFields.innerHTML =
      "preencha todos os campos antes do envio";
  }
});
