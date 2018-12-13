const innerButtons = document.getElementsByClassName('inner-button');
const sliderButtonContainer = document.getElementById('slider-buttons');




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


// if a inner button has the class active, another button shouldn't have the active class. allowing only one button to be clicked at a time.
// when innerButton[1] toggles active "on" then innerButton [0] or [2] toggle active off

// for (let i = 0; i < innerButtons.length; i++) {
//     innerButtons[i].addEventListener("click", () => {
//         console.log(innerButtons[i]);
//         // innerButtons[i].classList.toggle('active');
//         if(innerButtons[i].className = 'active' == false) {
//                 innerButtons[i].className = 'inner-button active';
//         }else if (innerButtons[i].classList.contains("active")) {
//             innerButtons[i].className = "inner-button";
//         }
//     })
// }
// if Element.classList.contains(active);


// const toggleSliderButtonActive = () => {

// }