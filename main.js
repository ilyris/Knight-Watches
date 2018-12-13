const innerButtons = document.querySelectorAll('.inner-button');




// if a inner button has the class active, another button shouldn't have the active class. allowing only one button to be clicked at a time.
// when innerButton[1] toggles active "on" then innerButton [0] or [2] toggle active off

      for(let value of innerButtons) {
    value.addEventListener("click", e => {
        if(innerButtons[0].classList.contains('active')){
            innerButtons[1].classList.remove('active');
            innerButtons[2].classList.remove('active');
        }
         if (innerButtons[1].classList.contains('active') == false) {
        value.classList.toggle('active');
        }

    })
} 
// if Element.classList.contains(active);


   const toggleSliderButtonActive = () => {

   }
