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
    a.setAttribute('href', 'javascript:void(0)')
    const video = document.createElement('video')
    video.setAttribute('src', picture)
    video.setAttribute('controls', 'controls')
    video.setAttribute('alt', this.title)
    a.setAttribute('class', 'element_gallerie')
    a.appendChild(video)
    const figcaption = document.createElement('figcaption')
    const pTitle = document.createElement('p')
    pTitle.textContent = this.title
    const divLike = document.createElement('div')
    divLike.setAttribute('class', 'likes')
    const pLike = document.createElement('p')
    pLike.textContent = this.likes
    const iHeart = document.createElement('i')
    const aLike = document.createElement('a')
    aLike.setAttribute('class', 'likeHeart')
    aLike.setAttribute('href', 'javascript:void(0)')
    iHeart.setAttribute('class', 'fas fa-heart')
    iHeart.setAttribute('aria-label', 'likes')
    aLike.appendChild(iHeart)
    divLike.appendChild(pLike)
    divLike.appendChild(aLike)
    figcaption.appendChild(pTitle)
    figcaption.appendChild(divLike)
    figure.appendChild(a)
    figure.appendChild(figcaption)
    return figure
  }
}
