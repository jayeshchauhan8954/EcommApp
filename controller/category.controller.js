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

// createTable();

let getAllCategory = async (req, res, next) => {
    let category = await Category.findAll();
    res.status(200).send(category);
    res.end();
};
let getCategoryById = async (req, res, next) => {
    try {
        let id = req.params.id
        let category = await Category.findByPk(id)
        res.status(200).send(category);
    } catch (error) {
        console.log(error);
        res.status(404).send("something went wrong");
    }
    res.end();
};
let createNewCategory = async (req, res, next) => {
    try {
        let categoryToAdd = req.body
        let category = await Category.create(categoryToAdd);
        res.status(201).send({
            message: "New category created",
            data: category
        });
    } catch (error) {
        console.log(error);
        res.status(404).send("something went wrong");
    }
    res.end();
}

let updateCategoryById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let categoryToUpdate = {
            name: req.body.name
        }
        await Category.update(categoryToUpdate, {
            where: {
                id: id,
            }
        });
        let updatedCategory = await Category.findByPk(id)
        res.status(201).send({
            message: "Category Updated successfully",
            data: updatedCategory,
        });
    } catch (error) {
        console.log(error);
        res.status(404).send("something went wrong")
        res.end();
    }
}
let deleteCategoryById = async (req, res, next) => {
    try {
        let id = req.params.id;
        await Category.destroy({
            where: {
                id: id,
            },
        });

        res.status(200).send("Category deleted");
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
        res.end();
    }
};
module.exports = {
    getAllCategory, getCategoryById, createNewCategory, updateCategoryById, deleteCategoryById
}

