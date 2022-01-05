/* eslint-disable no-undef */

/**
 * Fonction qui affiche les vignettes de chaque photographe
 * @param {données mises en page dans la classe photographe} datasPhotographers
 */
function displayData (datasPhotographers) {
  const photographersSection = document.querySelector('.photographer_section')
  datasPhotographers.forEach((photographer) => {
    const ClassPhotographer = new Photographer(photographer)
    console.log(ClassPhotographer)
    const userCardDOM = ClassPhotographer.photographerFactory()
    photographersSection.appendChild(userCardDOM)
  })
};

/**
 * fonction à lancer à l'ouverture de la page
 */
async function init () {
  // Récupère les datas des photographes
  const photographers = await loadDatasPhotographers()
  // console.table(photographers)
  displayData(photographers)
};

init()
