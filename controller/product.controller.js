const dbConnection = require("./../config/db.config");
const Product = require("./../model/Product");

let createTable = async () => {
    await dbConnection.sync({ force: true })
    console.log("Product table created successfully.")

}

let insertProducts = async () => {
    await Product.bulkCreate([
        {
            name: "Samsung",
            price: 40000,
            categoryId: 1
        },
        {
            name: "I Phone",
            price: 110000,
            categoryId: 1
        },
        {
            name: "Musterd oil",
            price: 4000,
            categoryId: 2
        },
        {
            name: "lava",
            price: 25000,
            categoryId: 1
        },
        {
            name: "T-shirt",
            price: 4000,
            categoryId: 3
        },
        {
            name: "Jeans",
            price: 4500,
            categoryId: 3
        },
        {
            name: "Shoes",
            price: 1550,
            categoryId: 4
        },
        {
            name: "sleeper",
            price: 850,
            categoryId: 4
        },
        {
            name: "Cough syrup",
            price: 400,
            categoryId: 5
        },
        {
            name: "liver syrup",
            price: 550,
            categoryId: 5
        },
        {
            name: "Weight-gainer",
            price: 5550,
            categoryId: 5
        },
    ]);
};
// createTable();

// insertProducts();

let getAllProducts = async (req, res, next) => {
    let product = await Product.findAll();
    res.status(201).send(product);
    res.end();
};
let getProductById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let product = await Product.findByPk(id);
        res.status(201).send(product);
    } catch {
        console.log(errror);
        res.status(404).send("Something went wrong");
        res.end();
    }
}
let createNewProduct = async (req, res, next) => {
    try {
        let createProduct = req.body;
        let newProduct = await Product.create(createProduct);
        res.status(201).send({
            data: newProduct,
            message: "Product created successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(404).send("something went wrong");
        res.end();
    }
};

let updateProductById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let updateProduct = {
            name: req.body.name,
            price: req.body.price,
            categoryId: req.body.categoryId,
        }
        let updatedProduct = await Product.update(updateProduct, {
            where: {
                id: id,
            }
        })
        res.status(201).send({
            data: updatedProduct,
            message: "Product updated on Id : " + req.params.id,
        })

    } catch (error) {
        console.log(error);
        res.status(404).send("Something went wrong!!!");
        res.end();

    }
};
let deleteProductById = async (req, res, next) => {
    try {
        let id = req.params.id;
        await Product.destroy({
            where: {
                id: id,
            }
        });
        res.status(201).send("product deleted of Id : " + req.params.id);
    } catch (error) {
        console.log(error);
        res.status(404).send("You have done something wrong!!");
        res.end();
    }
};

module.exports = {
    getAllProducts, getProductById, createNewProduct, updateProductById, deleteProductById,
};
