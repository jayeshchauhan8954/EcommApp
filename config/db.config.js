let sequelize = require("sequelize");
let instance = new sequelize("ecomm_rev", "root", "Jitandra$7102",
    {
        host: "localhost",
        dialect: "mysql",
        operatorAliases: 0,     //this is used to use another name for any table column by using "as" 
        pool: {
            min: 0,
            max: 5,
            acquire: 5000,      // this time used to being parallel connection with our APIs and database
            idle: 30000         // If we don't do anything for such time then it automatic stable
        }
    }
)

module.exports = instance;