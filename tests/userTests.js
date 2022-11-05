const { User } = require('../models')


const users = await User.findAll()

console.log(user1.every(user => user instanceof User))
console.log("All users:", JSON.stringify(users, null, 2))





