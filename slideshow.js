let width = screen.width;
// Get the button:
let mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && width > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


let plusSlideIndex = 1;
showPhotoSlides(plusSlideIndex);

// Next/previous controls
function plusSlides(n) {
    showPhotoSlides(plusSlideIndex += n);
}

// Thumbnail image controls
function currentPhotoSlide(n) {
    showPhotoSlides(plusSlideIndex = n);
}

function showPhotoSlides(n) {
  let i;
  let photoSlides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > photoSlides.length) {plusSlideIndex = 1}
  if (n < 1) {plusSlideIndex = photoSlides.length}
  for (i = 0; i < photoSlides.length; i++) {
    photoSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  photoSlides[plusSlideIndex-1].style.display = "block";
  dots[plusSlideIndex-1].className += " active";
  captionText.innerHTML = dots[plusSlideIndex-1].alt;
} 


