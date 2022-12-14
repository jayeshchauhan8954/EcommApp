let sequelize = require("sequelize");
let dbConnection = require("./../config/db.config");

let Category = dbConnection.define("categories", {
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false,
    });

module.exports = Category;