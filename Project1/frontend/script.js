function showLogin() {
  document.getElementById("login-form").style.display = "flex";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-toggle").classList.add("active");
  document.getElementById("signup-toggle").classList.remove("active");
}

function showSignup() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "flex";
  document.getElementById("signup-toggle").classList.add("active");
  document.getElementById("login-toggle").classList.remove("active");
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll("input");
  const errorMessages = document.getElementById("signup-errors");

  errorMessages.innerHTML = ""; // Clear previous errors
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value) {
      isValid = false;
      input.classList.add("error");
      const errorMessage = document.createElement("div");
      errorMessage.textContent = `${input.placeholder} is required.`;
      errorMessages.appendChild(errorMessage);
    } else {
      input.classList.remove("error");
    }
  });

  return isValid;
}

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    if (!validateForm("signup-form")) {
      event.preventDefault();
      return false;
    }
  });

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    // Example validation for login
    const email = this.querySelector('input[type="email"]');
    const password = this.querySelector('input[type="password"]');

    if (!email.value || !password.value) {
      event.preventDefault();
      alert("Please fill in all fields.");
    }
  });
