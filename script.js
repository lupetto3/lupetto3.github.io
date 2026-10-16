const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
  const isOpen = navbar.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", isOpen);

  if (isOpen) {
    menuToggle.textContent = "✕";
    menuToggle.setAttribute("aria-label", "Close navigation menu");
  } else {
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

navLinks.addEventListener("click", function (event) {
  if (event.target.closest("a")) {
    navbar.classList.remove("is-open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});
