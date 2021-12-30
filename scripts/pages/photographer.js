/* eslint-disable no-undef */
const urlSearchParam = new URLSearchParams(window.location.search)
const id = urlSearchParam.get('id')
let medias = [] // tableau contenant les medias
let dataPhotographer = null
let photographerFirstName = null // nom du photographe (pour le dossier des images)
const mediasObject = [] // tableau contenant les objets media

async function returnDataPhotographer () {
  const photographer = await loadDataPhotographer(id)
  console.log('photo', photographer)
  return photographer
}

async function returnMediaPhotographer () {
  medias = await loadMediaPhotographer(id)
  medias.forEach((media) => {
    let typeMedia = ''
    if (media.image) {
      typeMedia = 'image'
    } else {
      typeMedia = 'video'
    }
    const mediaClass = new Media(media, typeMedia, photographerFirstName)
    mediasObject.push(mediaClass)
  })
}

/* tri des medias par popularité */
function triMediaPopularite () {
  const sortedMedias = mediasObject.sort(function compare (a, b) {
    if (a.likes > b.likes) { return -1 }
    if (a.likes < b.likes) { return 1 }
    return 0
  })
  displayMedias(sortedMedias)
}

/* tri des medias par titre */
function triMediaTitre () {
  const sortedMedias = mediasObject.sort(function compare (a, b) {
    if (a.title < b.title) { return -1 }
    if (a.title > b.title) { return 1 }
    return 0
  })
  displayMedias(sortedMedias)
}

/* tri des medias par date */
function triMedaiDate () {
  const sortedMedias = mediasObject.sort(function compare (a, b) {
    if (a.date > b.date) { return -1 }
    if (a.date < b.date) { return 1 }
    return 0
  })
  displayMedias(sortedMedias)
}

/* appelle les différentes fonctions de tri */
function triMedia (tri) {
  if (tri === 'popularite') {
    triMediaPopularite()
  } else if (tri === 'titre') {
    triMediaTitre()
  } else {
    triMedaiDate()
  }
  // console.table(sortedMedias);
}

/* Affiche les media en fonction de l'ordre choisi */
async function displayMedias (sortedMedias) {
  const mediasToDisplay = sortedMedias || medias
  const divMedia = document.querySelector('.photograph-media__photos')
  divMedia.innerText = ''
  mediasToDisplay.forEach((media) => {
    let typeMedia = ''
    if (media.image) {
      typeMedia = 'image'
    } else {
      typeMedia = 'video'
    }
    const mediaFigure = new Media(media, typeMedia, photographerFirstName)
    const mediaFigureHTML = mediaFigure.mediaFactory()
    divMedia.appendChild(mediaFigureHTML)
  })
}

function select () {
  const select = document.getElementById('select-tri')
  select.addEventListener('change', (e) => {
    console.log(e.target.value)
    triMedia(e.target.value)
  })
}

/* Au clic sur un coeur, met à jour le total */
function updateBoxLikesAndPrice () {
  const pLike = document.getElementsByClassName('boxLikesAndPrice__likes')
  const nbLike = pLike[0].textContent
  pLike[0].textContent = '\u00a0' + (parseInt(nbLike) + 1)
}

/* clic sur le coeur pour ajouter un j'aime */
function heart () {
  const hearts = document.getElementsByClassName('likeHeart')
  Array.from(hearts).forEach((heart) => {
    heart.addEventListener('click', (e) => {
      const pLike = heart.parentNode.firstElementChild
      const nbLike = pLike.innerText
      pLike.innerHTML = parseInt(nbLike) + 1
      updateBoxLikesAndPrice()
    })
  })
}

/* Affiche la boite total like et prix */
function displayBoxLikesAndPrice () {
  const price = dataPhotographer.price
  let totalLike = 0
  const iHeart = document.createElement('i')
  iHeart.setAttribute('class', 'fas fa-heart')
  medias.forEach(media => {
    totalLike += parseInt(media.likes)
  })
  const pLike = document.getElementsByClassName('boxLikesAndPrice__likes')
  pLike[0].textContent = '\u00a0' + totalLike
  const pPrice = document.getElementsByClassName('boxLikesAndPrice__price')
  pPrice[0].textContent = price + '\u20ac/jour'
}

/* ajoute le numéro de l'image pour l'ouvrir dans la ligthbox */
function addIndexImg () {
  const divPhotosGallerie = document.getElementsByClassName('photograph-media__photos')
  const figuresGallerie = divPhotosGallerie[0].childNodes
  figuresGallerie.forEach((figureGallerie, index) => {
    const imageGallerie = figureGallerie.getElementsByClassName('element_gallerie')
    imageGallerie[0].setAttribute('onclick', 'openModal(' + index + ')')
    imageGallerie[0].setAttribute('onKeyPress', 'if (event.keyCode == 13) openModal(' + index + ')')
  })
}

/* Créée la lightbox */
function createLightbox () {
  const divSlides = document.getElementsByClassName('lightbox-content')
  mediasObject.forEach(media => {
    const divMySlides = document.createElement('div')
    divMySlides.setAttribute('class', 'mySlides')
    const figure = document.createElement('figure')
    figure.setAttribute('class', 'figure_lightbox')
    if (media.image) {
      const img = document.createElement('img')
      img.setAttribute('src', 'assets/Sample_Photos/' + photographerFirstName + '/' + media.image)
      img.setAttribute('alt', media.title)
      figure.appendChild(img)
    } else {
      const video = document.createElement('video')
      video.setAttribute('src', 'assets/Sample_Photos/' + photographerFirstName + '/' + media.video)
      video.setAttribute('alt', media.title)
      video.setAttribute('controls', 'controls')
      figure.appendChild(video)
    }
    const figcaption = document.createElement('figcaption')
    figcaption.textContent = media.title
    figure.appendChild(figcaption)
    divMySlides.appendChild(figure)
    divSlides[0].appendChild(divMySlides)
  })

  // ajout des flèches
  const aPrev = document.createElement('a')
  const iPrev = document.createElement('i')
  iPrev.setAttribute('class', 'fas fa-chevron-left')
  aPrev.appendChild(iPrev)
  aPrev.setAttribute('class', 'prev')
  aPrev.setAttribute('href', '#')
  const aNext = document.createElement('a')
  const iNext = document.createElement('i')
  iNext.setAttribute('class', 'fas fa-chevron-right')
  aNext.appendChild(iNext)
  aNext.setAttribute('class', 'next')
  aNext.setAttribute('href', '#')
  divSlides[0].appendChild(aPrev)
  divSlides[0].appendChild(aNext)
}

async function init () {
  // Partie description du photographe
  dataPhotographer = await returnDataPhotographer()
  const ClassPhotographer = new Photographer(dataPhotographer)
  ClassPhotographer.photographerPage()

  // Partie Medias
  await returnMediaPhotographer()
  photographerFirstName = ClassPhotographer.name.split(' ')[0]
  triMediaPopularite()
  addIndexImg()
  heart()
  displayBoxLikesAndPrice()
  createLightbox()
}

console.log(id)
init()
select()
