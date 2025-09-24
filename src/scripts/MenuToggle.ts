
const toggleButton = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (toggleButton && mobileMenu) {
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
