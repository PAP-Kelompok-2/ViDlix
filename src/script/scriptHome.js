// Copy ini untuk di js kalian, btw ini untuk navbar
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const mobileLinks = document.querySelectorAll(".mobile-menu ul li a");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Akhir navbar js



