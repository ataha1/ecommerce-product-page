const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const navToggleIcons = document.querySelectorAll(".mobile-nav-toggle-icon");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  navToggleIcons[0].toggleAttribute("hidden");
  navToggleIcons[1].toggleAttribute("hidden");
  primaryHeader.toggleAttribute("data-overlay");
  primaryHeader.classList.toggle("fade-in");
});
