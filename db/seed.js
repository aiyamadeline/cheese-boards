const { Cheese, Board, User } = require('../models')
const db = require('./db')

 async function seed () {

     await db.sync({        
        force: true
    })


    await Cheese.bulkCreate([
        {
            title: "Brie",
            description:"Soft creamy interior, wth rich runny texture.",
            origin: "France",
            animal: "cows"
        },
        {
            title:"Camembert",
            description:"Rich and intense flavour, less creamy then brie.",
            origin:"France",
            animal:"cows"

        },
        {
            title:"Cheddar",
            description: "Young cheddars are mild and creamy; aged cheddars are more crumbly and complex in flavour",
            origin:"England",
            animal:"cows"
        },
        {
            title:"Cotija",
            description: "Strong tangy flavour with a rich milky texture",
            origin: "Mexico",
            animal: "cows"
        },
        {   
            title: "Cream Cheese", 
            description:"Smooth, creamy and slightly sweet fresh cheese",
            origin: "New York",
            animal:"cows"
        },
        {
            title:"Halloumi",
            description: "Tangy and salty in flavour with a squeaky bouncy texture",
            origin:"Cypus",
            animal:"Goat or Sheep"
        },
        {
            title:"Feta",
            description:"Salty, briny cheese is known for it's rich, creamy texture that will soften when heated.",
            origin:"Greece",
            animal:"sheep"
        }

    ])

    await User.bulkCreate([
        {
            name: "Sally",
            email: "sallyrobinson@gmail.com"
        },
        {
            name: "Karen",
            email: "KarenStone@hotmail.com"
        },
        {
            name: "Jonah",
            email: "JonahDish@hotmail.com"
        },
        {
            name: "Freddie",
            email: "FreddieLowsy@gmail.com"
        }
    ])

    await Board.bulkCreate([
        {
            type: "Bamboo board",
            description: "Contains cheeses made from sheep milk",
            raiting: 10

        },
        {
            type: "Square board",
            description: "French Cheeses",
            raiting: 8
        },
        {
            type: "Perfect Cheese Board",
            description: "Cheeses from Europe",
            raiting: 7.5
        },
        {
            type: "",
            description: "Vegan cheeses",
            raiting: 2
        }
    ])

}


    seed ()