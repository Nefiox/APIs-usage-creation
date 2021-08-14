const DB = require('../database/models');
const Op = DB.sequelize.Op;

module.exports = {
    list: (req, res) => {
        return res.json('hola');
    }
}