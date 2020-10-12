const path = require('path');
//const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'));
let db = require('../database/models')
let sequelize = db.sequelize;

module.exports = {

    lista: function (req, res) {

        sequelize.query("SELECT * FROM movies")
        .then(function(resultados){
            let peliculas = resultados[0]

            res.send(peliculas)
        })

    },
    agregar: function(req, res){

    }
};

