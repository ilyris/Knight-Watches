
    const innerButtons = document.getElementsByClassName('inner-button');
    const sliderButtonContainer = document.getElementById('slider-buttons');
    const fullScreenNavigation = document.querySelector(".navigation-slide-container");

    
    document.querySelector(".hamburger-menu").addEventListener("click", toggleMenu);

function toggleMenu() {
  this.classList.toggle("toggle-active");
  fullScreenNavigation.classList.toggle("on");

}




const toggleSliderButtons = () => {

    for (let i = 0; i < innerButtons.length; i++) {
        innerButtons[i].addEventListener('click', function () {
            console.log('clicked');
            const activesliderButton = document.getElementsByClassName('active');
            activesliderButton[0].className = activesliderButton[0].className.replace('active', '');
            this.className += ' active';
            console.log(this);
        });
    }
}


for(let value of innerButtons) {
    value.addEventListener("click", toggleSliderButtons);
}