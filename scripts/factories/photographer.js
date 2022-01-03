/* eslint-disable no-unused-vars */
class Photographer {
  constructor (dataPhotographer) {
    this.id = dataPhotographer.id
    this.name = dataPhotographer.name
    this.city = dataPhotographer.city
    this.country = dataPhotographer.country
    this.tagline = dataPhotographer.tagline
    this.price = dataPhotographer.price
    this.portrait = dataPhotographer.portrait
  }

  /**
     * crée et retourne la vue du photographe en miniature (Accueil)
     */
  photographerFactory () {
    const picture = `assets/Sample_Photos/Photographers_ID_Photos/${this.portrait}`

    // function getUserCardDOM() {
    const article = document.createElement('article')
    const img = document.createElement('img')
    const a = document.createElement('a')
    a.href = 'photographer.html?id=' + this.id
    const figure = document.createElement('figure')
    const figcaption = document.createElement('figcaption')
    img.setAttribute('src', picture)
    img.setAttribute('alt', '')
    const h2 = document.createElement('h2')
    h2.textContent = this.name
    const pCity = document.createElement('p')
    pCity.textContent = this.city + ', ' + this.country
    pCity.setAttribute('class', 'p_city')
    const pTagline = document.createElement('p')
    pTagline.textContent = this.tagline
    const pPrice = document.createElement('p')
    pPrice.setAttribute('class', 'p_price')
    pPrice.textContent = this.price + '\u20ac/jour'
    figcaption.appendChild(pCity)
    figcaption.appendChild(pTagline)
    figcaption.appendChild(pPrice)
    figure.appendChild(a)
    figure.appendChild(figcaption)
    a.appendChild(img)
    a.appendChild(h2)
    article.appendChild(figure)
    return article
  }

  photographerPage () {
    const h2Photo = document.getElementById('identity_photographer')
    h2Photo.textContent = this.name
    const locationPhotographer = document.getElementById('location_photographer')
    locationPhotographer.textContent = this.city + ', ' + this.country
    const tagLine = document.getElementById('tag_photographer')
    tagLine.textContent = this.tagline
    const picture = `assets/Sample_Photos/Photographers_ID_Photos/${this.portrait}`
    const imgPhoto = document.getElementById('photo_photographer')
    imgPhoto.setAttribute('src', picture)
  }
}
