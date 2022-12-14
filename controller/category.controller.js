let Category = require("./../model/Category");
let dbConnection = require("./../config/db.config");

let createTable = async () => {
    await dbConnection.sync({ force: true })
    console.log("Category table created successfully");
    insertCategory()
}

let insertCategory = async () => {
    await Category.bulkCreate(
        [{
            name: "Electronincs"
        },
        {
            name: "Grocery"
        },
        {
            name: "Clothes"
        },
        {
            name: "Footwear"
        },
        {
            name: "Pharmacy"
        },]
    )
}

createTable();

let getAllCategory = async (req, res, next) => {
    let category = await Category.findAll()
    res.status(200).send(category);
    res.end();
};

module.exports = {
    getAllCategory,
}