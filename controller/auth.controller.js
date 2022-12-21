const User = require("./../model/User");
const jwt = require("jsonwebtoken");
const dbConnection = require("./../config/db.config");

let createTable = async () => {
    await dbConnection.sync({ force: true });
    console.log("create successfully");
}
// createTable();

let SignUp = async (req, res, next) => {
    let user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    };
    await User.create(user);
    res.status(201).send({
        data: user,
        message: "User Successfully Registered.",
    });
    res.end();
};
module.exports = {
    SignUp
};