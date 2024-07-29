// Handle Signup Form Submission
document
  .getElementById("signup-form")
  ?.addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await fetch("http://localhost:3000/signup", {
      // Adjust URL if necessary
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      alert("Signup successful");
    } else {
      alert("Signup failed");
    }
  });

// Handle Login Form Submission
document
  .getElementById("login-form")
  ?.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await fetch("http://localhost:3000/login", {
      // Adjust URL if necessary
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem("authToken", token);
      alert("Login successful");
      window.location.href = "index.html"; // Redirect to homepage or dashboard
    } else {
      alert("Login failed");
    }
  });
