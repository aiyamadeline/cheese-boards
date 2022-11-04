const { Datatypes, Model } = require('sequelize')
const db = require('./db')


class User extends Model { }

User.init({
    name:  {
        type: Datatypes.STRING
        
    },
    email: {
        type: Datatypes.STRING
    }
}, {
    sequelize: db
})


class Board extends Model { }

Board.init({
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

class Cheese extends Model { }

Cheese.init({
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