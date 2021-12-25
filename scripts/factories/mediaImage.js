/* eslint-disable no-unused-vars */
class MediaImage {
  constructor (dataImage, photographerFirstName) {
    this.id = dataImage.id
    this.photographerId = dataImage.photographerId
    this.title = dataImage.title
    this.image = dataImage.image
    this.likes = dataImage.likes
    this.date = dataImage.date
    this.price = dataImage.price
    this.photographerFirstName = photographerFirstName
  }

  /**
     * crée et retourne la figure contenant l'image
     */
  mediaFactory () {
    console.log('name', this.photographerFirstName)
    const picture = `assets/Sample_Photos/${this.photographerFirstName}/${this.image}`
    const figure = document.createElement('figure')
    const a = document.createElement('a')
    // a.href=ouvrir l'image dans la lightbox
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', this.image)
    img.setAttribute('class', 'element_gallerie')
    a.appendChild(img)
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
