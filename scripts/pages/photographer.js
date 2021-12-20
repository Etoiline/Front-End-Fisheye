const urlSearchParam = new URLSearchParams (window.location.search);
const id = urlSearchParam.get('id');
let medias = [];
let dataPhotographer = null;
let photographerFirstName = null;
let mediasObject = [];

async function returnDataPhotographer () {
    const photographer = await loadDataPhotographer(id);
    return photographer;
} 


async function returnMediaPhotographer () {
    medias = await loadMediaPhotographer(id);
    medias.forEach((media) => {
        let typeMedia = '';
        if (media.image) {
            typeMedia = 'image'
        }
        else {
            typeMedia = 'video'
        }
        const mediaClass = new Media (media, typeMedia, photographerFirstName);
        mediasObject.push(mediaClass);
    });
} 


function triMediaPopularite (){
    const sortedMedias= mediasObject.sort(function compare(a, b) {
        if (a.likes > b.likes)
           return -1;
        if (a.likes < b.likes )
           return 1;
        return 0;
      });
      displayMedias(sortedMedias);

}

function triMediaTitre (){
    const sortedMedias= mediasObject.sort(function compare(a, b) {
        if (a.title < b.title)
           return -1;
        if (a.title > b.title )
           return 1;
        return 0;
      });
      displayMedias(sortedMedias);
      //console.table(sortedMedias);
}

function triMedaiDate(){
    const sortedMedias= mediasObject.sort(function compare(a, b) {
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
    //console.table(sortedMedias);
    

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
    //console.log(tableauMedia);
    
/*
    tableauMedia.forEach((mediaTri) => {
        const mediaFigureHTML = mediaTri.mediaFactory();
        div_media.appendChild(mediaFigureHTML);

    });*/
   
}


/* Déroule le menu pour choisir le tri */
// function dropDown() {
//     const arrowOpen = document.getElementsByClassName('arrow-open');
//     const arrowClose = document.getElementsByClassName('arrow-close');
//     const menuTri = document.getElementsByClassName('menu-tri');

//     if (arrowOpen) {
//         arrowOpen[0].addEventListener('click', () => {
//             menuTri[0].style.display = 'block';
//         });
//     }
//     if (arrowClose) {
//         arrowClose[0].addEventListener('click', () => {
//             menuTri[0].style.display = "none";
//         });
//     }
//}


/* Récupère le choix de tri de l'utilisateur */
/*function parametreTri() {
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
}*/

function select (){
    const select = document.getElementById('select-tri');
    select.addEventListener('change', (e) => {
        console.log(e.target.value);
        triMedia(e.target.value);
    });
}


function updateBoxLikesAndPrice(){
    let pLike = document.getElementsByClassName('boxLikesAndPrice__likes')
    let nbLike = pLike[0].textContent
    pLike[0].textContent = '\u00a0'+(parseInt(nbLike)+1)

}

//click sur le coeur pour ajouter un j'aime
function heart(){
    const likes = document.getElementsByClassName('likes')
    console.log('likes',likes)

    let media = document.getElementsByClassName('photograph-media__photos')[0];
    media.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-heart')){
            let pLike = e.target.parentNode.firstElementChild;
            let nbLike = pLike.innerText
            pLike.innerHTML = parseInt(nbLike)+1
            updateBoxLikesAndPrice()
        }
    })
    
}



function displayBoxLikesAndPrice() {
    const price = dataPhotographer.price
    let totalLike = 0
    const iHeart = document.createElement('i')
    iHeart.setAttribute('class', 'fas fa-heart')

    medias.forEach(media => {
        totalLike+=parseInt(media.likes)
    })
    let pLike = document.getElementsByClassName('boxLikesAndPrice__likes')
    pLike[0].textContent = '\u00a0'+totalLike
    let pPrice = document.getElementsByClassName('boxLikesAndPrice__price')
    pPrice[0].textContent = price+'\u20ac/jour'

    

}

async function init(){
    //Partie description du photographe
    dataPhotographer = await returnDataPhotographer();
    const ClassPhotographer = new Photographer (dataPhotographer);
    ClassPhotographer.photographerPage();

    //partie tri des medias
    //tri = parametreTri();
    //console.log('tri',tri);
    //dropDown();

    //Partie Medias
    await returnMediaPhotographer();
    photographerFirstName = ClassPhotographer.name.split(' ')[0];
    triMediaPopularite();
    heart();
    displayBoxLikesAndPrice();

}



console.log(id);    
init();
select();
