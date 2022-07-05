const {log} = console

// greeting carousel 
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 4000); 
}





// function for the nav-links active state


// nav-list-toggler
const navLinksToggle = document.getElementsByClassName('nav-list-toggled')[0]
const navLinksToggler = document.getElementsByClassName('nav-toggler')[0]
const navLinksTogglerClose = document.getElementById('nav-toggler-close')
navLinksToggler.addEventListener('click', ()=>{
    navLinksToggle.classList.add('open')
})

navLinksTogglerClose.addEventListener('click', ()=>{
    navLinksToggle.classList.remove('open')
})




