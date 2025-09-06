const nav_buttons = document.querySelectorAll('#sing_in a');
// console.log(nav_buttons);

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const generalDiv2 = document.querySelector("#general_div_2");

  const div2Top = generalDiv2.offsetTop;
//   console.log(div2Top);
  const scrollY = window.scrollY;
//   console.log(scrollY);

  if (scrollY >= div2Top - nav.offsetHeight) {
    nav.classList.add("scrolled");
    nav_buttons.forEach(a => a.classList.add('scrolled_a'));
  } else {
    nav.classList.remove("scrolled");
    nav_buttons.forEach(a => a.classList.remove('scrolled_a'));
  }
});