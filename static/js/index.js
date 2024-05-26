import { mobileNav, openNavBtn, closeNavBtn, m_links } from "./DOMelements.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log(openNavBtn);
  openNavBtn.addEventListener("click", () => {
    mobileNav.classList.add("show");
  });

  closeNavBtn.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
});
