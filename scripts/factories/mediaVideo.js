class MediaVideo {
    constructor(dataVideo, photographerFirstName) {
        this.id = dataVideo.id
        this.photographerId = dataVideo.photographerId
        this.video = dataVideo.video
        this.likes = dataVideo.likes
        this.date = dataVideo.date
        this.price = dataVideo.price
        this.photographerFirstName = photographerFirstName
    }

    /**
     * crée et retourne la figure contenant la video
     */
    videoFactory() {
        console.log('name', this.photographerFirstName);
        const picture = `assets/Sample_Photos/${this.photographerFirstName}/${this.video}`;
        const figure = document.createElement( 'figure' );
        const a = document.createElement ('a');
        //a.href=ouvrir l'image dans la lightbox
        const video = document.createElement( 'video' );
        video.setAttribute("src", picture);
        video.setAttribute("controls");
        video.setAttribute("alt", 'vidéo');
        a.appendChild(video);
        const figcaption = document.createElement( 'figcaption' );
        const p_title = document.createElement('p');
        p_title.textContent = 'Vidéo';
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






