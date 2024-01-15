const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const navToggleIcons = document.querySelectorAll(".mobile-nav-toggle-icon");
const primaryHeader = document.querySelector(".primary-header");
const prodImg = document.querySelectorAll(".product-img")[1];
const imgSlider = document.querySelector(".image-slider");
const imgSliderCloseBtn = document.querySelector(".close-btn");
const cardThumbnails = document.querySelectorAll(
  ".product-img-thumbnails .thumbnails a"
);

function disableScroll() {
  document.body.classList.add("disable-scroll");
}
function enableScroll() {
  document.body.classList.remove("disable-scroll");
}
navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  navToggleIcons[0].toggleAttribute("hidden");
  navToggleIcons[1].toggleAttribute("hidden");
  primaryHeader.toggleAttribute("data-overlay");
  primaryHeader.classList.toggle("fade-in");

  console.log(primaryNav.getAttribute("data-visible"));

  if (primaryNav.getAttribute("data-visible") === null) enableScroll();
  else disableScroll();
});

prodImg.addEventListener("click", (e) => {
  e.preventDefault();
  imgSlider.classList.remove("display-none");
});

imgSliderCloseBtn.addEventListener("click", () => {
  imgSlider.classList.add("display-none");
});

for (thumbnail of cardThumbnails) {
  thumbnail.addEventListener("click", function (e) {
    e.preventDefault();
    for (oldThumbnail of cardThumbnails) {
      oldThumbnail.classList.remove("active-thumbnail");
      oldThumbnail.classList.remove("border-primary-clr");
    }

    this.classList.add("border-primary-clr");
    this.classList.add("active-thumbnail");

    prodImg.children[0].src = this.getAttribute("original-img");
  });
}
