/* eslint-disable no-unused-vars */
// Open lightbox
let currentMedia
function openModal (n) {
  document.getElementById('myLightbox').style.display = 'block'
  currentMedia = n
  showSlides(0)
  listeners()
}

// Close lightbox
function closeLightbox () {
  document.getElementById('myLightbox').style.display = 'none'
}

/* Slide suivante */
function nextSlide () {
  showSlides(1)
}

/* Slide précédente */
function prevSlide () {
  showSlides(-1)
}

/* Affiche les slides(=photos) */
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

/* Ecoute les événements au clavier */
function prevSlideListener () {
  const prevSlideButton = document.getElementsByClassName('prev')
  prevSlideButton[0].addEventListener('click', (e) => {
    prevSlide()
  })
}

function nextSlideListener () {
  const nextSlideButton = document.getElementsByClassName('next')
  nextSlideButton[0].addEventListener('click', (e) => {
    nextSlide()
  })
}

function navKeyboardListener () {
  const testFocus = document.getElementsByClassName('lightbox-content')
  testFocus[0].focus()
  testFocus[0].addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    } else if (e.key === 'Escape') {
      closeLightbox()
    }
  })
}

function listeners () {
  prevSlideListener()
  nextSlideListener()
  navKeyboardListener()
  // document.getElementById('closeLightbox').focus()
}
