class MediaImage {
    constructor(dataImage, photographerFirstName) {
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
    mediaFactory() {
        console.log('name', this.photographerFirstName);
        const picture = `assets/Sample_Photos/${this.photographerFirstName}/${this.image}`;
        const figure = document.createElement( 'figure' );
        const a = document.createElement ('a');
        //a.href=ouvrir l'image dans la lightbox
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", this.image);
        a.appendChild(img);
        const figcaption = document.createElement( 'figcaption' );
        const p_title = document.createElement('p');
        p_title.textContent = this.title;
        const div_like = document.createElement('div');
        const p_like = document.createElement('p');
        p_like.textContent = this.likes;
        const i_heart = document.createElement('i');
        i_heart.setAttribute('class', 'fas fa-heart');
        div_like.appendChild(p_like);
        div_like.appendChild(i_heart);
        figcaption.appendChild(p_title);
        figcaption.appendChild(div_like);
        figure.appendChild(a);
        figure.appendChild(figcaption);
        return figure;
    }

}






