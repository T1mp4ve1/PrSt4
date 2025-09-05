

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const generalDiv2 = document.querySelector("#general_div_2");

  const div2Top = generalDiv2.offsetTop;
  const scrollY = window.scrollY;

  if (scrollY >= div2Top - nav.offsetHeight) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
