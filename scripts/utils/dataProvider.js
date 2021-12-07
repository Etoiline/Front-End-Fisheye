/* recupérer les données du fichier json et retourner les données sélectionnées */

const urlDataPhotographers = "../data/photographers.json";


//retourne le contenu du fichier json
const fetchData = async(urlDataPhotographers) => {
    let dataPhotographers = null;
    try {
        const response = await fetch (urlDataPhotographers) ;
        dataPhotographers = await response.json();
    } catch (error) {
        console.log(error);
    }
    finally {
        return dataPhotographers;
    }
}

//retourne les photographes
const loadDatasPhotographers = async() => {
    const datas = await fetchData (urlDataPhotographers);
    //console.log("datas : ", datas);
    var photographersData = datas.photographers;
    //console.log ("data photographers", photographersData);
    //console.log ("data media", mediaData);
    return photographersData;
}

//retourne un photographe (id en paramètre)
const loadDataPhotographer = async(id) => {
    const datas = await loadDatasPhotographers ();
    const photographerData = datas.find (function(photographer) {return photographer.id==id; } );
    return photographerData;
}


//retourne les medias
const loadMediaPhotographers = async() => {
    const datas = await fetchData (urlDataPhotographers);
    var photographersMedia = datas.media;
    return photographersMedia;
}

//retourne les medias d'un photographe (id en paramètre)
const loadMediaPhotographer = async(id) => {
    const datas = await loadMediaPhotographers ();
    const photographerMedia = datas.find (function(mediaPhotographerId) {return mediaPhotographerId.id==id; } );
    return photographerMedia;
}