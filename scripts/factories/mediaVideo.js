/* eslint-disable no-unused-vars */
class MediaVideo {
  constructor (dataVideo, photographerFirstName) {
    this.id = dataVideo.id
    this.photographerId = dataVideo.photographerId
    this.video = dataVideo.video
    this.title = (dataVideo.video).replaceAll('_', ' ').slice(0, -4)
    this.likes = dataVideo.likes
    this.date = dataVideo.date
    this.price = dataVideo.price
    this.photographerFirstName = photographerFirstName
  }

  /**
     * crée et retourne la figure contenant la video
     */
  mediaFactory () {
    console.log('name', this.photographerFirstName)
    const picture = `assets/Sample_Photos/${this.photographerFirstName}/${this.video}`
    const figure = document.createElement('figure')
    const a = document.createElement('a')
    // a.href=ouvrir l'image dans la lightbox
    const video = document.createElement('video')
    video.setAttribute('src', picture)
    video.setAttribute('controls', 'controls')
    video.setAttribute('alt', 'vidéo')
    a.appendChild(video)
    const figcaption = document.createElement('figcaption')
    const pTitle = document.createElement('p')
    pTitle.textContent = this.title
    const divLike = document.createElement('div')
    divLike.setAttribute('class', 'likes')
    const pLike = document.createElement('p')
    pLike.textContent = this.likes
    const iHeart = document.createElement('i')
    iHeart.setAttribute('class', 'fas fa-heart')
    divLike.appendChild(pLike)
    divLike.appendChild(iHeart)
    figcaption.appendChild(pTitle)
    figcaption.appendChild(divLike)
    figure.appendChild(a)
    figure.appendChild(figcaption)
    return figure
  }
}
