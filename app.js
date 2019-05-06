const lugar = require('./controller/lugar');
const clima = require('./controller/clima');

//otra forma sin command y solo enviarle la opcion  
const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


/*lugar.getLugar(argv.direccion).then(console.log)
    .catch(console.log);*/

/*clima.getClima(4.6097100, -74.0817500)
    .then(console.log)
    .catch(console.log);*/


const getInfo = async(dir) => {
    try {
        const rptaLugar = await lugar.getLugar(dir);
        const rptaClima = await clima.getClima(rptaLugar.lat, rptaLugar.lon);
        return `Info: ${rptaLugar.direccion}\n latitud: ${rptaLugar.lat}\n Longitud: ${rptaLugar.lon} \n Clima: ${rptaClima}°`;
    } catch {
        return `No se pudo determinar el clima de ${dir}`;
    }


}


getInfo(argv.direccion)
    .then(console.log)
    .catch(err => {
        console.log("Error ", err);
    });