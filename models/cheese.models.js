const { Datatypes, Model } = require('sequelize')
const db = require('../db/db')

class Cheese extends Model { }

Cheese.init({
    id: { 
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Datatypes.STRING
        },
    description: {
        type: Datatypes.STRING
        },
    origin: {
        type: Datatypes.STRING
        },
    animal: {
        type: Datatypes.STRING
        }
}, {
    sequelize: db

    
})

module.exports = Cheese