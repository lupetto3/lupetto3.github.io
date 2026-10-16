const menuToggle = document.getElementById("menu-toggle");
//This finds the button using its HTML id and stores a reference to it in a variable. We do the same for the navigation and its links.
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    //tells the browser to run the function whenever the button is clicked.
  const isOpen = navbar.classList.toggle("is-open");
  //This is the key line. toggle() adds the is-open class if it isn't present, or removes it if it is already there. It returns true when the class has been added and false when it has been removed.

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
