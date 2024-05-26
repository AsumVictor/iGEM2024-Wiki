import { mobileNav, openNavBtn, closeNavBtn, logos, slider } from "./DOMelements.js";

document.addEventListener("DOMContentLoaded", () => {
  // Navigation bar
  openNavBtn.addEventListener("click", () => {
    mobileNav.classList.add("show");
  });

  closeNavBtn.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });

  // Sponsors
  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    slider.appendChild(clone);
  });
});
