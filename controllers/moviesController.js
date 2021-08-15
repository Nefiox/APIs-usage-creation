const DB = require('../database/models');
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB.Movie
        .findAll()
        .then(movies => {
            return res.status(200).json({
                meta: {
                    total: movies.length,
                    status: 200,
                    url: '/movies'
                },
                data: movies
            });
        });
    },
    show: (req, res) => {
        DB.Movie
        .findByPk(req.params.id)
        .then(movie => {
            return res.status(200).json({
                data: movie,
                status: 200
            });
        });
    },
    store: (req, res) => {
        DB.Movie
        .create(req.body)
        .then(movie => {
            return res.status(200).json({
                data: movie,
                status: 200,
                created: 'ok'
            });
        });
    },
    delete: (req, res) => { // Si la respuesta es 1, el delete ha sido satisfactorio, de lo contrario arroja 0.
        DB.Movie
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            return res.json(response);
        })
    },
    search: (req, res) => {
        DB.Movie
        .findAll({
            where: {
                title: { [Op.like]: `%${req.query.keyword}%` }
            }
        })
        .then(movies => {
            if (movies.length > 0) {
                return res.status(200).json(movies);
            }
            return res.status(200).json('No existen peliculas relacionadas a su búsqueda');
        });
    }
}