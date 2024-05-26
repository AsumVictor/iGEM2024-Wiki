import { mobileNav, openNavBtn, closeNavBtn } from "./DOMelements.js";

document.addEventListener("DOMContentLoaded", () => {

  openNavBtn.addEventListener("click", () => {
    mobileNav.classList.add("show");
  });

  closeNavBtn.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
});
