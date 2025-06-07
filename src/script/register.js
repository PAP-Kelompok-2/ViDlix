document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".form-register");
  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const emailInput = document.getElementById("email");

     
      const enteredUsername = usernameInput.value;
      const enteredPassword = passwordInput.value;
      const enteredEmail = emailInput.value;

      if (enteredUsername === "admin" && enteredPassword === "adminGanteng") {
        const user = {
          username: "admin",
          name: "Admin ViDlix",
          avatar: "src/image/user.png"
        };
        
        localStorage.setItem("registeredInUser", JSON.stringify(user));
        
        alert("Registrasi berhasil! Silakan login dengan akun Anda.");
        window.location.href = "login.html";
      }
    });
  }
});