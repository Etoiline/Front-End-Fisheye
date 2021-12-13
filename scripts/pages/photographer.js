//Mettre le code JavaScript lié à la page photographer.html

const urlSearchParam = new URLSearchParams (window.location.search);
const id = urlSearchParam.get('id');

async function returnDataPhotographer () {
    const photographer = await loadDataPhotographer(id);
    return photographer;
} 


async function returnMediaPhotographer () {
    const medias = await loadMediaPhotographer(id);
    return medias;
} 

async function displayMedias (photographerFirstName) {
    const div_media = document.querySelector('.photograph-media__photos');
    medias = await returnMediaPhotographer();
    console.log('preeeenom',photographerFirstName);
    medias.forEach((media) => {
        var typeMedia = '';
        if (media.image) {
            typeMedia = 'image'
        }
        else {
            typeMedia = 'video'
        }
        const mediaFigure = new Media (media, typeMedia, photographerFirstName);
        const mediaFigureHTML = mediaFigure.mediaFactory();
        div_media.appendChild(mediaFigureHTML);

    });
}

function dropDown() {
    const arrowOpen = document.getElementsByClassName('arrow-open');
    const arrowClose = document.getElementsByClassName('arrow-close');
    const menuTri = document.getElementsByClassName('menu-tri');
    const triBtn = document.getElementsByClassName('tri-btn');
    console.log(arrowOpen);

    if (arrowOpen) {
        arrowOpen[0].addEventListener('click', () => {
            menuTri[0].style.display = 'block';
            //triBtn[0].style.display = 'none';
        });
    }
    if (arrowClose) {
        arrowClose[0].addEventListener('click', () => {
            menuTri[0].style.display = "none";
        });
    }
}



async function init(){
    //Partie description du photographe
    const dataPhotographer = await returnDataPhotographer();
    const ClassPhotographer = new Photographer (dataPhotographer);
    ClassPhotographer.photographerPage();

    //partie tri des medias
    dropDown();

    //Partie Medias
    const photographerFirstName = ClassPhotographer.name.split(' ')[0];
    displayMedias(photographerFirstName);

}



console.log(id);    
init();