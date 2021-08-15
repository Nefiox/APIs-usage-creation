const fetch = require('node-fetch');

module.exports = {
    list: async (req, res) => {
        const countries = await fetch('https://restcountries.eu/rest/v2/all').then(response => response.json());
        const provinces = await fetch('https://apis.datos.gob.ar/georef/api/provincias').then(response => response.json());

        return res.render('countries',{ countries, provinces: provinces.provincias });
    }
}