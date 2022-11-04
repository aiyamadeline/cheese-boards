const { Sequelize, Model, Datatypes } = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: Path.join(__dirname, 'cheeseBoard.sqlite'),
    logging: false
})

module.exports = db