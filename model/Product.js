const sequelize = require("sequelize");
const dbConnection = require("./../config/db.config");

let Product = dbConnection.define("Products", {
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, name: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
},
    { timestamps: false },
);

module.exports = Product;