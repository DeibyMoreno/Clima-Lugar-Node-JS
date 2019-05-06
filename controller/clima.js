const axios = require('axios');


const getClima = async(lat, lon) => {
    const rpta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f450dbcaf310153bf6bfcd25730042af`);

    return rpta.data.main.temp;
}


module.exports = {
    getClima
}