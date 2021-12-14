const urlSearchParam = new URLSearchParams (window.location.search);
const id = urlSearchParam.get('id');
let medias = [];
let dataPhotographer = null;
let photographerFirstName = null;

async function returnDataPhotographer () {
    const photographer = await loadDataPhotographer(id);
    return photographer;
} 


async function returnMediaPhotographer () {
    medias = await loadMediaPhotographer(id);
} 


function triMediaPopularite (){
    const sortedMedias= medias.sort(function compare(a, b) {
        if (a.likes > b.likes)
           return -1;
        if (a.likes < b.likes )
           return 1;
        return 0;
      });
      displayMedias(sortedMedias);

}

function triMediaTitre (){
    const sortedMedias= medias.sort(function compare(a, b) {
        if (a.title < b.title)
           return -1;
        if (a.title > b.title )
           return 1;
        return 0;
      });
      displayMedias(sortedMedias);
}

function triMedaiDate(){
    const sortedMedias= medias.sort(function compare(a, b) {
        if (a.date > b.date)
           return -1;
        if (a.date < b.date )
           return 1;
        return 0;
      });
      displayMedias(sortedMedias);
      console.table(sortedMedias);
}



function triMedia(tri){
    let sortedMedias=[];
    if (tri=='popularite') {
        sortedMedias=triMediaPopularite();
    }
    else if (tri=='titre'){
        sortedMedias=triMediaTitre();
    }
    else {
        sortedMedias=triMedaiDate();
        
    }
    console.table(sortedMedias);
    

}



/* Affiche les media en fonction de l'ordre choisi */
async function displayMedias (sortedMedias) {
    const mediasToDisplay = sortedMedias || medias ;
    const div_media = document.querySelector('.photograph-media__photos');
    div_media.innerText='';
    let tableauMedia = []
    mediasToDisplay.forEach((media) => {
        let typeMedia = '';
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
    console.log(tableauMedia);
    
/*
    tableauMedia.forEach((mediaTri) => {
        const mediaFigureHTML = mediaTri.mediaFactory();
        div_media.appendChild(mediaFigureHTML);

    });*/
   
}


/* Déroule le menu pour choisir le tri */
function dropDown() {
    const arrowOpen = document.getElementsByClassName('arrow-open');
    const arrowClose = document.getElementsByClassName('arrow-close');
    const menuTri = document.getElementsByClassName('menu-tri');

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


/* Récupère le choix de tri de l'utilisateur */
function parametreTri(){
    const popularity = document.getElementsByClassName('popularity-sort');
    const date = document.getElementsByClassName('date-sort');
    const title = document.getElementsByClassName('title-sort');
    var sortParam = 'popularity';
    popularity[0].addEventListener('click', () => {
        sortParam = 'popularity';
        return sortParam;
    });
    date[0].addEventListener('click', (sortParam) => {
        sortParam = 'date';
        console.log('tri date', sortParam);
        return sortParam;
        
    });
    title[0].addEventListener('click', () => {
        sortParam = 'title';
        return sortParam;
    });
    console.log('tri retour', sortParam);
    return sortParam;
}

function select (){
    const select = document.getElementById('select-tri');
    select.addEventListener('change', (e) => {
        console.log(e.target.value);
        triMedia(e.target.value);

    });
}



async function init(){
    //Partie description du photographe
    //var tri = '';
    dataPhotographer = await returnDataPhotographer();
    const ClassPhotographer = new Photographer (dataPhotographer);
    ClassPhotographer.photographerPage();

    //partie tri des medias
    //tri = parametreTri();
    //console.log('tri',tri);
    dropDown();

    //Partie Medias
    await returnMediaPhotographer();
    photographerFirstName = ClassPhotographer.name.split(' ')[0];
    triMediaPopularite();

}



console.log(id);    
init();
select();