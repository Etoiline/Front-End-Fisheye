//Mettre le code JavaScript lié à la page photographer.html

const urlSearchParam = new URLSearchParams (window.location.search);
const id = urlSearchParam.get('id');

async function returnDataPhotographer () {
    const photographer = await loadDataPhotographer(id);
    console.log(photographer);
    return photographer;
} 

async function init(){
    const dataPhotographer = await returnDataPhotographer();
    const ClassPhotographer = new Photographer (dataPhotographer);
    ClassPhotographer.photographerPage();



}

console.log(id);    
init();