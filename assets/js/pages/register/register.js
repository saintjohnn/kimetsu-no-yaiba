const inputContainerUserInputUsername = document.querySelector("[name=text]");
const inputContainerUserInputConfirmPassword = document.querySelector(
  "[name=confirm-password]"
);
const usernameLabel = document.querySelector("#username-label");
const confirmPasswordLabel = document.querySelector("#confirm-password-label");

inputContainerUserInputUsername.addEventListener("click", () => {
  usernameLabel.classList.add("input-container__user-input-event");
  setTimeout(() => {
    inputContainerUserInputUsername.setAttribute(
      "placeholder",
      "Insira seu nome de usuário"
    );
  }, 250);
});

inputContainerUserInputConfirmPassword.addEventListener("click", () => {
  confirmPasswordLabel.classList.add("input-container__user-input-event");
  setTimeout(() => {
    inputContainerUserInputConfirmPassword.setAttribute(
      "placeholder",
      "Confirme sua senha"
    );
  }, 250);
});
