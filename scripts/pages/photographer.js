//Mettre le code JavaScript lié à la page photographer.html

const urlSearchParam = new URLSearchParams (window.location.search);
const id = urlSearchParam.get('id');

async function returnDataPhotographer () {
    const photographer = await loadDataPhotographer(id);
    console.log(photographer);

} 

returnDataPhotographer();

console.log(id);