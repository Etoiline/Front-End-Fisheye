/* eslint-disable no-unused-vars */
// Open the Modal
let currentMedia
function openModal (n) {
  document.getElementById('myLightbox').style.display = 'block'
  currentMedia = n
  showSlides(0)
}

// Close the Modal
function closeLightbox () {
  document.getElementById('myLightbox').style.display = 'none'
}

function nextSlide () {
  showSlides(1)
}

function prevSlide () {
  showSlides(-1)
}

function showSlides (indice) {
  currentMedia += indice
  const slides = document.getElementsByClassName('mySlides')
  if (currentMedia >= slides.length) { currentMedia = 0 }
  if (currentMedia < 0) { currentMedia = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[currentMedia].style.display = 'block'
}
