const uuid = require('uuid')


let favoritesMovie = [
    {
        id: uuid.v4(),
        rating: 4.5,
        awards: ['Gramyss','Best Movie'],
        length: '02:13:03',
        price: 50000,
        genre: 4
    },
    {
        id: uuid.v4(),
        rating: 5,
        awards: ['Best_Movie','Best Movie2023'],
        length: '01:53:03',
        price: 100000,
        genre: 5
    },
    {
        id: uuid.v4(),
        rating: 1.4,
        awards: ['worst movie ever made'],
        length: '02:13:03',
        price: 2000,
        genre: 1
    },

]

module.exports = favoritesMovie;