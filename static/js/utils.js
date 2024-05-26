export const selectFromDOM = (el, type) => {
  if (type?.toLowerCase() == "all") {
    return document.querySelectorAll(el);
  }
  return document.querySelector(el);
};
