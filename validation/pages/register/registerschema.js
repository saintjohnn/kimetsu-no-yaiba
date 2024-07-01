import { z } from "zod";

const registerForm = document.querySelector("[name=register-form]");
const username = document.querySelector("[name=text]");
const email = document.querySelector("[name=email]");
const password = document.querySelector("[name=password]");
const confirmPassword = document.querySelector("[name=confirm-password]");

console.log(registerForm, username, email, password, confirmPassword);

const formObj = {
  username: username.value,
  email: email.value,
  password: password.value,
  confirmPassword: confirmPassword.value,
};

console.log(formObj);
