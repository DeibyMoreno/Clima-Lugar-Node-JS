const axios = require("axios"); //npm i axios



const getLugar = async(dir) => {
    const encodedUrl = encodeURI(dir);
    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'X-RapidAPI-Key': '2a7f6ff531mshf771d0626aa016fp10557ejsn9a7132347a5b' //para obtener la key nos registramos en la pagina https://rapidapi.com/dev132/api/city-geo-location-lookup
        }
    });

    const rpta = await instance.get();
    if (rpta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`)
    }

    const data = rpta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    /*instance.get().then(response => {
        console.log(response.data.Results[0]);
    }).catch(err => {
        console.log("Error !!!!" + err);
    });*/

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugar
}