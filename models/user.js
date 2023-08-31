const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
    id : {
        type : Sequelize.INTEGER,
        autoincreament : true,
        allowNull : false,
        primaryKey : true
    },
    name : Sequelize.STRING,
    email : Sequelize.STRING
});


module.exports = User;