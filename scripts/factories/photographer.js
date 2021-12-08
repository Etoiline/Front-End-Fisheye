class Photographer {
    constructor(dataPhotographer) {
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
    photographerFactory() {
        const picture = `assets/Sample_Photos/Photographers_ID_Photos/${this.portrait}`;
    
        //function getUserCardDOM() {
            const article = document.createElement( 'article' );
            const img = document.createElement( 'img' );
            const a = document.createElement ('a');
            a.href="photographer.html?id="+this.id;
            const figure = document.createElement( 'figure' );
            const figcaption = document.createElement( 'figcaption' );
            img.setAttribute("src", picture);
            img.setAttribute("alt", "profil artiste");
            const h2 = document.createElement( 'h2' );
            h2.textContent = this.name;
            const p_city = document.createElement( 'p' );
            p_city.textContent = this.city+", "+this.country;
            p_city.setAttribute("class","p_city")
            const p_tagline = document.createElement( 'p' );
            p_tagline.textContent = this.tagline;
            const p_price = document.createElement( 'p' );
            p_price.setAttribute("class","p_price");
            p_price.textContent = this.price+"\u20ac/jour";
            //figcaption.appendChild(h2);
            figcaption.appendChild(p_city);
            figcaption.appendChild(p_tagline);
            figcaption.appendChild(p_price);
            figure.appendChild(a);
            a.appendChild(img);
            a.appendChild(h2);
            article.appendChild(a);
            article.appendChild(figcaption);
            return article;
  //      }
 //       return { name, picture, getUserCardDOM }
    }

    photographerPage(){
        const h2_photo = document.getElementById("identity_photographer");
        h2_photo.textContent = this.name;
        const locationPhotographer = document.getElementById("location_photographer");
        locationPhotographer.textContent = this.city+", "+this.country;
        const tag_line = document.getElementById("tag_photographer");
        tag_line.textContent = this.tagline;
        const picture = `assets/Sample_Photos/Photographers_ID_Photos/${this.portrait}`;
        const img_photo = document.getElementById("photo_photographer");
        img_photo.setAttribute("src", picture);

    }

}






