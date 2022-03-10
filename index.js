const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const btnPrevEl = document.getElementById("prev");
const btnNextEl = document.getElementById("next");
const totalSlides = slides.length;

btnNextEl.addEventListener("click", getNextSlide);

btnPrevEl.addEventListener("click", getPrevSlide);

function hideSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}
function getNextSlide() {
  hideSlides();
  if (slidePosition === totalSlides - 1) {
    slidePosition === 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

function getPrevSlide() {
  hideSlides();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}
