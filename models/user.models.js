const { Datatypes, Model } = require('sequelize')
const db = require('../db/db')

class User extends Model { }

User.init({
    id: { 
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Datatypes.STRING
        
    },
    email: {
        type: Datatypes.STRING
    }
    
}, {
    sequelize: db
})


module.exports = User