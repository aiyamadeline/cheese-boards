const Cheese  = require("./cheese.model");
const Board  = require("./board.model");
const User  = require("./user.model");



// Cheese and Board (many to many)
Cheese.belongsToMany(Board, { through: 'Cheese_Board'})
Board.belongsToMany(Cheese, { through: 'Cheese_Board'})


// User and Cheese (one to many)
// User.hasMany(Cheese)
// Cheese.belongsTo(User)


// User to Board (one to many)
User.hasMany(Board)
Board.belongsTo(User)




module.exports = { Cheese, Board, User }
