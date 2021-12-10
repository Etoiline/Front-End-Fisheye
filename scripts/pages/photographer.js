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
        const mediaFigure = new Media (media, 'image', photographerFirstName);
        const mediaFigureHTML = mediaFigure.imageFactory();
        div_media.appendChild(mediaFigureHTML);

    });
}




async function init(){
    //Partie description du photographe
    const dataPhotographer = await returnDataPhotographer();
    const ClassPhotographer = new Photographer (dataPhotographer);
    ClassPhotographer.photographerPage();

    //Partie Medias
    const photographerFirstName = ClassPhotographer.name.split(' ')[0];
    displayMedias(photographerFirstName);

}

function dropDown() {
    let arrowOpen = document.getElementsByClassName('arrow-open');
    let arrowClose = document.getElementsByClassName('arrow-close');
    let menuTri = document.getElementsByClassName('menu-tri');
    console.log(arrowOpen);

    if (arrowOpen) {
        arrowOpen[0].addEventListener('click', () => {
            menuTri[0].style.display = 'block';
        });
    }
    if (arrowClose) {
        arrowClose[0].addEventListener('click', () => {
            menuTri[0].style.display = "none";
        });
    }
}



console.log(id);    
init();
dropDown();
displayMedias();