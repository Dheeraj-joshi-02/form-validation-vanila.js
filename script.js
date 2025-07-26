const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/;

  // Validate Name
  const nameValue = nameInput.value.trim();
  if (!usernameRegex.test(nameValue)) {
    nameError.style.display = "block";
    nameInput.style.border = "2px solid red";
  } else {
    nameError.style.display = "none";
    nameInput.style.border = "2px solid green";
  }

  // Validate Email
  const emailValue = emailInput.value.trim();
  if (!emailRegex.test(emailValue)) {
    emailError.style.display = "block";
    emailInput.style.border = "2px solid red";
  } else {
    emailError.style.display = "none";
    emailInput.style.border = "2px solid green";
  }

  // Validate Password
  const passwordValue = passwordInput.value.trim();
  if (!passwordRegex.test(passwordValue)) {
    passwordError.style.display = "block";
    passwordInput.style.border = "2px solid red";
  } else {
    passwordError.style.display = "none";
    passwordInput.style.border = "2px solid green";
  }
});
