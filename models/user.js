const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, // Corrected spelling
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false, // Assuming a user must have a name
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false, // Assuming a user must have an email
        unique: true, // Assuming email should be unique
    }
});

module.exports = User;
