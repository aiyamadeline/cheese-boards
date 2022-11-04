const { Datatypes, Model } = require('sequelize')
const db = require('../db/db')

class Board extends Model { }

Board.init({
    id: { 
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Datatypes.STRING
    },
    description: {
        type: Datatypes.STRING
    },
    raiting: {
        type: Datatypes.NUMBER
    }
}, { 
    sequelize: db

})

module.exports = Board