document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".form-login");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");

      const enteredUsername = usernameInput.value;
      const enteredPassword = passwordInput.value;

      if (enteredUsername === "admin" && enteredPassword === "adminGanteng") {
        const user = {
          username: "admin",
          name: "Admin ViDlix",
          avatar: "src/image/user.png"
        };
        
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        
        alert("Login berhasil! Anda akan diarahkan ke halaman utama.");
        window.location.href = "../index.html";
      } else {
        alert("Username atau password salah!");
        passwordInput.value = "";
        passwordInput.focus();
      }
    });
  }
});