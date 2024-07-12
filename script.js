// Used w3schools as a reference for the slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
}

// Initialize slide index
var pantsSlideIndex = 1;
showpantsSlides(pantsSlideIndex);

// Function to move to next or previous slide
function pluspantsSlides(n) {
  showpantsSlides(pantsSlideIndex += n);
}

// Function to display the current slide
function showpantsSlides(n) {
  var i;
  var slides = document.getElementsByClassName("pantsSlides");
  var dots = document.getElementsByClassName("dot");

  // Wrap around if slide index goes out of bounds
  if (n > slides.length) { pantsSlideIndex = 1; }    
  if (n < 1) { pantsSlideIndex = slides.length; }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark corresponding dot as active
  slides[pantsSlideIndex - 1].style.display = "block";  
  dots[pantsSlideIndex - 1].className += " active";
}

