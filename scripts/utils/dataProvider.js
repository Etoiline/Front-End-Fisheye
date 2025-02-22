/* eslint-disable no-unused-vars */
/* recupérer les données du fichier json et retourner les données sélectionnées */

const urlDataPhotographers = './data/photographers.json'

// retourne le contenu du fichier json
const fetchData = async (urlDataPhotographers) => {
  let dataPhotographers = null
  try {
    const response = await fetch(urlDataPhotographers)
    dataPhotographers = await response.json()
    return dataPhotographers
  } catch (error) {
    console.log(error)
  }
}

// retourne les photographes
const loadDatasPhotographers = async () => {
  const datas = await fetchData(urlDataPhotographers)
  const photographersData = datas.photographers
  return photographersData
}

// retourne un photographe (id en paramètre)
const loadDataPhotographer = async (id) => {
  const datas = await loadDatasPhotographers()
  const photographerData = datas.find(function (photographer) { return photographer.id === Number(id) })
  return photographerData
}

// retourne les medias
const loadMediaPhotographers = async () => {
  const datas = await fetchData(urlDataPhotographers)
  const photographersMedia = datas.media
  return photographersMedia
}

// retourne les medias d'un photographe (id en paramètre)
const loadMediaPhotographer = async (id) => {
  const datas = await loadMediaPhotographers()
  const photographerMedia = datas.filter(function (mediaPhotographerId) { return mediaPhotographerId.photographerId === Number(id) })
  return photographerMedia
}
