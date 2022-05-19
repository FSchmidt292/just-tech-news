const Sequelize = require('sequelize');

require('dotenv').config();

//connection to Database

const sequelize = new Sequelize('just_tech_news_db', '', '', {

host: 'localhost',
dialect: 'mysql',
port: 3306
});

module.export = sequelize;