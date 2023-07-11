const db = require('../../database/models');
const sequelize = db.sequelize;

const controller = {
    getMostrar: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                // res.render('genresList.ejs', {genres})
                const meta = {
                    status: 200,
                    total: genres.length,
                    url: 'api/genres'
                }
                const data = { genres }
                const objeto = { meta, data }
                res.send(objeto)
            })
    }
}

module.exports = controller;