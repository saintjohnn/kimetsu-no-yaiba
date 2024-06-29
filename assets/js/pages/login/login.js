const inputContainerUserInputEmail = document.querySelector("[name=email]");
const inputContainerUserInputPassword =
  document.querySelector("[name=password]");

const emailLabel = document.querySelector("#email-label");
const passwordLabel = document.querySelector("#password-label");

inputContainerUserInputEmail.addEventListener("click", () => {
  emailLabel.classList.add("input-container__user-input-event");
  setTimeout(() => {
    inputContainerUserInputEmail.setAttribute(
      "placeholder",
      "Insira seu email"
    );
  }, 250);
});

inputContainerUserInputPassword.addEventListener("click", () => {
  passwordLabel.classList.add("input-container__user-input-event");
  setTimeout(() => {
    inputContainerUserInputPassword.setAttribute(
      "placeholder",
      "Insira sua senha"
    );
  }, 250);
});
