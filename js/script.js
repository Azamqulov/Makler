const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Demo uchun to‘g‘ri login/parol
  const correctUsername = "admin";
  const correctPassword = "12345";

  if (username === correctUsername && password === correctPassword) {
    // Keyingi sahifaga o‘tadi
    window.location.href = "main.html";
  } else {
    errorMsg.textContent = "Login yoki parol xato!";
  }
});