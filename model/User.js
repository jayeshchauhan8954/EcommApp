const dbConnection = require("./../config/db.config");
const sequelize = require("sequelize");

let User = dbConnection.define("User", {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize.STRING,
        allowNull: false,
    },

},
    {
        timestamps: false,
    });
module.exports = User;