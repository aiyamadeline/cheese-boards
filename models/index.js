const Cheese  = require("./cheese.models");
const Board  = require("./board.models");
const User  = require("./user.models");



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
