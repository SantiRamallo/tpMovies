const path = require('path');
//const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'));
let db = require('../database/models')
let sequelize = db.sequelize;
// let peliculas = require('../models/movie.js')

module.exports = {

    lista: function (req, res) {
        db.Peliculas.findAll()
            .then(function(peliculas){
                res.render('listado', {peliculas:peliculas})
            })
    },
    detalle: function(req, res){
        db.Peliculas.findByPk(req.params.id)
        .then(function(pelicula){
            res.render('detalle', {pelicula: pelicula})
        })
    }
};

