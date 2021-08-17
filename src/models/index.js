'use strict';

// const POSTGRES_URI = process.env.POSTGRES_URI || 'ibrahim://localhost/lab3';
const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://ibrahim@localhost:5432/lab3";
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.model');
const clothes = require('./clothes.model');

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
    Clothes : clothes(sequelize, DataTypes)
}