const innerButtons = document.getElementsByClassName("inner-button");
const sliderButtonContainer = document.getElementById("slider-buttons");
const fullScreenNavigation = document.querySelector(".navigation-slide-container");
const menuLinksLi = document.getElementsByClassName("navigation-li");

document.querySelector(".hamburger-menu").addEventListener("click", toggleMenu);

function toggleMenu() {
  this.classList.toggle("toggle-active");
  fullScreenNavigation.classList.toggle("on");
  if(fullScreenNavigation.classList.contains('on') == true) {
    for ( let i = 0; i < menuLinksLi.length; i++) {
        menuLinksLi[i].classList.add("fadeInRightBig");
        menuLinksLi[i].classList.remove('fadeOutRightBig');

      }
  }
  if (fullScreenNavigation.classList.contains("on") == false) {
    for (let i = 0; i < menuLinksLi.length; i++) {
        menuLinksLi[i].classList.add("fadeOutRightBig");
        menuLinksLi[i].classList.remove('fadeInRightBig');
      }
  }
}

const toggleSliderButtons = () => {
  for (let i = 0; i < innerButtons.length; i++) {
    innerButtons[i].addEventListener("click", function() {
      const activesliderButton = document.getElementsByClassName("active");
      activesliderButton[0].className = activesliderButton[0].className.replace("active","");
      this.className += " active";
    });
  }
};

for (let value of innerButtons) {
  value.addEventListener("click", toggleSliderButtons);
}
