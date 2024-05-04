const path = require('path');
const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'mvc_demo.sqlite')
});
