const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Ajay@19804', {
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = sequelize;

