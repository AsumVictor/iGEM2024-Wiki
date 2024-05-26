import { selectFromDOM } from "./utils.js";

export const mobileNav = selectFromDOM(".mobile_nav");
export const openNavBtn = selectFromDOM(".open_btn");
export const closeNavBtn = selectFromDOM(".close_btn");
export const m_links = selectFromDOM(".m_link", 'all');

