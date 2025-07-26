const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const message = document.querySelector("#message");

const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const confirmPasswordError = document.querySelector(".confirm-password-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/;

  let isValid = true;

  // Validate Name
  const nameValue = nameInput.value.trim();
  if (!usernameRegex.test(nameValue)) {
    nameError.style.display = "block";
    nameInput.style.border = "2px solid red";
    isValid = false;
  } else {
    nameError.style.display = "none";
    nameInput.style.border = "2px solid green";
  }

  // Validate Email
  const emailValue = emailInput.value.trim();
  if (!emailRegex.test(emailValue)) {
    emailError.style.display = "block";
    emailInput.style.border = "2px solid red";
    isValid = false;
  } else {
    emailError.style.display = "none";
    emailInput.style.border = "2px solid green";
  }

  // Validate Password
  const passwordValue = passwordInput.value.trim();
  if (!passwordRegex.test(passwordValue)) {
    passwordError.style.display = "block";
    passwordInput.style.border = "2px solid red";
    isValid = false;
  } else {
    passwordError.style.display = "none";
    passwordInput.style.border = "2px solid green";
  }

  // Validate Confirm Password
  const confirmPasswordValue = confirmPassword.value.trim();
  if (passwordValue !== confirmPasswordValue) {
    confirmPasswordError.style.display = "block";
    confirmPassword.style.border = "2px solid red";
    isValid = false;
  } else {
    confirmPasswordError.style.display = "none";
    confirmPassword.style.border = "2px solid green";
  }

  // Final message
  if (!isValid) {
    message.innerHTML = "❌Invalid credentials. Please check the highlighted fields.";
    message.style.color = "red"
  } else {
    message.innerHTML = "✅Form submitted successfully";
    message.style.color = "green"
  }
  console.log(nameValue, emailValue, passwordValue, confirmPasswordValue);
});
