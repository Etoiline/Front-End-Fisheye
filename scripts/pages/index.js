

    /* async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const datasPhotographers = await loadDatasPhotographers(); 
        console.log("donnees photographes ",datasPhotographers);
        /*const photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})*/
       /* return datasPhotographers;
    }*/

    function displayData(datasPhotographers) {
        const photographersSection = document.querySelector(".photographer_section");
        const daaa =  datasPhotographers;

        datasPhotographers.forEach((photographer) => {
            console.log("ytru",photographer);
            const ClassPhotographer = new Photographer (photographer);
            console.log(ClassPhotographer);
            const photographerModel = ClassPhotographer.photographerFactory();
            const userCardDOM = ClassPhotographer.photographerFactory();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const photographers = await loadDatasPhotographers();
        console.table(photographers);
        displayData(photographers);
    };
    
    init();
    
    